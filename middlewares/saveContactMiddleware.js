import Contact  from '../models/Contacts.js'; // Asegúrate de ajustar la ruta al archivo donde hayas definido el modelo Contact

const saveContactMiddleware = async (req, res, next) => {
  try {
    const { name, email, message, subject } = req.body;

    const newContact = new Contact({
      name,
      email,
      message,
      subject,
    });

    await newContact.save();

    next();
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar el contacto' });
  }
};

export default saveContactMiddleware;
