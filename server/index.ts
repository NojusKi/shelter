import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import xssClean from 'xss-clean';
import rateLimit from 'express-rate-limit';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/auth.js';
import petRoutes from './routes/pets.js';
import adoptionRoutes from './routes/adoptions.js';
import contactRoutes from './routes/contact.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.FRONTEND_URL 
    : process.env.VITE_API_URL,
  credentials: true
}));

app.use(helmet());
app.use(xssClean());
if (process.env.NODE_ENV !== 'development') {
  app.use(rateLimit({
    windowMs: 15*60*1000,
    max: 100
  }));
}

app.use(express.json({ limit: '10kb'}));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../../dist/client')));

// Serve static files, including pet-tips.json
app.use('/api', express.static(path.join(__dirname, '../public')));

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/adoptions', adoptionRoutes);
app.use('/api/contact', contactRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Handle React routing, return all requests to React app except API routes
app.get(/^(?!\/api\/).*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/client/index.html'));
});

// Global error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err.stack);

  const errorResponse = {
    status: 'error',
    message: err.message || "internal server error",
    ...(process.env.NODE_ENV === 'development' && {stack: err.stack})
  };
  res.status(err.status || 500).json(errorResponse);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

process.on('unhandledRejection', (err: Error) => {
  console.error('Unhandled Rejection!');
  console.error(err.name, err.message);
  process.exit(1);
});