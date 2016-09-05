'use strict'

var express = require('express'),
  validator = require('./validator.js')
var app = express()

app.set('port', (process.env.PORT || 5000))

app.get('/webhook', validator.validateWebhook)

app.listen(app.get('port'), function() {
  console.log('Node app running on port ', app.get('port'))
})
