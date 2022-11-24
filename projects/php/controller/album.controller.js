const mongoose = require(process.env.MONGOOSE);
const Artists = mongoose.model(process.env.ARTIST_SCHEMA_KEY);
const getAll = function (req, res) {
    console.log(process.env.ALBUM_GETALL_REQUEST_RECEIVED_MESSAGE);
    const artistId = req.params.artistId;
    const response = { status: parseInt(process.env.OK_STATUS_CODE), message: "" };
    Artists.findById(artistId).select(process.env.ALBUM_SCHEMA_NAME).exec()
        .then((result) => {
            res.status(response.status).json(result.album);
        })
        .catch((err) => {
            console.log(process.env.FIND_ERROR_MESSAGE);
            response.status = parseInt(process.env.SYSTEM_ERROR_STATUS_CODE);
            response.message = err;
        });
}

const getOne = function (req, res) {
    console.log(process.env.ALBUM_GETONE_REQUEST_RECEIVED_MESSAGE);
    const artistId = req.params.artistId;
    const albumId = req.params.albumId;
    console.log(albumId);
    const response = { status: parseInt(process.env.OK_STATUS_CODE), message: "" };
    Artists.findById(artistId).select(process.env.ALBUM_SCHEMA_NAME).select(albumId).exec()
        .then((result) => {
            res.status(response.status).json(result);
        })
        .catch((err) => {
            console.log(process.env.FIND_ERROR_MESSAGE);
            response.status = parseInt(process.env.SYSTEM_ERROR_STATUS_CODE);
            response.message = err;
        });
}


module.exports = {
    getAll: getAll,
    getOne: getOne
}
