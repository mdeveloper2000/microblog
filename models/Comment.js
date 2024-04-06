const mongoose = require("mongoose")

const Comment = new mongoose.model('Comment', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        maxlength: 50
    },
    commentary: {
        type: String,
        required: true,
        maxlength: 250
    }
}))

module.exports = Comment