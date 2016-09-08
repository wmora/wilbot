'use strict'

const facebook = require('./facebook.js')

exports.markAsSeen = function(recipient, callback) {
  let body = {
    recipient: recipient,
    sender_action: 'mark_seen'
  }
  facebook.sendMessage(body, callback)
}

exports.typingOn = function(recipient, callback) {
  let body = {
    recipient: recipient,
    sender_action: 'typing_on'
  }
  facebook.sendMessage(body, callback)
}
