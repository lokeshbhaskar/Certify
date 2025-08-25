import express from 'express';
import { protect, adminOnly } from '../middlewares/authMiddleware.js';
import { getTasksByUser, getUsersWithTaskStatuses, submitTask, updateTaskStatus, getMyTasks } from '../controllers/taskControllers.js';
import multer from 'multer';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });  
// GET /api/tasks/user/:userId
// Fetch all tasks for a specific user
router.get('/user/:userId', protect, adminOnly, getTasksByUser);

// PATCH /api/tasks/update/:userId
// Update task status for a specific user
router.patch('/:taskId/status', protect, adminOnly, updateTaskStatus);

router.post('/submit', protect, upload.single("pdf") , submitTask); 

router.get('/admin/user-statuses', protect, adminOnly,getUsersWithTaskStatuses)

// user :> get my task
router.get("/my-tasks", protect, getMyTasks);

export default router;
