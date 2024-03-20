import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', userController.store);
router.get('/', loginRequired, userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;

/*
- METHODS FOR THE CONTROLLER -
index -> 'list all users' (GET)
store/create -> create a new user (POST)
delete -> 'delete a user' (DELETE)
show -> 'shows a user' (GET)
update -> 'updates a user' (PATCH OR PUT)
*/
