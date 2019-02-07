const router = require("express").Router();
const localController = require("../../controllers/localController");

router.route("/charsheet")
  .get(localController.findAllCharByUserId)
  .post(localController.charCreate);


router
  .route("/charsheet/:id")
  .get(localController.findCharByUserCharId)
  .put(localController.update)
  .delete(localController.remove);

module.exports = router;