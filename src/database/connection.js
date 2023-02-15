require('dotenv').config()

const mongoose = require('mongoose')
const logger = require("wax-logger")
const { mainSender } = require("../logSenders")

mongoose.connect(process.env.DBURI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', (err) => {
    logger.logWarn(mainSender, `err: database NãO conectada: ${err}`, true)
})
db.once('open', () => {
    logger.logInfo(mainSender, "database conectada", true)
})

module.exports = mongoose