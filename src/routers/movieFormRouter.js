// movieFormRouter.js- movieForm page route module.

var express = require('express');
var router = express.Router();
var MovieFormControllers = require('../controllers/movieFormControllers');


//[GET METHODS *]
router.get('/:create', MovieFormControllers.create);
router.get('/:id/edit',MovieFormControllers.edit);
router.get('/', MovieFormControllers.index);

//[POST METHODS *]
router.post('/',MovieFormControllers.creating );
router.post('/:id/edit',MovieFormControllers.editing);
module.exports = router;