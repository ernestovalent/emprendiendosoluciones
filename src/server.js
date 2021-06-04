const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 8080

app.use(express.static('src'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'))
})

/* app.get('/dev', (req, res) => {
  res.send('Hello World!')
}) */

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})