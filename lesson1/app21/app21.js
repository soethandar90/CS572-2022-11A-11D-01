const express = require("express");
require("dotenv").config(); // external module to read .env

const app = express();

//app.set("port", process.env.port); //Config function said port in env

//const server = app.listen(app.get("port"), function(){
//    console.log("Listening to port "+server.address().port);
//});

const server = app.listen(process.env.port, function(){
    console.log(process.env.SERVER_LISTEN_MESSAGE+server.address().port);
});