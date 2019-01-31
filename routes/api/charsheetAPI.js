const router = require("express").Router();
const charsheetController = require("../../controllers/index");

router.route("/charsheet")
  .get(charsheetController.findAll)
  .post(charsheetController.create);


router
  .route("/charsheet/:id")
  .get(charsheetController.findById)
  .put(charsheetController.update)
  .delete(charsheetController.remove);

module.exports = router;