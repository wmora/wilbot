'use strict'

const facebook = require('./facebook.js')

exports.markAsSeen = function(recipientId) {
  let body = {
    recipient: {
      id: recipientId
    },
    sender_action: 'mark_seen'
  }
  facebook.sendMessage(body, () => {
    console.log('sent mark_seen')
  })
}

exports.typingOn = function(recipientId) {
  let body = {
    recipient: {
      id: recipientId
    },
    sender_action: 'typing_on'
  }
  facebook.sendMessage(body, () => {
    console.log('sent typing_on')
  })
}
