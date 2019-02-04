const router = require('express').Router()
const controller = require("../../controllers")

router.route("/dnd/classes/:id").get(controller.getClass)
router.route("/dnd/subclasses/:id").get(controller.getSubClass)
router.route("/dnd/race/:id").get(controller.getRace)

module.exports = router;