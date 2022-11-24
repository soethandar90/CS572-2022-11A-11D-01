//routes are express routes, have to do as express design
require("dotenv").config();
const express = require(process.env.EXPRESS);
const artistController = require(process.env.ARTIST_CONTROLLER_PATH);
//const authenticationController = require("../controller/authentication.controller");
const albumController = require(process.env.ALBUM_CONTROLLER_PATH);
const userController = require("../controller/users.controller");
const router = express.Router();

//routes need method and url
router.route(process.env.ARTIST_ROUTE)
    .get(artistController.getAll)
    .post(artistController.addOne);

router.route(process.env.ARTIST_ROUTE_MULTI)
    .post(artistController.addAll);

router.route(process.env.ARTIST_BYID_ROUTE)///artists/:artistId
    //.get(authenticationController.authenticate, artistController.getOne)
    .get(artistController.getOne)
    .delete(artistController.deleteOne)
    .put(artistController.fullUpdateOne)
    .patch(artistController.partialUpdateOne);

router.route(process.env.ARTIST_BYID_ALBUM_ROUTE)
    .get(albumController.getAll)

router.route(process.env.ARTIST_BYID_ALBUM_BYAID_ROUTE)
    .get(albumController.getOne)

router.route("/user/register")
    .post(userController.register);

router.route("/user/login")
    .post(userController.login);

//exporting router function
module.exports = router;
