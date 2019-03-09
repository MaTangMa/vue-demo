import Vue from 'vue'
import Vuex from 'vuex'
import reservoir from './modules/reservoir'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    reservoir
  }
})
