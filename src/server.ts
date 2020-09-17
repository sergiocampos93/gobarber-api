import 'reflect-metadata';

import express from 'express';
import routes from './routes';

import './database';

const app = express();

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
  res.json({ Message: 'Hello World!' });
});

app.listen(3333, () => {
  console.log('Server is running on port 3333');
});
