const fs = require("fs");

console.log("1: Get a file");
//single thread is not reading, some guy in the back is cooking.
//When background guy is done, put the result.
fs.readFile("largeFile.txt", function(err, buffer){
    console.log("2: Got the file", buffer.toString().substring(0,21));

}); //asynchronous

console.log("3: App continues..."); // not blocking

