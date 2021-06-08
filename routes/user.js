var express = require("express");
var router = express.Router();

var authMiddleware = require("../middlewares/authMiddleware");
var userController = require("../controllers/userController");

router.get("/me", authMiddleware.identifyUser, userController.showMe);

module.exports = router;
