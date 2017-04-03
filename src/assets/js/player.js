/* eslint-disable func-names */
/* eslint-disable no-alert */

import { buffs } from './buffs.js'
import { monsters } from './monsters.js'
import { spells } from './spells.js'
import { system } from './system.js'
import { tower } from './tower.js'
import { upgrades } from './upgrades.js'

import store from '../../vuex/store'

const Player = function() {
  const self = this
  // Save Method
  self.save = function() {
    const playerSave = {
      savedName: store.state.player.name,
      savedHealth: store.state.player.health,
      savedMana: store.state.player.mana,
      savedStrength: store.state.player.strength,
      savedDexterity: store.state.player.dexterity,
      savedConstitution: store.state.player.constitution,
      savedSpeed: store.state.player.speed,
      savedMagic: store.state.player.magic,
      savedCurrentFloor: store.state.player.currentFloor,
      savedInBattle: store.state.player.inBattle,
    }
    localStorage.setItem("playerSave", JSON.stringify(playerSave))
  }

  // Load Method
  const loadHealth = function(savedHealth) {
    if (savedHealth.currentValue !== undefined) {
      store.state.player.health.currentValue = savedHealth.currentValue
    }
    if (savedHealth.maximumValue !== undefined) {
      store.state.player.health.maximumValue = savedHealth.maximumValue
    }
  }

  const loadMana = function(savedMana) {
    if (savedMana.currentValue !== undefined) {
      store.state.player.mana.currentValue = savedMana.currentValue
    }
    if (savedMana.maximumValue !== undefined) {
      store.state.player.mana.maximumValue = savedMana.maximumValue
    }
  }

  const loadStrength = function(savedStrength) {
    if (savedStrength.level !== undefined) {
      store.state.player.strength.level = savedStrength.level
    }
    if (savedStrength.experience !== undefined) {
      store.state.player.strength.experience = savedStrength.experience
    }
    if (savedStrength.nextLevel !== undefined) {
      store.state.player.strength.nextLevel = savedStrength.nextLevel
    }
    if (savedStrength.bonus !== undefined) {
      store.state.player.strength.bonus = savedStrength.bonus
    }
  }

  const loadDexterity = function(savedDexterity) {
    if (savedDexterity.level !== undefined) {
      store.state.player.dexterity.level = savedDexterity.level
    }
    if (savedDexterity.experience !== undefined) {
      store.state.player.dexterity.experience = savedDexterity.experience
    }
    if (savedDexterity.nextLevel !== undefined) {
      store.state.player.dexterity.nextLevel = savedDexterity.nextLevel
    }
    if (savedDexterity.bonus !== undefined) {
      store.state.player.dexterity.bonus = savedDexterity.bonus
    }
  }

  const loadConstitution = function(savedConstitution) {
    if (savedConstitution.level !== undefined) {
      store.state.player.constitution.level = savedConstitution.level
    }
    if (savedConstitution.experience !== undefined) {
      store.state.player.constitution.experience = savedConstitution.experience
    }
    if (savedConstitution.nextLevel !== undefined) {
      store.state.player.constitution.nextLevel = savedConstitution.nextLevel
    }
    if (savedConstitution.bonus !== undefined) {
      store.state.player.constitution.bonus = savedConstitution.bonus
    }
  }

  const loadSpeed = function(savedSpeed) {
    if (savedSpeed.level !== undefined) {
      store.state.player.speed.level = savedSpeed.level
    }
    if (savedSpeed.experience !== undefined) {
      store.state.player.speed.experience = savedSpeed.experience
    }
    if (savedSpeed.nextLevel !== undefined) {
      store.state.player.speed.nextLevel = savedSpeed.nextLevel
    }
    if (savedSpeed.bonus !== undefined) {
      store.state.player.speed.bonus = savedSpeed.bonus
    }
  }

  const loadMagic = function(savedMagic) {
    if (savedMagic.level !== undefined) {
      store.state.player.magic.level = savedMagic.level
    }
    if (savedMagic.experience !== undefined) {
      store.state.player.magic.experience = savedMagic.experience
    }
    if (savedMagic.nextLevel !== undefined) {
      store.state.player.magic.nextLevel = savedMagic.nextLevel
    }
    if (savedMagic.bonus !== undefined) {
      store.state.player.magic.bonus = savedMagic.bonus
    }
  }

  self.load = function() {
    const playerSave = JSON.parse(localStorage.getItem("playerSave"))
    if (playerSave) {
      if (playerSave.savedName !== undefined) {
        store.state.player.name = playerSave.savedName
      }
      else {
        store.state.player.name = prompt("Please, enter your name:", "Crawler")
      }
      if (playerSave.savedHealth !== undefined) {
        loadHealth(playerSave.savedHealth)
      }
      if (playerSave.savedMana !== undefined) {
        loadMana(playerSave.savedMana)
      }
      if (playerSave.savedStrength !== undefined) {
        loadStrength(playerSave.savedStrength)
      }
      if (playerSave.savedDexterity !== undefined) {
        loadDexterity(playerSave.savedDexterity)
      }
      if (playerSave.savedConstitution !== undefined) {
        loadConstitution(playerSave.savedConstitution)
      }
      if (playerSave.savedSpeed !== undefined) {
        loadSpeed(playerSave.savedSpeed)
      }
      if (playerSave.savedMagic !== undefined) {
        loadMagic(playerSave.savedMagic)
      }
      if (playerSave.savedCurrentFloor !== undefined) {
        store.state.player.currentFloor = playerSave.savedCurrentFloor
      }
      if (playerSave.savedInBattle !== undefined) {
        store.state.player.inBattle = playerSave.savedInBattle
      }
    }
    else {
      store.state.player.name = prompt("Please, enter your name:", "Crawler")
    }
  }

  // Getters
  self.getName = function() {
    return store.state.player.name
  }

  self.getInBattle = function() {
    return store.state.player.inBattle
  }

  self.getResting = function() {
    return store.state.player.resting
  }

  self.getCurrentFloor = function() {
    return store.state.player.currentFloor
  }

  self.getHealthCurrentValue = function() {
    return store.state.player.health.currentValue
  }

  self.getHealthMaximumValue = function() {
    return store.state.player.health.maximumValue
  }

  self.getManaCurrentValue = function() {
    return store.state.player.mana.currentValue
  }

  self.getManaMaximumValue = function() {
    return store.state.player.mana.maximumValue
  }

  self.getStrengthLevel = function() {
    return store.state.player.strength.level
  }

  self.getDexterityLevel = function() {
    return store.state.player.dexterity.level
  }

  self.getConstitutionLevel = function() {
    return store.state.player.constitution.level
  }

  self.getSpeedLevel = function() {
    return store.state.player.speed.level
  }

  self.getMagicLevel = function() {
    return store.state.player.magic.level
  }

  self.getStrengthExperience = function() {
    return store.state.player.strength.experience
  }

  self.getDexterityExperience = function() {
    return store.state.player.dexterity.experience
  }

  self.getConstitutionExperience = function() {
    return store.state.player.constitution.experience
  }

  self.getSpeedExperience = function() {
    return store.state.player.speed.experience
  }

  self.getMagicExperience = function() {
    return store.state.player.magic.experience
  }

  self.getStrengthBonus = function() {
    return store.state.player.strength.bonus
  }

  self.getDexterityBonus = function() {
    return store.state.player.dexterity.bonus
  }

  self.getConstitutionBonus = function() {
    return store.state.player.constitution.bonus
  }

  self.getSpeedBonus = function() {
    return store.state.player.speed.bonus
  }

  self.getMagicBonus = function() {
    return store.state.player.magic.bonus
  }

  // Setters
  self.setInBattle = function(boolean) {
    store.state.player.inBattle = boolean
  }

  self.setCurrentFloor = function(newFloor) {
    store.state.player.currentFloor = newFloor
  }

  const loadConditionScreen = function(conditionId, conditionName) {
    document.getElementById(conditionId).innerHTML = Math.round(conditionName.currentValue)
    document.getElementById(`${conditionId}max`).innerHTML = Math.round(conditionName.maximumValue)
    document.getElementById(`${conditionId}bar`).style.width = `${100 * (conditionName.currentValue / conditionName.maximumValue)}%`
  }

  self.setHealthCurrentValue = function(newHealthArg) {
    let newHealth = newHealthArg
    if (newHealth > store.state.player.health.maximumValue) {
      newHealth = store.state.player.health.maximumValue
    }
    store.state.player.health.currentValue = newHealth
    loadConditionScreen("hp", store.state.player.health)
  }

  self.setHealthMaximumValue = function(newHealth) {
    store.state.player.health.maximumValue = newHealth
    loadConditionScreen("hp", store.state.player.health)
  }

  self.setManaCurrentValue = function(newManaArg) {
    let newMana = newManaArg
    if (newMana > store.state.player.mana.maximumValue) {
      newMana = store.state.player.mana.maximumValue
    }
    store.state.player.mana.currentValue = newMana
    loadConditionScreen("mp", store.state.player.mana)
  }

  self.setManaMaximumValue = function(newMana) {
    store.state.player.mana.maximumValue = newMana
    loadConditionScreen("mp", store.state.player.mana)
  }

  const loadStatScreen = function(statId, statName) {
    document.getElementById(statId).innerHTML = Math.round(100 * (statName.level + statName.bonus)) / 100
    document.getElementById(`${statId}per`).innerHTML =
    `${Math.round(100 * (100 * (statName.experience / statName.nextLevel))) / 100}%`
    document.getElementById(`${statId}prog`).style.width = `${100 * (statName.experience / statName.nextLevel)}%`
  }

  const neededExperience = function(level) {
    return (((level ** 2) + level) * 3)
  }

  const setStrengthLevel = function(newLevel) {
    store.state.player.strength.level = newLevel
    store.state.player.strength.nextLevel = neededExperience(store.state.player.strength.level + 1)
    loadStatScreen("str", store.state.player.strength)
  }

  self.setStrengthExperience = function(experience) {
    store.state.player.strength.experience = experience
    while (store.state.player.strength.experience >= store.state.player.strength.nextLevel) {
      store.state.player.strength.experience -= store.state.player.strength.nextLevel
      setStrengthLevel(store.state.player.strength.level + 1)
    }
    loadStatScreen("str", store.state.player.strength)
  }

  const setDexterityLevel = function(newLevel) {
    store.state.player.dexterity.level = newLevel
    store.state.player.dexterity.nextLevel = neededExperience(store.state.player.dexterity.level + 1)
    loadStatScreen("dex", store.state.player.dexterity)
  }

  self.setDexterityExperience = function(experience) {
    store.state.player.dexterity.experience = experience
    while (store.state.player.dexterity.experience >= store.state.player.dexterity.nextLevel) {
      store.state.player.dexterity.experience -= store.state.player.dexterity.nextLevel
      setDexterityLevel(store.state.player.dexterity.level + 1)
    }
    loadStatScreen("dex", store.state.player.dexterity)
  }

  const setConstitutionLevel = function(newLevel) {
    store.state.player.constitution.level = newLevel
    store.state.player.constitution.nextLevel = neededExperience(store.state.player.constitution.level + 1)
    self.setHealthMaximumValue(((store.state.player.constitution.level + store.state.player.constitution.bonus) ** 2) * 4)
    loadStatScreen("con", store.state.player.constitution)
  }

  self.setConstitutionExperience = function(experience) {
    store.state.player.constitution.experience = experience
    while (store.state.player.constitution.experience >= store.state.player.constitution.nextLevel) {
      store.state.player.constitution.experience -= store.state.player.constitution.nextLevel
      setConstitutionLevel(store.state.player.constitution.level + 1)
    }
    loadStatScreen("con", store.state.player.constitution)
  }

  const setSpeedLevel = function(newLevel) {
    store.state.player.speed.level = newLevel
    store.state.player.speed.nextLevel = neededExperience(store.state.player.speed.level + 1)
    loadStatScreen("spd", store.state.player.speed)
  }

  self.setSpeedExperience = function(experience) {
    store.state.player.speed.experience = experience
    while (store.state.player.speed.experience >= store.state.player.speed.nextLevel) {
      store.state.player.speed.experience -= store.state.player.speed.nextLevel
      setSpeedLevel(store.state.player.speed.level + 1)
    }
    loadStatScreen("spd", store.state.player.speed)
  }

  const setMagicLevel = function(newLevel) {
    store.state.player.magic.level = newLevel
    store.state.player.magic.nextLevel = neededExperience(store.state.player.magic.level + 1)
    spells.updateSpellbook()
    self.setManaMaximumValue(((store.state.player.magic.level + store.state.player.magic.bonus) ** 2) * 2)
    loadStatScreen("mgc", store.state.player.magic)
  }

  self.setMagicExperience = function(experience) {
    store.state.player.magic.experience = experience
    while (store.state.player.magic.experience >= store.state.player.magic.nextLevel) {
      store.state.player.magic.experience -= store.state.player.magic.nextLevel
      setMagicLevel(store.state.player.magic.level + 1)
    }
    loadStatScreen("mgc", store.state.player.magic)
  }

  self.setStrengthBonus = function(bonus) {
    store.state.player.strength.bonus = bonus
    loadStatScreen("str", store.state.player.strength)
  }

  self.setDexterityBonus = function(bonus) {
    store.state.player.dexterity.bonus = bonus
    loadStatScreen("dex", store.state.player.dexterity)
  }

  self.setConstitutionBonus = function(bonus) {
    store.state.player.constitution.bonus = bonus
    self.setHealthMaximumValue(((store.state.player.constitution.level + store.state.player.constitution.bonus) ** 2) * 4)
    loadStatScreen("con", store.state.player.constitution)
  }

  self.setSpeedBonus = function(bonus) {
    store.state.player.speed.bonus = bonus
    loadStatScreen("spd", store.state.player.speed)
  }

  self.setMagicBonus = function(bonus) {
    store.state.player.magic.bonus = bonus
    self.setManaMaximumValue(((store.state.player.magic.level + store.state.player.magic.bonus) ** 2) * 2)
    loadStatScreen("mgc", store.state.player.magic)
  }

  // Other Methods
  self.loadPlayerScreen = function() {
    document.getElementById("name").innerHTML = store.state.player.name
    loadStatScreen("str", store.state.player.strength)
    loadStatScreen("dex", store.state.player.dexterity)
    loadStatScreen("con", store.state.player.constitution)
    loadStatScreen("spd", store.state.player.speed)
    loadStatScreen("mgc", store.state.player.magic)
    loadConditionScreen("hp", store.state.player.health)
    loadConditionScreen("mp", store.state.player.mana)
  }

  self.rest = function() {
    if (store.state.player.resting) {
      self.setHealthCurrentValue(store.state.player.health.currentValue + (5 * store.state.player.constitution.level * buffs.getRestingMultiplier())) // eslint-disable-line max-len
      self.setManaCurrentValue(store.state.player.mana.currentValue + (5 * store.state.player.magic.level * buffs.getRestingMultiplier())) // eslint-disable-line max-len
      if (self.isFullyRested()) {
        self.toggleRest()
      }
    }
  }

  self.isFullyRested = function() {
    if (store.state.player.health.currentValue === store.state.player.health.maximumValue && store.state.player.mana.currentValue === store.state.player.mana.maximumValue) { // eslint-disable-line max-len
      return true
    }
    return false
  }

  self.loadExploreButton = function() {
    if (store.state.player.currentFloor !== 0) {
      if (store.state.player.inBattle || store.state.player.resting) {
        if (tower.floorExplorationComplete(store.state.player.currentFloor)) {
          document.getElementById("exploreButton").innerHTML =
          '<button class="btn btn-danger btn-block" disabled="disabled">Find Monster</button>'
        }
        else {
          document.getElementById("exploreButton").innerHTML =
          '<button class="btn btn-danger btn-block" disabled="disabled">Explore</button>'
        }
      }
      else if (tower.floorExplorationComplete(store.state.player.currentFloor)) {
        document.getElementById("exploreButton").innerHTML =
        '<button class="btn btn-default btn-block" onclick="tower.exploreFloor()">Find Monster</button>'
      }
      else {
        document.getElementById("exploreButton").innerHTML =
        '<button class="btn btn-default btn-block" onclick="tower.exploreFloor()">Explore</button>'
      }
    }
    else {
      document.getElementById("exploreButton").innerHTML = ''
    }
  }

  self.loadRestButton = function() {
    if (store.state.player.currentFloor !== 0) {
      if (store.state.player.inBattle) {
        document.getElementById("restButton").innerHTML =
        '<button class="btn btn-danger btn-block" disabled="disabled">Rest</button>'
      }
      else if (store.state.player.resting) {
        document.getElementById("restButton").innerHTML =
        '<button class="btn btn-success btn-block" onclick="player.toggleRest()">Stop Resting</button>'
      }
      else {
        document.getElementById("restButton").innerHTML =
        '<button class="btn btn-default btn-block" onclick="player.toggleRest()">Rest</button>'
      }
    }
    else {
      document.getElementById("restButton").innerHTML = ''
    }
  }

  self.gainExperience = function(monster, attacking) {
    const multiplier = buffs.getLevelingSpeedMultiplier()
    if (attacking) {
      self.setStrengthExperience(store.state.player.strength.experience + (multiplier * (monster.strength / store.state.player.constitution.level))) // eslint-disable-line max-len
      self.setDexterityExperience(store.state.player.dexterity.experience + (multiplier * (monster.dexterity / store.state.player.dexterity.level))) // eslint-disable-line max-len
    }
    else {
      self.setConstitutionExperience(store.state.player.constitution.experience + (multiplier * (monster.strength / store.state.player.constitution.level))) // eslint-disable-line max-len
    }
  }

  const loseStats = function(percentage) {
    setStrengthLevel(store.state.player.strength.level - Math.floor(store.state.player.strength.level * (percentage / 100)))
    setDexterityLevel(store.state.player.dexterity.level - Math.floor(store.state.player.dexterity.level * (percentage / 100)))
    setConstitutionLevel(store.state.player.constitution.level - Math.floor(store.state.player.constitution.level * (percentage / 100))) // eslint-disable-line max-len
    setSpeedLevel(store.state.player.speed.level - Math.floor(store.state.player.speed.level * (percentage / 100)))
    setMagicLevel(store.state.player.magic.level - Math.floor(store.state.player.store.state.player.magic.level * (percentage / 100))) // eslint-disable-line max-len
  }

  const loseAllExperience = function() {
    self.setStrengthExperience(0)
    self.setDexterityExperience(0)
    self.setConstitutionExperience(0)
    self.setSpeedExperience(0)
    self.setMagicExperience(0)
  }

  self.death = function(monster) {
    store.state.player.inBattle = false
    if (monsters.getInBossBattle()) {
      monsters.setInBossBattle(false)
    }
    document.getElementById("combatlog").innerHTML += `You have been defeated by the ${monster.name}!`
    if (system.getIdleMode()) {
      system.toggleIdle()
    }
    tower.changeFloor(-store.state.player.currentFloor)
    upgrades.updateExcelia(-((100 - buffs.getExceliaSavedOnDeath()) * upgrades.getExcelia()) / 100)
    loseStats(10 - buffs.getDeathPenaltyReduction())
    loseAllExperience()
    monsters.loadMonsterInfo()
    spells.updateSpellbook()
    self.toggleRest()
  }

  self.toggleRest = function() {
    store.state.player.resting = !store.state.player.resting
    self.loadRestButton()
    self.loadExploreButton()
  }
}

const player = new Player()

export { player } // eslint-disable-line
