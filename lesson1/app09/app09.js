const http = require("http");

//create a server
const server = http.createServer();

server.listen(8080, "localhost", function(){ //asynchronous
    console.log("Server is running on http://localhost:8080");
})

//at this point, no response yet

//----

