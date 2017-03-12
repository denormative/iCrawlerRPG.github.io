/* eslint-disable func-names */
/* eslint-disable no-alert */

/* globals ga player spells upgrades buffs monsters tower inventory  Slider */

// var Slider = require("bootstrap-slider");

import { buffs } from './buffs.js'
import { inventory } from './inventory.js'
import { monsters } from './monsters.js'
import { player } from './player.js'
import { spells } from './spells.js'
// import { system } from './system.js'
import { tower } from './tower.js'
import { upgrades } from './upgrades.js'

const System = function() {
  let ticks = 0
  let refreshSpeed = 1000

  let init = false
  let idleMode = false

  let theGame
  let idleHealthSlider
  let idleManaSlider
  let trackOptOut = false

  const self = this
  // Save Method
  const save = function() {
    const systemSave = {
      savedTicks: ticks,
      trackOptOut,
    }
    localStorage.setItem("systemSave", JSON.stringify(systemSave))
  }

  const saveAll = function() {
    save()
    player.save()
    spells.save()
    upgrades.save()
    buffs.save()
    monsters.save()
    tower.save()
    inventory.save()
  }

  self.toggleTracking = function() {
    trackOptOut = !trackOptOut
    saveAll()
    location.reload()
  }

  const trackEvent = function(eventCategory, eventAction, eventLabel, eventValue) { // eslint-disable-line
    if (trackOptOut !== true) {
      // return ga('send', 'event', eventCategory, eventAction, eventLabel || null, eventValue || null)
    }
    return undefined
  }

  // Load Method
  const load = function() {
    const systemSave = JSON.parse(localStorage.getItem("systemSave"))
    if (systemSave) {
      if (systemSave.savedTicks !== undefined) {
        ticks = systemSave.savedTicks
      }
      if (systemSave.trackOptOut !== undefined) {
        trackOptOut = systemSave.trackOptOut
      }
    }
  }

  const loadAll = function() {
    load()
    player.load()
    spells.load()
    upgrades.load()
    buffs.load()
    monsters.load()
    tower.load()
    inventory.load()

    trackEvent('system', 'load', 'speed', player.getSpeedLevel())
    trackEvent('system', 'load', 'magic', player.getMagicLevel())
    trackEvent('system', 'load', 'strength', player.getStrengthLevel())
    trackEvent('system', 'load', 'dexterity', player.getDexterityLevel())
    trackEvent('system', 'load', 'constitution', player.getConstitutionLevel())
    trackEvent('system', 'load', 'tower_level', tower.getMaxFloor())
  }

  // Getters
  self.getIdleMode = function() {
    return idleMode
  }

  // Setters

  // Other Methods
  const loadIdleHealthSlider = function() {
    idleHealthSlider = new Slider("#idleRest", {
      ticks: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      ticks_snap_bounds: 10,
      value: 100,
    })
  }

  const loadIdleManaSlider = function() {
    idleManaSlider = new Slider("#idleMpRest", {
      ticks: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      ticks_snap_bounds: 10,
      value: 100,
    })
  }

  self.gameSpeed = function(number) {
    if (idleMode) {
      refreshSpeed = number
      theGame = window.clearInterval(theGame)
      self.runGame()
      document.getElementById("speed").innerHTML = 1000 / number
    }
  }

  self.exportGame = function() {
    theGame = window.clearInterval(theGame)
    saveAll()

    const exportedData = {
      systemSave: localStorage.getItem('systemSave'),
      playerSave: localStorage.getItem('playerSave'),
      spellsSave: localStorage.getItem('spellsSave'),
      upgradesSave: localStorage.getItem('upgradesSave'),
      buffsSave: localStorage.getItem('buffsSave'),
      monstersSave: localStorage.getItem('monstersSave'),
      towerSave: localStorage.getItem('towerSave'),
      inventorySave: localStorage.getItem('inventorySave'),
    }

    document.getElementById('dataContainer').innerHTML = JSON.stringify(exportedData)
    this.runGame()
  }

  self.importGame = function() {
    theGame = window.clearInterval(theGame)
    try {
      const text = document.getElementById('dataContainer').value
      const importedData = JSON.parse(text)

      if (confirm("Are you sure you want to import this data? Your existing save will be wiped.")) {
        localStorage.clear()

        localStorage.setItem('systemSave', importedData.systemSave)
        localStorage.setItem('playerSave', importedData.playerSave)
        localStorage.setItem('spellsSave', importedData.spellsSave)
        localStorage.setItem('upgradesSave', importedData.upgradesSave)
        localStorage.setItem('buffsSave', importedData.buffsSave)
        localStorage.setItem('monstersSave', importedData.monstersSave)
        localStorage.setItem('towerSave', importedData.towerSave)
        localStorage.setItem('inventorySave', importedData.inventorySave)

        loadAll()
        location.reload()
      }
    }
    catch (e) {
      console.warn(e)
      alert('Unable to parse save game data!')
    }
    this.runGame()
  }

  self.hardReset = function() {
    theGame = window.clearInterval(theGame)
    if (confirm("Are you sure you want to wipe all your progress?")) {
      // localStorage.clear();
      localStorage.removeItem('systemSave')
      localStorage.removeItem('playerSave')
      localStorage.removeItem('spellsSave')
      localStorage.removeItem('upgradesSave')
      localStorage.removeItem('buffsSave')
      localStorage.removeItem('monstersSave')
      localStorage.removeItem('towerSave')
      localStorage.removeItem('inventorySave')

      location.reload()
    }
    else {
      this.runGame()
    }
  }

  const updateTime = function(time) {
    let number = time
    document.getElementById("seconds").innerHTML = number % 60
    number = Math.floor(number / 60)
    document.getElementById("minutes").innerHTML = number % 60
    number = Math.floor(number / 60)
    document.getElementById("hours").innerHTML = number % 24
    number = Math.floor(number / 24)
    document.getElementById("days").innerHTML = number
  }

  const loadIdleButton = function() {
    if (idleMode) {
      document.getElementById("idleSwitch").innerHTML =
      '<button class="btn btn-success" onclick="system.toggleIdle()">Idle ON</button>'
    }
    else {
      document.getElementById("idleSwitch").innerHTML =
      '<button class="btn btn-danger" onclick="system.toggleIdle()">Idle OFF</button>'
    }
  }

  self.toggleIdle = function() {
    if (player.getCurrentFloor() === 0) {
      return false
    }
    if (idleMode) {
      self.gameSpeed(1000)
      idleMode = false
      loadIdleButton()
    }
    else {
      idleMode = true
      loadIdleButton()
    }
    return idleMode
  }

  const startTheEngine = function() {
    loadAll()
    loadIdleHealthSlider()
    loadIdleManaSlider()
    loadIdleButton()
    player.loadPlayerScreen()
    player.loadExploreButton()
    player.loadRestButton()
    spells.updateSpellbook()
    upgrades.loadExcelia()
    upgrades.updateUpgrades()
    upgrades.loadTimeUpgrades()
    buffs.updateTemporaryBuffs(false)
    buffs.updateToggleableBuffs()
    buffs.updatePermanentBuffs()
    if (player.getInBattle()) {
      monsters.loadMonsterInfo(monsters.getInstancedMonster())
    }
    tower.loadTowerScreen()
    inventory.updateInventoryHTML()
    inventory.updateInventory()
    inventory.updateEquipment()
    self.gameSpeed(1000)
    init = true
  }

  const main = function() {
    if (!init) {
      startTheEngine()
    }
    ticks += 1
    if (player.getResting()) {
      player.rest()
    }
    if (idleMode) {
      if (!player.getInBattle()) {
        if (buffs.getBarrierLeft() === 0 && buffs.getAutoBarrierCast()) {
          spells.castSpell("barrier")
        }
        if ((100 * (player.getHealthCurrentValue() / player.getHealthMaximumValue()) >= idleHealthSlider.getValue()) && (100 * (player.getManaCurrentValue() / player.getManaMaximumValue())) >= idleManaSlider.getValue() && !player.getResting()) { // eslint-disable-line
          tower.exploreFloor()
        }
        else if (!player.getResting() || player.isFullyRested()) {
          player.toggleRest()
        }
      }
      else {
        monsters.attackMelee()
      }
    }
    updateTime(ticks)
    saveAll()
  }

  self.runGame = function() {
    theGame = window.setInterval(main, refreshSpeed)
  }
}

// FIXME: get it to connect to "/static"
// window.$.get("https://raw.githubusercontent.com/iCrawlerRPG/iCrawlerRPG.github.io/master/CHANGELOG.md", (data) => {
//   let converter = new showdown.Converter()
//   let md_content = data
//   let md_to_html = converter.makeHtml(md_content) // eslint-disable-line camelcase
//   window.$("#changelog").html(md_to_html)
// })

const system = new System()
system.runGame()

export { system } // eslint-disable-line
