import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import quizRoutes from './routes/quizRoutes.js';
import resourceRoutes from './routes/resourceRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Dynamic CORS to accept localhost:3000, 127.0.0.1:3000, or any development origin
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow all local origins, Postman, server-to-server proxies
      callback(null, true);
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
    exposedHeaders: ['Set-Cookie'],
  })
);

app.use(express.json());
app.use(cookieParser());

// Request logger for real-time debugging
app.use((req, _res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
  next();
});

// Root Route: Friendly Landing for Backend Port 5000
app.get('/', (req, res) => {
  if (req.headers.accept && req.headers.accept.includes('text/html')) {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>QuizNova-AI - Backend API Active</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0b0f19; color: #f1f5f9; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; padding: 20px; }
          .card { background: #111827; border: 1px solid #1f2937; border-radius: 20px; padding: 32px; max-width: 520px; text-align: center; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5); }
          .badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); padding: 4px 12px; border-radius: 9999px; font-size: 11px; font-weight: bold; text-transform: uppercase; margin-bottom: 16px; }
          .dot { width: 8px; height: 8px; background: #10b981; border-radius: 50%; display: inline-block; }
          h1 { margin: 0 0 8px 0; font-size: 24px; font-weight: 800; color: #fff; }
          p { color: #94a3b8; font-size: 13px; line-height: 1.6; margin: 0 0 24px 0; }
          .btn { display: inline-block; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: #fff; text-decoration: none; padding: 12px 24px; border-radius: 12px; font-weight: bold; font-size: 13px; box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.4); transition: transform 0.2s; }
          .btn:hover { transform: scale(1.03); }
          .endpoints { text-align: left; background: #030712; padding: 14px; border-radius: 12px; font-size: 11px; color: #cbd5e1; margin-top: 24px; border: 1px solid #1e293b; }
          .endpoints code { color: #38bdf8; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="badge"><span class="dot"></span> Express Backend API Online</div>
          <h1>QuizNova-AI Backend Server</h1>
          <p>This is the <strong>REST API backend server (Port 5000)</strong>. To view and use the full interactive website with the user interface, click the button below:</p>
          <a href="http://localhost:3000" class="btn">🚀 Open Frontend Website (Port 3000)</a>
          
          <div class="endpoints">
            <strong>Active REST Endpoints:</strong>
            <br>• Health: <code>GET /api/health</code>
            <br>• Authentication: <code>POST /api/auth/*</code>
            <br>• Quizzes & AI: <code>POST /api/quiz/*</code>
          </div>
        </div>
      </body>
      </html>
    `);
  } else {
    res.json({
      status: 'online',
      message: 'QuizNova-AI Backend API is active.',
      frontendUrl: 'http://localhost:3000',
      endpoints: {
        health: '/api/health',
        auth: '/api/auth',
        quiz: '/api/quiz',
      },
    });
  }
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/resources', resourceRoutes);

// Health Check
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'online',
    system: 'AI-Enabled Online & Offline Quiz Platform API',
    timestamp: new Date().toISOString(),
  });
});

// Global 404 Handler
app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Global Error Handler
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error occurred.',
    error: err?.message,
  });
});

app.listen(PORT, () => {
  console.log('=========================================');
  console.log('🚀 Quiz Platform Server running on port ' + PORT);
  console.log('📡 Dynamic CORS Enabled');
  console.log('🔗 Health check: http://localhost:' + PORT + '/api/health');
  console.log('=========================================');
});