const express = require('express')
const app = express()
const port = 3000

app.get('/tic-tic', (req, res) => {
  res.send('Hello World! xin chao hoang anh dung')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})