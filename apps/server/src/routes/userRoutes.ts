import express from 'express';
import * as userController from '../controllers/userController';
import { jwtCheck, authorize } from '../middleware/auth';

const router = express.Router();

// Public routes
router.post('/sign-up', userController.createUser);

// Private routes
router.use(jwtCheck); // All routes after this will be protected

router.get('/', authorize(['USER', 'ADMIN']), userController.getUsers);
router.get('/:id', authorize(['USER', 'ADMIN']), userController.getUser);

router
  .route('/:id')
  .put(authorize(['ADMIN']), userController.updateUser)
  .delete(authorize(['ADMIN']), userController.deleteUser);

export default router;
