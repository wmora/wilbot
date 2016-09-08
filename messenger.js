'use strict'

const facebook = require('./facebook.js'),
      senderActions = require('./webhook/sender_actions.js')

exports.sendMessage = function(recipient, message, callback) {
  senderActions.typingOn(recipient, () => {
    let isTextMessage = message.text
    let isAttachmentMessage = message.attachment
    let text = isTextMessage ? message.text : message.attachment.payload.text
    let millisPerCharacter = (60 * 1000) / 1500
    let delay = text.length * millisPerCharacter
    let sendMessageFunction = () => {
      if (isTextMessage) {
        sendTextMessage(recipient, message, callback)
      } else if (isAttachmentMessage) {
        sendAttachmentMessage(recipient, message, callback)
      }
    }
    setTimeout(sendMessageFunction, delay)
  })
}

function sendTextMessage(recipient, message, callback) {
  getMessageText(recipient, message, (text) => {
    let body = {
      recipient: recipient,
      message: {
        text: text
      }
    }
    facebook.sendMessage(body, callback)
  })
}

function getMessageText(recipient, message, callback) {
  if (message.required_user_fields) {
    facebook.getUserInfo(recipient.id, message.required_user_fields, (user) => {
      for (let user_field of message.required_user_fields) {
        let placeholder = ' ##' + user_field + '##'
        let replace = new RegExp(placeholder, 'g');
        let replaceText = user[user_field] !== undefined ? ` ${user[user_field]}` : ''
        message.text = message.text.replace(replace, replaceText)
      }
      callback(message.text)
    })
  } else {
    callback(message.text)
  }
}

function sendAttachmentMessage(recipient, message, callback) {
  let body = {
    recipient: recipient,
    message: {
      attachment: message.attachment
    }
  }
  facebook.sendMessage(body, callback)
}
