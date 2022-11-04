const MongoClient = require("mongodb").MongoClient;

let _connection = null;

const open = function(){
    if(get()==null){
        //Connect method is asynchronous method, if connection fail, we will get the error.
        MongoClient.connect("mongodb://127.0.0.1:27017/meanGames", function(err, client){
            if(err){
                console.error("DB connection failed",err);
                return;
            }else{
                _connection = client.db("meanGames");
                console.log("DB connection open", _connection);
            }
        })
    }
}

const get = function(){
    return _connection;
}

module.exports = {
    open,
    get
}