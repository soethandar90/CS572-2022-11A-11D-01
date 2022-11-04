require("../require/index");
const express = require("express");
const gamesController =  require(process.env.CONTROLLER_PATH);
const router = express.Router()

router.route(process.env.GAMES_ALL_URL)
    .get(gamesController.getAll);

router.route(process.env.GAMES_ALL_URL+process.env.GAME_KEY1)
    .get(gamesController.getOne);

module.exports = router;
