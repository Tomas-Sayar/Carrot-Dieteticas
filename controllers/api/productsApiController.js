const db = require('../../database/models/index.js');


const controller = {

    //========== Listar todos los products ============//

    list: (req, res) => {

        db.Product.findAll({
            include: ['categories', 'types', 'brands']
        })
            .then(data => {
                let result = {
                    data,
                    total: data.length,
                }
                res.json(result);

            })
    },

    lastProduct: (req, res) => {
        //======= Para encontrar el pruducto a mostrar =======//
        db.Product.findAll()
            .then((products) => {
                let funcion = products.sort((a, b) => {
                    return b.id - a.id
                })

                let product = [funcion[0]];

                let result = {
                    product,
                }
                res.json(result);
            });


    }
}


module.exports = controller;