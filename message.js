'use strict'

const postback = require('./postback.js'),
      brain = require('./brain/brain.js')

exports.handle = function(event) {
  if (['home', '🏠'].includes(event.message.text.toLowerCase())) {
    event.postback = {
      payload: 'home'
    }
    postback.handle(event)
  } else {
    let body = {
      recipient: {
        id: event.sender.id
      },
      message: {
        text: brain.fallback_message
      }
    }
    facebook.sendMessage(body, () => {
      console.log('fallback message sent')
    })
  }
}
