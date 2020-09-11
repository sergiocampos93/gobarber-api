import express from 'express';
// src/server.ts
import routes from './routes';

const app = express();

app.get('/', (req, res) => {
  res.json({ Message: 'Hello World!' });
});

app.listen(3333, () => {
  console.log('Server is running on port 3333');
});
