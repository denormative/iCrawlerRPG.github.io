/* eslint-disable func-names */
/* eslint-disable no-alert */

import { buffs } from './buffs.js'
import { inventory } from './inventory.js'
import { player } from './player.js'
import { spells } from './spells.js'
import { tower } from './tower.js'
import { upgrades } from './upgrades.js'

import store from '../../vuex/store'

const Monsters = function() {
  let inBossBattle = false
  /* beautify preserve:start */
  const monsterList = [
    // First Tier
    { name: "Rat", killed: 0 },
    { name: "Bat", killed: 0 },
    { name: "Slime", killed: 0 },
    { name: "Kobold", killed: 0 },
    { name: "Wolf", killed: 0 },
    { name: "Lizard", killed: 0 },
    { name: "Goblin", killed: 0 },
    { name: "Bandit", killed: 0 },
    { name: "Spider", killed: 0 },
    { name: "Eagle", killed: 0 },

    // Second Tier
    { name: "Bear", killed: 0 },
    { name: "Snake", killed: 0 },
    { name: "Troll", killed: 0 },
    { name: "Kobold Warrior", killed: 0 },
    { name: "Giant Wolf", killed: 0 },
    { name: "Ghoul", killed: 0 },
    { name: "Alligator", killed: 0 },
    { name: "Giant Lizard", killed: 0 },
    { name: "Giant Rat", killed: 0 },
    { name: "Orc Child", killed: 0 },

    // Third Tier
    { name: "Stone Golem", killed: 0 },
    { name: "Lesser Elemental", killed: 0 },
    { name: "Kobold Chieftain", killed: 0 },
    { name: "Weakened Minotaur", killed: 0 },
    { name: "Troll Warrior", killed: 0 },
    { name: "Wisp", killed: 0 },
    { name: "Dragon Hatchling", killed: 0 },
    { name: "Goblin Shaman", killed: 0 },
    { name: "Giant Snake", killed: 0 },
    { name: "Mummy", killed: 0 },

    // Fourth Tier
    { name: "Elemental", killed: 0 },
    { name: "Lesser Imp", killed: 0 },
    { name: "Lizardman", killed: 0 },
    { name: "Orc", killed: 0 },
    { name: "Troll Chieftain", killed: 0 },
    { name: "Cyclops", killed: 0 },
    { name: "Young Vampire", killed: 0 },
    { name: "Harpy", killed: 0 },
    { name: "Empowered Wisp", killed: 0 },
    { name: "Ancient Mummy", killed: 0 },

    // Fifth Tier
    { name: "Imp", killed: 0 },
    { name: "Orc Soldier", killed: 0 },
    { name: "Young Minotaur", killed: 0 },
    { name: "Floating Eye", killed: 0 },
    { name: "Banshee", killed: 0 },
    { name: "Young Dragon", killed: 0 },
    { name: "Cyclops Warrior", killed: 0 },
    { name: "Lizardman Archer", killed: 0 },
    { name: "Living Armor", killed: 0 },
    { name: "Frenzied Goblin", killed: 0 },
  ]
  /* beautify preserve:end */

  const bossList = [
    {
      name: "The First Guardian, Alstroemeria",
      currentHealth: 91204,
      maximumHealth: 91204,
      strength: 151,
      dexterity: 151,
      constitution: 151,
      status: 0,
    }, {
      name: "The Second Guardian, Bouvardia",
      currentHealth: 372100,
      maximumHealth: 372100,
      strength: 305,
      dexterity: 305,
      constitution: 305,
      status: 0,
    }, {
      name: "The Third Guardian, Clarkia",
      currentHealth: 864900,
      maximumHealth: 864900,
      strength: 465,
      dexterity: 465,
      constitution: 465,
      status: 0,
    }, {
      name: "The Fourth Guardian, Dianthus",
      currentHealth: 1638400,
      maximumHealth: 1638400,
      strength: 640,
      dexterity: 640,
      constitution: 640,
      status: 0,
    }, {
      name: "The Fifth Guardian, Erigeron",
      currentHealth: 2930944,
      maximumHealth: 2930944,
      strength: 856,
      dexterity: 856,
      constitution: 856,
      status: 0,
    },
  ]

  let instancedMonster = {
    name: "",
    currentHealth: 0,
    maximumHealth: 0,
    strength: 0,
    dexterity: 0,
    constitution: 0,
    status: 0,
  }

  const self = this
  // Save Method
  self.save = function() {
    const monstersSave = {
      savedMonsterList: monsterList,
      savedInstancedMonster: instancedMonster,
      savedInBossBattle: inBossBattle,
    }
    localStorage.setItem("monstersSave", JSON.stringify(monstersSave))
  }

  const loadMonsterList = function(savedMonsterList) {
    for (let i = 0; i < savedMonsterList.length; i++) {
      if (i === monsterList.length) {
        break
      }
      if (savedMonsterList[i].killed !== undefined) {
        monsterList[i].killed = savedMonsterList[i].killed
      }
    }
  }

  const loadInstancedMonster = function(savedInstancedMonster) {
    if (savedInstancedMonster.name !== undefined) {
      instancedMonster.name = savedInstancedMonster.name
    }
    if (savedInstancedMonster.currentHealth !== undefined) {
      instancedMonster.currentHealth = savedInstancedMonster.currentHealth
    }
    if (savedInstancedMonster.maximumHealth !== undefined) {
      instancedMonster.maximumHealth = savedInstancedMonster.maximumHealth
    }
    if (savedInstancedMonster.strength !== undefined) {
      instancedMonster.strength = savedInstancedMonster.strength
    }
    if (savedInstancedMonster.dexterity !== undefined) {
      instancedMonster.dexterity = savedInstancedMonster.dexterity
    }
    if (savedInstancedMonster.constitution !== undefined) {
      instancedMonster.constitution = savedInstancedMonster.constitution
    }
    if (savedInstancedMonster.status !== undefined) {
      instancedMonster.status = savedInstancedMonster.status
    }
  }

  // Load Method
  self.load = function() {
    const monstersSave = JSON.parse(localStorage.getItem("monstersSave"))
    if (monstersSave) {
      if (monstersSave.savedMonsterList !== undefined) {
        loadMonsterList(monstersSave.savedMonsterList)
      }
      if (monstersSave.savedInstancedMonster !== undefined) {
        loadInstancedMonster(monstersSave.savedInstancedMonster)
      }
      if (monstersSave.savedInBossBattle !== undefined) {
        inBossBattle = monstersSave.savedInBossBattle
      }
    }
  }

  // Getters
  self.getMonsterList = function() {
    return monsterList
  }

  self.getInstancedMonster = function() {
    return instancedMonster
  }

  self.getBossMonster = function(number) {
    return bossList[number]
  }

  self.getInBossBattle = function() {
    return inBossBattle
  }

  // Setters
  self.setInstancedMonster = function(updatedMonster) {
    instancedMonster = updatedMonster
  }

  self.setInBossBattle = function(boolean) {
    inBossBattle = boolean
  }

  // Other Methods
  self.attackMelee = function() {
    if (store.state.player.inBattle) {
      self.battle(instancedMonster, false)
    }
  }

  self.loadMonsterInfo = function(monster) {
    if (monster !== undefined) {
      document.getElementById("monstername").innerHTML = monster.name
      document.getElementById("monsterhp").innerHTML = Math.round(monster.currentHealth)
      document.getElementById("monsterstr").innerHTML = monster.strength
      document.getElementById("monsterdex").innerHTML = monster.dexterity
      document.getElementById("monstercon").innerHTML = monster.constitution
      document.getElementById("monsterbar").style.width = `${100 * (monster.currentHealth / monster.maximumHealth)}%`
      if (!inBossBattle) {
        document.getElementById("combatlog").innerHTML = `You are attacked by a ${monster.name}!<br>`
      }
      else {
        document.getElementById("combatlog").innerHTML = `You challenge a floor boss! You begin fighting ${monster.name}!<br>`
      }
      player.setInBattle(true)
    }
    else {
      document.getElementById("monstername").innerHTML = "None"
      document.getElementById("monsterhp").innerHTML = "0"
      document.getElementById("monsterstr").innerHTML = "0"
      document.getElementById("monsterdex").innerHTML = "0"
      document.getElementById("monstercon").innerHTML = "0"
      document.getElementById("monsterbar").style.width = "0%"
    }
  }

  const playerAttacks = function(monster) {
    let damage = damageFormula(store.state.player.strength.level + store.state.player.strength.bonus, store.state.player.dexterity.level + store.state.player.dexterity.bonus, monster.constitution, monster.currentHealth) // eslint-disable-line
    if (buffs.getRageTimeLeft() !== 0) {
      damage *= 5
    }
    if (damage >= monster.currentHealth) {
      damage = monster.currentHealth
    }
    document.getElementById("combatlog").innerHTML += `You dealt ${Math.round(damage)} damage to the ${monster.name}.<br>`
    player.gainExperience(monster, true)
    return self.monsterTakeDamage(monster, damage)
  }

  const monsterAttacks = function(monster) {
    let damage = damageFormula(monster.strength, monster.dexterity, store.state.player.constitution.level + store.state.player.constitution.bonus, store.state.player.health.currentValue) // eslint-disable-line
    if (buffs.getRageTimeLeft() !== 0) {
      damage *= 2
    }
    if (buffs.getAegisTimeLeft() === 0) {
      const barrier = buffs.getBarrierLeft()
      if (barrier > 0) {
        if (barrier >= damage) {
          buffs.setBarrierLeft(barrier - damage)
          document.getElementById("combatlog").innerHTML +=
          `Your barrier absorbed ${Math.round(damage)} damage from ${monster.name}'s attack.<br>`
          buffs.updateTemporaryBuffs(false)
          return false
        }

        document.getElementById("combatlog").innerHTML +=
        `Your barrier absorbed ${Math.round(barrier)} damage from ${monster.name}'s attack.<br>`
        document.getElementById("combatlog").innerHTML += "Your barrier has shattered.<br>"
        damage -= barrier
        buffs.setBarrierLeft(0)
        buffs.updateTemporaryBuffs(false)
      }
      player.setHealthCurrentValue(store.state.player.health.currentValue - damage)
      document.getElementById("combatlog").innerHTML +=
      `You took ${Math.round(damage)} damage from the ${monster.name}'s attack.<br>`
      if (store.state.player.health.currentValue === 0) {
        player.death(monster)
        return true
      }
    }
    else {
      document.getElementById("combatlog").innerHTML +=
      `Aegis absorbed ${Math.round(damage)} damage from ${monster.name}'s attack.<br>`
    }
    player.gainExperience(monster, false)
    return false
  }

  self.battle = function(monster, spellCast) {
    if (!store.state.player.inBattle) {
      player.setInBattle(true)
      player.loadRestButton()
      player.loadExploreButton()
      self.loadMonsterInfo(monster)
      if (buffs.getCastFireballInBattle()) {
        spells.castSpell("fireball")
      }
    }
    else {
      let isDead = false
      if (!spellCast) {
        document.getElementById("combatlog").innerHTML = ''
        if (buffs.getCastCureInBattle() && store.state.player.health.currentValue <= store.state.player.health.maximumValue / 2) {
          if (!spells.castSpell("cure")) {
            isDead = playerAttacks(monster)
          }
          else {
            buffs.updateTemporaryBuffs(true)
            return
          }
        }
        else {
          isDead = playerAttacks(monster)
        }
      }
      if (!isDead) {
        isDead = monsterAttacks(monster)
      }
    }
    buffs.updateTemporaryBuffs(true)
  }

  const monsterCrystalDrop = function(monster) {
    const type = Math.floor(Math.random() * 5)
    const experience = monster.strength + monster.dexterity + monster.constitution
    if (type === 0) {
      inventory.createCrystal("Strength", experience)
    }
    else if (type === 1) {
      inventory.createCrystal("Dexterity", experience)
    }
    else if (type === 2) {
      inventory.createCrystal("Constitution", experience)
    }
    else if (type === 3) {
      inventory.createCrystal("Speed", experience)
    }
    else if (type === 4) {
      inventory.createCrystal("Magic", experience)
    }
    document.getElementById("combatlog").innerHTML += `The ${monster.name} has left an experience crystal behind!<br>`
  }

  const updateMonsterKilled = function(name) {
    for (let i = 0; i < monsterList.length; i++) {
      if (monsterList[i].name === name) {
        monsterList[i].killed += 1
      }
    }
  }

  const monsterDeath = function(monster) {
    player.setInBattle(false)
    if (!inBossBattle) {
      document.getElementById("combatlog").innerHTML += `You have defeated the ${monster.name}!<br>`
      if (Math.floor(Math.random() * 100) < 10) {
        monsterCrystalDrop(monster)
        inventory.updateInventory()
      }
      updateMonsterKilled(monster.name)
    }
    else {
      document.getElementById("combatlog").innerHTML +=
      `You have defeated a floor boss! ${monster.name} recognizes your strength and allows you to advance.`
      tower.setBossFound(false)
      tower.setLastBossDefeated(store.state.player.currentFloor)
      tower.bossDefeated()
      inBossBattle = false
    }
    upgrades.gainExcelia(monster)
    player.loadRestButton()
    player.loadExploreButton()
    self.loadMonsterInfo()
  }

  self.monsterTakeDamage = function(monster, damage) {
    monster.currentHealth -= damage
    document.getElementById("monsterhp").innerHTML = Math.floor(monster.currentHealth)
    document.getElementById("monsterbar").style.width = `${100 * (monster.currentHealth / monster.maximumHealth)}%`
    if (monster.currentHealth <= 0) {
      monsterDeath(monster)
      return true
    }
    return false
  }

  let damageFormula = function(attackerStrength, attackerDexterity, defenderConstitution, defenderHealth) {
    const strengthWeigth = 2
    const dexterityWeigth = 0.1
    const constitutionWeigth = 0.5
    let damage = ((attackerStrength * strengthWeigth) - (defenderConstitution * constitutionWeigth)) * (attackerDexterity * dexterityWeigth) // eslint-disable-line

    if (damage < 0) {
      damage = 0
    }
    else if (damage > defenderHealth) {
      damage = defenderHealth
    }
    return damage
  }

  const distributeStats = function(monster, statPoolArg) {
    let choice
    let statPool = statPoolArg
    while (statPool !== 0) {
      choice = Math.floor(Math.random() * 3)
      while (choice === 3) {
        choice = Math.floor(Math.random() * 3)
      }
      if (choice === 0) {
        monster.strength += 1
      }
      else if (choice === 1) {
        monster.dexterity += 1
      }
      else if (choice === 2) {
        monster.constitution += 1
      }
      statPool -= 1
    }
  }

  const calculateHealth = function(constitution) {
    return ((constitution ** 2) * 4)
  }

  const createMonster = function(number) {
    const tempMonster = { name: "", currentHealth: 0, maximumHealth: 0, strength: 0, dexterity: 0, constitution: 0, status: 0 }
    let statPool = Math.round(((store.state.player.currentFloor * 15) + (1.1 ** (store.state.player.currentFloor - 1))) - 1)
    tempMonster.name = monsterList[number].name
    tempMonster.strength += 1
    tempMonster.dexterity += 1
    tempMonster.constitution += 1
    statPool -= 3
    distributeStats(tempMonster, statPool)
    tempMonster.maximumHealth = calculateHealth(tempMonster.constitution)
    tempMonster.currentHealth = tempMonster.maximumHealth
    return tempMonster
  }

  const rollMonster = function() {
    const tier = Math.floor((store.state.player.currentFloor - 1) / 10)
    let monster = Math.floor(Math.random() * 10)
    while (monster === 10) {
      monster = Math.floor(Math.random() * 10)
    }
    instancedMonster = createMonster((tier * 10) + monster)
    self.battle(instancedMonster, false)
  }

  self.battleChance = function(boolean) {
    if (boolean) {
      rollMonster()
      return true
    }

    const check = Math.random() * 100
    if (check <= tower.getFloorMonsterDensity(store.state.player.currentFloor)) {
      rollMonster()
      return true
    }
    return false
  }

  self.runAway = function() {
    if (store.state.player.inBattle) {
      document.getElementById("combatlog").innerHTML = ""
      const runRoll = Math.random() * (instancedMonster.strength + instancedMonster.dexterity + instancedMonster.constitution)
      if (runRoll < store.state.player.speed.level) {
        document.getElementById("combatlog").innerHTML += `You escaped from the battle against ${instancedMonster.name}.`
        self.loadMonsterInfo()
        player.setSpeedExperience(store.state.player.speed.experience + runRoll)
        player.setInBattle(false)
        player.loadExploreButton()
        player.loadRestButton()
      }
      else {
        document.getElementById("combatlog").innerHTML += "You failed to run away.<br>"
        self.battle(instancedMonster, true)
      }
    }
    if (inBossBattle) {
      inBossBattle = false
    }
  }
}

const monsters = new Monsters()
tower.build()

export { monsters } // eslint-disable-line
