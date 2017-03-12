/* eslint-disable func-names */
/* eslint-disable no-alert */

import { upgrades } from './upgrades.js'

const Buffs = function() {
  // Multipliers
  let exceliaMultiplier = 1
  let spellLevelingMultiplier = 1
  let restingMultiplier = 1
  let levelingSpeedMultiplier = 1
  let explorationSpeedMultiplier = 1

  // Adders
  let manaPerSecond = 0

  // Percenters
  let exceliaSavedOnDeath = 0
  let deathPenaltyReduction = 0

  // Toggleables
  let castCureInBattle = false
  let castFireballInBattle = false
  let autoBarrierCast = false

  // Timed Buffs
  let aegisTimeLeft = 0
  let rageTimeLeft = 0

  // Non-timed Temporary Buffs
  let barrierLeft = 0

  const self = this
  // Save Method
  self.save = function() {
    const buffsSave = {
      savedExceliaMultiplier: exceliaMultiplier,
      savedSpellLevelingMultiplier: spellLevelingMultiplier,
      savedRestingMultiplier: restingMultiplier,
      savedLevelingSpeedMultiplier: levelingSpeedMultiplier,
      savedExplorationSpeedMultiplier: explorationSpeedMultiplier,
      savedManaPerSecond: manaPerSecond,
      savedExceliaSavedOnDeath: exceliaSavedOnDeath,
      savedDeathPenaltyReduction: deathPenaltyReduction,
      savedCastCureInBattle: castCureInBattle,
      savedCastFireballInBattle: castFireballInBattle,
      savedAutoBarrierCast: autoBarrierCast,
      savedAegisTimeLeft: aegisTimeLeft,
      savedRageTimeLeft: rageTimeLeft,
      savedBarrierLeft: barrierLeft,
    }
    localStorage.setItem("buffsSave", JSON.stringify(buffsSave))
  }

  const loadMultiplierBuffs = function(buffsSave) {
    if (buffsSave.savedExceliaMultiplier !== undefined) {
      exceliaMultiplier = buffsSave.savedExceliaMultiplier
    }
    if (buffsSave.savedSpellLevelingMultiplier !== undefined) {
      spellLevelingMultiplier = buffsSave.savedSpellLevelingMultiplier
    }
    if (buffsSave.savedRestingMultiplier !== undefined) {
      restingMultiplier = buffsSave.savedRestingMultiplier
    }
    if (buffsSave.savedLevelingSpeedMultiplier !== undefined) {
      levelingSpeedMultiplier = buffsSave.savedLevelingSpeedMultiplier
    }
    if (buffsSave.savedExplorationSpeedMultiplier !== undefined) {
      explorationSpeedMultiplier = buffsSave.savedExplorationSpeedMultiplier
    }
  }

  const loadAdderBuffs = function(buffsSave) {
    if (buffsSave.savedManaPerSecond !== undefined) {
      manaPerSecond = buffsSave.savedManaPerSecond
    }
  }

  const loadPercenterBuffs = function(buffsSave) {
    if (buffsSave.savedExceliaSavedOnDeath !== undefined) {
      exceliaSavedOnDeath = buffsSave.savedExceliaSavedOnDeath
    }
    if (buffsSave.deathPenaltyReduction !== undefined) {
      deathPenaltyReduction = buffsSave.savedDeathPenaltyReduction
    }
  }

  const loadToggleableBuffs = function(buffsSave) {
    if (buffsSave.savedCastCureInBattle !== undefined) {
      castCureInBattle = buffsSave.savedCastCureInBattle
    }
    if (buffsSave.savedCastFireballInBattle !== undefined) {
      castFireballInBattle = buffsSave.savedCastFireballInBattle
    }
    if (buffsSave.savedAutoBarrierCast !== undefined) {
      autoBarrierCast = buffsSave.autoBarrierCast
    }
  }

  const loadTimedBuffs = function(buffsSave) {
    if (buffsSave.savedAegisTimeLeft !== undefined) {
      aegisTimeLeft = buffsSave.savedAegisTimeLeft
    }
    if (buffsSave.savedRageTimeLeft !== undefined) {
      rageTimeLeft = buffsSave.savedRageTimeLeft
    }
  }

  const loadTemporaryBuffs = function(buffsSave) {
    if (buffsSave.savedBarrierLeft !== undefined) {
      barrierLeft = buffsSave.savedBarrierLeft
    }
  }

  // Load Method
  self.load = function() {
    const buffsSave = JSON.parse(localStorage.getItem("buffsSave"))
    if (buffsSave) {
      loadMultiplierBuffs(buffsSave)
      loadAdderBuffs(buffsSave)
      loadPercenterBuffs(buffsSave)
      loadToggleableBuffs(buffsSave)
      loadTimedBuffs(buffsSave)
      loadTemporaryBuffs(buffsSave)
    }
  }

  // Getters
  self.getCastFireballInBattle = function() {
    return castFireballInBattle
  }

  self.getRageTimeLeft = function() {
    return rageTimeLeft
  }

  self.getSpellLevelingMultiplier = function() {
    return spellLevelingMultiplier
  }

  self.getBarrierLeft = function() {
    return barrierLeft
  }

  self.getAegisTimeLeft = function() {
    return aegisTimeLeft
  }

  self.getCastCureInBattle = function() {
    return castCureInBattle
  }

  self.getExceliaMultiplier = function() {
    return exceliaMultiplier
  }

  self.getManaPerSecond = function() {
    return manaPerSecond
  }

  self.getExceliaSavedOnDeath = function() {
    return exceliaSavedOnDeath
  }

  self.getRestingMultiplier = function() {
    return restingMultiplier
  }

  self.getDeathPenaltyReduction = function() {
    return deathPenaltyReduction
  }

  self.getAutoBarrierCast = function() {
    return autoBarrierCast
  }

  self.getLevelingSpeedMultiplier = function() {
    return levelingSpeedMultiplier
  }

  self.getExplorationSpeedMultiplier = function() {
    return explorationSpeedMultiplier
  }

  // Setters
  self.setBarrierLeft = function(barrierValue) {
    barrierLeft = barrierValue
  }

  self.setAegisTimeLeft = function(aegisTime) {
    aegisTimeLeft = aegisTime
  }

  self.setRageTimeLeft = function(rageTime) {
    rageTimeLeft = rageTime
  }

  self.setManaPerSecond = function(newManaPerSecond) {
    manaPerSecond = newManaPerSecond
  }

  self.setCastCureInBattle = function(boolean) {
    castCureInBattle = boolean
  }

  self.setExceliaMultiplier = function(newMultiplier) {
    exceliaMultiplier = newMultiplier
  }

  self.setSpellLevelingMultiplier = function(newMultiplier) {
    spellLevelingMultiplier = newMultiplier
  }

  self.setExceliaSavedOnDeath = function(newPercentage) {
    exceliaSavedOnDeath = newPercentage
  }

  self.setCastFireballInBattle = function(boolean) {
    castFireballInBattle = boolean
  }

  self.setRestingMultiplier = function(newMultiplier) {
    restingMultiplier = newMultiplier
  }

  self.setDeathPenaltyReduction = function(newPercentage) {
    deathPenaltyReduction = newPercentage
  }

  self.setAutoBarrierCast = function(boolean) {
    autoBarrierCast = boolean
  }

  self.setLevelingSpeedMultiplier = function(newMultiplier) {
    levelingSpeedMultiplier = newMultiplier
  }

  self.setExplorationSpeedMultiplier = function(newMultiplier) {
    explorationSpeedMultiplier = newMultiplier
  }

  // Other Methods
  self.updateTemporaryBuffs = function(decrease) {
    document.getElementById("temporary").innerHTML = ''

    if (aegisTimeLeft !== 0) {
      if (decrease) {
        aegisTimeLeft -= 1
      }
      document.getElementById("temporary").innerHTML +=
      `<li class="list-group-item list-group-item-info"><span class="badge">${Math.round(aegisTimeLeft)}</span>Aegis</li>`
    }

    if (barrierLeft !== 0) {
      document.getElementById("temporary").innerHTML +=
      `<li class="list-group-item list-group-item-info"><span class="badge">${Math.round(barrierLeft)}</span>Barrier</li>`
    }

    if (rageTimeLeft !== 0) {
      if (decrease) {
        rageTimeLeft -= 1
      }
      document.getElementById("temporary").innerHTML +=
      `<li class="list-group-item list-group-item-info"><span class="badge">${Math.round(rageTimeLeft)}</span>Rage</li>`
    }
  }

  self.updateToggleableBuffs = function() {
    document.getElementById("toggleable").innerHTML = ''
    let toggleStatusText

    if (castFireballInBattle || upgrades.isUpgradePurchased("autoshoot")) {
      if (castFireballInBattle) {
        toggleStatusText = "ON"
      }
      else {
        toggleStatusText = "OFF"
      }
      document.getElementById("toggleable").innerHTML +=
      `<button type="button" class="list-group-item" onclick="buffs.toggleBuff('castFireballInBattle')"><span class="badge">${toggleStatusText}</span>Auto-Shooting</button>` // eslint-disable-line
    }

    if (castCureInBattle || upgrades.isUpgradePurchased("battlehealing")) {
      if (castCureInBattle) {
        toggleStatusText = "ON"
      }
      else {
        toggleStatusText = "OFF"
      }
      document.getElementById("toggleable").innerHTML +=
      `<button type="button" class="list-group-item" onclick="buffs.toggleBuff('castCureInBattle')"><span class="badge">${toggleStatusText}</span>Battle Healing</button>` // eslint-disable-line
    }

    if (autoBarrierCast || upgrades.isUpgradePurchased("barriercast")) {
      if (autoBarrierCast) {
        toggleStatusText = "ON"
      }
      else {
        toggleStatusText = "OFF"
      }
      document.getElementById("toggleable").innerHTML +=
      `<button type="button" class="list-group-item" onclick="buffs.toggleBuff('autoBarrierCast')"><span class="badge">${toggleStatusText}</span>Barrier Casting</button>` // eslint-disable-line
    }
  }

  self.updatePermanentBuffs = function() {
    document.getElementById("permanent").innerHTML = ''
    if (deathPenaltyReduction !== 0) {
      document.getElementById("permanent").innerHTML +=
      `<li class="list-group-item"><span class="badge">${deathPenaltyReduction}%</span>Death Penalty Reduction</li>`
    }
    if (exceliaMultiplier !== 1) {
      document.getElementById("permanent").innerHTML +=
      `<li class="list-group-item"><span class="badge">x${exceliaMultiplier}</span>Excelia Gain</li>`
    }
    if (exceliaSavedOnDeath !== 0) {
      document.getElementById("permanent").innerHTML +=
      `<li class="list-group-item"><span class="badge">${exceliaSavedOnDeath}%</span>Excelia Saved Upon Death</li>`
    }
    if (manaPerSecond !== 0) {
      document.getElementById("permanent").innerHTML +=
      `<li class="list-group-item"><span class="badge">+${manaPerSecond}</span>Exploration Mana per Second</li>`
    }
    if (explorationSpeedMultiplier !== 1) {
      document.getElementById("permanent").innerHTML +=
      `<li class="list-group-item"><span class="badge">x${explorationSpeedMultiplier}</span>Exploration Speed</li>`
    }
    if (restingMultiplier !== 1) {
      document.getElementById("permanent").innerHTML +=
      `<li class="list-group-item"><span class="badge">x${restingMultiplier}</span>Rest Speed</li>`
    }
    if (spellLevelingMultiplier !== 1) {
      document.getElementById("permanent").innerHTML +=
      `<li class="list-group-item"><span class="badge">x${spellLevelingMultiplier}</span>Spell Level Gain</li>`
    }
    if (levelingSpeedMultiplier !== 1) {
      document.getElementById("permanent").innerHTML +=
      `<li class="list-group-item"><span class="badge">x${levelingSpeedMultiplier}</span>Stats Experience Gain</li>`
    }
  }

  self.toggleBuff = function(buffId) {
    if (buffId === "castCureInBattle") {
      castCureInBattle = !castCureInBattle
    }
    else if (buffId === "castFireballInBattle") {
      castFireballInBattle = !castFireballInBattle
    }
    else if (buffId === "autoBarrierCast") {
      autoBarrierCast = !autoBarrierCast
    }
    self.updateToggleableBuffs()
  }
}

const buffs = new Buffs()

export { buffs } // eslint-disable-line
