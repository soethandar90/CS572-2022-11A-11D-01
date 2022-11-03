require("../require/index");
const gamesData = require(process.env.GAMES_JSON);
module.exports.getAll = function(req, res){    
    respond(process.env.GET_METHOD_ALL_RECEIVED, res, gamesData);
}

module.exports.getOne = function(req, res){
    gameIndex = req.params.gameId;
    const game = gamesData[gameIndex];
    respond(process.env.GET_METHOD_ONE_RECEIVED, res, game);
}

respond = function(logMessage, res, result){
    writelog(logMessage);    
    sendOKJsonResponse(res, result);
}

writelog = function(message){
    console.log(message);
}

sendOKJsonResponse = function(res, result){
    res.status(parseInt(process.env.OK_STATUS_CODE)).json(result);
}
