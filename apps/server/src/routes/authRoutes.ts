import express from 'express';
import * as authController from '../controllers/authController';

const router = express.Router();

router.post('/signup', authController.signupUser);
router.post('/login', authController.loginUser);

export default router;
