var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');
port = process.env.POTR || 5008;

app.use(express.static('./app'))
var Cat = mongoose.model('Cat', { name: String });
var bobo = new Cat({name : 'febobo'});
bobo.save(function(err , res){
  if(err){
    console.log(err);
  }
})


app.get('/' , function(res){
  res.render('./demo/index.html');
})

mongoose.connect('mongodb://localhost/febobo')
app.listen(port, function(){
  console.log('listen port' + port)
});
