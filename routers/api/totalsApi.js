const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const path = require('path');
const totalsApiController = require('../../controllers/api/totalsApiController');


// GET ALL PRODUCTS
router.get('/', totalsApiController.totals);


module.exports = router;