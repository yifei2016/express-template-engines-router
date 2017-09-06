// Från din index.html,
// lägg till så att du har en main.css-fil länkad via index.html
// där du stylar din sida. Du ska även på sidan visa upp en
// valfri bild som du serverar till din server lokalt.
// Här behöver du alltså använda static. Serving static files in express

var express = require('express');
var app = express();

app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/public'))
//app.use(express.static(__dirname + '/public'));
//want to get image,css, then use dirname + '/static', just local 5000

app.listen(5000,()=>{
  console.log('ny lyssnar vi on 5000')
})
