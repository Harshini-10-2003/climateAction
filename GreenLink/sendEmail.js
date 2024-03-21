// sendEmail.js

const nodemailer = require('nodemailer');

async function sendEmail(senderEmail, message) {
    try {
        // Configure transporter (SMTP)
        let transporter = nodemailer.createTransport({
            // Configure your email service provider here
            service: 'Gmail',
            auth: {
                user: 'harshinimurugan550@gmail.com', // Your email address
                pass: 'Harshini@2003'   // Your email password
            }
        });

        // Define email options
        let mailOptions = {
            from: '21it15@kcgcollege.com', // Sender address
            to: 'harshinimurugan321@gmail.com',  // Recipient address
            subject: 'New Email from GreenLink Community', // Email subject
            text: `From: ${senderEmail}\n\n${message}`    // Email body with sender's email
        };

        // Send email
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
}

module.exports = sendEmail;
