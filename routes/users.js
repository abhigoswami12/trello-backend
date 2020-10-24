var express = require("express");
var router = express.Router();

var userController = require("../controllers/userController");
var authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

/* GET users listing. */

router.get("/", userController.listUsers);

router.get("/logout", userController.logout);

router.get("/:userId", userController.showUser);

router.post("/signup", userController.createUser);

router.put("/:userId", userController.updateUser);

router.delete("/:userId", userController.deleteUser);

router.post("/login", authController.loginUser);

module.exports = router;
