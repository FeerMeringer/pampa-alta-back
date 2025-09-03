import express from 'express';
import contactRouter from './contacts.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Servidor funcionando ✅' });
});

router.use('/contacts', contactRouter);

export default router;
