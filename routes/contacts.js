import express from 'express'
import validator from '../middlewares/validator.js'
import schema from '../schemas/Contact.js'
import saveContactMiddleware from '../middlewares/saveContactMiddleware.js';

const router = express.Router();
router.post('/', validator(schema), saveContactMiddleware, (req, res) => {
    // Controlador de la ruta para procesar la solicitud después de que los datos del contacto se hayan guardado
    res.json({ message: 'Contacto guardado exitosamente' });
  });

export default router;
