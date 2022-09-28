const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const path = require('path');
const typesApiController = require('../../controllers/api/typesApiController');


// GET ALL TYPES
router.get('/', typesApiController.list);



module.exports = router;