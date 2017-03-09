// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

import { buffs } from './assets/js/buffs.js'
import { inventory } from './assets/js/inventory.js'
import { monsters } from './assets/js/monsters.js'
import { player } from './assets/js/player.js'
import { spells } from './assets/js/spells.js'
import { system } from './assets/js/system.js'
import { tower } from './assets/js/tower.js'
import { upgrades } from './assets/js/upgrades.js'

Vue.use(Vuex)

Vue.config.productionTip = false

window.buffs = buffs
window.inventory = inventory
window.monsters = monsters
window.player = player
window.spells = spells
window.system = system
window.tower = tower
window.upgrdaes = upgrades

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})
