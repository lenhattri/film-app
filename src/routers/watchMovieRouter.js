// watchMovie - Home page route module.

var express = require('express');
var router = express.Router();
var watchMovieControllers = require('../controllers/watchMovieControllers');
// Home page route.
router.get('/',watchMovieControllers.index );
router.get('/:slug/details/watching',watchMovieControllers.watch);
router.get('/:slug/details',watchMovieControllers.details);

module.exports = router;