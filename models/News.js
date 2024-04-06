const mongoose = require("mongoose")

const News = new mongoose.model('News', new mongoose.Schema({
    content: {
        type: String,
        required: true
    }
}))

module.exports = News