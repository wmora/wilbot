'use strict'

const should = require('should'),
      messageUtils = require('../message_utils.js')

describe('message_utils', () => {
  describe('calculateMessageDelay', () => {
    it('should return 40 ms per character', (done) => {
      let text = 'a'
      messageUtils.calculateMessageDelay(text, (delay) => {
        delay.should.equal(40)
        done()
      })
    })
    it('should not count leading and trailing whitespaces', (done) => {
      let text = ' a '
      messageUtils.calculateMessageDelay(text, (delay) => {
        delay.should.equal(40)
        done()
      })
    })
    it('should return 0 if text is undefined', (done) => {
      messageUtils.calculateMessageDelay(undefined, (delay) => {
        delay.should.equal(0)
        done()
      })
    })
  })
})
