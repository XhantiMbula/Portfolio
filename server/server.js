const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve your static HTML files (optional, if hosting the form from the same server)
app.use(express.static('public')); // Put your HTML/CSS in a 'public' folder

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail', // Using Gmail as an example
    auth: {
        user: 'xhantimbula7@gmail.com', // Your Gmail address
        pass: 'Maludwe1*'     // Your Gmail App Password (not regular password)
    }
});

// Handle form submission
app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
        from: email,                  // Sender's email (visitor's email)
        to: 'xhantimbula7@gmail.com', // Your email
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Something went wrong.');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Message sent successfully!');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});