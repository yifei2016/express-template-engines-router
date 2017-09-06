var express = require('express');
var app = express();
var pug = require('pug');


// app.set('view engine', 'pug');
// app.set('views', __dirname + '/views');

// app.get('/', function (req, res) {
//   res.render('index', {
//     title: 'Hey',
//     message: 'Hello there!',
//     resurs: 37367,
//     siffra: [2,3,4,5],
//     objekt: {
//         	name: "Olof",
//         	age: 24
//     	}
//   });
  //res.send('hej' + req.method)

  app.use(express.static(__dirname + 'public'));//register middleware
  app.set('view engine', 'pug');//set up   render html  template engine
  app.set('views',__dirname + '/views');
//get handler
  app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
  })

//app.use('/user/:userID',(req,res)=>{
//});
//use get same path to handle same req
// parameter
app.get('/user/:userID',(req,res)=>{ //path
  var userID = req.params.userID;
  //  res.sendFile(__dirname + '/style.css');
  console.log(userID)
 // res.sendFile(__dirname + '/index.html');
 res.render('user',{//to render views.
   userName: 'Para',
   userID: 34
 })
});// get  handler

// app.post('/user/:userID',(req,res)=>{
//   var userID = req.params.userID;
//   console.log(userID)
//  // res.sendFile(__dirname + '/index.html');
//  res.render('user',{
//    userName: 'Para',
//    userID: 34
//  })
// });//handler

// query
app.get('/user',(req,res)=>{
  var userID = req.query.userID;
  console.log("UID:" + userID)
  res.render('user', {
        userName: 'Que',
        userID: userID
    });
});
//res.render() som tar två parametrar, dels namnet på view:en,
//dels ett objekt med info som skickas med till sidan. Detta objekt kan som synes innehålla all möjlig data,
//vi interpolerar ( #{ … } ) ut den på sidan om vi vill skriva ut den direkt.

app.listen(3000);
