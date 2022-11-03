const { readFileSync, fstat } = require("fs");
const fs = require('fs');
const http = require("http");

const helloWorld = function(req, res){
res.writeHead(200);
res.end("Hello World");
console.log("request made");
};

const helloWorldHtml = function(req, res){
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200); //every response should have a static code
    //ending the response
    res.end("<html><header></header><body><h1>Hello World!</h1></body></html>");
    };

    //get it working first, then fix bug
const serveIndex = function(req,res){
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        fs.readFile("./index.html", function(err, buffer){
            res.end(buffer);
        })

        const buffer=readFileSync("./index.html");
        //res.end(buffer);
    }

    //Indexpage will display blank
    const serveIndex2 = function(req,res){
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
responseBody = "";
        fs.readFile("./index.html", function(err, buffer){
            responseBody = buffer;
        })

        //const buffer=readFileSync("./index.html");

        res.end(responseBody);
    }

const server = http.createServer(serveIndex);

//list to port 8080, whenever a request come on port 8080, send that to the server.
server.listen(8080, "localhost", function(){ //asynchronous
    console.log("Server is running on http://localhost:8080");
})

//console.log("End");



