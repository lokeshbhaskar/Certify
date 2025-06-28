import express, { Router } from 'express';
import { getAllUsers } from '../controllers/userControllers.js';
import { adminOnly, protect } from '../middlewares/authMiddleware.js';

const router = express.Router()

router.get('/all-users',protect, adminOnly,getAllUsers );
router.get('/task/user/userId', protect, adminOnly)
export default router;