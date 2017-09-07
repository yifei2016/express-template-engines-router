// Utöka övning 8 genom att servern serverar två (eller fler) sidor,
// och se till att logga info på alla, men lägg också två
// separata middleware-funktioner för varje sida.
// Observera i vilken ordning du “kedjar” funktionerna till sidorna.
var express = require('express');
var app = express();
var pug = require('pug');
//var router = express.Router();
var fs = require('fs');

var times = 0; // Counter för /hidden
app.set('view engine', 'pug');//set up   render html  template engine
app.set('views',__dirname + '/views');
var hiddenCounter = function (req, res, next) {
    times++;
    console.log('times: ' + times);
    next();
  //res.send('sdfdsf')  middleware intercept req, use define middleware
}
app.use(express.static('public'))
//the order between these two lines is important, static first, so middleware wont handle public, vice verse
app.use('/', hiddenCounter);
//app.use('/', hiddenCounter);
//middleware is to check, can be chained, the last one have next(), then go to get
//app.get 其实get只是use的一个实现，app.use和app.get,app.post等等在express框架里面处理都是类似的,都是抽象成一个Layer(层),
//只是app.get这些的层比app.use的层稍微复杂一点.
//顺序方面的话,先注册的层在访问的时候先调用,调用next()到下一个匹配url的Layer
//use  get almost same in this case
 // app.router('/')
 //  .get(function (req, res) {
 //    res.render('layout')
 //  })
 //  .get(function(req,res){
 //     res.render('index')
 //  })
 var logVisits = function(req, res, next) {
   //console.error(err.stack);

    let input = new Date() + ' ' + req.method + '\n';
    fs.appendFile('accessLog', input, (err) => {
        if (err) throw err;
    });
    next();
}
//The fs.appendFile() method appends specified content to a file.
//If the file does not exist, the file will be created:
//fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {

// Skriv ner info om vad som besökts och när.
//app.use('/',logVisits);
//console.log('t: ' + times)
//app.use('/',hiddenCounter);
// Räkna antalet besök till /hidden.

//console.log('t: ' + times)
//A route will match any
//path that follows its path immediately with a “/”.
//For example: app.use('/apple', ...) will match “/apple”, “/apple/images”,
//“/apple/images/news”, and so on.

//Since path defaults to “/”, middleware mounted without a path will be executed for every request to the app.
//For example, this middleware function will be executed for every request to the app:
//app.use([path], function)加载处理请求的路由模块的参数
//Use the given middleware function, with optional mount path, defaulting to "/".
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Min sida för middleware'
    });

})
// Längst ner i routingen har vi ett wildcard.
// Den tar då hand om alla requests som inte stämmer.
app.get('*', (req, res) => {
    res.status(404).render('404', {
        title: '404 - not found'

    });
})



  // app.use('/index/:user',(req,res,next)=>{
  //   var userName = req.params.user;
  //   //the value to user can be whatever, write searchroad?key=value
  //   console.log("user:" + userName)
  //   res.render('index', {
  //         userName: 'yifei',
  //         userID: userName
  //     });
  // });

//module.exports = middleware;
app.listen(5000);
