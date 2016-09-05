'use strict'

const facebook = require('./facebook.js')
const brain = require('./brain/brain.js')

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
    sendMessage(event, message, () => {
      handlePayload(event, messages)
    })
  }
}

function sendMessage(event, message, callback) {
  if (message.text) {
    sendTextMessage(event, message, callback)
  } else if (message.attachment) {
    sendAttachmentMessage(event, message, callback)
  }
}

function sendTextMessage(event, message, callback) {
  getMessageText(event, message, (text) => {
    let body = {
      recipient: {
        id: event.sender.id
      },
      message: {
        text: text
      }
    }
    facebook.sendMessage(body, callback)
  })
}

function getMessageText(event, message, callback) {
  if (message.required_user_fields) {
    facebook.getUserInfo(event.sender.id, message.required_user_fields, (user) => {
      for (let user_field of message.required_user_fields) {
        message.text.replace('${' + user_field + '}', user[user_field])
        callback(message.text)
      }
    })
  } else {
    callback(message.text)
  }
}

function sendAttachmentMessage(event, message, callback) {
  let body = {
    recipient: {
      id: event.sender.id
    },
    message: {
      attachment: message.attachment
    }
  }
  facebook.sendMessage(body, callback)
}
