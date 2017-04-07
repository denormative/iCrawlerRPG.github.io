/* eslint-disable func-names */
/* eslint-disable no-alert */

import { buffs } from './buffs.js'

import store from '../../vuex/store'

const Upgrades = function() {
  const self = this
  // Save Method
  self.save = function() {
    const upgradesSave = {
      savedExcelia: store.state.upgrades.excelia,
      savedUpgradeList: store.state.upgrades.upgradeList,
    }
    localStorage.setItem("upgradesSave", JSON.stringify(upgradesSave))
  }

  // Load Method
  const loadUpgradeList = function(savedUpgradeList) {
    let success = false
    for (let i = 0; i < savedUpgradeList.length; i++) {
      if (i === store.state.upgrades.upgradeList.length) {
        break
      }
      let j
      for (j = 0; j < store.state.upgrades.upgradeList.length; j++) {
        if (store.state.upgrades.upgradeList[j].id === savedUpgradeList[i].id) {
          success = true
          break
        }
      }
      if (success) {
        if (savedUpgradeList[i].shown !== undefined) {
          store.state.upgrades.upgradeList[j].shown = savedUpgradeList[i].shown
        }
        if (savedUpgradeList[i].purchased !== undefined) {
          store.state.upgrades.upgradeList[j].purchased = savedUpgradeList[i].purchased
        }
      }
      success = false
    }
  }

  self.load = function() {
    const upgradesSave = JSON.parse(localStorage.getItem("upgradesSave"))
    if (upgradesSave) {
      if (upgradesSave.savedExcelia !== undefined) {
        store.state.upgrades.excelia = upgradesSave.savedExcelia
      }
      if (upgradesSave.savedUpgradeList !== undefined) {
        loadUpgradeList(upgradesSave.savedUpgradeList)
      }
    }
  }

  // Getters
  self.getExcelia = function() {
    return store.state.upgrades.excelia
  }

  // Setters
  self.setExcelia = function(number) {
    store.state.upgrades.excelia = number
    self.loadExcelia()
  }

  // Other Methods
  self.loadExcelia = function() {
    document.getElementById("excelia").innerHTML = Math.round(100 * store.state.upgrades.excelia) / 100
  }

  self.loadTimeUpgrades = function() {
    for (let i = 0; i < store.state.upgrades.upgradeList.length; i++) {
      if (store.state.upgrades.upgradeList[i].id === "timewarp1" && store.state.upgrades.upgradeList[i].purchased === true) {
        document.getElementById("speed2").innerHTML = '<button class="btn btn-primary" onclick="system.gameSpeed(500)">x2</button>'
      }
      else if (store.state.upgrades.upgradeList[i].id === "timewarp2" && store.state.upgrades.upgradeList[i].purchased === true) {
        document.getElementById("speed5").innerHTML = '<button class="btn btn-primary" onclick="system.gameSpeed(200)">x5</button>'
      }
      else if (store.state.upgrades.upgradeList[i].id === "timewarp3" && store.state.upgrades.upgradeList[i].purchased === true) {
        document.getElementById("speed10").innerHTML = '<button class="btn btn-primary" onclick="system.gameSpeed(100)">x10</button>' // eslint-disable-line
      }
    }
  }

  self.gainExcelia = function(monster) {
    const gain = (buffs.getExceliaMultiplier() * (monster.strength + monster.constitution + monster.dexterity)) / 15
    self.updateExcelia(gain)
    self.updateUpgrades()
  }

  self.updateExcelia = function(moreExcelia) {
    store.state.upgrades.excelia += moreExcelia
    self.loadExcelia()
  }

  self.updateUpgrades = function() {
    document.getElementById("upgrades").innerHTML = ''
    for (let i = 0; i < store.state.upgrades.upgradeList.length; i++) {
      if (!store.state.upgrades.upgradeList[i].purchased && self.isUpgradePurchased(store.state.upgrades.upgradeList[i].required)) {
        store.state.upgrades.upgradeList[i].shown = true
        document.getElementById("upgrades").innerHTML += `<div class="row"><div class="col-7"><button class="btn btn-primary btn-block" data-toggle="tooltip" data-placement="top" title="${upgradeList[i].description}" onclick="upgrades.buyUpgrade('${upgradeList[i].id}')">${upgradeList[i].name}</button></div><div class="col-5"><p>(Cost: ${upgradeList[i].exceliaCost})</p></div></div><div class="row" style="height: 5px;"></div>`// eslint-disable-line
      }
    }
    window.vm.$nextTick(() => {
      window.$('[data-toggle="tooltip"]').tooltip()
    })
  }

  self.isUpgradePurchased = function(upgradeId) {
    if (upgradeId === "") {
      return true
    }

    for (let i = 0; i < store.state.upgrades.upgradeList.length; i++) {
      if (store.state.upgrades.upgradeList[i].id === upgradeId) {
        if (store.state.upgrades.upgradeList[i].purchased) {
          return true
        }

        return false
      }
    }
    return false
  }

  const activateUpgrade = function(upgrade) {
    if (upgrade.id === "timewarp1" || upgrade.id === "timewarp2" || upgrade.id === "timewarp3") {
      self.loadTimeUpgrades()
    }
    else if (upgrade.id === "aetheric1" || upgrade.id === "aetheric2") {
      buffs.setManaPerSecond(buffs.getManaPerSecond() + 1)
    }
    else if (upgrade.id === "battleHealing") {
      buffs.setCastCureInBattle(true)
    }
    else if (upgrade.id === "doubleexcelia1" || upgrade.id === "doubleexcelia2") {
      buffs.setExceliaMultiplier(buffs.getExceliaMultiplier() * 2)
    }
    else if (upgrade.id === "adeptmage") {
      buffs.setSpellLevelingMultiplier(buffs.getSpellLevelingMultiplier() * 2)
    }
    else if (upgrade.id === "blessings1" || upgrade.id === "blessings2" || upgrade.id === "blessings3") {
      buffs.setExceliaSavedOnDeath(buffs.getExceliaSavedOnDeath() + 10)
    }
    else if (upgrade.id === "autoshoot") {
      buffs.setCastFireballInBattle(true)
    }
    else if (upgrade.id === "fastresting1" || upgrade.id === "fastresting2" || upgrade.id === "fastresting3") {
      buffs.setRestingMultiplier(buffs.getRestingMultiplier() * 2)
    }
    else if (upgrade.id === "musclememory1" || upgrade.id === "musclememory2") {
      buffs.setDeathPenaltyReduction(buffs.getDeathPenaltyReduction() + 1)
    }
    else if (upgrade.id === "barriercast") {
      buffs.setAutoBarrierCast(true)
    }
    else if (upgrade.id === "fasterleveling1" || upgrade.id === "fasterleveling2" || upgrade.id === "fasterleveling3") {
      buffs.setLevelingSpeedMultiplier(buffs.getLevelingSpeedMultiplier() * 2)
    }
    else if (upgrade.id === "fasterexploration1" || upgrade.id === "fasterexploration2" || upgrade.id === "fasterexploration3") {
      buffs.setExplorationSpeedMultiplier(buffs.getExplorationSpeedMultiplier() * 2)
    }
  }

  self.buyUpgrade = function(upgradeId) {
    let i
    for (i = 0; i < store.state.upgrades.upgradeList.length; i++) {
      if (store.state.upgrades.upgradeList[i].id === upgradeId) {
        break
      }
    }
    if (store.state.upgrades.excelia >= store.state.upgrades.upgradeList[i].exceliaCost) {
      self.updateExcelia(-store.state.upgrades.upgradeList[i].exceliaCost)
      store.state.upgrades.upgradeList[i].purchased = true
      activateUpgrade(store.state.upgrades.upgradeList[i])
      self.updateUpgrades()
    }
    buffs.updatePermanentBuffs()
    buffs.updateToggleableBuffs()
  }
}

const upgrades = new Upgrades()

export { upgrades } // eslint-disable-line
