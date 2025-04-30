const express = require("express")
const path = require("path")

const app = express()
app.use(express.static('public'))
app.use('/', (req, res) => {
  res.sendFile(__dirname  + '/views/index.html')
})

app.listen(3001, console.log("3001"))
