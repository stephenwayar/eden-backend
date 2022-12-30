const express = require('express')
const Router = express.Router()

Router.get('/', (req, res) => {
  res.send(`<h1 style="padding: 30px">Eden App</h1>`)
})

Router.get('/products', (req, res) => {
  const data = {
    
  }
})

module.exports = Router;