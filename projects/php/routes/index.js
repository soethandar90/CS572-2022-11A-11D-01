//routes are express routes, have to do as express design
require("dotenv").config();
const express = require(process.env.EXPRESS);
const musicCollectionController = require(process.env.MUSIC_COLLECTION_CONTROLLER_PATH);
const albumController = require(process.env.ALBUM_CONTROLLER_PATH);
const router = express.Router();

//routes need method and url
router.route(process.env.MUSIC_COLLECTION_ROUTE)
    .get(musicCollectionController.getAll)
    .post(musicCollectionController.addOne);

router.route(process.env.MUSIC_COLLECTION_BYID_ROUTE)
    .get(musicCollectionController.getOne)
    .delete(musicCollectionController.deleteOne)
    .put(musicCollectionController.fullUpdateOne)
    .patch(musicCollectionController.partialUpdateOne);

router.route(process.env.MUSIC_COLLECTION_BYID_ALBUM_ROUTE)
    .get(albumController.getAll)
    .put(albumController.fullUpdateOne)
    .patch(albumController.partialUpdateOne);

router.route(process.env.MUSIC_COLLECTION_BYID_ALBUM_BYAID_ROUTE)
    .get(albumController.getOne)

//exporting router function
module.exports = router;
