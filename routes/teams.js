var express = require("express");
var router = express.Router();

var teamController = require("../controllers/teamcontroller");
var authMiddleware = require("../middlewares/authMiddleware");

/* GET teams listing. */
router.get("/", authMiddleware.identifyUser, teamController.listTeams);
router.get("/:teamId", authMiddleware.identifyUser, teamController.showTeam);
router.post("/", authMiddleware.identifyUser, teamController.createTeam);
router.put("/:teamId", teamController.updateTeam);

router.delete(
  "/:teamId",
  authMiddleware.identifyUser,
  teamController.deleteTeam
);

module.exports = router;
