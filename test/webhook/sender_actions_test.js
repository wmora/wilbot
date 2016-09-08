'use strict'

const should = require('should'),
      sinon = require('sinon'),
      senderActions = require('../../webhook/sender_actions.js'),
      facebook = require('../../facebook.js')
describe('sender_actions', () => {
  describe('markAsSeen', () => {
    let facebookMock
    afterEach(() => {
      facebookMock.restore()
    })
    it('should send a \'mark_seen\' sender action to facebook', (done) => {
      facebookMock = sinon.stub(facebook, 'sendMessage', (body, callback) => {
        body.sender_action.should.equal('mark_seen')
        done()
      })
      senderActions.markAsSeen({})
    })
    it('should send the recipient to facebook', (done) => {
      let recipient = {
        id: 'recipient_id'
      }
      facebookMock = sinon.stub(facebook, 'sendMessage', (body, callback) => {
        body.recipient.should.equal(recipient)
        done()
      })
      senderActions.markAsSeen(recipient)
    })
    it('should send the callback to facebook', (done) => {
      let spy = sinon.spy()
      facebookMock = sinon.stub(facebook, 'sendMessage', (body, callback) => {
        callback.should.equal(spy)
        done()
      })
      senderActions.markAsSeen({}, spy)
    })
  })
  describe('typingOn', () => {
    let facebookMock
    afterEach(() => {
      facebookMock.restore()
    })
    it('should send a \'typing_on\' sender action to facebook', (done) => {
      facebookMock = sinon.stub(facebook, 'sendMessage', (body, callback) => {
        body.sender_action.should.equal('typing_on')
        done()
      })
      senderActions.typingOn({})
    })
    it('should send the recipient to facebook', (done) => {
      let recipient = {
        id: 'recipient_id'
      }
      facebookMock = sinon.stub(facebook, 'sendMessage', (body, callback) => {
        body.recipient.should.equal(recipient)
        done()
      })
      senderActions.typingOn(recipient)
    })
    it('should send the callback to facebook', (done) => {
      let spy = sinon.spy()
      facebookMock = sinon.stub(facebook, 'sendMessage', (body, callback) => {
        callback.should.equal(spy)
        done()
      })
      senderActions.typingOn({}, spy)
    })
  })
})
