// Skapa en express-server som har en route / som levererar en index.html
// via sendFile. Servern kan lyssna på valfri port. Starta servern med nodemon.

var express = require('express');
var app = express();

app.get('/exercise1',(req,res)=>{
  res.sendFile(__dirname + '/index.html');//after dirname can write file name
});

app.listen(3000,()=>{
  console.log('ny lyssnar vi on 3000')
})
