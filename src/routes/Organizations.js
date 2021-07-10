import express from 'express';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const data = require('../../json/Organizations.json');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json(data);
});

export default router;
