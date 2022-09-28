const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const res = require('express/lib/response');
const bcrypt = require('bcryptjs');
const db = require('../database/models/index.js');
const { log } = require('console');

// ALL USERS
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));



const controller = {

	register: (req, res) => {
		res.render('register', { session: req.session.usuarioLogueado });
	},

	store: (req, res) => {
		db.User.create({
			name: req.body.nombreApellido,
			username: req.body.nombreDeUsuario,
			email: req.body.email,
			dateOfBirth: req.body.fechaDeNacimiento,
			adress: req.body.domicilio,
			password: bcrypt.hashSync(req.body.passwordDeUsuario, 10),
			image: req.file ? req.file.filename : 'default.jpg',
			typeOfUser_id: Number(req.body.tipoDeUsuario),
		})
			.then(() => {
				res.redirect('/users/login')
			})
			.catch(error => res.send(error))
	},

	login: (req, res) => {
		res.render('login', { session: req.session.usuarioLogueado });
	},

	processLogin: async(req, res) => {
		//CAPTURAMOS LOS ERRORES
		let errors = validationResult(req);
		let usuarioALoguearse;
		//SI NO HAY ERRORES VERIFICAMOS LOS DATOS
		if (errors.isEmpty()) {
			db.User.findOne({where: {email: req.body.email}})
				.then(async(user) => {
					//RECORREMOS TODOS LOS USUARIOS Y BUSCAMOS EL QUE COINCIDA CON EL EMAIL Y LA CONTRASEÑA
						if (user.email == req.body.email) {
							let isValid = await bcrypt.compare(req.body.password, user.password)
							if (isValid) {
								usuarioALoguearse = user;
								if (usuarioALoguearse == undefined) {
									return res.render('login', {
										errors: [
											{ msg: 'Usuario Inválido' }
										]
									})
								} else {
									req.session.usuarioLogueado = usuarioALoguearse;
									res.redirect('/')
								}
							}
						}
					
				})

		} else {
			return res.render('login', {
				errors: [
					{ msg: 'Usuario Inválido' }
				]
			})
		}
	},


	profile: (req, res) => {

		let userId = req.params.id;

		db.User.findByPk(userId)
			.then((selectedProfile) => {

				res.render('user-profile', { user: selectedProfile, session: req.session.usuarioLogueado });

			})
			.catch((err) => console.error(err));
	},

	logOut: (req, res) => {

		res.clearCookie("recordame");

		req.session.destroy();

		return res.redirect("/");

	},
}


module.exports = controller;