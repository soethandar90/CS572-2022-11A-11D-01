require("../require/index");
const MongoClient = require("mongodb").MongoClient;

let _connection = null;

const open = function(){
    console.log("This is inside dbconnection.open()");
    if(get()==null){
        console.log("This is inside dbconnnection.open() if else check");
        //Connect method is asynchronous method, if connection fail, we will get the error.
        MongoClient.connect("mongodb://127.0.0.1:27017/", function(err, conn){
            if(err){
                console.log("Error occurred");
                console.error("Error ",err);
                return;
            }else{
                console.log("This is after connect(), inside non-error");
                _connection = conn.db("meanGames");
                console.log("DBO is "+_connection);
                console.log("GET dbo is "+get());
                console.log("Connected ", _connection);
                return _connection;
            }
        })
    }
}

const get = function(){
    console.log("This is inside get() "+_connection);
    return _connection;
}

module.exports = {
    open : open,
    get : get
}