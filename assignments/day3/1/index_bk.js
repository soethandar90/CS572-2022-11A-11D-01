const http = require("http");
const fs = require('fs');

const serveByReqMethod = function(req, res){
    switch(req.method){
        case "GET":
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        fs.readFile("./index.html", function(err, buffer){
            res.end(buffer);
        })
        break;
        case "POST":
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);      
        res.end("{'message' : 'Hello World!POST'}");   
        break;             
    }    
    };

//Create a server
const server = http.createServer(serveByReqMethod);

//list to port 3434, whenever a request come on port 3434, send that to the server.
server.listen(3535, "localhost", function(){ //asynchronous
    console.log("Server is running on http://localhost:3535");
})