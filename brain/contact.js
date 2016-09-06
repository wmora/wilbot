'use strict'

const contact = [
  {
    text: 'You can send me an email at william.r.mora@gmail.com and I\'ll reply as soon as I can'
  },
  {
    text: 'we can also connect through social media'
  },
  {
    text: 'Facebook: https://www.facebook.com/william.r.mora'
  },
  {
    text: 'Twitter: https://twitter.com/_williammora'
  },
  {
    text: 'GitHub: https://github.com/wmora'
  },
  {
    text: 'LinkedIn: https://www.linkedin.com/in/williammora'
  },
  {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'button',
        text: 'Medium: https://medium.com/@wmora',
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

exports.messages = {
  contact: contact
}
