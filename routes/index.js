const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/charsheetAPI");

// API Routes
router.use("/api", apiRoutes);
router.use('/auth', require('./auth'))

module.exports = router;
