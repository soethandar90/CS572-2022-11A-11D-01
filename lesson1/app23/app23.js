const express = require("express");
const path = require('path');
require("dotenv").config(); // external module to read .env

//Express is built on top of http
const app = express();

//app.get, app.post, app.delete
app.get("/",function(req, res){
    console.log("GET received");
    res.status(200).send("Received your GET request.")
});

//returning JSON data
app.get("/json",function(req, res){
    console.log("JSON received");
    res.status(200).send("{JSON Data:true}")
});

app.get("/file",function(req, res){
    console.log("File request received");
//    console.log("__dirname",__dirname); //getting the folder path    
    res.status(200).sendFile(path.join(__dirname, "public","index.html"));
});

//Solution of backslash for Mac
//app.get("/file",function(req, res){
//    console.log("File request received");
//    //console.log("__dirname",__dirname); //getting the folder path    
//    del = "\\";
//    if(ifOsIsMac){
//        del="/";
//    }
//    res.status(200).sendFile(__dirname+"\\index.html");
//});

//app.use(express.static(path.join(__dirname,"public"))); //feature of express
app.use(express.static(path.join(__dirname,"public"))); 

const server = app.listen(process.env.port, function(){
    console.log(process.env.SERVER_LISTEN_MESSAGE+server.address().port);
});