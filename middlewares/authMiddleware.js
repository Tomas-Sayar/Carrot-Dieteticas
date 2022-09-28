const { log } = require('console');
const fs = require('fs');
function authMiddleware(req, res, next) {

        if ( req.session.usuarioLogueado.typeOfUser_id == 1 ) {

            next();

        } else {

            res.redirect('/');

        }

};



module.exports = authMiddleware;