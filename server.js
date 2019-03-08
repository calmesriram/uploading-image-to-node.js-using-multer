var express = require("express");
var bodyparser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
const path = require('path');
var multer = require("multer")
var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+".jpeg")
  }
}) 
var upload = multer({ storage: storage })

app.get('/',function(req,res){  
  res.sendFile(__dirname+'/index.html');
   })

// app.post('/profile', upload.single('avatar'), function (req, res, next) {
//   console.log(req.body)
// })

// var multer = require("multer");
// var storage = multer.diskStorage({
//     destination: function(req, file, callback){
//         callback(null, 'uploads/'); // set the destination
//     },
//     filename: function(req, file, callback){
//         callback(null, Date.now() + '.jpg'); // set the file name and extension
//     }
// });
// var upload = multer({storage: storage});
app.post('/add', upload.single('sriram'), function(req, res, next) {
    // var image = req.file.filename;
    console.log(req.body);
    res.send("stored")

   /** rest */ 
});

var port = process.env.PORT || 5000
app.listen(port)
console.log(port)

