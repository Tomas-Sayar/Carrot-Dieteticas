const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const path = require('path');
const productsController = require('../controllers/productsController');
const multerMiddleware = require('../middlewares/multerMiddleware.js');
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');

//##########################VALIDACIONES#############################
const validateCreateForm = [
    body('name').notEmpty().withMessage("Ingresa un Nombre").isLength({ min: 5 }).withMessage("Ingresa un Nombre de al menos 5 carácteres"),
    body('type').notEmpty().withMessage("Debes elegit un tipo de producto"),
    body('price').notEmpty().withMessage("Debes completar con un precio").bail(),
    body('discount').notEmpty().withMessage("Este campo no puede estar vacío"),
    body('category').notEmpty().withMessage("Debes seleccionar una categoría"),
    body('brand').notEmpty().withMessage("Debes elegir una opción"),
    body('description').notEmpty().isLength({ min: 20 }).withMessage("La descripción debe tener al menos 20 carácteres"),
    body('product-image').custom((value, {req}) => {
        let file = req.file; 
        if(!file) {
            throw new Error("Tienes que subir una imagen");
    }
    return true;
    })
]
//########################### RUTAS ##############################//

// GET ALL PRODUCTS
router.get('/', productsController.list);

// CREATE ONE PRODUCT
router.get('/create', guestMiddleware, authMiddleware, productsController.create);
router.post('/create', multerMiddleware('products').single('product-image'), validateCreateForm, productsController.store);

// GET ONE PRODUCT
router.get('/:id', productsController.detail);

// EDIT ONE PRODUCT
router.get('/edit/:id', guestMiddleware, authMiddleware, productsController.edit);
router.put('/edit/:id', multerMiddleware('products').single('image'), validateCreateForm, productsController.update);

//DELETE PRODUCT
router.delete('/delete/:id', productsController.destroy);


module.exports = router;
