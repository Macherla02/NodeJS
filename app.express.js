var express = require('express');
var app = express();
var port = 9005;

app.get("/",function(req,res){
 res.send("This is Root of 9005 express");
});

app.get("/books",function(req,res){
    res.send("This is Book Express for Node 123");
});

app.listen(port,function(err){
    console.log("Server is running in 9005");
});
