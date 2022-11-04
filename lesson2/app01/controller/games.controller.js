const dbConnection = required("../data/dbconnection");
const gamesData = require("../data/games.json");
module.exports.getAll = function(req, res){
    console.log("GET All Received");
    //res.status(200).json(gamesData);

    let offset = 0;
    let count = 5;
    const db = dbConnection.get();
    console.log("db", db);
    const gamesCollection = db.collection("games");
    gamesCollection.find().toArray(function(err, games){
        console.log("Found",games);
        res.status(200).json(games);
    });
}


module.exports.getOne = function(req, res){
    console.log("GET One Received");
    gameIndex = req.params.gameId;
    const game = gamesData[gameIndex];
    res.status(200).json(game);
}