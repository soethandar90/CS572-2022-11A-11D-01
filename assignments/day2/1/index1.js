const child_process= require("child_process");

console.log("1- Start process.");

const newProcess= child_process.spawn("node",["fibonacci.js"],{stdio:"inherit"});

console.log("3- End process.");