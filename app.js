import express from 'express';
const app = express();
import characters from './routes/characters.js';

app.use('/personagens', characters);

export default app;
