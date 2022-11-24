const mongoose = require(process.env.MONGOOSE);
const Artists = mongoose.model(process.env.ARTIST_SCHEMA_KEY);

const getAll = function (req, res) {
    console.log("Artist Controller GetAll");
    let offset = process.env.DEFAULT_OFFSET;
    let count = process.env.DEFAULT_LIMIT;
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, process.env.MAXIMUM_OFFSET);
    }
    if (req.query && req.query.count) {
        count = parseInt(req.query.count, process.env.MAXIMUM_OFFSET);
    }
    const response = { status: parseInt(process.env.OK_STATUS_CODE), message: "" };
    Artists.find().skip(offset).limit(count).sort([['_id', -1]]).exec()
        .then((result) => {
            res.status(parseInt(process.env.OK_STATUS_CODE)).json(result);
        })
        .catch((err) => {
            console.log(process.env.FIND_ERROR_MESSAGE);
            response.status = parseInt(process.env.SYSTEM_ERROR_STATUS_CODE);
            response.message = err;
        });
}

const getOne = function (req, res) {
    const artistId = req.params.artistId;
    const response = { status: parseInt(process.env.OK_STATUS_CODE), message: "" };
    Artists.findById(artistId).exec()
        .then((result) => {
            res.status(response.status).json(result);
        })
        .catch((err) => {
            console.log(process.env.FIND_ERROR_MESSAGE);
            response.status = parseInt(process.env.SYSTEM_ERROR_STATUS_CODE);
            response.message = err;
        });
}

const addOne = function (req, res) {
    console.log(process.env.ADD_ONE_REQUEST_RECEIVED_MESSAGE)
    const newArtist = {
        name: req.body.name,
        dob: req.body.dob,
        album: req.body.album
    };
    const response = { status: parseInt(process.env.SUCCESS_STATUS_CODE), message: "" };
    Artists.create(newArtist)
        .then((result) => {
            res.status(response.status).json(result);
        })
        .catch((err) => {
            console.log(process.env.ADD_ONE_ERROR_MESSAGE);
            response.status = parseInt(process.env.SYSTEM_ERROR_STATUS_CODE);
            response.message = err;
        });
}

const deleteOne = function (req, res) {
    console.log(process.env.DELETE_REQUEST_RECEIVED_MESSAGE)
    const artistId = req.params.artistId;
    const response = { status: parseInt(process.env.SUCCESS_STATUS_CODE), message: "" };
    Artists.findByIdAndDelete(artistId).exec()
        .then((result) => {
            if (!result) {
                console.log(process.env.COLLECTION_NOT_FOUND_MESSAGE);
                response.status = parseInt(process.env.CONTENT_NOT_FOUND_STATUS_CODE);
                response.message = {
                    "message": process.env.COLLECTION_NOT_FOUND_MESSAGE
                };
            }
            res.status(response.status).json(response.message);
        })
        .catch((err) => {
            console.log(process.env.FIND_ERROR_MESSAGE);
            response.status = parseInt(process.env.SYSTEM_ERROR_STATUS_CODE);
            response.message = err;
        });
}

const _updateOne = function (req, res, updateMcCallback) {
    console.log("Update One Artist Controller");
    const artistId = req.params.artistId;
    const response = { status: parseInt(process.env.SUCCESS_STATUS_CODE), message: "" };
    Artists.findById(artistId).exec()
        .then((result) => {
            if (!result) {
                console.log("Artist ID not found");
                response.status = parseInt(process.env.CONTENT_NOT_FOUND_STATUS_CODE);
                response.message = { "message": "Artist not found" };
                res.status(response.status).json(response.message);
            }
            updateMcCallback(req, res, result, response);
        })
        .catch((err) => {
            console.log("Error finding Artist");
            response.status = parseInt(process.env.SYSTEM_ERROR_STATUS_CODE);
            response.message = err;
            res.status(response.status).json(response.message);
        })
}

const fullUpdateOne = function (req, res) {
    console.log(process.env.UPDATE_ONE_REQUEST_RECEIVED_MESSAGE);
    mcUpdate = function (req, res, mc, response) {
        mc.name = req.body.name;
        mc.dob = req.body.dob;
        mc.album = req.body.album;
        mc.save()
            .then((result) => {
                res.status(response.status).json(response.message);
            })
            .catch((err) => {
                response.status = parseInt(process.env.SYSTEM_ERROR_STATUS_CODE);
                response.message = err;
            });

    };
    _updateOne(req, res, mcUpdate);
}

const partialUpdateOne = function (req, res) {
    console.log("Full Update One Music Collection Controller");
    mcUpdate = function (req, res, mc, response) {
        if (req.body.name) {
            mc.name = req.body.name;
        }
        if (req.body.dob) {
            mc.dob = req.body.dob;
        }
        if (req.body.album) {
            mc.album = req.body.album;
        }
        mc.save()
            .then((result) => {
                res.status(response.status).json(response.message);
            })
            .catch((err) => {
                response.status = parseInt(process.env.SYSTEM_ERROR_STATUS_CODE);
                response.message = err;
            });

    };
    _updateOne(req, res, mcUpdate);
}

module.exports = {
    getAll: getAll,
    getOne: getOne,
    addOne: addOne,
    deleteOne: deleteOne,
    fullUpdateOne: fullUpdateOne,
    partialUpdateOne: partialUpdateOne
}