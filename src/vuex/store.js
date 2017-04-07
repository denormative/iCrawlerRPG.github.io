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
  upgrades: {
    excelia: 0,
    upgradeList: [
      {
        name: "Aetheric Attunement 1",
        id: "aetheric1",
        exceliaCost: 10,
        required: "",
        shown: true,
        purchased: false,
        description: "Tap into the mana around you. Recover +1 MP per second while exploring.",
      },
      {
        name: "Time Warp 1",
        id: "timewarp1",
        exceliaCost: 10,
        required: "",
        shown: true,
        purchased: false,
        description: "Is idle mode too slow? Make it go at twice the speed!",
      },
      {
        name: "Blessings 1",
        id: "blessings1",
        exceliaCost: 100,
        required: "",
        shown: true,
        purchased: false,
        description: "Keep 10% of your excelia upon death.",
      },
      {
        name: "Faster Resting 1",
        id: "fastresting1",
        exceliaCost: 100,
        required: "",
        shown: true,
        purchased: false,
        description: "Recover at twice the normal speed.",
      },
      {
        name: "Auto-Shooting",
        id: "autoshoot",
        exceliaCost: 250,
        required: "",
        shown: true,
        purchased: false,
        description: "Shoot a fireball at the start of every battle without losing a turn!",
      },
      {
        name: "Battle Healing",
        id: "battlehealing",
        exceliaCost: 250,
        required: "",
        shown: true,
        purchased: false,
        description: "Cast Cure whenever you get under 50% HP during battle.",
      },
      {
        name: "Aetheric Attunement 2",
        id: "aetheric2",
        exceliaCost: 350,
        required: "aetheric1",
        shown: false,
        purchased: false,
        description: "Deepen the bond between you and the flow of mana. Get +2 MP per second while exploring.",
      },
      {
        name: "Faster Resting 2",
        id: "fastresting2",
        exceliaCost: 500,
        required: "fastresting1",
        shown: false,
        purchased: false,
        description: "Recover at four times the normal speed.",
      },
      {
        name: "Time Warp 2",
        id: "timewarp2",
        exceliaCost: 500,
        required: "timewarp1",
        shown: false,
        purchased: false,
        description: "Change to the next gear! With this, idle mode is five times faster!",
      },
      {
        name: "Faster Exploration 1",
        id: "fasterexploration1",
        exceliaCost: 1000,
        required: "",
        shown: true,
        purchased: false,
        description: "Double the speed of floor exploration.",
      },
      {
        name: "Muscle Memory 1",
        id: "musclememory1",
        exceliaCost: 1000,
        required: "",
        shown: true,
        purchased: false,
        description: "Lose 1% less stats when dying.",
      },
      {
        name: "Barrier Casting",
        id: "barriercast",
        exceliaCost: 2000,
        required: "",
        shown: true,
        purchased: false,
        description: "Cast Barrier whenever it is down. You need the Barrier spell for it to have any effect.",
      },
      {
        name: "Blessings 2",
        id: "blessings2",
        exceliaCost: 2000,
        required: "blessings1",
        shown: false,
        purchased: false,
        description: "With this, you'll be able to keep 20% of your excelia upon death!",
      },
      {
        name: "Double Excelia 1",
        id: "doubleexcelia1",
        exceliaCost: 2000,
        required: "",
        shown: true,
        purchased: false,
        description: "Double the amount of Excelia you gain per monster.",
      },
      {
        name: "Faster Leveling 1",
        id: "fasterleveling1",
        exceliaCost: 2000,
        required: "",
        shown: true,
        purchased: false,
        description: "Double the speed your stats gain experience.",
      },
      {
        name: "Time Warp 3",
        id: "timewarp3",
        exceliaCost: 2000,
        required: "timewarp2",
        shown: false,
        purchased: false,
        description: "Makes idle mode ten times faster! You'll barely see what's happening",
      },
      {
        name: "Faster Resting 3",
        id: "fastresting3",
        exceliaCost: 2500,
        required: "fastresting2",
        shown: false,
        purchased: false,
        description: "Recover at eight times the normal speed.",
      },
      {
        name: "Adept Mage",
        id: "adeptmage",
        exceliaCost: 5000,
        required: "",
        shown: true,
        purchased: false,
        description: "Master spells twice as fast.",
      },
      {
        name: "Blessings 3",
        id: "blessings3",
        exceliaCost: 5000,
        required: "blessings2",
        shown: false,
        purchased: false,
        description: "Keep 30% of your excelia upon death.",
      },
      {
        name: "Faster Exploration 1",
        id: "fasterexploration2",
        exceliaCost: 5000,
        required: "fasterexploration1",
        shown: false,
        purchased: false,
        description: "Double the speed of floor exploration.",
      },
      {
        name: "Muscle Memory 2",
        id: "musclememory2",
        exceliaCost: 5000,
        required: "musclememory1",
        shown: false,
        purchased: false,
        description: "Lose 1% less stats when dying.",
      },
      {
        name: "Double Excelia 2",
        id: "doubleexcelia2",
        exceliaCost: 10000,
        required: "doubleexcelia1",
        shown: false,
        purchased: false,
        description: "Double the amount of Excelia you gain per monster.",
      },
      {
        name: "Faster Leveling 2",
        id: "fasterleveling2",
        exceliaCost: 15000,
        required: "fasterleveling1",
        shown: false,
        purchased: false,
        description: "Double the speed your stats gain experience.",
      },
      {
        name: "Faster Exploration 1",
        id: "fasterexploration3",
        exceliaCost: 20000,
        required: "fasterexploration2",
        shown: false,
        purchased: false,
        description: "Double the speed of floor exploration.",
      },
      {
        name: "Faster Leveling 3",
        id: "fasterleveling3",
        exceliaCost: 50000,
        required: "fasterleveling2",
        shown: false,
        purchased: false,
        description: "Double the speed your stats gain experience.",
      },
    ],
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
  // loadUpgrades (state, upgrades) {
  // },
}

export default new Vuex.Store({
  state: storeState,
  mutations: storeMutations,
  getters: storeGetters,
  // strict:    process.env.NODE_ENV !== 'production',
})
