console.log("1- Start");
require("./fibonacci");
console.log("3- End");

//Result
//1- Start
//Fibonacci of 4is 5
//3- End

//To make asynchronous, chile process can help

child_process = require("child_process");
console.log("1- Start");

//Spawn is a new process. it has its own IO. New process inherit the old one.
const newProcess = child_process.spawn("node",["fibonacci.js"],{stdio:"inherit"});  //We created a new node

//require("./fibonacci");
console.log("3- End");

