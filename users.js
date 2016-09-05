'use strict'

const facebook = require('./facebook.js'),
      https = require('https')

exports.getFirstName = function(userId, callback) {
  var options = {
    hostname: facebook.settings.hostname,
    path: `${facebook.settings.base_path}${userId}?fields=first_name&access_token=${facebook.verify_token}`
  }
  var request = https.request(options, (response) => {
    if (response.statusCode >= 400 && response.statusCode <= 599) {
      console.log(`statusCode: ${response.statusCode}`)
      callback('')
    }

    response.on('data', (data) => {
      callback(data.first_name)
    })
  })
  request.end()
  request.on('error', (error) => {
    console.log(`error: ${error}`)
    callback('')
  })
}
