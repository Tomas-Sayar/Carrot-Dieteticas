const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const path = require('path');
const productsApiController = require('../../controllers/api/productsApiController');


// GET ALL PRODUCTS
router.get('/', productsApiController.list);

// GET ONE PRODUCT
router.get('/lastInDb', productsApiController.lastProduct);


module.exports = router;
