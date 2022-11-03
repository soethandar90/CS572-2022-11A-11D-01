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

//create a server
//create server method setup in hashmap, whatever request come, call helloWorld.
const server = http.createServer(helloWorldHtml);

//list to port 8080, whenever a request come on port 8080, send that to the server.
server.listen(8080, "localhost", function(){ //asynchronous
    console.log("Server is running on http://localhost:8080");
})

//console.log("End");



