// still working on
require("dotenv").config();
const express = require("express");

const app = express();

app.listen(process.env.PORT, function(){
    console.log("Listening ");
});

const getAllStudents = function(req, res){
    console.log("This is inside getAllStudents function");

}