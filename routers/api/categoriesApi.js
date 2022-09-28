const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const path = require('path');
const categoriesApiController = require('../../controllers/api/categoriesApiController');


// GET ALL PRODUCTS
router.get('/', categoriesApiController.list);

// GET ONE PRODUCT
router.get('/:id', categoriesApiController.detail);


module.exports = router;