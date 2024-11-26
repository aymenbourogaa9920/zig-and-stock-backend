const nodemailer = require("nodemailer");

const sendMail = async (options) => {
  console.log("options",options);
  
  // Configure the Mailgun SMTP transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.mailgun.org', // Mailgun's SMTP host
    port: 587,               // TLS Port
    secure: false,           // Use true for port 465 (SSL), false for other ports
    auth: {
      user: 'postmaster@sandbox0d5fe5276c4247a1aebeffd39c27f07a.mailgun.org', // Replace with Mailgun's SMTP username
      pass: '6356cac95daacb678c13d5153f8aebdd-6df690bb-e2be42f5', // Replace with Mailgun's SMTP password
    },
  });

  const mailOptions = {
    from: 'postmaster@sandbox0d5fe5276c4247a1aebeffd39c27f07a.mailgun.org', // Replace with a verified sender email
    to: options.email,             // Dynamic recipient
    subject: options.subject,   // Dynamic subject
    text: options.message,         // Dynamic plain text
  };

  await transporter.sendMail(mailOptions);
  console.log("Email sent successfully!");
};

module.exports = sendMail;
