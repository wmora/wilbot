'use strict'

const facebook = require('./facebook.js')

exports.markAsSeen = function(recipientId, callback) {
  let body = {
    recipient: {
      id: recipientId
    },
    sender_action: 'mark_seen'
  }
  facebook.sendMessage(body, callback)
}
