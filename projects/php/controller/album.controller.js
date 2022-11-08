const mongoose = require(process.env.MONGOOSE);
const MusicCollection = mongoose.model(process.env.MUSIC_COLLECTION_SCHEMA_KEY);
const getAll = function (req, res) {
    console.log(process.env.ALBUM_GETALL_REQUEST_RECEIVED_MESSAGE);
    const mColId = req.params.mColId;
    MusicCollection.findById(mColId).select(process.env.ALBUM_SCHEMA_NAME).exec(function (err, result) {
        const response = { status: parseInt(process.env.OK_STATUS_CODE), message: result };
        if (err) {
            console.log(process.env.FIND_ERROR_MESSAGE);
            response.status = parseInt(process.env.SYSTEM_ERROR_STATUS_CODE);
            response.message = err;
        }
        res.status(response.status).json(result.album);
    });

}

const getOne = function (req, res) {
    console.log(process.env.ALBUM_GETONE_REQUEST_RECEIVED_MESSAGE);
    const mColId = req.params.mColId;
    const albumId = req.params.albumId;
    console.log(albumId);
    //MusicCollection.findById(mColId).findOne({"album._id":albumId}).exec(function (err, result) {
    //    console.log(result);
    //    res.status(200).json(result);
    //});
    MusicCollection.findById(mColId).select(process.env.ALBUM_SCHEMA_NAME).exec(function (err, result) {
        const response = { status: parseInt(process.env.OK_STATUS_CODE), message: result };
        if (err) {
            console.log(process.env.FIND_ERROR_MESSAGE);
            response.status = parseInt(process.env.SYSTEM_ERROR_STATUS_CODE);
            response.message = err;
        }
        res.status(response.status).json(result.album);
    });
}

const _updateOne = function (req, res, albumUpdateCallback) {
    console.log("Update One Album Controller");
    const mcId = req.params.mColId;
    MusicCollection.findById(mcId).select("album").exec(function (err, mc) {
        console.log("Found album ", mc.album, " for Music Collection ", mc);
        const response = { status: 204, message: mc };
        if (err) {
            console.log("Error Finding Music Collection");
            response.status = parseInt(process.env.SYSTEM_ERROR_STATUS_CODE);
            response.message = err;
        } else if (!mc) {
            console.log("Music Collection with given ID not found");
            response.status = 404;
            response.message = { message: "Music Collection with given ID not found" };
        }
        if (response.status !== 204) {
            res.status(response.status).json(response.message);
        }
        albumUpdateCallback(req, res, mc);
    });
}

const _fullPublisherUpdate = function (req, res, mc) {
    mc.album.name = req.body.name;
    mc.album.year = req.body.year;
    mc.album.noOfSongs = req.body.noOfSongs;
    mc.save(function (err, updatedMusicCOllection) {
        const response = {
            status: 204,
            message: updatedMusicCOllection.album
        };
        if (err) {
            response.status = 500;
            response.message = err;
        }
        res.status(response.status).json(response.message);
    });
}

const _partialPublisherUpdate = function (req, res, mc) {
    if (req.body.name) {
        mc.album.name = req.body.name;
    }
    if (req.body.year) {
        mc.album.year = req.body.year;
    }
    if (req.body.noOfSongs) {
        mc.album.noOfSongs = req.body.noOfSongs;
    }
    mc.save(function (err, updatedMc) {
        const response = { status: 204, message: updatedMc.album };
        if (err) {
            response.status = 500;
            response.message = err;
        }
        res.status(response.status).json(response.message);
    });
}

const fullUpdateOne = function (req, res) {
    console.log("Full Update One Album", req.body);
    _updateOne(req, res, _fullPublisherUpdate);
}
const partialUpdateOne = function (req, res) {
    console.log("Partial Update One Album", req.body);
    _updateOne(req, res, _partialPublisherUpdate);
}


module.exports = {
    getAll: getAll,
    getOne: getOne,
    fullUpdateOne: fullUpdateOne,
    partialUpdateOne: partialUpdateOne
}
