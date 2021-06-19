const handler = require('./handler.js')
var configs = {};

module.exports = (message) => {
  handler.messageReceived(message);
}