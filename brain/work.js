'use strict'

const work = [
  {
    text: 'I am a Software Engineer who has worked with many technologies and languages. Most recently, I\'ve been working in mobile and web applications'
  },
  {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'button',
        text: 'although 🤖s are pretty cool, maybe I should do more 🤔',
        buttons: [
          {
            type: 'postback',
            title: 'Tell me more',
            payload: 'work_2'
          },
          {
            type: 'postback',
            title: 'That\'s enough',
            payload: 'home'
          }
        ]
      }
    }
  }
]

const work2 = [
  {
    text: 'I currently work at Smooch.io, a cloud messaging platform that offers a multi-channel messaging solution for your customers'
  },
  {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'button',
        text: 'before that I worked at a Montreal startup called Walking Thumbs developing a messaging app for Android',
        buttons: [
          {
            type: 'postback',
            title: 'Cool',
            payload: 'work_3'
          },
          {
            type: 'postback',
            title: 'That\'s enough',
            payload: 'home'
          }
        ]
      }
    }
  }
]

const work3 = [
  {
    text: 'Very cool indeed! before that I worked at MercadoLibre.com, latin america\'s largest online marketplace, as a Project Lead and a Software Engineer'
  },
  {
    text: 'while working there, I was part of the mobile development team and the classifieds team'
  },
  {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'button',
        text: 'I worked on Android, iOS, and APIs built in node.js and Grails',
        buttons: [
          {
            type: 'postback',
            title: 'Anything else?',
            payload: 'work_4'
          },
          {
            type: 'postback',
            title: 'That\'s enough',
            payload: 'home'
          }
        ]
      }
    }
  }
]

const work4 = [
  {
    text: 'Hmm let\'s see 🤔... before that, I worked at Consis International, a solution provider for insurance companies'
  },
  {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'button',
        text: 'I worked as an Oracle DBA and later as a Research and Development lead',
        buttons: [
          {
            type: 'postback',
            title: 'Tell me more',
            payload: 'work_5'
          },
          {
            type: 'postback',
            title: 'That\'s enough',
            payload: 'home'
          }
        ]
      }
    }
  }
]
 const work5 = [
   {
     text: '(going way back now) my first job out of college was as a consultant for JPMorgan Chase in their Home Lending division'
   },
   {
     attachment: {
       type: 'template',
       payload: {
         template_type: 'button',
         text: 'I was involved in the Software Release Management team helping with the integration of 42 products as part of a new system',
         buttons: [
           {
             type: 'postback',
             title: 'Contact Will',
             payload: 'contact'
           },
           {
             type: 'postback',
             title: 'More about Will',
             payload: 'home'
           }
         ]
       }
     }
   }
 ]

 exports.messages = {
   work: work,
   work_2: work2,
   work_3: work3,
   work_4: work4,
   work_5: work5
 }
