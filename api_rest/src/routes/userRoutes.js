import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Remove from application
router.get('/', loginRequired, userController.index); // List users
// router.get('/:id', userController.show); // List user

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
- METHODS FOR THE CONTROLLER -
index -> 'list all users' (GET)
store/create -> create a new user (POST)
delete -> 'delete a user' (DELETE)
show -> 'shows a user' (GET)
update -> 'updates a user' (PATCH OR PUT)
*/
