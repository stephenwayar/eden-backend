const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send(`<h1 style="padding: 30px">Eden App</h1>`)
})

module.exports = router;