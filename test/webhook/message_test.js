'use strict'

const should = require('should'),
      sinon = require('sinon'),
      message = require('../../webhook/message.js'),
      postback = require('../../webhook/postback.js')

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
  })
})
