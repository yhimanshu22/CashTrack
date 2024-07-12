
import express from 'express';
import { loginController, registerController } from '../controllers/userController.js';

// Create a router object
const router = express.Router();


// POST || LOGIN USER
router.post('/login', loginController);

// POST || REGISTER USER
router.post('/register', registerController);

export default router;
