const mongoose = require(process.env.MONGOOSE);
const Artists = mongoose.model(process.env.ARTIST_SCHEMA_KEY);
const getAll = function (req, res) {
    console.log(process.env.ALBUM_GETALL_REQUEST_RECEIVED_MESSAGE);
    const mColId = req.params.mColId;
    Artists.findById(mColId).select(process.env.ALBUM_SCHEMA_NAME).exec(function (err, result) {
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
    Artists.findById(mColId).select(process.env.ALBUM_SCHEMA_NAME).exec(function (err, result) {
        const response = { status: parseInt(process.env.OK_STATUS_CODE), message: result };
        if (err) {
            console.log(process.env.FIND_ERROR_MESSAGE);
            response.status = parseInt(process.env.SYSTEM_ERROR_STATUS_CODE);
            response.message = err;
        }
        res.status(response.status).json(result.album);
    });
}


module.exports = {
    getAll: getAll,
    getOne: getOne
}
