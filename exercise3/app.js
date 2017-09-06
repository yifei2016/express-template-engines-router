var express = require('express');
var app = express();

app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/index.html');
  app.use(express.static('public'))//get static files
});

app.get('/produkter/:userID', function(req, res) {
  console.log('userID' + req.params.userID)
  res.send({name: 'yifei', age: 20, userID: req.params.userID});//same as res.json
	//var produktId = req.params.produktId;
})
//:params
// app.use(express.static(__dirname + '/static'))
//app.use(express.static(__dirname + '/public'));
//want to get image,css, then use dirname + '/static', just local 5000


app.listen(5000,()=>{
  console.log('ny lyssnar vi on 5000')
})
