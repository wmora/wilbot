'use strict'

const facebook = require('./facebook.js'),
      senderActions = require('./webhook/sender_actions.js')

exports.sendMessage = function(recipient, message, callback) {
  senderActions.sendTypingOn(recipient, message, () => {
    if (message.text) {
      sendTextMessage(recipient, message, callback)
    } else if (message.attachment) {
      sendAttachmentMessage(recipient, message, callback)
    }
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
        console.log(`received ${user}`)
        console.log(`replacing ${user_field} with ${user[user_field]}`)
        let placeholder = ' ##' + user_field + '##'
        let replace = new RegExp(placeholder, 'g');
        let replaceText = user[user_field] !== undefined ? ` ${user[user_field]}` : ''
        message.text = message.text.replace(replace, replaceText)
        callback(message.text)
      }
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
