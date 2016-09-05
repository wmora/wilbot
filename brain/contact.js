'use strict'

const contact = [
  {
    text: 'You can always send me an email at william.r.mora@gmail.com and I\'ll reply as soon as I can'
  },
  {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'button',
        text: 'we can also connect through social media',
        buttons: [
          {
            type: 'web_url',
            title: 'Facebook',
            url: 'https://www.facebook.com/william.r.mora'
          },
          {
            type: 'web_url',
            title: 'Twitter',
            payload: 'https://twitter.com/_williammora'
          },
          {
            type: 'postback',
            title: 'More options',
            payload: 'contact_2'
          }
        ]
      }
    }
  }
]

const contact2 = [
  {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'button',
        text: 'you can always send me an email at william.r.mora@gmail.com and I\'ll reply as soon as I can',
        buttons: [
          {
            type: 'web_url',
            title: 'GitHub',
            payload: 'https://github.com/wmora'
          },
          {
            type: 'web_url',
            title: 'LinkedIn',
            payload: 'https://www.linkedin.com/in/williammora'
          },
          {
            type: 'postback',
            title: 'More options',
            payload: 'contact_3'
          }
        ]
      }
    }
  }
]

const contact3 = [
  {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'button',
        text: 'you can always send me an email at william.r.mora@gmail.com and I\'ll reply as soon as I can',
        buttons: [
          {
            type: 'web_url',
            title: 'Medium',
            payload: 'https://medium.com/@wmora'
          },
          {
            type: 'postback',
            title: 'More about you',
            payload: 'home'
          }
        ]
      }
    }
  }
]

exports.messages = {
  contact: contact,
  contact2: contact2,
  contact3: contact3
}
