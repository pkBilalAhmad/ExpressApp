var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");


var app = express();
var port = (process.env.PORT || 3000);

app.use(bodyParser.json())


//////////////schema and model///////////////////////////////////////////
var studentSchema = new mongoose.Schema({
    name: String,
    rollNum: Number,
    class: String
});
var studentModel = mongoose.model("student", studentSchema);
//////////////schema and model//////////////////////////////////////////


app.post("/add", function (req, res, next) {

    //console.log("body is: ",req.body);

    var newStudent = new studentModel({
        name: req.body.name,
        class: req.body.class,
        rollNum: req.body.rollNum
    })

    newStudent.save(function (err, data) {
        if (!err) {
            console.log("student is saved");
            res.send("student is saved");
        } else {
            res.send("student saving failed");
            console.log("student saving failed");
        }
    });
});


app.get("/", function (req, res, next) {
    console.log("reauest is comming to '/' ");
    res.send("Hello Karachi");
});
app.get('/home', function(req,res,next){
    res.send('this. is Home')
})

app.listen(port, function () {
    console.log('app is running on port', port);
});

mongoose.connect("mongodb://pkbilal:636363@ds151059.mlab.com:51059/express-hello-world");




mongoose.connection.on('connected', function () {
    console.log("Mongoose is connected");
});