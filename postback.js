'use strict'

const facebook = require('./facebook.js'),
      brain = require('./brain/brain.js'),
      senderActions = require('./sender_actions.js')

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
  sendTypingOn(event, message, () => {
    if (message.text) {
      sendTextMessage(event, message, callback)
    } else if (message.attachment) {
      sendAttachmentMessage(event, message, callback)
    }
  })
}

function sendTypingOn(event, message, callback) {
  let text = message.text ? message.text : message.attachment.text
  senderActions.typingOn(event.sender.id, () => {
    let millisPerWord = (60 * 1000) / 600
    let delay = text.split(' ').length * millisPerWord
    setTimeout(callback, delay)
  })
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
        let placeholder = '##' + user_field + '##'
        let replace = new RegExp(placeholder, 'g');
        message.text = message.text.replace(replace, user[user_field])
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
