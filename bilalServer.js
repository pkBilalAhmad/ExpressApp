var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')


var app = express()

app.get('/', function (req, res, next) {
  res.send('Hello World!')
})

var port = (process.env.PORT || 3000)

app.get('/home', function(req,res,next){
    res.send('this. is Home')
})


app.listen(port, function () {
  console.log('Example app listening on port !')
})

mongoose.connect('mongodb://pkbilal:636363@ds151059.mlab.com:51059/express-hello-world');
mongoose.connection.on('connected', function(){
    console.log("mongoose is connected")
})