import { Router } from 'express';
import { requireAuth } from '../middleware/requireAuth.js';
import { getProfile, updateProfile } from '../controllers/profileController.js';

const router = Router();

router.get('/profile', requireAuth, getProfile);
router.patch('/profile', requireAuth, updateProfile);

export default router;