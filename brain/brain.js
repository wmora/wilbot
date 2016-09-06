'use strict'

const work = require('./work.js')
const education = require('./education.js')
const personalLife = require('./personal_life.js')
const contact = require('./contact.js')

const getStarted = [
  {
    required_user_fields: [
      'first_name'
    ],
    text: 'Hi ##first_name##! I\'m Wilbot, Will\'s personal bot'
  },
  {
    text: 'I can tell you a bit about his work, education, and personal life'
  },
  {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'button',
        text: 'Tap the 🏠 button to get started. Alternatively, you can type the 🏠 emoji or the word \'home\'',
        buttons: [
          {
            type: 'postback',
            title: '🏠',
            payload: 'home'
          }
        ]
      }
    }
  }
]

const home = [
  {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'button',
        text: 'What would you like to know about me?',
        buttons: [
          {
            type: 'postback',
            title: 'Work',
            payload: 'work'
          },
          {
            type: 'postback',
            title: 'Education',
            payload: 'education'
          },
          {
            type: 'postback',
            title: 'More',
            payload: 'home_2'
          }
        ]
      }
    }
  }
]

const home2 = [
  {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'button',
        text: 'What would you like to know about me?',
        buttons: [
          {
            type: 'postback',
            title: 'Personal life',
            payload: 'personal_life'
          },
          {
            type: 'postback',
            title: 'Contact you',
            payload: 'contact'
          }
        ]
      }
    }
  }
]

exports.messages = {
  get_started: getStarted,
  home: home,
  home_2: home2,
  work: work.messages['work'],
  work_2: work.messages['work_2'],
  work_3: work.messages['work_3'],
  work_4: work.messages['work_4'],
  work_5: work.messages['work_5'],
  education: education.messages['education'],
  personal_life: personalLife.messages['personal_life'],
  personal_life_2: personalLife.messages['personal_life_2'],
  personal_life_3: personalLife.messages['personal_life_3'],
  contact: contact.messages['contact']
}

exports.fallback_message = 'Sorry, I don\'t understand that, I\'m still learning 👶. If you are stuck, you can always start over by typing \'home\' or 🏠'
