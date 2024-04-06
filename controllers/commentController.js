const Comment = require("../models/Comment")

const contact_get = async (req, res) => {
    try {
        res.render('contact', { page: 'Contact' })
    }
    catch(error) {
        console.log(error)
    }
}

const comment_save = async (req, res) => {
    try {               
        const { name, email, commentary } = req.body        
        const comment = await Comment.create({ name, email, commentary })
        comment.save()
        res.status(201).json({ error: false })
    }    
    catch (error) {        
        res.status(400).json({ error: true })
    }
}

module.exports = {
    contact_get,
    comment_save
}