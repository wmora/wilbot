'use strict'

const POSTBACKS = {
  "get_started": getStarted
}

exports.handle = function(event) {
  if (POSTBACKS[event.payload]) {
    return POSTBACKS[event.payload](event)
  }
}

function getStarted(event) {
  return event.payload
}
