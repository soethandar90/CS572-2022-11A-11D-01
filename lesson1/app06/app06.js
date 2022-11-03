const fs = require("fs");

console.log("1: Get a file");

//Give your function what name is supposed to be doing
writeFirstLineOfFile = function(err, buffer){
    console.log("2: Got the file", buffer.toString().substring(0,21));
}

fs.readFile("largeFile.txt", writeFirstLineOfFile); //asynchronous

console.log("3: App continues..."); // not blocking

