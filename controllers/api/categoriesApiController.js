const db = require('../../database/models/index.js');

const controller = {

    list: (req, res) => {
        //========== Listar todos las categorias ============//
        db.Category.findAll()
            .then(data => {
                let result = {
                    ...data,
                    total: data.length,
                }
                //data.total = data.length;
                res.json(result)
            })
    },

    detail: (req, res) => {
        //======= Para encontrar el pruducto a mostrar =======//
        db.Category.findByPk(req.params.id)
            .then((product) => {
                res.json(product);
            });
    },

}


module.exports = controller;