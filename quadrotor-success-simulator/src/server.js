import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { main as runDemo } from './index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/demo', (req, res) => {
  const analysis = runDemo();
  res.json({ ok: true, analysis });
});

app.listen(PORT, () => console.log(`Dev server listening at http://localhost:${PORT}`));
