var express = require("express");
var router = express.Router();

var teamController = require("../controllers/teamcontroller");
var authMiddleware = require("../middlewares/authMiddleware");

/* GET teams listing. */
router.get("/:teamId", authMiddleware.identifyUser, teamController.showTeam);
router.get("/", authMiddleware.identifyUser, teamController.listTeams);
router.post("/", authMiddleware.identifyUser, teamController.createTeam);
router.put("/:teamId", teamController.updateTeam);

router.delete("/:teamId", teamController.deleteTeam);

module.exports = router;
