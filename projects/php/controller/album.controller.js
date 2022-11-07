const mongoose = require("mongoose");
const MusicCollection = mongoose.model("MusicCollection");

const getAll = function (req, res) {
    const mColId = req.params.mColId;
    console.log("Get all album controller");
    MusicCollection.findById(mColId).select("album").exec(function (err, result) {
        console.log("Found albums ", result.album, " for artist ", result);
        res.status(200).json(result.album);
    });

}

const getOne = function (req, res) {
    console.log("GET one album Controller");
    const mColId = req.params.mColId;
    const albumName = req.params.albumName;
    MusicCollection.findById(mColId).select("album").select(albumName).exec(function (err, result) {
        console.log("Hello");
        console.log(result);
        res.status(200).json(result);
    });
}


module.exports = {
    getAll: getAll,
    getOne: getOne,
}