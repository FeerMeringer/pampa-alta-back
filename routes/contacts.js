import express from 'express'
import validator from '../middlewares/validator.js'
import schema from '../schemas/Contact.js'
import saveContactMiddleware from '../middlewares/saveContactMiddleware.js';

const router = express.Router();
router.post('/', validator(schema))

export default router;
