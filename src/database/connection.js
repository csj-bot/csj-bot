const mongoose = require('mongoose');
require('dotenv').config()
const logger = require("wax-logger");
const { mainSender } = require("../logSenders");

mongoose.connect(process.env.DBURL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (err) => {
    logger.logWarn(mainSender, `err: DataBase NAO conectada: ${err}`, true);
});
db.once('open', () => {
    logger.logInfo(mainSender, "DataBase conectada", true);
});

module.exports = mongoose
