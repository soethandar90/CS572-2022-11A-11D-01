//LEARNING PURPOSE : THIS CODE IS WORKING

require("dotenv").config();
const MongoClient=require("mongodb").MongoClient;
let dbo = null;
MongoClient.connect("mongodb://127.0.0.1:27017/", function(err,conn){
    if(err){
        console.log(err);
    }else{
        console.log("CONNECTED!");
        dbo = conn.db("meanGames");
        console.log("DBO is "+dbo);
        console.log("GET dbo is "+get());
        dbo.collection("games").findOne({},function(err,result){
            if(err){
                console.log("Erros in findOne");
            }else{
                console.log(result);
                conn.close();
            }
        })
        
    }

});

const get = function(){
    return dbo;
}