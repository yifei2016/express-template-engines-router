var express = require('express');
var app = express();
var pug = require('pug');

//var router = app.router();
//var prodRoute = require(‘./produktRoutes’);have another routes folder
//app.use(‘/’, prodRoute);??????

app.set('view engine', 'pug');//set up   render html  template engine
app.set('views',__dirname + '/views');

app.get('/layout', function (req, res) {
  res.render('layout')
});

// app.get('/index', function (req, res) {
//   // res.render('index')
//   res.send('<h4>change index')
// });

app.get('/userIndex',(req,res)=>{
  var user = req.query.user;
  //the value to user can be whatever, write searchroad?key=value
  console.log("user:" + user)
  //res.render('layout');//render first, do not go further to next line
  res.render('index', {
        userName: 'joke',
        userID: user
    });
});

//module.exports = router;
app.listen(5000);
