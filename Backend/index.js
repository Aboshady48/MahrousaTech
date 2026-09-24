import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import protectedRoutes from './routes/protected.js';
import profileRoutes from './routes/profile.js';
import { requestLogger } from './middleware/requestLogger.js';
import { errorHandler } from './middleware/errorHandler.js';
import adminRoutes from './routes/admin.js';


const app = express();

app.use(cors({ origin: process.env.CLIENT_ORIGIN?.split(',') || '*' }));
app.use(express.json());
app.use(requestLogger);

app.get('/health', (req, res) => res.json({ ok: true }));

app.use('/api', protectedRoutes);
app.use('/api', profileRoutes);
app.use('/api', adminRoutes);

app.use(errorHandler);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));