const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'guryash07@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'guryash07@gmail.com',
        subject: 'Hope to see you again!',
        text: `Goodbye ${name}. Let me know if there is anything to get there upto you.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}
