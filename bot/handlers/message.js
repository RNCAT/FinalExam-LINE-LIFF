const client = require('../models/line')
const { services } = require('../models/services')
const { basic, pro, business } = require('../models/products')

async function hook(req, res) {
  if (!Array.isArray(req.body.events)) return res.status(500).end()

  if (!req.body.events) return res.status(200).end()

  const [event] = req.body.events
  const { message, replyToken } = event

  if (message.type === 'text') {
    switch (message.text) {
      case 'แสดงบริการ':
        await client.replyMessage(replyToken, services)
        break

      case 'package basic':
        await client.replyMessage(replyToken, basic)
        break

      case 'package pro':
        await client.replyMessage(replyToken, pro)
        break

      case 'package business':
        await client.replyMessage(replyToken, business)
        break

      default:
        await client.replyMessage(replyToken, {
          type: 'text',
          text: 'แมวอ้วนไม่เข้าใจ',
        })

        break
    }
  }

  return res.sendStatus(200)
}

module.exports = { hook }
