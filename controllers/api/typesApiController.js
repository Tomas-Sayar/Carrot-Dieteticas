const { type } = require('express/lib/response.js');
const db = require('../../database/models/index.js');


const controller = {

    //========== Listar todos los products ============//

    list: (req, res) => {


        db.Product.findAll({
            include: ['categories']
        })
            .then(totalProducts => {

                let newProducts = [];
                let inSaleProducts = [];
                let featuredProducts = [];

                for (let i = 0; i < totalProducts.length; i++) {

                    const element = totalProducts[i];
                    
                    if (element.categories.dataValues.category == 'new') {

                        newProducts.push(element.name);

                    } else if (element.categories.dataValues.category == 'featured') {

                        featuredProducts.push(element.name);

                    } else if (element.categories.dataValues.category == 'in-sale') {

                        inSaleProducts.push(element.name);

                    }

                }

                let result = [

                    {
                        name: 'in sale',
                        total: inSaleProducts.length,
                    },

                    {
                        name: 'new',
                        total: newProducts.length,
                    },

                    {
                        name: 'featured',
                        total: featuredProducts.length,
                    },

                ]

                res.json( result );

            })

    },

}


module.exports = controller;