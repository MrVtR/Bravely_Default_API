import express from 'express';
const app = express();
import { Characters, Home, Organizations, Villains } from './routes/index.js';

app.use('/', Home);
app.use('/personagens', Characters);
app.use('/organizacoes', Organizations);
app.use('/viloes', Villains);

export default app;
