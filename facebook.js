'use strict'

exports.settings = {
    hostname: 'graph.facebook.com',
    base_path: '/v2.6/'
}

exports.verify_token = process.env.VERIFY_TOKEN || ''
