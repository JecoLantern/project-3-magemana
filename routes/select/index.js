import express from 'express';
//import controller file
import * as characterController from '../../controllers/localController';
// get an instance of express router
const router = express.Router();
router.route('/characters')
     .get(characterController.getCharacters)
     .post(characterController.addCharacter)
     .put(characterController.updateCharacter);
router.route('/:id')
      .get(characterController.getCharacter)
      .delete(characterController.deleteCharacter);
export default router;