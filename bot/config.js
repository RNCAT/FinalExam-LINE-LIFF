require('dotenv').config()

const config = {
  port: process.env.PORT || 3001,
  lineConfig: {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET,
  },
  liffProductsId: process.env.LIFF_PRODUCTS_ID,
  liffContactId: process.env.LIFF_CONTACT_ID,
}

module.exports = config
