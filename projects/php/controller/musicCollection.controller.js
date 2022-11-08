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
    MusicCollection.find().skip(offset).limit(count).exec(function (err, result) {
        const response = { status: parseInt(process.env.OK_STATUS_CODE), message: result };
        if (err) {
            console.log(process.env.FIND_ERROR_MESSAGE);
            response.status = parseInt(process.env.SYSTEM_ERROR_STATUS_CODE);
            response.message = err;
        }
        console.log(process.env.FOUND_MUSIC_COLLECTION_MESSAGE, result.length);
        res.status(parseInt(process.env.OK_STATUS_CODE)).json(result);
    });
}

const getOne = function (req, res) {
    const mColId = req.params.mColId;
    MusicCollection.findById(mColId).exec(function (err, result) {
        const response = { status: parseInt(process.env.OK_STATUS_CODE), message: result };
        if (err) {
            console.log(process.env.FIND_ERROR_MESSAGE);
            response.status = parseInt(process.env.SYSTEM_ERROR_STATUS_CODE);
            response.message = err;
        }
        res.status(response.status).json(result);
    });
}

const addOne = function (req, res) {
    console.log(process.env.ADD_ONE_REQUEST_RECEIVED_MESSAGE)
    const newMusicCollection = {
        name: req.body.name,
        dob: req.body.dob,
        album: req.body.album
    };
    MusicCollection.create(newMusicCollection, function (err, result) {
        const response = { status: parseInt(process.env.SUCCESS_STATUS_CODE), message: result };
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
    MusicCollection.findByIdAndDelete(mColId).exec(function (err, result) {
        const response = { status: parseInt(process.env.SUCCESS_STATUS_CODE), message: result };
        if (err) {
            console.log(process.env.FIND_ERROR_MESSAGE);
            response.status = parseInt(process.env.SYSTEM_ERROR_STATUS_CODE);
            response.message = err;
        } else if (!result) {
            console.log(process.env.COLLECTION_NOT_FOUND_MESSAGE);
            response.status = parseInt(process.env.CONTENT_NOT_FOUND_STATUS_CODE);
            response.message = {
                "message": process.env.COLLECTION_NOT_FOUND_MESSAGE
            };
        }
        res.status(response.status).json(response.message);
    });
}
/** 
const updateOne = function (req, res) {
    console.log(process.env.UPDATE_ONE_REQUEST_RECEIVED_MESSAGE);
    const mColId = req.params.mColId;
    const newMusicCollection = {
        name: req.body.name,
        dob: req.body.dob,
        album: req.body.album
    };
    MusicCollection.findByIdAndUpdate(mColId, newMusicCollection).exec(function (err, result) {
        const response = { status: parseInt(process.env.SUCCESS_STATUS_CODE), message: result };
        if (err) {
            console.log(process.env.UPDATE_ERROR_MESSAGE);
            response.status = parseInt(process.env.SYSTEM_ERROR_STATUS_CODE);
            response.message = err;
        }
        res.status(response.status).json(response.message);
    });
}*/

const _updateOne = function (req, res, updateMcCallback) {
    console.log("Update One Music Collection Controller");
    const mcId = req.params.mColId;
    MusicCollection.findById(mcId).exec(function (err, mc) {
    const response = { status: parseInt(process.env.SUCCESS_STATUS_CODE), message: mc };
    if (err) {
    console.log("Error finding Music Collection");
    response.status = parseInt(process.env.SYSTEM_ERROR_STATUS_CODE);
    response.message = err;
    } else if (!mc) {
    console.log("Music Collection ID not found");
    response.status = parseInt(process.env.CONTENT_NOT_FOUND_STATUS_CODE);
    response.message = { "message": "Music Collection ID not found" };
    }
    if (response.status !== parseInt(process.env.SUCCESS_STATUS_CODE)) {
    res.status(response.status).json(response.message);
    } else {
        updateMcCallback(req, res, mc, response);
    }
    });
    }
    
const fullUpdateOne = function (req, res) {
    console.log(process.env.UPDATE_ONE_REQUEST_RECEIVED_MESSAGE);
    mcUpdate = function (req, res, mc, response) {
        mc.name = req.body.name;
        mc.dob=req.body.dob;
        mc.album=req.body.album;
    mc.save(function (err, updatedMc) {
    if (err) {
    response.status = parseInt(process.env.SYSTEM_ERROR_STATUS_CODE);
    response.message = err;
    }
    res.status(response.status).json(response.message);
    });
    }
    _updateOne(req, res, mcUpdate);
    }


module.exports = {
    getAll: getAll,
    getOne: getOne,
    addOne: addOne,
    deleteOne: deleteOne,
    fullUpdateOne: fullUpdateOne
}