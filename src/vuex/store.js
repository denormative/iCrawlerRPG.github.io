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
  loadPlayer (state, player) {
    if (player.name) { state.player.name = player.name }
    if (player.health.currentValue) { state.player.health.currentValue = player.health.currentValue }
    if (player.health.maximumValue) { state.player.health.maximumValue = player.health.maximumValue }
    if (player.mana.currentValue) { state.player.mana.currentValue = player.mana.currentValue }
    if (player.mana.maximumValue) { state.player.mana.maximumValue = player.mana.maximumValue }
    if (player.strength.level) { state.player.strength.level = player.strength.level }
    if (player.strength.experience) { state.player.strength.experience = player.strength.experience }
    if (player.strength.nextLevel) { state.player.strength.nextLevel = player.strength.nextLevel }
    if (player.strength.bonus) { state.player.strength.bonus = player.strength.bonus }
    if (player.dexterity.level) { state.player.dexterity.level = player.dexterity.level }
    if (player.dexterity.experience) { state.player.dexterity.experience = player.dexterity.experience }
    if (player.dexterity.nextLevel) { state.player.dexterity.nextLevel = player.dexterity.nextLevel }
    if (player.dexterity.bonus) { state.player.dexterity.bonus = player.dexterity.bonus }
    if (player.constitution.level) { state.player.constitution.level = player.constitution.level }
    if (player.constitution.experience) { state.player.constitution.experience = player.constitution.experience }
    if (player.constitution.nextLevel) { state.player.constitution.nextLevel = player.constitution.nextLevel }
    if (player.constitution.bonus) { state.player.constitution.bonus = player.constitution.bonus }
    if (player.speed.level) { state.player.speed.level = player.speed.level }
    if (player.speed.experience) { state.player.speed.experience = player.speed.experience }
    if (player.speed.nextLevel) { state.player.speed.nextLevel = player.speed.nextLevel }
    if (player.speed.bonus) { state.player.speed.bonus = player.speed.bonus }
    if (player.magic.level) { state.player.magic.level = player.magic.level }
    if (player.magic.experience) { state.player.magic.experience = player.magic.experience }
    if (player.magic.nextLevel) { state.player.magic.nextLevel = player.magic.nextLevel }
    if (player.magic.bonus) { state.player.magic.bonus = player.magic.bonus }
    if (player.currentFloor) { state.player.currentFloor = player.currentFloor }
    if (player.inBattle) { state.player.inBattle = player.inBattle }
    if (player.resting) { state.player.resting = player.resting }
  },
}

export default new Vuex.Store({
  state: storeState,
  mutations: storeMutations,
  getters: storeGetters,
  // strict:    process.env.NODE_ENV !== 'production',
})
