// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require('nodemailer')
const sendgrid = require('@sendgrid/mail')

export default async function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'Hey' })
  }

  if (req?.method === 'POST') {
    const { firstName, lastName, email, message } = JSON.parse(req.body)

  
    if (!firstName || !lastName || !email || !message) {
      return  res.status(400).json({ message: 'Sorry please include all fields' })

    }

      
    sendgrid.setApiKey(process.env.MAIL_KEY__MAIN)
    

      const mailOptions = {
        from: 'davidrtm45@gmail.com',
        to: 'mayfieldsdavid950@gmail.com',
        subject: `Hello, it is ${firstName} ${lastName}!`,
        text: `message: ${message}
              email:${email} `
      }
    
    
    sendgrid
      .send(mailOptions)
      .then(() => res.status(201).json({ message: 'Message sent !' }))
      .catch((err) => {
        return res.status(404).json({ message: 'Sorry, something went wrong' })
      }) 
  }
  // res.status(200).json({ name: 'John Doe' })
}
