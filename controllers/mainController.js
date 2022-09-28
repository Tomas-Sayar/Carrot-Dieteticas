const { log } = require('console');
const res = require('express/lib/response');
const fs = require('fs');
const path = require('path');
const db = require('../database/models/index.js');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	index: (req, res) => {
		db.Product.findAll()
			.then((resultados) => {
				req.session.usuarioLogueado;
				let featuredProducts = resultados.slice( 0, 8 );
				res.render('index', { featuredProducts: featuredProducts, session: req.session.usuarioLogueado });
			});
		
	},
	
	carrito: (req, res) => {
		res.render('carrito');
	},
};

module.exports = controller;
