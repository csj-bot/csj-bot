const db = require('../connection')

const questionSchema = new db.Schema({
    userId: {
        type: String,
        require: true
    },
    question: {
        type: String,
        require: true
    },
    data: {
        type: Date,
        default: Date.now
    },
    guildId: {
        type: String,
        required: true
    }
})

const question = db.model('Questions', questionSchema)

module.exports = question