const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_password',
  },
});

// Email sending route
app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    await transporter.sendMail({
      from: 'your_email@gmail.com',
      to,
      subject,
      text,
    });
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));