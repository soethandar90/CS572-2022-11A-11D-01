const mongoose = require(process.env.MONGOOSE);
const MusicCollection = mongoose.model(process.env.MUSIC_COLLECTION_SCHEMA_KEY);

const getAll = function (req, res) {
    let offset = process.env.DEFAULT_OFFSET;
    let count = process.env.DEFAULT_LIMIT;
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, process.env.MAXIMUM_OFFSET);
    }
    if (req.query && req.query.count) {
        offset = parseInt(req.query.count, process.env.MAXIMUM_OFFSET);
    }
    MusicCollection.find().skip(offset).limit(count).exec(function (err, mCol) {
        const response = { status: parseInt(process.env.OK_STATUS_CODE), message: mCol };
        if (err) {
            console.log(process.env.FIND_ERROR_MESSAGE);
            response.status = parseInt(process.env.SYSTEM_ERROR_STATUS_CODE);
            response.message = err;
        }
        console.log(process.env.FOUND_MUSIC_COLLECTION_MESSAGE, mCol.length);
        res.status(parseInt(process.env.OK_STATUS_CODE)).json(mCol);
    });
}

const getOne = function (req, res) {
    const mColId = req.params.mColId;
    MusicCollection.findById(mColId).exec(function (err, mCol) {
        const response = { status: parseInt(process.env.OK_STATUS_CODE), message: mCol };
        if (err) {
            console.log(process.env.FIND_ERROR_MESSAGE);
            response.status = parseInt(process.env.SYSTEM_ERROR_STATUS_CODE);
            response.message = err;
        }
        res.status(response.status).json(mCol);
    });
}

const addOne = function (req, res) {
    console.log(process.env.ADD_ONE_REQUEST_RECEIVED_MESSAGE)
    const newMusicCollection = {
        name: req.body.name,
        dob: req.body.dob,
        album: req.body.album
    };
    MusicCollection.create(newMusicCollection, function (err, musicCollection) {
        const response = { status: parseInt(process.env.SUCCESS_STATUS_CODE), message: musicCollection };
        if (err) {
            console.log(process.env.ADD_ONE_ERROR_MESSAGE);
            response.status = parseInt(process.env.SYSTEM_ERROR_STATUS_CODE);
            response.message = err;
        }
        res.status(response.status).json(response.message);
    })
}

const deleteOne = function (req, res) {
    console.log(process.env.DELETE_REQUEST_RECEIVED_MESSAGE)
    const mColId = req.params.mColId;
    MusicCollection.findByIdAndDelete(mColId).exec(function (err, deletedMc) {
        const response = { status: parseInt(process.env.SUCCESS_STATUS_CODE), message: deletedMc };
        if (err) {
            console.log(process.env.FIND_ERROR_MESSAGE);
            response.status = parseInt(process.env.SYSTEM_ERROR_STATUS_CODE);
            response.message = err;
        } else if (!deletedMc) {
            console.log(process.env.COLLECTION_NOT_FOUND_MESSAGE);
            response.status = parseInt(process.env.CONTENT_NOT_FOUND_STATUS_CODE);
            response.message = {
                "message": process.env.COLLECTION_NOT_FOUND_MESSAGE
            };
        }
        res.status(response.status).json(response.message);
    });
}

const updateOne = function (req, res) {
    console.log(process.env.UPDATE_ONE_REQUEST_RECEIVED_MESSAGE);
    const mColId = req.params.mColId;
    const newMusicCollection = {
        name: req.body.name,
        dob: req.body.dob,
        album: req.body.album
    };
    MusicCollection.findByIdAndUpdate(mColId, newMusicCollection).exec(function (err, musicCollection) {
        const response = { status: parseInt(process.env.SUCCESS_STATUS_CODE), message: musicCollection };
        if (err) {
            console.log(process.env.UPDATE_ERROR_MESSAGE);
            response.status = parseInt(process.env.SYSTEM_ERROR_STATUS_CODE);
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