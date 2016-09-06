'use strict'

const facebook = require('../facebook.js'),
      brain = require('../brain/brain.js'),
      messenger = require('../messenger.js')

exports.handle = function(event) {
  let payload = event.postback.payload
  if (brain.messages[payload]) {
    let payloadClone = JSON.parse(JSON.stringify(brain.messages[payload]))
    handlePayload(event, payloadClone)
  }
}

function handlePayload(event, messages) {
  let message = messages.shift()

  if (message !== undefined) {
    messenger.sendMessage(event.sender, message, () => {
      handlePayload(event, messages)
    })
  }
}
