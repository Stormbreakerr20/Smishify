const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 
const dotenv = require("dotenv")
dotenv.config()

connectToMongo();
const app = express()
const port = process.env.PORT || 5000

app.use(cors()) //supports secure cross-origin requests and data transfers between browsers and servers.
app.use(express.json())

// Available Routes : // api Routes
app.use('/api/notes', require('./routes/notes.js'))

app.listen(port, () => {
  console.log(`Simishify backend listening at http://localhost:${port}`)
})  