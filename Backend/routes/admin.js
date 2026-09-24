import { Router } from 'express';
import { requireAuth } from '../middleware/requireAuth.js';
import { requireAdmin } from '../middleware/requireAdmin.js';
import { createUser } from '../controllers/adminController.js';

const router = Router();

router.post('/admin/users', requireAuth, requireAdmin, createUser);

export default router;