'use strict'

const should = require('should'),
      sinon = require('sinon'),
      message = require('../../webhook/message.js'),
      messenger = require('../../messenger.js'),
      postback = require('../../webhook/postback.js'),
      brain = require('../../brain/brain.js')

describe('message', () => {
  describe('handle', () => {
    describe('should send a \'home\' postback', () => {
      let event = {
        message: {
          text: ''
        }
      }
      let postbackMock
      afterEach(() => {
        event.message.text = ''
        postbackMock.restore()
      })
      it('when the message is \'home\'', (done) => {
        event.message.text = 'home'
        postbackMock = sinon.stub(postback, 'handle', (event) => {
          event.postback.payload.should.equal('home')
          done()
        })
        message.handle(event)
      })
      it('when the message is \'home\' regardless of capitalization', (done) => {
        event.message.text = 'HomE'
        postbackMock = sinon.stub(postback, 'handle', (event) => {
          event.postback.payload.should.equal('home')
          done()
        })
        message.handle(event)
      })
      it('when the message is \'🏠\'', (done) => {
        event.message.text = '🏠'
        postbackMock = sinon.stub(postback, 'handle', (event) => {
          event.postback.payload.should.equal('home')
          done()
        })
        message.handle(event)
      })
    })
    describe('should send a fallback message', () => {
      let event = {}
      let fallbackMessage = brain.fallback_message
      let messengerMock
      afterEach(() => {
        event = {}
        messengerMock.restore()
      })
      it('when it is not a text message', (done) => {
        // Message with image attachment from facebook's webhook reference
        event = {
          sender: {
            id: 'message_sender_id'
          },
          message: {
            mid: "mid.1458696618141:b4ef9d19ec21086067",
            seq: 51,
            attachments: [
              {
                type: "image",
                payload: {
                  url: "IMAGE_URL"
                }
              }
            ]
          }
        }
        messengerMock = sinon.stub(messenger, 'sendMessage', (recipient, message) => {
          recipient.should.equal(event.sender)
          message.text.should.equal(fallbackMessage)
          done()
        })
        message.handle(event)
      })
      it('when it is not a \'home\' message', (done) => {
        event = {
          sender: {
            id: 'message_sender_id'
          },
          message: {
            text: 'Life, uh, finds a way'
          }
        }
        messengerMock = sinon.stub(messenger, 'sendMessage', (recipient, message) => {
          recipient.should.equal(event.sender)
          message.text.should.equal(fallbackMessage)
          done()
        })
        message.handle(event)
      })
    })
  })
})
