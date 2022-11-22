//routes are express routes, have to do as express design
require("dotenv").config();
const express = require(process.env.EXPRESS);
const artistController = require(process.env.ARTIST_CONTROLLER_PATH);
//const userController = require("../controller/users.controller");
//const albumController = require(process.env.ALBUM_CONTROLLER_PATH);
const artistsRouter = require("./artists");
const usersRouter = require("./users");
const router = express.Router();

//router.use("/artists", authenticationController.authenticate, gamesRouter);
router.use("/artists", artistsRouter);
//router.use("api/users", usersRouter);

//routes need method and url
// router.route(process.env.ARTIST_ROUTE)
//     .get(artistController.getAll)
//     .post(artistController.addOne);

module.exports = router;
