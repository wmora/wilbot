'use strict'

var express = require('express')
var app = express()

const VERIFY_TOKEN = process.env.VERIFY_TOKEN || ''

app.set('port', (process.env.PORT || 5000))

app.get('/webhook', function(request, response) {
  if (request.query['hub.verify_token'] === VERIFY_TOKEN) {
    response.send(request.query['hub.challenge'])
  } else {
    response.send('Error, wrong validation token')
  }
})

app.listen(app.get('port'), function() {
  console.log('Node app running on port ', app.get('port'))
})
