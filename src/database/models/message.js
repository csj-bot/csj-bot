const db = require('../connection')

const messageSchema = new db.Schema({
    message: {
        type: String,
        require: true
    },
    data: {
        type: Date,
        require: true
    },
    guildId: {
        type: String,
        required: true
    }
})

const message = db.model('Messages', messageSchema)

module.exports = message