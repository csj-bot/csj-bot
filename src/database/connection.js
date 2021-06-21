const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.DBURL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', function(err) {
    const logger = require("wax-logger");
    const { mainSender } = require("../logSenders");
    logger.logWarn(mainSender, `err: DataBase NAO conectada: ${err}`, true);
});
db.once('open', function() {
    const logger = require("wax-logger");
    const { mainSender } = require("../logSenders");
    logger.logInfo(mainSender, "DataBase conectada", true);
});

module.exports = mongoose
