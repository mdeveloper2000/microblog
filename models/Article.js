const mongoose = require("mongoose")

const Article = new mongoose.model('Article', new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    }
}))

module.exports = Article