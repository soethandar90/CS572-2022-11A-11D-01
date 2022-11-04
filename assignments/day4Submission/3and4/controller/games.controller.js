const dbConnection = require("../data/dbconnection").open();

require("../require/index");

const gamesData = require(process.env.GAMES_JSON);

module.exports.getAll = function(req, res){  
    console.log(process.env.GET_METHOD_ALL_RECEIVED);

    const db = dbConnection.get();
    console.log(process.env.DB, db);
    
    const gamesCollection = db.collection(process.env.GAMES_COLLECTIONS);
    
    let offset = 0;
    let count = 4;
    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset, 7);
    }
    if(req.query && req.query.count){
        count = parseInt(req.query.count, 7);
    }

    gamesCollection.find().skip(offset).limit(count).toArray(function(err, gamesData){
    console.log(gamesData);
    respondOK(process.env.GET_METHOD_ONE_RECEIVED, res, gamesData);
    });   
}

module.exports.getOne = function(req, res){
    const db= dbConnection.get();
    const gamesCollection= db.collection(process.env.GAMES_COLLECTIONS);
    const gameId= req.params.gameId;
    gamesCollection.findOne({_id : ObjectId(gameId)}, function(err, game) {
    console.log(game);
    respondOK(process.env.GET_METHOD_ONE_RECEIVED, res, game);
    });    
}

module.exports.addOne = function(req,res){
    let newGame= {};
    if (req.body && req.body.title && req.body.price) {
        newGame.title= req.body.title;
        newGame.price= parseFloat(req.body.price);
        gamesCollection.insertOne(newGame, function(err, res) {
            if (err) {
                res.status(parseInt(process.env.SYSTEM_ERROR_STATUS_CODE)).json({error: err});
            } else {
                console.log(res);
                res.status(parseInt(OK_STATUS_CODE_2)).json(res);
            }
        });
    }
}

respondOK = function(logMessage, res, result){
    writelog(logMessage);    
    sendOKJsonResponse(res, result);
}

writelog = function(message){
    console.log(message);
}

sendOKJsonResponse = function(res, result){
    res.status(parseInt(process.env.OK_STATUS_CODE)).json(result);
}
