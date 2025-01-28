const {createTransport} = require("nodemailer") 
const dotEnv = require("dotenv")
dotEnv.config()

const transporter = createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  service: "gmail",
  auth:{
    user: process.env.email_user,
    pass: process.env.email_password
  }
})

// establish connection
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

module.exports = transporter