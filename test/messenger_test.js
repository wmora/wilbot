'use strict'

const should = require('should'),
      sinon = require('sinon'),
      messenger = require('../messenger.js'),
      facebook = require('../facebook.js'),
      senderActions = require('../sender_actions.js'),
      messageUtils = require('../message_utils.js')

describe('messenger', () => {
  describe('sendMessage', () => {
    let message
    let facebookMock
    let senderActionsMock
    let messageUtilsMock
    beforeEach(() => {
      messageUtilsMock = sinon.stub(messageUtils, 'calculateMessageDelay', (text, callback) => {
        callback(0)
      })
    })
    afterEach(() => {
      message = {}
      facebookMock.restore()
      senderActionsMock.restore()
      messageUtilsMock.restore()
    })
    it('should send a \'typing_on\' message before sending a message to facebook', (done) => {
      message = {
        text: 'Yo Tommy! I didn\'t hear no bell!'
      }

      facebookMock = sinon.stub(facebook, 'sendMessage', (body, callback) => {
        callback()
      })
      senderActionsMock = sinon.stub(senderActions, 'typingOn', (recipient, callback) => {
        callback()
      })

      messenger.sendMessage({}, message, () => {
        senderActionsMock.calledOnce.should.be.ok()
        facebookMock.calledOnce.should.be.ok()
        senderActionsMock.calledBefore(facebookMock).should.be.ok()
        done()
      })
    })
    it('should send a text message if message contains text', (done) => {
      let messageText = 'No bell!'
      message = {
        text: messageText
      }
      facebookMock = sinon.stub(facebook, 'sendMessage', (body, callback) => {
        body.message.text.should.equal(messageText)
        callback()
      })
      senderActionsMock = sinon.stub(senderActions, 'typingOn', (recipient, callback) => {
        callback()
      })

      messenger.sendMessage({}, message, () => {
        senderActionsMock.calledOnce.should.be.ok()
        facebookMock.calledOnce.should.be.ok()
        done()
      })
    })
    it('should send an attachment message if message contains an attachment and no text', (done) => {
      let messageAttachment = {
        payload: {
          text: 'I\'m going on an adventure!'
        }
      }
      message = {
        attachment: messageAttachment
      }
      facebookMock = sinon.stub(facebook, 'sendMessage', (body, callback) => {
        should.not.exist(body.message.text)
        should.exist(body.message.attachment)
        body.message.attachment.should.equal(messageAttachment)
        callback()
      })
      senderActionsMock = sinon.stub(senderActions, 'typingOn', (recipient, callback) => {
        callback()
      })

      messenger.sendMessage({}, message, () => {
        senderActionsMock.calledOnce.should.be.ok()
        facebookMock.calledOnce.should.be.ok()
        done()
      })
    })
  })
})
