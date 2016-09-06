'use strict'

const postback = require('./postback.js'),
      brain = require('../brain/brain.js'),
      messenger = require('../messenger.js')

exports.handle = function(event) {
  if (event.message.text && ['home', '🏠'].indexOf(event.message.text.toLowerCase()) > -1) {
    event.postback = {
      payload: 'home'
    }
    postback.handle(event)
  } else {
      event.message.text = brain.fallback_message
      messenger.sendMessage(event.sender, event.message, () => {
        console.log('fallback message sent')
      })
  }
}
