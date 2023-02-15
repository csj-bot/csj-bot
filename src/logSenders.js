const handler = require("wax-logger")

module.exports.kickSender = new handler.LogBase("Kick", 6)
module.exports.pingSender = new handler.LogBase("Ping", 7)
module.exports.mainSender = new handler.LogBase("Main", 15)