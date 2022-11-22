const mongoose = require(process.env.MONGOOSE);
const Artists = mongoose.model(process.env.ARTIST_SCHEMA_KEY);
const getAll = function (req, res) {
    console.log(process.env.ALBUM_GETALL_REQUEST_RECEIVED_MESSAGE);
    const artistId = req.params.artistId;
    Artists.findById(artistId).select(process.env.ALBUM_SCHEMA_NAME).exec(function (err, result) {
        const response = { status: parseInt(process.env.OK_STATUS_CODE), message: result };      
        if (err) {           
            console.log(process.env.FIND_ERROR_MESSAGE);
            response.status = parseInt(process.env.SYSTEM_ERROR_STATUS_CODE);
            response.message = err;
            console.log("Inside album getall2");
        }
        console.log("Result is");
        console.log(result);
        res.status(response.status).json(result.album);
    });

}

const getOne = function (req, res) {
    console.log(process.env.ALBUM_GETONE_REQUEST_RECEIVED_MESSAGE);
    const artistId = req.params.artistId;
    const albumId = req.params.albumId;
    console.log(albumId);
    //MusicCollection.findById(mColId).findOne({"album._id":albumId}).exec(function (err, result) {
    //    console.log(result);
    //    res.status(200).json(result);
    //});
    Artists.findById(artistId).select(process.env.ALBUM_SCHEMA_NAME).select(albumId).exec(function (err, result) {
        const response = { status: parseInt(process.env.OK_STATUS_CODE), message: result };
        if (err) {
            console.log(process.env.FIND_ERROR_MESSAGE);
            response.status = parseInt(process.env.SYSTEM_ERROR_STATUS_CODE);
            response.message = err;
        }
        res.status(response.status).json(result);
    });
}


module.exports = {
    getAll: getAll,
    getOne: getOne
}
