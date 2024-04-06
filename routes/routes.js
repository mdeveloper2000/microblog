const { Router } = require("express")

const articleController = require("../controllers/articleController")
const commentController = require("../controllers/commentController")

const router = Router()

router.get("/", articleController.index_get)
router.get("/articles", articleController.articles_get)
router.get("/about", articleController.about_get)
router.get("/contact", commentController.contact_get)
router.post("/comment/save", commentController.comment_save)
router.get("*", articleController.not_found)

module.exports = router