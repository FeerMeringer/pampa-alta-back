import Contact from '../models/Contacts.js';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno desde el archivo .env

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

    // Configura el transporte de correo electrónico
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER, // Obtener el usuario de correo electrónico desde las variables de entorno
        pass: process.env.SMTP_PASS, // Obtener la contraseña de correo electrónico desde las variables de entorno
      },
    });

    // Define el contenido del correo electrónico
    const mailOptions = {
      from: 'fermeringer@gmail.com', // Remitente del correo electrónico
      to: 'fermeringer@gmail.com', // Destinatario del correo electrónico
      subject: 'Nuevo contacto', // Asunto del correo electrónico
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`, // Contenido del correo electrónico
    };

    // Envía el correo electrónico
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Se guardó el contacto y se envió el correo electrónico.' });
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar el contacto.' });
  }
};


export default saveContactMiddleware;


