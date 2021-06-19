const prefix = '!!';

const client = require('../index.js')
const handler = require('./handler.js')
var configs = {};

module.exports = (message) => {
  handler.messageReceived(client, message);
}