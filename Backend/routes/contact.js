import { Router } from 'express';
import { contactRateLimit } from '../middleware/contactRateLimit.js';
import { sendContactMessage } from '../controllers/contactController.js';

const router = Router();

// Public route: visitors are not logged in, so no requireAuth here
router.post('/contact', contactRateLimit, sendContactMessage);

export default router;