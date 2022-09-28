const db = require("../../database/models");




const controller = {

    totals: (req, res) => {
        db.Product.findAll()
        .then( data => {
            let total = {

                products: {
                    name: 'products',
                    total: data.length,
                    color: 'warning'
                }
                
            }
            db.Category.findAll()
            .then( info => {

                total.category = {
                    name: 'categories',
                    total: info.length,
                    color: 'warning'
                }

                db.User.findAll()
                .then( infos => {

                    total.user = {
                        name: 'users',
                        total: infos.length,
                        color: 'warning'
                    }

                    res.json( total );
                })
            })
        })
    }
}


module.exports = controller;