var express = require('express')
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