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

exports.sendTypingOn = function(event, message, callback) {
  let text = message.text ? message.text : message.attachment.payload.text
  typingOn(event.sender.id, () => {
    let millisPerWord = (60 * 1000) / 450
    let delay = text.split(' ').length * millisPerWord
    setTimeout(callback, delay)
  })
}

function typingOn(recipientId, callback) {
  let body = {
    recipient: {
      id: recipientId
    },
    sender_action: 'typing_on'
  }
  facebook.sendMessage(body, callback)
}
