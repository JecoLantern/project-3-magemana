const router = require('express').Router()
const {externalcontroller} = require("../../controllers")

router.route("/dnd/classes/:id").get(externalcontroller.getClass)
router.route("/dnd/race/:id").get(externalcontroller.getRace)


module.exports = router;