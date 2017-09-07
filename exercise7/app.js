var express = require('express');
var app = express();
var pug = require('pug');

//var router = app.router();
//var prodRoute = require(‘./produktRoutes’);
//app.use(‘/’, prodRoute);

app.set('view engine', 'pug');//set up   render html  template engine
app.set('views',__dirname + '/views');

app.get('/', function (req, res) {
  res.render('index')
});

app.get('/about', function (req, res) {
  res.render('about')
});

app.get('/contact', function (req, res) {
  res.render('contact')
});

//module.exports = router;
app.listen(5000);
