require("./require/index");
const express = require("express");
const path = require('path');
const routes = require(process.env.ROUTES_PATH); 

const app = express();
app.use(function(req,res, next){
        console.log(req.method, req.url);
        next();
    });
    
app.use(express.static(path.join(__dirname,process.env.PUBLIC_FOLDER))); 

app.use(process.env.API_SUBSET_URL,routes);

const server = app.listen(process.env.PORT, function(){
    console.log(process.env.SERVER_LISTEN_MESSAGE+server.address().port);
});