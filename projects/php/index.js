require("dotenv").config();
require("./data/db");
const express = require("express");
const path = require('path');
const routes = require("./routes/artists");
const app = express();
app.use("/api",function (req, res, next) {
    //allow cors policy
   // res.header("Access-Control-Allow-Origin", "http://127.0.0.1:4200");
    //res.header("Access-Control-Allow-Methods", "GET, DELETE");
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log(req.method, req.url, req.body);
    next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/api",routes); //subset url
//app.use("/api", authenticationController.authenticate, routes); //subset url

//console.log("Routes are "+routes);
const server = app.listen(process.env.port, function () {
    console.log(process.env.SERVER_LISTEN_MESSAGE + server.address().port);
});