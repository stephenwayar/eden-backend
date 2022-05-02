require('dotenv').config()

const indexRoute = require('./routes/index')
const authRoute = require('./routes/auth')
const menRoute = require('./routes/men')
const womenRoute = require('./routes/women')
const kidsRoute = require('./routes/kids')
const usersRoute = require('./routes/users')

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())

app.use('/', indexRoute)
app.use('/', authRoute)
app.use('/', menRoute)
app.use('/', kidsRoute)
app.use('/', womenRoute)
app.use('/', usersRoute)

//MongoDB connect
console.log("Connecting to MongoDB...")
const uri = process.env.MONGODB_URI
mongoose.connect(uri).then(() => {
  console.log("Suceesfully connected to MongoDB")
}).catch(error => {
  console.log("Failed to connect to MongoDB:", error)
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`)
})