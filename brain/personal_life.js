'use strict'

const personalLife = [
  {
    text: 'I was born in Maracaibo 🇻🇪 but moved to Caracas 🇻🇪 soon after'
  },
  {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'button',
        text: 'at 14, I moved with my family to Weston 🇺🇸 where I went to high school and college',
        buttons: [
          {
            type: 'postback',
            title: 'Cool, keep going',
            payload: 'personal_life_2'
          },
          {
            type: 'postback',
            title: 'Enough about this',
            payload: 'home'
          }
        ]
      }
    }
  }
]

const personalLife2 = [
  {
    text: 'Soon after college, I moved back to 🇻🇪 where I met my wife 👫'
  },
  {
    text: 'I was relocated to 🇦🇷 and lived there for two years'
  },
  {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'button',
        text: 'we are now living in 🇨🇦 getting ready for our first winter ⛄❄️⛄❄️',
        buttons: [
          {
            type: 'postback',
            title: 'Keep going',
            payload: 'personal_life_3'
          },
          {
            type: 'postback',
            title: 'Enough about this',
            payload: 'home'
          }
        ]
      }
    }
  }
]

const personalLife3 = [
  {
    text: 'As you probably noticed, I\'m passionate about technology and I\'m always working on side projects. To me, it\'s the best way to keep learning'
  },
  {
    text: 'I also enjoy exercising (mostly running), reading, movies, music, writing, and video games'
  },
  {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'button',
        text: 'if you\'d like to know more, feel free to contact me',
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
  personal_life: personalLife,
  personal_life_2: personalLife2,
  personal_life_3: personalLife3
}
