/**
 * o que é o videoreaction?
 * bot mandar enviar mensagem de elogio quando um vídeo for postado no chat #videos-novos
 */

const db = require('../connection');

const videoreaction_schema = new db.Schema({
    reaction: String
})

const videoreaction = db.model('videoreaction', videoreaction_schema)

module.exports = videoreaction;