const fs = require("fs");

console.log("1: Get a file");

const buffer = fs.readFileSync("largeFile.txt");

console.log("2: Got the file", buffer.toString().substring(0,21)); //block occurs here.

console.log("3: App continues...");

