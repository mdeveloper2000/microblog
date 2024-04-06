const Article = require("../models/Article")
const News = require("../models/News")

const index_get = async (req, res) => {
    try {
        const news = await News.find({})
        res.render('index', { page: 'Home', news })
    }
    catch(error) {
        console.log(error)
    }
}

const articles_get = async (req, res) => {
    const articles = await Article.find({})    
    try {
        res.render('articles', { page: 'Articles', articles })
    }
    catch(error) {
        console.log(error)
    }
}

const about_get = async (req, res) => {
    const about = process.env.ABOUT
    try {
        res.render('about', { page: 'About', about })
    }
    catch(error) {
        console.log(error)
    }
}

const not_found = async (req, res) => {
    try {
        res.render('404', { page: '404'})
    }
    catch(error) {
        console.log(error)
    }
}

module.exports = {
    index_get,
    articles_get,
    about_get,
    not_found
}