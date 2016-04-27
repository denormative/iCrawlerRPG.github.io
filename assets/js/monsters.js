game.service('battle', function(player, tower, buffs) {
    this.combatLog = "";
    this.bossFound = false;
    this.lastBossDefeated = 0;
    this.inBossBattle = false;
    this.monsterList = [
        //First Tier
        {name:"Rat", killed:0},
        {name:"Bat", killed:0},
        {name:"Slime", killed:0},
        {name:"Kobold", killed:0},
        {name:"Wolf", killed:0},
        {name:"Lizard", killed:0},
        {name:"Goblin", killed:0},
        {name:"Bandit", killed:0},
        {name:"Spider", killed:0},
        {name:"Eagle", killed:0},

        //Second Tier
        {name:"Bear", killed:0},
        {name:"Snake", killed:0},
        {name:"Troll", killed:0},
        {name:"Kobold Warrior", killed:0},
        {name:"Giant Wolf", killed:0},
        {name:"Ghoul", killed:0},
        {name:"Alligator", killed:0},
        {name:"Giant Lizard", killed:0},
        {name:"Giant Rat", killed: 0},
        {name:"Orc Child", killed:0},

        //Third Tier
        {name: "Stone Golem", killed: 0},
        {name: "Lesser Elemental", killed: 0},
        {name: "Kobold Chieftain", killed: 0},
        {name: "Weakened Minotaur", killed: 0},
        {name: "Troll Warrior", killed: 0},
        {name: "Wisp", killed: 0},
        {name: "Dragon Hatchling", killed: 0},
        {name: "Goblin Shaman", killed: 0},
        {name: "Giant Snake", killed: 0},
        {name: "Mummy", killed: 0},

        //Fourth Tier
        {name: "Elemental", killed: 0},
        {name: "Lesser Imp", killed: 0},
        {name: "Lizardman", killed: 0},
        {name: "Orc", killed: 0},
        {name: "Troll Chieftain", killed: 0},
        {name: "Cyclops", killed: 0},
        {name: "Young Vampire", killed: 0},
        {name: "Harpy", killed: 0},
        {name: "Empowered Wisp", killed: 0},
        {name: "Ancient Mummy", killed: 0},

        //Fifth Tier
        {name: "Imp", killed: 0},
        {name: "Orc Soldier", killed: 0},
        {name: "Young Minotaur", killed: 0},
        {name: "Floating Eye", killed: 0},
        {name: "Banshee", killed: 0},
        {name: "Young Dragon", killed: 0},
        {name: "Cyclops Warrior", killed: 0},
        {name: "Lizardman Archer", killed: 0},
        {name: "Living Armor", killed: 0},
        {name: "Frenzied Goblin", killed: 0}
    ];

    this.bossList = [
        {name: "The First Guardian, Alstroemeria", currentHealth: 91204, maximumHealth: 91204, strength: 151, dexterity: 151, constitution: 151, status: 0},
        {name: "The Second Guardian, Bouvardia", currentHealth: 372100, maximumHealth: 372100, strength: 305, dexterity: 305, constitution: 305, status: 0},
        {name: "The Third Guardian, Clarkia", currentHealth: 864900, maximumHealth: 864900, strength: 465, dexterity: 465, constitution: 465, status: 0},
        {name: "The Fourth Guardian, Dianthus", currentHealth: 1638400, maximumHealth: 1638400, strength: 640, dexterity: 640, constitution: 640, status: 0},
        {name: "The Fifth Guardian, Erigeron", currentHealth: 2930944, maximumHealth: 2930944, strength: 856, dexterity: 856, constitution: 856, status: 0}
    ];

    this.instancedMonster = {
        name: "None",
        currentHealth: 0,
        maximumHealth: 0,
        strength: 0,
        dexterity: 0,
        constitution: 0,
        status: 0
    };

    this.save = function() {
        var monstersSave = {
            savedMonsterList: this.monsterList,
            savedInstancedMonster: this.instancedMonster,
            savedInBossBattle: this.inBossBattle
        };
        localStorage.setItem("monstersSave",JSON.stringify(monstersSave));
    };

    this.load = function() {
        var monstersSave = JSON.parse(localStorage.getItem("monstersSave"));
        if (monstersSave) {
            if (monstersSave.savedMonsterList !== undefined) {
                this.loadMonsterList(monstersSave.savedMonsterList);
            }
            if (monstersSave.savedInstancedMonster !== undefined) {
                this.loadInstancedMonster(monstersSave.savedInstancedMonster);
            }
            if (monstersSave.savedInBossBattle !== undefined) {
                this.inBossBattle = monstersSave.savedInBossBattle;
            }
        }
    };

    this.loadMonsterList = function(savedMonsterList) {
        for (var i = 0; i < savedMonsterList.length; i++) {
            if (i == this.monsterList.length) {
                break;
            }
            if (savedMonsterList[i].killed !== undefined) {
                this.monsterList[i].killed = savedMonsterList[i].killed;
            }
        }
    };

    this.loadInstancedMonster = function(savedInstancedMonster) {
        if (savedInstancedMonster.name !== undefined) {
            this.instancedMonster.name = savedInstancedMonster.name;
        }
        if (savedInstancedMonster.currentHealth !== undefined) {
            this.instancedMonster.currentHealth = savedInstancedMonster.currentHealth;
        }
        if (savedInstancedMonster.maximumHealth !== undefined) {
            this.instancedMonster.maximumHealth = savedInstancedMonster.maximumHealth;
        }
        if (savedInstancedMonster.strength !== undefined) {
            this.instancedMonster.strength = savedInstancedMonster.strength;
        }
        if (savedInstancedMonster.dexterity !== undefined) {
            this.instancedMonster.dexterity = savedInstancedMonster.dexterity;
        }
        if (savedInstancedMonster.constitution !== undefined) {
            this.instancedMonster.constitution = savedInstancedMonster.constitution;
        }
        if (savedInstancedMonster.status !== undefined) {
            this.instancedMonster.status = savedInstancedMonster.status;
        }
    };

    this.battle = function(monster, spellCast) {
        if (!player.inBattle) {
            this.combatLog = "";
            player.inBattle = true;
            if (buffs.castFireballInBattle) {
                //cast fireball
            }
        } else {
            var isDead = false;
            if (!spellCast) {
                this.combatLog = "";
                /*if (buffs.castCureInBattle && check cure threshold) {
                    if (cast cure) {
                        return true;
                    }
                }*/
                isDead = this.playerAttacks(monster);
            }
            if (!isDead) {
                isDead = this.monsterAttacks(monster);
            }
        }
        //update turns buffs
    };

    this.monsterAttacks = function(monster) {
        var damage = this.damageFormula(monster.strength, monster.dexterity, player.totalStat(player.constitution), player.health.currentValue);
        if (buffs.rageTimeLeft !== 0) {
            damage = damage*2;
        }
        if (buffs.aegisTimeLeft === 0) {
            var barrier = buffs.barrierLeft;
            if (barrier > 0) {
                if (barrier >= damage) {
                    buffs.barrierLeft -= damage;
                    this.combatLog += "Your barrier absorbed " + Math.round(damage) + " damage from " + monster.name + "'s attack.";
                    return false;
                } else {
                    this.combatLog += "Your barrier absorbed " + Math.round(barrier) + " damage from " + monster.name + "'s attack.\n";
                    this.combatLog += "Your barrier has shattered.\n";
                    damage -= barrier;
                    buffs.barrierLeft = 0;
                }
            }
            player.health.currentValue -= damage;
            this.combatLog += "You took " + Math.round(damage) + " damage from the " + monster.name + "'s attack.";
            if (player.health.currentValue === 0) {
                this.playerDeath(monster);
                return true;
            }
        } else {
            this.combatLog += "Aegis absorbed " + Math.round(damage) + " damage from " + monster.name + "'s attack.";
        }
        player.gainExperience(monster, false);
        return false;
    };

    this.death = function(monster) {
        player.inBattle = false;
        if (this.inBossBattle) {
            this.inBossBattle = false;
        }
        this.combatLog += "You have been defeated by the " + monster.name + "!";
        if (system.idleMode) {
            //system.toggleIdle();
        }
        tower.changeFloor(-tower.currentFloor);
        //upgrades.updateExcelia(-((100 - buffs.getExceliaSavedOnDeath()) * upgrades.getExcelia())/100);
        player.loseStats(10 - buffs.deathPenaltyReduction);
        player.loseAllExperience();
        this.instancedMonster = {name: "None", currentHealth: 0, maximumHealth: 0, strength: 0, dexterity: 0, constitution: 0, status: 0};
        player.toggleRest();
    };

    this.playerAttacks = function(monster) {
        var damage = this.damageFormula(player.totalStat(player.strength), player.totalStat(player.dexterity), monster.constitution, monster.currentHealth);
        if (buffs.rageTimeLeft !== 0) {
            damage *= 5;
        }
        if (damage >= monster.currentHealth) {
            damage = monster.currentHealth;
        }
        this.combatLog += "You dealt " + Math.round(damage) + " damage to the " + monster.name + ".\n";
        //player.gainExperience(monster, true);
        return this.monsterTakeDamage(monster, damage);
    };

    this.monsterTakeDamage = function(monster, damage) {
        monster.currentHealth -= damage;
        if (monster.currentHealth <= 0) {
            this.monsterDeath(monster);
            return true;
        }
        return false;
    };

    this.monsterDeath = function(monster) {
        player.inBattle = false;
        if (!this.inBossBattle) {
            this.combatLog += "You have defeated the " + monster.name + "!";
            if (Math.floor(Math.random()*100) < 10) {
                //this.monsterCrystalDrop(monster);
                //inventory.updateInventory();
            }
            this.updateMonsterKilled(monster.name);
        }
        else {
            this.combatLog += "You have defeated a floor boss! " + monster.name + " recognizes your strength and allows you to advance.";
            this.bossFound = false;
            this.lastBossDefeated(player.currentFloor);
            tower.bossDefeated();
            this.inBossBattle = false;
        }
        //upgrades.gainExcelia(monster);
        this.instancedMonster = {name: "None", currentHealth: 0, maximumHealth: 0, strength: 0, dexterity: 0, constitution: 0, status: 0};
    };

    this.damageFormula = function(attackerStrength, attackerDexterity, defenderConstitution, defenderHealth) {
        var strengthWeigth = 2;
        var dexterityWeigth = 0.2;
        var constitutionWeigth = 1;
        var damage = ((attackerStrength * strengthWeigth) - (defenderConstitution * constitutionWeigth)) * (attackerDexterity * dexterityWeigth);
        if (damage < 0) {
            damage = 0;
        } else if (damage > defenderHealth) {
            damage = defenderHealth;
        }
        return damage;
    };

    this.battleChance = function(guaranteedBattle) {
        if (guaranteedBattle) {
            this.rollMonster();
            return true;
        } else {
            var check = Math.random() * 100;
            if (check <= tower.floors[tower.currentFloor].monsterDensity) {
                this.rollMonster();
                return true;
            }
            return false;
        }
    };

    this.rollMonster = function() {
        var tier = Math.floor((tower.currentFloor-1)/10);
        var monster = Math.floor(Math.random()*10);
        this.instancedMonster = this.createMonster((tier*10) + monster);
        this.battle(this.instancedMonster, false);
    };

    this.createMonster = function(number) {
        var tempMonster = {name: "", currentHealth: 0, maximumHealth: 0, strength: 0, dexterity: 0, constitution: 0, status: 0};
        var statPool = Math.round((tower.currentFloor * 15) + (Math.pow(1.15, tower.currentFloor - 1) - 1));
        var baseStat = Math.round(statPool/9);
        tempMonster.name = this.monsterList[number].name;
        tempMonster.strength = baseStat;
        tempMonster.dexterity = baseStat;
        tempMonster.constitution = baseStat;
        statPool -= baseStat*3;
        this.distributeStats(tempMonster, statPool);
        tempMonster.maximumHealth = this.calculateHealth(tempMonster.constitution);
        tempMonster.currentHealth = tempMonster.maximumHealth;
        return tempMonster;
    };

    this.distributeStats = function(monster, statPool) {
        var choice;
        while (statPool !== 0) {
            choice = Math.floor(Math.random() * 3);
            if (choice === 0) {
                monster.strength++;
            } else if (choice == 1) {
                monster.dexterity++;
            } else if (choice == 2) {
                monster.constitution++;
            }
            statPool--;
        }
    };

    this.calculateHealth = function(constitution) {
        return (Math.pow(constitution, 2) * 4);
    };

    this.attackMelee = function() {
        this.battle(this.instancedMonster, false);
    };

    this.bossDefeated = function() {
        tower.floors[tower.currentFloor].canAdvance = true;
    };

    this.startBossBattle = function() {
        if (!player.inBattle) {
            this.setInstancedMonster((this.bossList[tower.currentFloor/10])-1);
            this.inBossBattle = true;
            this.battle(this.instancedMonster, false);
        }
    };
});

game.controller('battleController', function($scope, battle, player) {
    $scope.printCombatLog = function() {
        return battle.combatLog;
    };

    $scope.getInstancedMonster = function() {
        return battle.instancedMonster;
    };

    $scope.getHealthPercentage = function() {
        var current = battle.instancedMonster.currentHealth;
        var maximum = battle.instancedMonster.maximumHealth;
        if (maximum !== 0) {
            return (100 * current/maximum);
        }
        return 0;
    };

    $scope.inBattle = function() {
        if (player.inBattle || battle.inBossBattle) {
            return true;
        }
        return false;
    };

    $scope.attackMelee = function() {
        battle.attackMelee();
    };
})

/*var Monsters = function() {
    //Other Methods

    var monsterCrystalDrop = function(monster) {
        var type = Math.floor(Math.random()*5);
        var experience = monster.strength + monster.dexterity + monster.constitution;
        if (type === 0) {
            inventory.createCrystal("Strength", experience);
        }
        else if (type == 1) {
            inventory.createCrystal("Dexterity", experience);
        }
        else if (type == 2) {
            inventory.createCrystal("Constitution", experience);
        }
        else if (type == 3) {
            inventory.createCrystal("Speed", experience);
        }
        else if (type == 4) {
            inventory.createCrystal("Magic", experience);
        }
        document.getElementById("combatlog").innerHTML += "The " + monster.name + " has left an experience crystal behind!<br>";
    }

    var updateMonsterKilled = function(name) {
        for (var i = 0; i < monsterList.length; i++) {
            if (monsterList[i].name == name) {
                monsterList[i].killed++;
            }
        }
    };

    self.runAway = function() {
        if (player.getInBattle()) {
            document.getElementById("combatlog").innerHTML = "";
            var runRoll = Math.random() * (instancedMonster.strength + instancedMonster.dexterity + instancedMonster.constitution);
            if (runRoll < player.getSpeedLevel()) {
                document.getElementById("combatlog").innerHTML += "You escaped from the battle against " + instancedMonster.name + ".";
                self.loadMonsterInfo();
                player.setSpeedExperience(player.getSpeedExperience() + runRoll);
                player.setInBattle(false);
                player.loadExploreButton();
                player.loadRestButton();
            }
            else {
                document.getElementById("combatlog").innerHTML += "You failed to run away.<br>";
                self.battle(instancedMonster, true);
            }
        }
        if (inBossBattle) {
            inBossBattle = false;
        }
    }
};

var monsters = new Monsters();*/