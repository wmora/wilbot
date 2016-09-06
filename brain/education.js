'use strict'

const education = [
  {
    text: 'I graduated from Florida International University with a Bachelor\'s Degree in Computer Engineering'
  },
  {
    text: 'I strongly believe that we should never stop learning, that\'s why I constantly read books mainly on technology, startups, and self-improvement 🤓'
  },
  {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'button',
        text: 'If you like to talk about any of those topics or even recommend me a book, feel free to drop me a message 😃',
        buttons: [
          {
            type: 'postback',
            title: 'Contact',
            payload: 'contact'
          },
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
  education: education
}
