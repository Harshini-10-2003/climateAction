const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Body parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static('public'));

// POST route to handle form submission and send email
app.post('/send-email', (req, res) => {
    const senderEmail = req.body.senderEmail;
    const message = req.body.message;

    // Create a nodemailer transporter using SMTP
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'harshinimurugan321@gmail.com', // Replace with your email
            pass: 'Harshini@2003' // Replace with your email password
        }
    });

    // Email content
    const mailOptions = {
        from: senderEmail,
        to: 'harshinimurugan550@gmail.com', // Replace with your email
        subject: 'New email from GreenLink Community Forum',
        text: message
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
