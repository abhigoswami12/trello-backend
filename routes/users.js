var express = require("express");
var router = express.Router();

var userController = require("../controllers/userController");
var authController = require("../controllers/authController");

/* GET users listing. */
router.get("/:userId", userController.showUser);
router.get("/", userController.listUsers);
router.post("/signup", userController.createUser);
router.put("/:userId", userController.updateUser);

router.delete("/:userId", userController.deleteUser);

router.post("/login", authController.loginUser);

module.exports = router;
