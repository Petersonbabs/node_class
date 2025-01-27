const transporter = require("./transporter")

const sendVerificationEmail = async (name, email, token)=>{
    console.log('sending email...')
    const emailOptions = {
        to: email,
        from: "Punch " + process.env.email_user,
        subject: "Verify your account",
        sender: "Punch",
        html: `
            <div>
                <h2>Hello, ${name}</h2>
                <p>Thanks fo signing up.</p>
                
            </div>
        `
    }
   transporter.sendMail(emailOptions, (err) => {
        console.log(err)
    })
   
    
}

module.exports = sendVerificationEmail