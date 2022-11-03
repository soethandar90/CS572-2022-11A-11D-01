const gamesData = require("../data/games.json");
module.exports.getAll = function(req, res){
    console.log("GET All Received");
    res.status(200).json(gamesData);
}

module.exports.getOne = function(req, res){
    console.log("GET One Received");
    gameIndex = req.params.gameId;
    const game = gamesData[gameIndex];
    res.status(200).json(game);
}