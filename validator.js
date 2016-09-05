'use strict'

const VERIFY_TOKEN = process.env.VERIFY_TOKEN || ''

exports.validateWebhook = function (request, response) {
  if (request.query['hub.verify_token'] === VERIFY_TOKEN) {
    response.send(request.query['hub.challenge'])
  } else {
    response.send('Error, wrong validation token')
  }
}
