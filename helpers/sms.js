const { client } = require('../utils/twilio')

const sender = process.env.TWILIO_PHONE_NUMBER

const sendSMS = async (message, recipient) => {
  const res = await client.messages.create({
    body: message,
    from: sender,
    to: '+' + recipient
  })

  return res
}

module.exports = { sendSMS }