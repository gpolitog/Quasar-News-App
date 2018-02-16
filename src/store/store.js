import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    topics: {
      titles: ['JavaScript', 'PHP', 'Laravel', 'Android'],
      subtitles: ['Dynamic Frontend', 'Server King', 'Best in PHP', 'Most popular Mobile OS'],
      descriptions: [
        'JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn.',
        'PHP is a server scripting language, and a powerful tool for making dynamic web pages.',
        'Love beautiful code? We do too. The PHP Framework For Web Artisans.',
        'From phones and watches to cars and TVs, customise your digital life with Android.'
      ]
    }
  },
  getters,
  mutations,
  actions
})