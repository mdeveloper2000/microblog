const express = require("express")
const routes = require("./routes/routes")
const mongoose = require("mongoose")
const app = express()
require("dotenv").config()

app.use("/css", express.static(__dirname + "/node_modules/chota/dist"))
app.use(express.static("public"))
app.use(express.static("public/css"))
app.use(express.static("public/js"))
app.use(express.json())
app.set("view engine", "ejs")
mongoose.set("strictQuery", true)
app.use(routes)

const database = "mongodb://127.0.0.1:27017/microblog"
mongoose.connect(database)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))