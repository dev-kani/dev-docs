const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

// connecting to MongoDB using mongoose where setup in config/db.js
connectDB()

const app = express()

// app.use('/', express.static(path.join(__dirname, 'public')))
// app.use(express.static('public'))

// this is for sending data in the body of the request
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// overwriting default express error Handler
app.use(errorHandler)

app.listen(port, () => console.log(`Server running ${port}`))