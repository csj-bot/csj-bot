const logger = require("wax-logger");
const { mainSender } = require("../logSenders");

module.exports = async () => {
    logger.logInfo(mainSender, "Bot Iniciado", true);
}