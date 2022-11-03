const express = require("express");
const path = require('path');
require("dotenv").config(); // external module to read .env


//Express is built on top of http
const app = express();

//app.use(express.static("/public",path.join(__dirname,"public")));  //feature of express
app.use(express.static(path.join(__dirname,"public"))); 

//everytime request comes, its gonna be logged.
//no response is sending back at first
//middleware, after it does what it does, call next();
app.use(function(req,res, next){
//app.use("/css",function(req,res, next){ //only css
    console.log(req.method, req.url);
    next();
});

//returning JSON data
app.get("/json",function(req, res){
    console.log("JSON received");
    res.status(parseInt(process.env.OK_STATUS_CODE)).send("{JSON Data:true}")
});

const server = app.listen(process.env.port, function(){
    console.log(process.env.SERVER_LISTEN_MESSAGE+server.address().port);
});