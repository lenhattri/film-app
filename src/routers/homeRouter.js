// home.js - Home page route module.

var express = require('express');
const Movie = require('../databases/models/Movie');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  Movie.find({})
  .then(movieDbs => {res.render('home',movieDbs)})
  .catch(err => {res.send(err)});
})


module.exports = router;