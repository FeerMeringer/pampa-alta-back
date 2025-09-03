import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const saveContactMiddleware = async (req, res) => {
  try {
    const { name, email, message, subject } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,    
      port: Number(process.env.SMTP_PORT), 
      auth: {
        user: process.env.SMTP_USER,  
        pass: process.env.SMTP_PASS   
      }
    });

   const mailOptions = {
  from: 'fermeringer@gmail.com',          // ya verificado en Brevo
  to: 'fermeringer@gmail.com',
  subject: `Nuevo contacto: ${subject}`,
  text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`
};


    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: '✅ Email enviado correctamente.' });
  } catch (error) {
    console.error('Error enviando email:', error);
    res.status(500).json({ error: '❌ Error al enviar el correo electrónico.' });
  }
};

export default saveContactMiddleware;





