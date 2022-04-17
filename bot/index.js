const express = require('express')
const cors = require('cors')
const { middleware } = require('@line/bot-sdk')

const config = require('./config')
const messageHandler = require('./handlers/message')

const app = express()

app.use(cors())
app.use(middleware(config.lineConfig))
app.use(express.json())

app.post('/message', messageHandler.hook)

app.listen(config.port)
