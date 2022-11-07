//routes are express routes, have to do as express design
const express = require("express");
const musicCollectionController = require("../controller/musicCollection.controller");
const albumController = require("../controller/album.controller");
const router = express.Router()
const bodyParser = require("body-parser");

//route need method and url
router.route("/musicCollection")
    .get(musicCollectionController.getAll)
    .post(musicCollectionController.addOne);

router.route("/musicCollection/:mColId") // : is a placeholder
    .get(musicCollectionController.getOne)
    .delete(musicCollectionController.deleteOne)
    .put(musicCollectionController.updateOne);

router.route("/musicCollection/:mColId/album") // : is a placeholder
    .get(albumController.getAll)

    router.route("/musicCollection/:mColId/album/:albumName") // : is a placeholder
    .get(albumController.getOne)

router.route("/musicCollection/:mColId/:albumName") // : is a placeholder
    .get(albumController.getOne)

//exporting router function
module.exports = router;
