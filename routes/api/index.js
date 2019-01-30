const router = require("express").Router();
const charsheetAPI = require("./charsheetAPI");

// charsheet route
router.use("/charsheet", charsheetAPI);

module.exports = router;