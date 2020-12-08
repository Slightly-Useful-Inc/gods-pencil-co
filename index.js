const express = require("express")
const port = 80

const app = express()


app.use(express.static('public'))
