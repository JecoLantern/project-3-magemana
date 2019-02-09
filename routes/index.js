const router = require("express").Router();
const charRoutes = require("./api/charsheetAPI");
const extRoutes = require("./api/extApi");


// API Routes
router.use("/api/c", charRoutes);
router.use("/api/e", extRoutes);
router.use('/auth', require('./auth'))

module.exports = router;
