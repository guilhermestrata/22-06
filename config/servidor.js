const express = require("express")

const app = express()

const porta = process.env.PORT || 3030 

app.use(express.static('assets'))

app.use(express.urlencoded({extended:false}))

module.exports = {app, porta}