// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config()
// }
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const server = express()

// Middleware Plugins
server.use(bodyParser.json())
server.use(cors())

server.use((error, req, res, next) => {
  res.json({
    error: {
      message: error.message
    }
  })
})

server.use([
  require('./routes/announcements'),
])

server.listen(8000, (error) => {
  if (error) {
    console.error('Error starting', error)
  }
  else {
    console.log('Server started at http://localhost:8000/')
  }
})