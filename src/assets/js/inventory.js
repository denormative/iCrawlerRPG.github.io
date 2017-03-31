/* eslint-disable func-names */
/* eslint-disable no-alert */

import { player } from './player.js'

const Inventory = function() {
  let gold = 0
  let keys = 0
  let bag = []
  const keyPrice = 100
  const crystalPrice = 1000
  let equippedWeapon
  let equippedArmor
  let equippedAccessory
  let sellMode = false

  const self = this
  // Save Method
  self.save = function() {
    const inventorySave = {
      savedGold: gold,
      savedBag: bag,
      savedKeys: keys,
      savedEquippedWeapon: equippedWeapon,
      savedEquippedArmor: equippedArmor,
      savedEquippedAccessory: equippedAccessory,
    }
    localStorage.setItem("inventorySave", JSON.stringify(inventorySave))
  }

  const loadBag = function(savedBag) {
    for (let i = 0; i < savedBag.length; i++) {
      bag.push(savedBag[i])
    }
  }

  // Load Method
  self.load = function() {
    const inventorySave = JSON.parse(localStorage.getItem("inventorySave"))
    if (inventorySave) {
      if (inventorySave.savedGold !== undefined) {
        gold = inventorySave.savedGold
      }
      if (inventorySave.savedBag !== undefined) {
        loadBag(inventorySave.savedBag)
      }
      if (inventorySave.savedKeys !== undefined) {
        keys = inventorySave.savedKeys
      }
      if (inventorySave.savedEquippedWeapon !== undefined) {
        equippedWeapon = inventorySave.savedEquippedWeapon
      }
      if (inventorySave.savedEquippedArmor !== undefined) {
        equippedArmor = inventorySave.savedEquippedArmor
      }
      if (inventorySave.savedEquippedAccessory !== undefined) {
        equippedAccessory = inventorySave.savedEquippedAccessory
      }
    }
  }

  // Getters
  self.getGold = function() {
    return gold
  }

  self.getKeys = function() {
    return keys
  }

  self.getBag = function() {
    return bag
  }

  // Setters
  self.setGold = function(newGold) {
    gold = newGold
    self.updateInventoryHTML()
  }

  self.setKeys = function(newKeys) {
    keys = newKeys
    self.updateInventoryHTML()
  }

  // Other Methods
  self.updateInventoryHTML = function() {
    document.getElementById("gold").innerHTML = gold
    document.getElementById("keys").innerHTML = keys
  }

  self.updateShop = function(boolean) {
    sellMode = boolean
    if (sellMode) {
      document.getElementById("sellbutton").innerHTML =
      '<button class="btn btn-block btn-success" onclick="inventory.updateInventory(false)">Exit Sell Mode</button>'
    }
    else {
      document.getElementById("sellbutton").innerHTML =
      '<button class="btn btn-block btn-success" onclick="inventory.updateInventory(true)">Enter Sell Mode</button>'
    }
    document.getElementById("keyprice").innerHTML = keyPrice
    document.getElementById("crystalprice").innerHTML = crystalPrice
  }

  const printChest = function(chest, number, sellModeArg) {
    const tooltip = `Chest rarity: ${chest.rarity}<br>The higher the rarity, the better the stats of the item inside will be.`
    if (!sellModeArg) {
      document.getElementById("inventory").innerHTML +=
      `<button type="button" class="list-group-item" data-toggle="tooltip" title="${tooltip}" onclick="inventory.openChest(${number})"><span class="badge badge-default badge-pill">Open</span> ${chest.name}</button>` // eslint-disable-line
    }
    else {
      const price = chest.rarity
      document.getElementById("inventory").innerHTML +=
      `<button type="button" class="list-group-item list-group-item-success" data-toggle="tooltip" title="${tooltip}" onclick="inventory.sell(${number},${price})"><span class="badge badge-default badge-pill">${price}</span> ${chest.name}</button>` // eslint-disable-line
    }
  }

  const printWeapon = function(weapon, number, sellModeArg) {
    const tooltip = `STR: ${Math.round(100 * weapon.damage * weapon.rarity) / 100} DEX: ${Math.round(100 * weapon.speed * weapon.rarity) / 100} CON: ${Math.round(100 * weapon.defense * weapon.rarity) / 100} MGC: ${Math.round(100 * weapon.magic * weapon.rarity) / 100}` // eslint-disable-line
    const price = Math.round((weapon.damage + weapon.speed + weapon.defense + weapon.magic) * 5 * weapon.rarity)
    if (!sellModeArg) {
      document.getElementById("inventory").innerHTML +=
      `<button type="button" class="list-group-item" onclick="inventory.equipWeapon(${number})">
        <div class="d-flex flex-column w-100">
          <div class="font-weight-bold">${weapon.name}</div>
          <div>${tooltip}</div>
          <div class="d-flex justify-content-between">
            <div>${price}g</div>
            <div class="badge badge-default badge-pill">Weapon</div>
          </div>
        </div>
      </button>`
    }
    else {
      document.getElementById("inventory").innerHTML +=
      `<button type="button" class="list-group-item list-group-item-success" onclick="inventory.sell(${number},${price})">
        <div class="d-flex flex-column w-100">
          <div class="font-weight-bold">${weapon.name}</div>
          <div>${tooltip}</div>
          <div class="d-flex justify-content-between">
            <div>${price}g</div>
            <div class="badge badge-default badge-pill">Weapon</div>
          </div>
        </div>
      </button>`
    }
  }

  const printArmor = function(armor, number, sellModeArg) {
    const tooltip = `CON: ${Math.round(100 * armor.defense * armor.rarity) / 100} SPD: ${Math.round(100 * armor.movement * armor.rarity) / 100} MGC: ${Math.round(100 * armor.magic * armor.rarity) / 100}` // eslint-disable-line
    const price = Math.round((armor.defense + armor.movement + armor.magic) * 10 * armor.rarity)
    if (!sellModeArg) {
      document.getElementById("inventory").innerHTML +=
      `<button type="button" class="list-group-item" onclick="inventory.equipArmor(${number})">
        <div class="d-flex flex-column w-100">
          <div class="font-weight-bold">${armor.name}</div>
          <div>${tooltip}</div>
          <div class="d-flex justify-content-between w-100">
            <div>${price}g</div>
            <div class="badge badge-default badge-pill">Armor</div>
          </div>
        </div>
      </button>`
    }
    else {
      document.getElementById("inventory").innerHTML +=
      `<button type="button" class="list-group-item list-group-item-success" onclick="inventory.sell(${number},${price})"">
        <div class="d-flex flex-column w-100">
          <div class="font-weight-bold">${armor.name}</div>
          <div>${tooltip}</div>
          <div class="d-flex justify-content-between w-100">
            <div>${price}g</div>
            <div class="badge badge-default badge-pill">Armor</div>
          </div>
        </div>
      </button>`
    }
  }

  const printCrystal = function(crystal, number, sellModeArg) {
    const tooltip = `This crystal will grant ${crystal.experience} experience in ${crystal.stat}.`
    if (!sellModeArg) {
      document.getElementById("inventory").innerHTML +=
      `<button type="button" class="list-group-item" data-toggle="tooltip" title="${tooltip}" onclick="inventory.useCrystal(${number})"><span class="badge badge-default badge-pill">Crystal</span>${crystal.stat} Experience Crystal</button>` // eslint-disable-line
    }
    else {
      const price = Math.round(crystal.experience / 2)
      document.getElementById("inventory").innerHTML +=
      `<button type="button" class="list-group-item list-group-item-success" data-toggle="tooltip" title="${tooltip}" onclick="inventory.sell(${number},${price})"><span class="badge badge-default badge-pill">${price}</span>${crystal.stat} Experience Crystal</button>` // eslint-disable-line
    }
  }

  self.updateInventory = function(boolean) {
    self.updateShop(boolean)
    document.getElementById("inventory").innerHTML = ""
    for (let i = 0; i < 50; i++) {
      if (i >= bag.length) {
        break
      }
      if (bag[i].type === "chest") {
        printChest(bag[i], i, sellMode)
      }
      else if (bag[i].type === "weapon") {
        printWeapon(bag[i], i, sellMode)
      }
      else if (bag[i].type === "armor") {
        printArmor(bag[i], i, sellMode)
      }
      else if (bag[i].type === "crystal") {
        printCrystal(bag[i], i, sellMode)
      }
    }

    window.vm.$nextTick(() => {
      window.$('[data-toggle="tooltip"]').tooltip({ html: true })
    })
  }

  const printEquippedWeapon = function() {
    const tooltip = `STR: ${Math.round(100 * equippedWeapon.damage * equippedWeapon.rarity) / 100} DEX: ${Math.round(100 * equippedWeapon.speed * equippedWeapon.rarity) / 100}<br>CON: ${Math.round(100 * equippedWeapon.defense * equippedWeapon.rarity) / 100} MGC: ${Math.round(100 * equippedWeapon.magic * equippedWeapon.rarity) / 100}` // eslint-disable-line
    const price = Math.round((equippedWeapon.damage + equippedWeapon.speed + equippedWeapon.defense + equippedWeapon.magic) * 5 * equippedWeapon.rarity) // eslint-disable-line max-len
    document.getElementById("equipment").innerHTML +=
    `<button type="button" class="list-group-item" onclick="inventory.unequipWeapon()">
      <div class="d-flex flex-column w-100">
        <div class="font-weight-bold">${equippedWeapon.name}</div>
        <div>${tooltip}</div>
        <div class="d-flex justify-content-between">
          <div>${price}g</div>
          <div class="badge badge-default badge-pill">Weapon</div>
        </div>
      </div>
    </button>`
  }

  const printEquippedArmor = function() {
    const tooltip = `CON: ${Math.round(100 * equippedArmor.defense * equippedArmor.rarity) / 100} SPD: ${Math.round(100 * equippedArmor.movement * equippedArmor.rarity) / 100} MGC: ${Math.round(100 * equippedArmor.magic * equippedArmor.rarity) / 100}` // eslint-disable-line
    const price = Math.round((equippedArmor.defense + equippedArmor.movement + equippedArmor.magic) * 10 * equippedArmor.rarity)
    document.getElementById("equipment").innerHTML +=
    `<button type="button" class="list-group-item" onclick="inventory.unequipArmor()">
      <div class="d-flex flex-column w-100">
        <div class="font-weight-bold">${equippedArmor.name}</div>
        <div>${tooltip}</div>
        <div class="d-flex justify-content-between w-100">
          <div>${price}g</div>
          <div class="badge badge-default badge-pill">Armor</div>
        </div>
      </div>
    </button>`
  }

  self.updateEquipment = function() {
    document.getElementById("equipment").innerHTML = ''
    if (equippedWeapon !== undefined) {
      printEquippedWeapon()
    }
    if (equippedArmor !== undefined) {
      printEquippedArmor()
    }
    window.vm.$nextTick(() => {
      window.$('[data-toggle="tooltip"]').tooltip({ html: true })
    })
  }

  const equipmentRarity = function() {
    const rarity = Math.floor(Math.random() * 101)
    return rarity
  }

  const nameRarity = function(equipment) {
    if (equipment.rarity < 50) {
      equipment.rarity = 1
      return ""
    }
    else if (equipment.rarity < 75) {
      equipment.rarity = 1.25
      return "Uncommon "
    }
    else if (equipment.rarity < 90) {
      equipment.rarity = 1.5
      return "Rare "
    }
    else if (equipment.rarity < 100) {
      equipment.rarity = 2.0
      return "Epic "
    }
    else if (equipment.rarity === 100) {
      equipment.rarity = 2.5
      return "Legendary "
    }
    return undefined
  }

  const nameAdjective = function(stats) {
    if (stats < 3) {
      return "Weak "
    }
    else if (stats < 6) {
      return "Regular "
    }
    else if (stats < 9) {
      return "Strong "
    }

    return "Pristine "
  }

  const nameDamageAttribute = function(damageArg) {
    let name = ""
    const damage = damageArg * 10
    console.log(damage)
    name += nameAdjective(damage % 10)
    if (damage < 10) {
      name += "Wooden "
    }
    else if (damage < 20) {
      name += "Copper "
    }
    else if (damage < 30) {
      name += "Iron "
    }
    else if (damage < 40) {
      name += "Steel "
    }
    return name
  }

  const nameWeapon = function(weapon) {
    let name = ""
    const highest = Math.max(weapon.damage, weapon.speed, weapon.defense, weapon.magic)
    name += nameRarity(weapon)
    name += nameDamageAttribute(highest)
    if (highest === weapon.damage) {
      name += "Sword"
    }
    else if (highest === weapon.speed) {
      name += "Daggers"
    }
    else if (highest === weapon.defense) {
      name += "Shield"
    }
    else if (highest === weapon.magic) {
      name += "Staff"
    }
    return name
  }

  const nameDefenseAttribute = function(defenseArg) {
    let name = ""
    const defense = defenseArg * 10
    console.log(defense)
    name += nameAdjective(defense % 10)
    if (defense < 10) {
      name += "Makeshift "
    }
    else if (defense < 20) {
      name += "Copper "
    }
    else if (defense < 30) {
      name += "Iron "
    }
    else if (defense < 40) {
      name += "Steel "
    }
    return name
  }

  const nameSpeedAttribute = function(speedArg) {
    let name = ""
    const speed = speedArg * 10
    console.log(speed)
    name += nameAdjective(speed % 10)
    if (speed < 10) {
      name += "Uncomfortable "
    }
    else if (speed < 20) {
      name += "Light "
    }
    else if (speed < 30) {
      name += "Heavy "
    }
    else if (speed < 40) {
      name += "Resistant "
    }
    return name
  }

  const nameMagicalAttribute = function(speedArg) {
    let name = ""
    const speed = speedArg * 10
    console.log(speed)
    name += nameAdjective(speed % 10)
    if (speed < 10) {
      name += "Useless "
    }
    else if (speed < 20) {
      name += "Cotton "
    }
    else if (speed < 30) {
      name += "Eerie "
    }
    else if (speed < 40) {
      name += "Magical "
    }
    return name
  }

  const extraRarity = function(chest) {
    const rarity = Math.floor(Math.random() * 101)
    if (rarity < 50) {
      return "Poor "
    }
    else if (rarity < 75) {
      chest.rarity += 2
      return "Regular "
    }
    else if (rarity < 90) {
      chest.rarity += 5
      return "Shiny "
    }
    else if (rarity < 100) {
      chest.rarity += 10
      return "Aetherial "
    }
    else if (rarity === 100) {
      chest.rarity += 20
      return "Heavenly "
    }
    return undefined
  }

  const nameArmor = function(armor) {
    let name = ""
    const highest = Math.max(armor.defense, armor.movement, armor.magic)
    name += nameRarity(armor)
    if (highest === armor.defense) {
      name += nameDefenseAttribute(armor.defense)
      name += "Plate Armor"
    }
    else if (highest === armor.movement) {
      name += nameSpeedAttribute(armor.movement)
      name += "Leather Vest"
    }
    else if (highest === armor.magic) {
      name += nameMagicalAttribute(armor.magic)
      name += "Cloth Robe"
    }
    return name
  }

  const createWeapon = function(pointsArg) {
    let points = pointsArg
    const weapon = { type: "weapon", name: "", damage: 0, speed: 0, defense: 0, magic: 0, rarity: 0 }
    let roll
    while (points > 0) {
      roll = Math.floor(Math.random() * 4)
      if (roll === 0) {
        weapon.damage += 0.1 * Math.round(points / 2)
      }
      else if (roll === 1) {
        weapon.speed += 0.1 * Math.round(points / 2)
      }
      else if (roll === 2) {
        weapon.defense += 0.1 * Math.round(points / 2)
      }
      else if (roll === 3) {
        weapon.magic += 0.1 * Math.round(points / 2)
      }
      points -= Math.round(points / 2)
    }
    weapon.rarity = equipmentRarity()
    weapon.name = nameWeapon(weapon)
    return weapon
  }

  const createArmor = function(pointsArg) {
    const armor = { type: "armor", name: "", defense: 0, movement: 0, magic: 0, rarity: 0 }
    let points = pointsArg
    let roll
    while (points > 0) {
      roll = Math.floor(Math.random() * 3)
      if (roll === 0) {
        armor.defense += 0.1 * Math.round(points / 2)
      }
      else if (roll === 1) {
        armor.movement += 0.1 * Math.round(points / 2)
      }
      else if (roll === 2) {
        armor.movement += 0.1 * Math.round(points / 2)
      }
      points -= Math.round(points / 2)
    }
    armor.rarity = equipmentRarity()
    armor.name = nameArmor(armor)
    return armor
  }

  const createAcessory = function(/* points */) {
    return undefined
  }

  const createEnhancingStone = function(/* points */) {
    return undefined
  }

  self.openChest = function(chest) {
    if (keys > 0) {
      const type = Math.floor(Math.random() * 2)
      if (type === 0) {
        bag.push(createWeapon(bag[chest].rarity))
      }
      else if (type === 1) {
        bag.push(createArmor(bag[chest].rarity))
      }
      else if (type === 2) {
        createAcessory(bag[chest].rarity)
      }
      else if (type === 3) {
        createEnhancingStone(bag[chest].rarity)
      }
      bag.splice(chest, 1)
      self.updateInventory(sellMode)
      self.setKeys(keys - 1)
    }
  }

  const nameChest = function(chest) {
    let name = ""
    name += extraRarity(chest)
    if (chest.rarity < 5) {
      name += "Useless"
    }
    else if (chest.rarity < 10) {
      name += "Dusty"
    }
    else if (chest.rarity < 25) {
      name += "Rusty"
    }
    else if (chest.rarity < 50) {
      name += "Shabby"
    }
    else if (chest.rarity < 100) {
      name += "Common"
    }
    else if (chest.rarity < 250) {
      name += "Odd"
    }
    return name
  }

  self.findChest = function(rarity) {
    const chest = { type: "chest", name: "", rarity }
    chest.name = `${nameChest(chest)} Chest`
    bag.push(chest)
    self.updateInventory(sellMode)
  }

  self.clearBag = function() {
    bag = []
    self.updateInventory(sellMode)
  }

  self.equipWeapon = function(number) {
    const weapon = bag[number]
    if (equippedWeapon !== undefined) {
      self.unequipWeapon()
    }
    equippedWeapon = weapon
    player.setStrengthBonus(player.getStrengthBonus() + (weapon.damage * weapon.rarity))
    player.setDexterityBonus(player.getDexterityBonus() + (weapon.speed * weapon.rarity))
    player.setConstitutionBonus(player.getConstitutionBonus() + (weapon.defense * weapon.rarity))
    player.setMagicBonus(player.getMagicBonus() + (weapon.magic * weapon.rarity))
    bag.splice(number, 1)
    self.updateInventory(sellMode)
    self.updateEquipment()
  }

  self.equipArmor = function(number) {
    const armor = bag[number]
    if (equippedArmor !== undefined) {
      self.unequipArmor()
    }
    equippedArmor = armor
    player.setConstitutionBonus(player.getConstitutionBonus() + (armor.defense * armor.rarity))
    player.setSpeedBonus(player.getSpeedBonus() + (armor.movement * armor.rarity))
    player.setMagicBonus(player.getMagicBonus() + (armor.magic * armor.rarity))
    bag.splice(number, 1)
    self.updateInventory(sellMode)
    self.updateEquipment()
  }

  self.unequipWeapon = function() {
    bag.push(equippedWeapon)
    player.setStrengthBonus(player.getStrengthBonus() - (equippedWeapon.damage * equippedWeapon.rarity))
    player.setDexterityBonus(player.getDexterityBonus() - (equippedWeapon.speed * equippedWeapon.rarity))
    player.setConstitutionBonus(player.getConstitutionBonus() - (equippedWeapon.defense * equippedWeapon.rarity))
    player.setMagicBonus(player.getMagicBonus() - (equippedWeapon.magic * equippedWeapon.rarity))
    player.setHealthCurrentValue(player.getHealthCurrentValue())
    player.setManaCurrentValue(player.getManaCurrentValue())
    equippedWeapon = undefined
    self.updateEquipment()
    self.updateInventory(sellMode)
  }

  self.unequipArmor = function() {
    bag.push(equippedArmor)
    player.setConstitutionBonus(player.getConstitutionBonus() - (equippedArmor.defense * equippedArmor.rarity))
    player.setSpeedBonus(player.getSpeedBonus() - (equippedArmor.movement * equippedArmor.rarity))
    player.setMagicBonus(player.getMagicBonus() - (equippedArmor.magic * equippedArmor.rarity))
    player.setHealthCurrentValue(player.getHealthCurrentValue())
    player.setManaCurrentValue(player.getManaCurrentValue())
    equippedArmor = undefined
    self.updateEquipment()
    self.updateInventory(sellMode)
  }

  self.createCrystal = function(crystalStat, crystalExperience) {
    bag.push({ type: "crystal", stat: crystalStat, experience: crystalExperience })
  }

  self.useCrystal = function(slot, all) {
    const crystal = bag[slot]
    if (crystal.stat === "Strength") {
      player.setStrengthExperience(player.getStrengthExperience() + crystal.experience)
    }
    else if (crystal.stat === "Dexterity") {
      player.setDexterityExperience(player.getDexterityExperience() + crystal.experience)
    }
    else if (crystal.stat === "Constitution") {
      player.setConstitutionExperience(player.getConstitutionExperience() + crystal.experience)
    }
    else if (crystal.stat === "Speed") {
      player.setSpeedExperience(player.getSpeedExperience() + crystal.experience)
    }
    else if (crystal.stat === "Magic") {
      player.setMagicExperience(player.getMagicExperience() + crystal.experience)
    }
    bag.splice(slot, 1)
    if (all === undefined) {
      self.updateInventory(sellMode)
    }
  }

  self.buyKey = function() {
    if (gold >= keyPrice) {
      self.setGold(self.getGold() - keyPrice)
      self.setKeys(self.getKeys() + 1)
      self.updateInventory(sellMode)
    }
  }

  self.buyCrystal = function(statArg) {
    let price = crystalPrice
    let stat = statArg
    if (stat === "") {
      price /= 2
      const type = Math.floor(Math.random() * 5)
      if (type === 0) {
        stat = "Strength"
      }
      else if (type === 1) {
        stat = "Dexterity"
      }
      else if (type === 2) {
        stat = "Constitution"
      }
      else if (type === 3) {
        stat = "Speed"
      }
      else if (type === 4) {
        stat = "Magic"
      }
    }
    if (gold >= price) {
      self.setGold(self.getGold() - price)
      self.createCrystal(stat, 1000)
      self.updateInventory(sellMode)
    }
  }

  self.sell = function(number, price) {
    self.setGold(self.getGold() + price)
    bag.splice(number, 1)
    self.updateInventory(sellMode)
  }

  self.useAllCrystals = function() {
    for (let i = bag.length - 1; i >= 0; i--) {
      if (bag[i].type === "crystal") {
        self.useCrystal(i, true)
      }
    }
    self.updateInventory(sellMode)
  }

  self.unlockAllChests = function() {
    for (let i = bag.length - 1; i >= 0; i--) {
      if (bag[i].type === "chest") {
        self.buyKey()
        self.openChest(i)
        console.log(i)
      }
    }
    self.updateInventory(sellMode)
  }
}

const inventory = new Inventory()

export { inventory } // eslint-disable-line
