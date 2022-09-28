const fs = require('fs');
function guestMiddleware(req, res, next) {
if (req.session.usuarioLogueado) {
    next();
} else {
    res.redirect('/users/login');
}
};



module.exports = guestMiddleware;