import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storeState = {
  /* beautify preserve:start */
  player: {
    name: "Crawler",

    health: { currentValue: 100, maximumValue: 100 },
    mana: { currentValue: 50, maximumValue: 50 },
    strength: { level: 5, experience: 0, nextLevel: 100, bonus: 0 },
    dexterity: { level: 5, experience: 0, nextLevel: 100, bonus: 0 },
    constitution: { level: 5, experience: 0, nextLevel: 100, bonus: 0 },
    speed: { level: 5, experience: 0, nextLevel: 100, bonus: 0 },
    magic: { level: 5, experience: 0, nextLevel: 100, bonus: 0 },

    currentFloor: 0,

    inBattle: false,
    resting: false,
  },
  /* beautify preserve:end */
}

const storeGetters = {
}

const storeMutations = {
}

export default new Vuex.Store({
  state: storeState,
  mutations: storeMutations,
  getters: storeGetters,
  // strict:    process.env.NODE_ENV !== 'production',
})
