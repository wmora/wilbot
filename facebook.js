'use strict'

const https = require('https')

const settings = {
    hostname: 'graph.facebook.com',
    base_path: '/v2.6/'
}

const access_token = process.env.PAGE_ACCESS_TOKEN || ''

exports.verify_token = process.env.VERIFY_TOKEN || ''

exports.getUserInfo = function(userId, fields, callback) {
  let options = {
    hostname: settings.hostname,
    path: `${settings.base_path}${userId}?fields=${fields.join('&')}&access_token=${access_token}`
  }
  let request = https.request(options, (response) => {
    if (response.statusCode >= 400 && response.statusCode <= 599) {
      console.log(`statusCode: ${response.statusCode}`)
      callback({})
    }

    response.on('data', (data) => {
      console.log(`data: ${data}`)
      callback(data)
    })
  })
  request.end()
  request.on('error', (error) => {
    console.log(`error: ${error}`)
    callback({})
  })
}

exports.sendMessage = function(message, callback) {
  let body = JSON.stringify(message)
  console.log(`sending message with body ${body}`)
  let options = {
    hostname: settings.hostname,
    path: `/v2.6/me/messages?access_token=${access_token}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(body)
    }
  }
  let request = https.request(options, (response) => {
    console.log(`STATUS: ${response.statusCode}`)
    console.log(`HEADERS: ${JSON.stringify(response.headers)}`)

    response.setEncoding('utf8')

    response.on('data', (data) => {
      console.log(`message sent: ${data.message_id}`)
      callback()
    });
  })

  request.on('error', (e) => {
    console.log(`problem sending message: ${e.message}`)
    callback()
  });

  request.write(body)
  request.end()
}
