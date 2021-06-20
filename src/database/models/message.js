const db = require('../connection')

const messageSchema = new db.Schema({
    message: {
        type: String,
        require: true
    },
    date: {
        type: Number,
        require: true
    },
    guildId: {
        type: String,
        required: true
    }
})

const message = db.model('Messages', messageSchema)

module.exports = message