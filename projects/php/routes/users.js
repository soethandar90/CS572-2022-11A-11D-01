//routes are express routes, have to do as express design
require("dotenv").config();
const express = require(process.env.EXPRESS);
const userController = require("../controller/users.controller");
const router = express.Router();

router.route("/users")
.get(userController.addOne);

router.route("/user/login")
.get(userController.login);

//exporting router function
module.exports = router;
