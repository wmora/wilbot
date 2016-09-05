'use strict'

var express = require('express'),
  validator = require('./validator.js'),
  postback = require('./postback.js')
var app = express()

app.set('port', (process.env.PORT || 5000))

app.get('/webhook', validator.validateWebhook)

/*
 *  It is extremely important to return a 200 OK HTTP as fast as possible.
 *  Facebook will wait for a 200 before sending you the next message. In high
 *  volume bots, a delay in returning a 200 can cause significant delays in
 *  Facebook delivering messages to your webhook.
 */
app.post('/webhook', function(request, response) {
  const body = request.body
  if (body.object === 'page') {
    for (let entry of body.entry) {
      var id = entry.id
      var time = entry.time
      for (let event of entry.messaging) {
        if (event.postback) {
          postback.handle(event)
        }
      }
    }
    response.send(200)
  }
})

app.listen(app.get('port'), function() {
  console.log('Node app running on port ', app.get('port'))
})
