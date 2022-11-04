require("../require/index");
const MongoClient = require("mongodb").MongoClient;

let _connection = null;

const open = function(){
    if(get()==null){
        //Connect method is asynchronous method, if connection fail, we will get the error.
        MongoClient.connect(process.env.MONGODB_CONN+process.env.MONGODB_NAME, function(err, client){
            console.log(process.env.MONGODB_CONN+process.env.MONGODB_NAME);
            if(err){
                console.error(process.env.DB_CONNECTION_FAILED,err);
                return;
            }else{
                _connection = client.db(process.env.MONGODB_NAME);
                console.log(process.env.DB_CONNECTION_OPEN, _connection);
            }
        })
    }
}

const get = function(){
    return _connection;
}

module.exports = {
    open : open,
    get : get
}