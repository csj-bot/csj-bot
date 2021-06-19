const db = require('../connection')

const questionSchema = new db.Schema({
    user: {
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
    }
})

const question = db.model('Questions', questionSchema)

module.exports = question