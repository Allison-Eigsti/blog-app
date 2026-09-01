require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const connectDB = require('./config/db')
const authRouter = require('./routes/auth-router.js')
const postRouter = require('./routes/post-router.js')
const cors = require('cors')
const logger = require('./middleware/logger')
const serverError = require('./middleware/server-error')
const notFound = require('./middleware/not-found')


connectDB()

app.use(express.json())
app.use(cors())
app.use(logger)

// Routes
app.use('/auth', authRouter)
app.use('/posts', postRouter)

app.use(notFound)
app.use(serverError)

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`)
})