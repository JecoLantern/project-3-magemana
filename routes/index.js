<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const auth = require('./auth')


=======
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/charsheetAPI");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});
>>>>>>> ba0b32acbe70aa0350cc8dd42e4d45affa73ec46

module.exports = router;