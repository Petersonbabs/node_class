const transporter = require("./transporter")

const sendVerificationEmail = async (name, email, token)=>{
    console.log('sending email...')
    const emailOptions = {
        to: email,
        from: "Punch " + process.env.email_user,
        subject: "Verify your account",
        sender: "Punch",
        html: `
            <div style="display:flex; flex-direction:column; gap: 1rem;">
                <h2>Hello, ${name}</h2>
                <p>Thanks fo signing up.</p>
                <a href="${process.env.clientDomain}/verify/${token}">Verify email</a>
            </div>
        `
    }
   transporter.sendMail(emailOptions, (err) => {
        console.log(err)
    })
   
    
}

module.exports = sendVerificationEmail