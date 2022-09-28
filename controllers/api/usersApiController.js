const db = require('../../database/models/index.js');


const controller = {
    detail: (req, res) => {
        let userId = req.params.id;

        db.User.findByPk(userId)
            .then((selectedProfile) => {

                res.json(selectedProfile);

            })
            .catch((err) => console.error(err));
    },

    list: (req, res) => {

        db.User.findAll()
        .then(data => {
            let result = {
                ...data,
                total: data.length,
            }
            res.json(result)
        })

    }


}









module.exports = controller;