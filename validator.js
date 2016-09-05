'use strict'

const facebook = require('./facebook.js')

exports.validateWebhook = function(request, response) {
  if (request.query['hub.verify_token'] === facebook.verify_token) {
    response.send(request.query['hub.challenge'])
  } else {
    response.send('Error, wrong validation token')
  }
}
