var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');
port = process.env.POTR || 5008;

app.use(express.static('./app'))

app.get('/' , function(res){
  res.render('index.html');
})

// your db
mongoose.connect('mongodb://localhost/febobo')
app.listen(port, function(){
  console.log('listen port' + port)
});
