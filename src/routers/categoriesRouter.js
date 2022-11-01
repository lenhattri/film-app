var express = require('express');
var router = express.Router();
var categoriesControllers = require('../controllers/categoriesControllers');
// Home page route.
router.get('/',categoriesControllers.index);


module.exports = router;