const mongoose = require("mongoose");
const MusicCollection = mongoose.model("MusicCollection");

const getAll = function (req, res) {
    let offset = 0;
    let count = 5;
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    if (req.query && req.query.count) {
        offset = parseInt(req.query.count, 10);
    }
    MusicCollection.find().skip(offset).limit(count).exec(function (err, mCol) {
        console.log("Found music collection", mCol.length);
        res.status(200).json(mCol);
    });
}

const getOne = function (req, res) {
    const mColId = req.params.mColId;
    MusicCollection.findById(mColId).exec(function (err, mCol) {
        res.status(200).json(mCol);
    });
}

const addOne = function (req, res) {
    console.log("AddOne request received.")
    const newMusicCollection = {
        name: req.body.name,
        dob: req.body.dob,
        album: req.body.album
    };
    MusicCollection.create(newMusicCollection, function (err, musicCollection) {
        const response = { status: 201, message: musicCollection };
        if (err) {
            console.log("Error creating music collection");
            response.status = 500;
            response.message = err;
        }
        res.status(response.status).json(response.message);
    })
}

const deleteOne = function (req, res) {
    console.log("DeleteOne request received.")
    const mColId = req.params.mColId;
    MusicCollection.findByIdAndDelete(mColId).exec(function (err, deletedMc) {
        const response = { status: 204, message: deletedMc };
        if (err) {
            console.log("Error finding Music Collection");
            response.status = 500;
            response.message = err;
        } else if (!deletedMc) {
            console.log("Music Collection not found");
            response.status = 404;
            response.message = {
                "message": "Music Collection not found"
            };
        }
        res.status(response.status).json(response.message);
    });
}

const updateOne = function (req, res) {
    console.log("UpdateOne request received.");
    const mColId = req.params.mColId;
    const newMusicCollection = {
        name: req.body.name,
        dob: req.body.dob,
        album: req.body.album
    };
    MusicCollection.findByIdAndUpdate(mColId, newMusicCollection).exec(function (err, musicCollection) {
        //MusicCollection.findByIdAndUpdate(mColId).exec(function(err, musicCollection){        
        const response = { status: 201, message: musicCollection };
        if (err) {
            console.log("Error updating music collection");
            response.status = 500;
            response.message = err;
        }
        res.status(response.status).json(response.message);
    });
}


module.exports = {
    getAll: getAll,
    getOne: getOne,
    addOne: addOne,
    deleteOne: deleteOne,
    updateOne: updateOne
}