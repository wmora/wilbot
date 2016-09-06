'use strict'

const postback = require('./postback.js'),
      brain = require('./brain/brain.js'),
      facebook = require('./facebook.js')

exports.handle = function(event) {
  if (event.message.text && ['home', '🏠'].indexOf(event.message.text.toLowerCase()) > -1) {
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
