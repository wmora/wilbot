'use strict'

const express = require('express'),
  bodyParser = require('body-parser'),
  validator = require('./validator.js'),
  postback = require('./postback.js'),
  senderActions = require('./sender_actions.js')
const app = express()

app.use(bodyParser.json())
app.set('port', (process.env.PORT || 5000))

app.get('/webhook', validator.validateWebhook)

/*
 *  It is extremely important to return a 200 OK HTTP as fast as possible.
 *  Facebook will wait for a 200 before sending you the next message. In high
 *  volume bots, a delay in returning a 200 can cause significant delays in
 *  Facebook delivering messages to your webhook.
 */
app.post('/webhook', function(request, response) {
  let body = request.body

  if (body && body.object === 'page' && body.entry) {
    senderActions.markAsSeen(event.sender.id)
    for (let entry of body.entry) {
      for (let event of entry.messaging) {
        if (event.postback) {
          postback.handle(event)
        }
      }
    }
    response.sendStatus(200)
  } else {
    response.sendStatus(400)
  }
})

app.listen(app.get('port'), function() {
  console.log('Node app running on port ', app.get('port'))
})
