const {createTransport} = require("nodemailer")
const dotEnv = require('dotenv')
dotEnv.config()

const transporter = createTransport({
    host: "smtp.gmail.com",
    port: process.env.email_port,
    secure: process.env.email_security,
    service: process.env.email_service,
    auth: {
        user: process.env.email_user,
        pass: process.env.email_password
    }
})

transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

module.exports = transporter