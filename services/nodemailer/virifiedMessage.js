const transporter = require("./transporter")

const sendEmailVerifiedMessage = async (username, email, message, gender, date, time)=>{
    const emailOptions = {
        to: email,
        from: "Punch",
        subject: "Email Verified 😉",
        sender: "Punch",
        html: `
            <div>
                <h2>You email has been verified!</h2>
                <P>Welcome to punch platform</P>
            </div>

        `
    }

    await transporter.sendMail(emailOptions)
}

module.exports = sendEmailVerifiedMessage