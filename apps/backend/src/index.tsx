import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
const PORT = 3001;
// const API_KEY = process.env.OPENROUTER_API_KEY!;
const API_KEY = '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';

app.use(cors());
app.use(express.json());

app.post('/chat', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'localhost:5200',
        'X-Title': 'YourAppName'
      },
      body: JSON.stringify({
        model: 'deepseek/deepseek-chat-v3-0324:free',
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    const data = await response.json();
    res.json(data);
  } catch (err: any) {
    res.status(500).json({ error: err.toString() });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
