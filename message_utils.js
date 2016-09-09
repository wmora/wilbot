'use strict'

exports.calculateMessageDelay = function(text, callback) {
  let millisPerCharacter = (60 * 1000) / 1500
  let delay = text.length * millisPerCharacter
  callback(delay)
}
