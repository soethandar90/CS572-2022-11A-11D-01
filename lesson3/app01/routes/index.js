//routes are express routes, have to do as express design
const express = require("express");
const gamesController =  require("../controller/games.controller");
const router = express.Router()

//route need method and url
router.route("/games")
    .get(gamesController.getAll);

router.route("/games/:gameId") // : is a placeholder
    .get(gamesController.getOne);

//exporting router function
module.exports = router;
