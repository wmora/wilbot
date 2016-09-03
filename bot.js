'use strict'

const express = require('express')
const app = express()

app.set('port', (process.env.PORT || 5000))

app.get('/webhook', function(request, response) {
  response.send("pong")
})

app.listen(app.get('port'), function() {
  console.log('Node app running on port ', app.get('port'))
})
