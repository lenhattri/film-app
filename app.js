
//include dependencies
var express = require('express');
var morgan = require('morgan');
var { engine } = require('express-handlebars');
var path = require('path')
var mongoose = require('mongoose');
var bodyParser =require('body-parser');
var incIndexHandlebars = require('./src/tools/incIndexHandlebars')
 
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('./.cert/key.pem', 'utf8');
var certificate = fs.readFileSync('./.cert/cert.pem', 'utf8');

var credentials = {key: privateKey, cert: certificate};
//include Routers
var routerIndex = require('./src/routerIndex');

var app = express();


morgan('compined');
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'src/resources/views'));
incIndexHandlebars();

//express static
app.use(express.static(path.join(__dirname, 'src/public')));

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//set mongodb

mongoose.connect('mongodb://localhost:27017/film-db', function (err) {
  
    if (err) throw err;
  
    console.log('Successfully connected');
  
 });
//init router
 routerIndex(app);
 var httpsServer = https.createServer(credentials, app);
httpsServer.listen(3000, function () {
  console.log('WibuPhim app listening on port 3000!');
});