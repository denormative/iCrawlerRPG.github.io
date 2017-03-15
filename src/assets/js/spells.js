/* eslint-disable func-names */
/* eslint-disable no-alert */

import { buffs } from './buffs.js'
import { inventory } from './inventory.js'
import { monsters } from './monsters.js'
import { player } from './player.js'

const Spells = function() {
  let arcania = 0

  const spellbook = []
  spellbook.push({
    name: "Cure",
    id: "cure",
    type: 0,
    requiredMagic: 5,
    arcaniaCost: 0,
    learned: true,
    baseMana: 15,
    experience: 0,
    nextLevel: 150,
    baseNextLevel: 150,
    level: 0,
    description: "",
  })

  spellbook.push({
    name: "Fireball",
    id: "fireball",
    type: 1,
    requiredMagic: 5,
    arcaniaCost: 0,
    learned: true,
    baseMana: 10,
    experience: 0,
    nextLevel: 100,
    baseNextLevel: 100,
    level: 0,
    description: "",
  })

  spellbook.push({
    name: "Transmutation",
    id: "transmutation",
    type: 3,
    requiredMagic: 5,
    arcaniaCost: 0,
    learned: true,
    baseMana: 50,
    experience: 0,
    nextLevel: 500,
    baseNextLevel: 500,
    level: 0,
    description: "",
  })

  spellbook.push({
    name: "Barrier",
    id: "barrier",
    type: 0,
    requiredMagic: 10,
    arcaniaCost: 1000,
    learned: false,
    baseMana: 100,
    experience: 0,
    nextLevel: 1000,
    baseNextLevel: 1000,
    level: 0,
    description: "",
  })

  spellbook.push({
    name: "Slow",
    id: "slow",
    type: 2,
    requiredMagic: 20,
    arcaniaCost: 2000,
    learned: false,
    baseMana: 400,
    experience: 0,
    nextLevel: 4000,
    baseNextLevel: 4000,
    level: 0,
    description: "",
  })

  spellbook.push({
    name: "Rage",
    id: "rage",
    type: 1,
    requiredMagic: 25,
    arcaniaCost: 2500,
    learned: false,
    baseMana: 1250,
    experience: 0,
    nextLevel: 12500,
    baseNextLevel: 12500,
    level: 0,
    description: "",
  })

  spellbook.push({
    name: "Shadow Ball",
    id: "shadowball",
    type: 1,
    requiredMagic: 30,
    arcaniaCost: 3000,
    learned: false,
    baseMana: 150,
    experience: 0,
    nextLevel: 1500,
    baseNextLevel: 1500,
    level: 0,
    description: "",
  })

  spellbook.push({
    name: "Aegis",
    id: "aegis",
    type: 0,
    requiredMagic: 50,
    arcaniaCost: 5000,
    learned: false,
    baseMana: 5000,
    experience: 0,
    nextLevel: 50000,
    baseNextLevel: 50000,
    level: 0,
    description: "",
  })

  const self = this
  // Save Method
  self.save = function() {
    const spellsSave = {
      savedArcania: arcania,
      savedSpellbook: spellbook,
    }
    localStorage.setItem("spellsSave", JSON.stringify(spellsSave))
  }

  // Load Method
  const loadSpellbook = function(savedSpellbook) {
    let success = false
    for (let i = 0; i < savedSpellbook.length; i++) {
      if (i === spellbook.length) {
        break
      }
      let j
      for (j = 0; j < spellbook.length; j++) {
        if (spellbook[j].id === savedSpellbook[i].id) {
          success = true
          break
        }
      }
      if (success) {
        if (savedSpellbook[i].learned !== undefined) {
          spellbook[j].learned = savedSpellbook[i].learned
        }
        if (savedSpellbook[i].experience !== undefined) {
          spellbook[j].experience = savedSpellbook[i].experience
        }
        if (savedSpellbook[i].nextLevel !== undefined) {
          spellbook[j].nextLevel = savedSpellbook[i].nextLevel
        }
        if (savedSpellbook[i].level !== undefined) {
          spellbook[j].level = savedSpellbook[i].level
        }
      }
      success = false
    }
  }

  self.load = function() {
    const spellsSave = JSON.parse(localStorage.getItem("spellsSave"))
    if (spellsSave) {
      if (spellsSave.savedArcania !== undefined) {
        arcania = spellsSave.savedArcania
      }
      if (spellsSave.savedSpellbook !== undefined) {
        loadSpellbook(spellsSave.savedSpellbook)
      }
    }
  }

  // Getters

  // Setters
  self.setArcania = function(number) {
    arcania = number
    document.getElementById("arcania").innerHTML = Math.round(100 * arcania) / 100
  }

  // Other Methods
  const spellType = function(type) {
    if (type === 0) {
      return "btn-info"
    }
    else if (type === 1) {
      return "btn-danger"
    }
    else if (type === 2) {
      return "btn-warning"
    }
    else if (type === 3) {
      return "btn-success"
    }
    return ""
  }

  const findSpell = function(spellId) {
    for (let i = 0; i < spellbook.length; i++) {
      if (spellbook[i].id === spellId) {
        return i
      }
    }
    return undefined
  }

  const spellCost = function(spell) {
    let i
    let cost = spell.baseMana
    if (spell.type === 2) {
      for (i = 0; i < spell.level; i++) {
        cost -= 0.1 * cost
      }
      if (cost <= 10) {
        cost = 10
      }
    }
    else {
      for (i = 0; i < spell.level; i++) {
        cost += 0.1 * cost
      }
    }
    return Math.round(cost)
  }

  const updateSpellHtml = function(spell, hasBought) {
    document.getElementById("arcania").innerHTML = Math.round(100 * arcania) / 100
    if (!hasBought) {
      document.getElementById(`${spell.id}arcaniacost`).innerHTML = spell.arcaniaCost
      document.getElementById(`${spell.id}arcaniacostall`).innerHTML = spell.arcaniaCost
    }
    else {
      document.getElementById(`${spell.id}costall`).innerHTML = spellCost(spell)
      document.getElementById(`${spell.id}cost`).innerHTML = spellCost(spell)
      document.getElementById(`${spell.id}xpall`).style.width = `${100 * (spell.experience / spell.nextLevel)}%`
      document.getElementById(`${spell.id}progall`).innerHTML = `${Math.round(100 * (100 * (spell.experience / spell.nextLevel))) / 100}%` // eslint-disable-line
      document.getElementById(`${spell.id}levelall`).innerHTML = spell.level
      document.getElementById(`${spell.id}xp`).style.width = `${100 * (spell.experience / spell.nextLevel)}%`
      document.getElementById(`${spell.id}prog`).innerHTML = `${Math.round(100 * (100 * (spell.experience / spell.nextLevel))) / 100}%` // eslint-disable-line
      document.getElementById(`${spell.id}level`).innerHTML = spell.level
    }
  }

  const levelSpell = function(spell, experience) {
    spell.experience += experience
    while (spell.experience >= spell.nextLevel) {
      spell.level += 1
      spell.experience -= spell.nextLevel
      spell.nextLevel = (2 ** spell.level) * spell.baseNextLevel
      self.updateSpellbook()
    }
    updateSpellHtml(spell, true)
  }

  self.isSpellLearned = function(spellId) {
    if (spellId === "") {
      return true
    }

    for (let i = 0; i < spellbook.length; i++) {
      if (spellbook[i].id === spellId) {
        return spellbook[i].learned
      }
    }
    return false
  }

  self.buySpell = function(spellId) {
    const spell = findSpell(spellId)
    if (arcania >= spellbook[spell].arcaniaCost) {
      self.setArcania(arcania - spellbook[spell].arcaniaCost)
      spellbook[spell].learned = true
    }
    self.updateSpellbook()
  }

  const curePotency = function(cure) {
    const cureBasePotency = 25
    const cureLevelPotency = 15 * cure.level
    const cureMagicPotency = 3 * ((player.getMagicLevel() + player.getMagicBonus()) - 5)
    return Math.floor(cureBasePotency + cureLevelPotency + cureMagicPotency)
  }

  const castCure = function(cure) {
    const currentHealth = player.getHealthCurrentValue()
    const maximumHealth = player.getHealthMaximumValue()
    if (currentHealth === maximumHealth) {
      return false
    }

    let cureValue = curePotency(cure)
    if (maximumHealth - currentHealth < cureValue) {
      cureValue = maximumHealth - currentHealth
    }
    player.setHealthCurrentValue(currentHealth + cureValue)
    if (player.getInBattle()) {
      document.getElementById("combatlog").innerHTML = ''
      document.getElementById("combatlog").innerHTML += `You healed yourself for ${Math.round(cureValue)} HP with Cure.<br>`
      monsters.battle(monsters.getInstancedMonster(), true)
    }
    return true
  }

  const fireballPotency = function(fireball) {
    const fireballBasePotency = 15
    const fireballLevelPotency = 5 * fireball.level
    const fireballMagicPotency = 1 * ((player.getMagicLevel() + player.getMagicBonus()) - 5)
    return Math.floor(fireballBasePotency + fireballLevelPotency + fireballMagicPotency)
  }

  const castFireball = function(fireball) {
    if (!player.getInBattle()) {
      return false
    }

    const monster = monsters.getInstancedMonster()
    let fireballDamage = fireballPotency(fireball)
    if (monster.currentHealth <= fireballDamage) {
      fireballDamage = monster.currentHealth
    }
    document.getElementById("combatlog").innerHTML = ''
    document.getElementById("combatlog").innerHTML +=
    `Your fireball hit the ${monster.name} for ${Math.floor(fireballDamage)} damage.<br>`
    if (!monsters.monsterTakeDamage(monsters.getInstancedMonster(), fireballDamage)) {
      monsters.battle(monsters.getInstancedMonster(), true)
    }
    return true
  }

  const barrierPotency = function(barrier) {
    const barrierBasePotency = 50
    const barrierLevelPotency = 50 * barrier.level
    const barrierMagicPotency = 10 * ((player.getMagicLevel() + player.getMagicBonus()) - 10)
    return Math.floor(barrierBasePotency + barrierLevelPotency + barrierMagicPotency)
  }

  const castBarrier = function(barrier) {
    const barrierValue = barrierPotency(barrier)
    if (buffs.getBarrierLeft() === barrierValue) {
      return false
    }

    buffs.setBarrierLeft(barrierValue)
    buffs.updateTemporaryBuffs(false)
    if (player.getInBattle()) {
      document.getElementById("combatlog").innerHTML = ''
      document.getElementById("combatlog").innerHTML += "You created a magical barrier.<br>"
      monsters.battle(monsters.getInstancedMonster(), true)
    }
    return true
  }

  const aegisPotency = function(aegis) {
    const aegisBasePotency = 5
    const aegisLevelPotency = 1 * aegis.level
    const aegisMagicPotency = 0.2 * ((player.getMagicLevel() + player.getMagicBonus()) - 50)
    return Math.floor(aegisBasePotency + aegisLevelPotency + aegisMagicPotency)
  }

  const castAegis = function(aegis) {
    if (buffs.getAegisTimeLeft() !== 0) {
      return false
    }

    buffs.setAegisTimeLeft(aegisPotency(aegis))
    buffs.updateTemporaryBuffs(false)
    if (player.getInBattle()) {
      document.getElementById("combatlog").innerHTML = ''
      document.getElementById("combatlog").innerHTML += "You summon the heavenly shield, Aegis.<br>"
      monsters.battle(monsters.getInstancedMonster(), true)
    }
    return true
  }

  const slowPotency = function(slow) {
    const slowBasePotency = 5
    const slowLevelPotency = 1 * slow.level
    const slowMagicPotency = 0.2 * ((player.getMagicLevel() + player.getMagicBonus()) - 20)
    return Math.floor(slowBasePotency + slowLevelPotency + slowMagicPotency)
  }

  const castSlow = function(slow) {
    const monster = monsters.getInstancedMonster()
    if (!player.getInBattle() || monster.dexterity <= 1) {
      return false
    }

    let slowEffect = slowPotency(slow)
    if (monster.dexterity <= slowEffect) {
      slowEffect = monster.dexterity - 1
    }
    monster.dexterity -= slowEffect
    document.getElementById("monsterdex").innerHTML = monster.dexterity
    document.getElementById("combatlog").innerHTML = ''
    document.getElementById("combatlog").innerHTML +=
    `You have cast slow on the ${monster.name}. Its dexterity has been lowered by ${slowEffect}.<br>`
    monsters.setInstancedMonster(monster)
    monsters.battle(monsters.getInstancedMonster(), true)
    return true
  }

  const ragePotency = function(rage) {
    const rageBasePotency = 5
    const rageLevelPotency = 1 * rage.level
    const rageMagicPotency = 0.2 * ((player.getMagicLevel() + player.getMagicBonus()) - 25)
    return Math.floor(rageBasePotency + rageLevelPotency + rageMagicPotency)
  }

  const castRage = function(rage) {
    if (!player.getInBattle()) {
      return false
    }

    buffs.setRageTimeLeft(ragePotency(rage))
    buffs.updateTemporaryBuffs(false)
    document.getElementById("combatlog").innerHTML = ''
    document.getElementById("combatlog").innerHTML += "You have entered a state of frenzy!<br>"
    monsters.battle(monsters.getInstancedMonster(), true)
    return true
  }

  const transmutationPotency = function(transmutation) {
    const transmutationBasePotency = 1
    const transmutationLevelPotency = 1 * transmutation.level
    const transmutationMagicPotency = 0.2 * ((player.getMagicLevel() + player.getMagicBonus()) - 5)
    return Math.floor(transmutationBasePotency + transmutationLevelPotency + transmutationMagicPotency)
  }

  const castTransmutation = function(transmutation) {
    if (arcania < 100 || player.getInBattle()) {
      return false
    }

    self.setArcania(arcania - 100)
    inventory.setGold(inventory.getGold() + transmutationPotency(transmutation))
    return true
  }

  const shadowBallPotency = function(shadowBall) {
    const shadowBallBasePotency = 300
    const shadowBallLevelPotency = 50 * shadowBall.level
    const shadowBallMagicPotency = 10 * ((player.getMagicLevel() + player.getMagicBonus()) - 30)
    return Math.floor(shadowBallBasePotency + shadowBallLevelPotency + shadowBallMagicPotency)
  }

  const castShadowBall = function(shadowBall) {
    if (!player.getInBattle()) {
      return false
    }

    const monster = monsters.getInstancedMonster()
    let shadowBallDamage = shadowBallPotency(shadowBall)
    if (monster.currentHealth <= shadowBallDamage) {
      shadowBallDamage = monster.currentHealth
    }
    document.getElementById("combatlog").innerHTML = ''
    document.getElementById("combatlog").innerHTML +=
    `Your shadow ball hit the ${monster.name} for ${Math.floor(shadowBallDamage)} damage.<br>`
    if (!monsters.monsterTakeDamage(monsters.getInstancedMonster(), shadowBallDamage)) {
      monsters.battle(monsters.getInstancedMonster(), true)
    }
    return true
  }

  self.castSpell = function(spellId) {
    const spell = findSpell(spellId)
    const manaCost = spellCost(spellbook[spell])

    if (player.getManaCurrentValue() >= manaCost && buffs.getRageTimeLeft() === 0 && self.isSpellLearned(spellId)) {
      let castSuccessful
      if (spellbook[spell].id === "cure") {
        castSuccessful = castCure(spellbook[spell])
      }
      else if (spellbook[spell].id === "fireball") {
        castSuccessful = castFireball(spellbook[spell])
      }
      else if (spellbook[spell].id === "barrier") {
        castSuccessful = castBarrier(spellbook[spell])
      }
      else if (spellbook[spell].id === "slow") {
        castSuccessful = castSlow(spellbook[spell])
      }
      else if (spellbook[spell].id === "aegis") {
        castSuccessful = castAegis(spellbook[spell])
      }
      else if (spellbook[spell].id === "rage") {
        castSuccessful = castRage(spellbook[spell])
      }
      else if (spellbook[spell].id === "transmutation") {
        castSuccessful = castTransmutation(spellbook[spell])
      }
      else if (spellbook[spell].id === "shadowball") {
        castSuccessful = castShadowBall(spellbook[spell])
      }
      if (castSuccessful) {
        if (spellbook[spell].id !== "transmutation") {
          arcania += spellbook[spell].level + (manaCost / 100)
        }
        player.setManaCurrentValue(player.getManaCurrentValue() - manaCost)
        levelSpell(spellbook[spell], buffs.getSpellLevelingMultiplier() * manaCost)
        player.setMagicExperience(player.getMagicExperience() + (buffs.getLevelingSpeedMultiplier() * (spellbook[spell].level + 1 + manaCost / 10))) // eslint-disable-line
        return true
      }
    }
    return false
  }

  const updateSpellDescriptions = function() {
    for (let i = 0; i < spellbook.length; i++) {
      if (spellbook[i].id === "cure") {
        spellbook[i].description = `Call the powers of nature to heal yourself for ${curePotency(spellbook[i])} HP`
      }
      else if (spellbook[i].id === "fireball") {
        spellbook[i].description = `Ignite mana around your hand and throw it. Deals ${fireballPotency(spellbook[i])} fire damage.`
      }
      else if (spellbook[i].id === "barrier") {
        spellbook[i].description = `Condense mana around you to put up a barrier that will absorb ${barrierPotency(spellbook[i])} damage.` // eslint-disable-line
      }
      else if (spellbook[i].id === "aegis") {
        spellbook[i].description = `Call for heavenly protection and take no damage for ${aegisPotency(spellbook[i])} turns.`
      }
      else if (spellbook[i].id === "slow") {
        spellbook[i].description = `Magically shackle your enemy, reducing its dexterity for ${slowPotency(spellbook[i])} points.`
      }
      else if (spellbook[i].id === "rage") {
        spellbook[i].description = `Fill yourself with rage for ${ragePotency(spellbook[i])} turns. You deal 5x damage, however, you take 2x damage and cannot cast other spells.` // eslint-disable-line
      }
      else if (spellbook[i].id === "transmutation") {
        spellbook[i].description = `Give material form to the Arcania inside you. Transforms 100 Arcania into ${transmutationPotency(spellbook[i])} gold.` // eslint-disable-line
      }
      else if (spellbook[i].id === "shadowball") {
        spellbook[i].description = `Condense shadow energy into a sphere you can hurl into enemies. Deals ${shadowBallPotency(spellbook[i])} damage.` // eslint-disable-line
      }
    }
  }

  self.updateSpellbook = function() {
    document.getElementById("spellbook").innerHTML = ''
    for (let i = 0; i <= 3; i++) {
      document.getElementById(`spellbook${i}`).innerHTML = ''
    }
    updateSpellDescriptions()
    for (let i = 0; i < spellbook.length; i++) {
      if (player.getMagicLevel() >= spellbook[i].requiredMagic && spellbook[i].learned === false) {
        const spellColor = spellType(spellbook[i].type)
        document.getElementById("spellbook").innerHTML += `<div class="row"><div class="col-5"><button class="btn ${spellColor} btn-block" data-toggle="tooltip" data-placement="top" title="${spellbook[i].description}" onclick="spells.buySpell('${spellbook[i].id}')"> Buy ${spellbook[i].name}</button></div><div class="col-7"><p class="text-right">Arcania Cost: <span id="${spellbook[i].id}arcaniacostall">0</span></p></div></div>` // eslint-disable-line
        document.getElementById(`spellbook${spellbook[i].type}`).innerHTML += `<div class="row"><div class="col-5"><button class="btn ${spellColor} btn-block" data-toggle="tooltip" data-placement="top" title="${spellbook[i].description}" onclick="spells.buySpell('${spellbook[i].id}')"> Buy ${spellbook[i].name}</button></div><div class="col-7"><p class="text-right">Arcania Cost: <span id="${spellbook[i].id}arcaniacost">0</span></p></div></div>` // eslint-disable-line
        updateSpellHtml(spellbook[i], false)
      }
      else if (spellbook[i].learned === true) {
        const spellColor = spellType(spellbook[i].type)
        document.getElementById("spellbook").innerHTML += `<div class="row"><div class="col-5"><button class="btn ${spellColor} btn-block" data-toggle="tooltip" data-placement="top" title="${spellbook[i].description}" onclick="spells.castSpell('${spellbook[i].id}')">${spellbook[i].name}</button></div><div class="col-7"><div class="progress"><div id="${spellbook[i].id}xpall" class="progress-bar" role="progressbar" style="width: ${100 * spellbook[i].experience / spellbook[i].nextLevel}%;"><span id="${spellbook[i].id}progall">${100 * spellbook[i].experience / spellbook[i].nextLevel}%</span></div></div></div></div><div class="row"><div class="col-5">Level: <span id="${spellbook[i].id}levelall">0</span></div><div class="col-6"><p class="text-right">Mana Cost: <span id="${spellbook[i].id}costall">0</span></p></div></div>` // eslint-disable-line
        document.getElementById(`spellbook${spellbook[i].type}`).innerHTML += `<div class="row"><div class="col-5"><button class="btn ${spellColor} btn-block" data-toggle="tooltip" data-placement="top" title="${spellbook[i].description}" onclick="spells.castSpell('${spellbook[i].id}')">${spellbook[i].name}</button></div><div class="col-7"><div class="progress"><div id="${spellbook[i].id}xp" class="progress-bar" role="progressbar" style="width: ${100 * spellbook[i].experience / spellbook[i].nextLevel}%;"><span id="${spellbook[i].id}prog">${100 * spellbook[i].experience / spellbook[i].nextLevel}%</span></div></div></div></div><div class="row"><div class="col-5">Level: <span id="${spellbook[i].id}level">0</span></div><div class="col-6"><p class="text-right">Mana Cost: <span id="${spellbook[i].id}cost">0</span></p></div></div>` // eslint-disable-line
        spellbook[i].learned = true
        updateSpellHtml(spellbook[i], true)
      }
    }

    window.vm.$nextTick(() => {
      window.$('[data-toggle="tooltip"]').tooltip()
    })
  }
}

const spells = new Spells()

export { spells } // eslint-disable-line
