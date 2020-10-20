var express = require("express");
var router = express.Router();

var labelController = require("../controllers/labelController");

/* GET labels listing. */
router.get("/:labelId", labelController.showLabel);
router.get("/", labelController.listLabels);
router.post("/", labelController.createLabel);
router.put("/:labelId", labelController.updateLabel);

router.delete("/:labelId", labelController.deleteLabel);

module.exports = router;
