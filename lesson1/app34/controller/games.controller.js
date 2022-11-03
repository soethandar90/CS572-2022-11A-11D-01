const gamesData = require("../data/games.json");
module.exports.getAll = function(req, res){
    console.log("GET All Received");
    console.log(req.query);
    let offset = 0;
    let count = 5;
    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset, 10);
    }
    if(req.query && req.query.offset){
        offset = parseInt(req.query.count, 10);
    }
    const pageGames = gamesData.slice(offset, offset+count);
    res.status(200).json(pageGames);
}

module.exports.getOne = function(req, res){
    console.log("GET One Received");
    gameIndex = req.params.gameId;
    const game = gamesData[gameIndex];
    res.status(200).json(game);
}

module.exports.addOne = function(req, res){
    console.log("POST new game");
    console.log(req.body);
    res.status(200).json(req.body);
}