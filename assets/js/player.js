game.service('player', function(buffs) {
    this.name = "Crawler";
    this.health = {currentValue: 100, maximumValue: 100};
    this.mana = {currentValue: 50, maximumValue: 50};
    this.strength = {level: 5, experience: 0, nextLevel: 100, bonus: 0};
    this.dexterity = {level: 5, experience: 0, nextLevel: 100, bonus: 0};
    this.constitution = {level: 5, experience: 0, nextLevel: 100, bonus: 0};
    this.speed = {level: 5, experience: 0, nextLevel: 100, bonus: 0};
    this.magic = {level: 5, experience: 0, nextLevel: 100, bonus: 0};
    this.inBattle = false;
    this.resting = false;

    this.save = function() {
        var playerSave = {
            savedName: this.name,
            savedHealth: this.health,
            savedMana: this.mana,
            savedStrength: this.strength,
            savedDexterity: this.dexterity,
            savedConstitution: this.constitution,
            savedSpeed: this.speed,
            savedMagic: this.magic,
            savedInBattle: this.inBattle
        };
        localStorage.setItem("playerSave", JSON.stringify(playerSave));
    };

    this.load = function() {
        var playerSave = JSON.parse(localStorage.getItem("playerSave"));
        if (playerSave) {
            if (playerSave.savedName !== undefined) {
                this.name = playerSave.savedName;
            } else {
                this.name = prompt("Please, enter your name:", "Crawler");
            }
            if (playerSave.savedHealth !== undefined) {
                this.loadCondition(playerSave.savedHealth, this.health);
            }
            if (playerSave.savedMana !== undefined) {
                this.loadCondition(playerSave.savedMana, this.mana);
            }
            if (playerSave.savedStrength !== undefined) {
                this.loadStat(playerSave.savedStrength, this.strength);
            }
            if (playerSave.savedDexterity !== undefined) {
                this.loadStat(playerSave.savedDexterity, this.dexterity);
            }
            if (playerSave.savedConstitution !== undefined) {
                this.loadStat(playerSave.savedConstitution, this.constitution);
            }
            if (playerSave.savedSpeed !== undefined) {
                this.loadStat(playerSave.savedSpeed, this.speed);
            }
            if (playerSave.savedMagic !== undefined) {
                this.loadStat(playerSave.savedMagic, this.magic);
            }
            if (playerSave.currentFloor !== undefined) {
                this.currentFloor = playerSave.currentFloor;
            }
            if (playerSave.savedInBattle !== undefined) {
                this.inBattle = playerSave.savedInBattle;
            }
        }
    };

    this.loadCondition = function(savedCondition, condition) {
        if (savedCondition.currentValue !== undefined) {
            condition.currentValue = savedCondition.currentValue;
        }
        if (savedCondition.maximumValue !== undefined) {
            condition.maximumValue = savedCondition.maximumValue;
        }
    };

    this.loadStat = function(savedStat, stat) {
        if (savedStat.level !== undefined) {
            stat.level = savedStat.level;
        }
        if (savedStat.experience !== undefined) {
            stat.experience = savedStat.experience;
        }
        if (savedStat.nextLevel !== undefined) {
            stat.nextLevel = savedStat.nextLevel;
        }
        if (savedStat.bonus !== undefined) {
            stat.bonus = savedStat.bonus;
        }
    };

    this.gainMana = function(number) {
        this.mana.currentValue += number;
        if (this.mana.currentValue > this.mana.maximumValue) {
            this.mana.currentValue = this.mana.maximumValue;
        } else if (this.mana.currentValue < 0) {
            this.mana.maximumValue = 0;
        }
    };

    this.gainExperience = function(stat, experience) {
        stat.experience += experience;
        while (stat.experience >= stat.nextLevel) {
            stat.experience -= stat.nextLevel;
            stat.level++;
            stat.nextLevel = this.neededExperience(stat.level+1);
            this.updateConditions();
        }
    };

    this.updateConditions = function() {
        this.health.maximumValue = Math.pow(this.totalStat(this.constitution), 2) * 4;
        this.mana.maximumValue = Math.pow(this.totalStat(this.magic), 2) * 2;
    }

    this.neededExperience = function(level) {
        return ((Math.pow(level, 2) + level) * 3);
    };

    this.totalStat = function(stat) {
        return (stat.level + stat.bonus);
    };

    this.toggleRest = function() {
        this.resting = !this.resting;
    };

    this.rest = function() {
        var healthRecovery = 5 * this.constitution.level * buffs.restingMultiplier;
        var manaRecovery = 5 * this.magic.level * buffs.restingMultiplier;
        this.updateCondition(this.health, healthRecovery);
        this.updateCondition(this.mana, manaRecovery);
    };

    this.updateCondition = function(condition, number) {
        condition.currentValue += number;
        if (condition.currentValue > condition.maximumValue) {
            condition.currentValue = condition.maximumValue;
        } else if (condition.currentValue < 0) {
            condition.currentValue = 0;
        }
    };

    this.isFullyRested = function() {
        if (this.health.currentValue == this.health.maximumValue && this.mana.currentValue == this.mana.maximumValue) {
            return true;
        }
        return false;
    }
});

game.controller('playerStatusController', function($scope, system, player) {
    $scope.print = function(number) {
        return system.displayBigNumber(number);
    };

    $scope.getName = function() {
        return player.name;
    };

    $scope.getHealth = function() {
        return player.health;
    };

    $scope.getHealthPercentage = function() {
        var currentValue = player.health.currentValue;
        var maximumValue = player.health.maximumValue;
        return (100 * currentValue/maximumValue);
    };

    $scope.getMana = function() {
        return player.mana;
    };

    $scope.getManaPercentage = function() {
        var currentValue = $scope.getMana().currentValue;
        var maximumValue = $scope.getMana().maximumValue;
        return (100 * currentValue/maximumValue);
    };

    $scope.getStrength = function() {
        return player.strength;
    };

    $scope.getDexterity = function() {
        return player.dexterity;
    };

    $scope.getConstitution = function() {
        return player.constitution;
    };

    $scope.getSpeed = function() {
        return player.speed;
    };

    $scope.getMagic = function() {
        return player.magic;
    };

    $scope.getStatPercent = function(stat) {
        var experience = stat.experience;
        var nextLevel = stat.nextLevel;
        return Math.round(100*(100 * experience/nextLevel))/100;
    };
});

/*var Player = function() {
    self.rest = function() {
        if (resting) {
            self.setHealthCurrentValue(health.currentValue + (5*constitution.level * buffs.getRestingMultiplier()));
            self.setManaCurrentValue(mana.currentValue + (5*magic.level * buffs.getRestingMultiplier()));
            if (self.isFullyRested()) {
                self.toggleRest();
            }
        }
    };

    self.isFullyRested = function() {
        if (health.currentValue == health.maximumValue && mana.currentValue == mana.maximumValue) {
            return true;
        }
        return false;
    };

    self.loadExploreButton = function() {
        if (currentFloor !== 0) {
            if (inBattle || resting) {
                if (tower.floorExplorationComplete(currentFloor)) {
                    document.getElementById("exploreButton").innerHTML = '<button class="btn btn-danger btn-block" disabled="disabled">Find Monster</button>';
                }
                else {
                    document.getElementById("exploreButton").innerHTML = '<button class="btn btn-danger btn-block" disabled="disabled">Explore</button>';
                }
            }
            else {
                if (tower.floorExplorationComplete(currentFloor)) {
                    document.getElementById("exploreButton").innerHTML = '<button class="btn btn-default btn-block" onClick="tower.exploreFloor()">Find Monster</button>';
                }
                else {
                    document.getElementById("exploreButton").innerHTML = '<button class="btn btn-default btn-block" onClick="tower.exploreFloor()">Explore</button>';
                }
            }
        }
        else {
            document.getElementById("exploreButton").innerHTML = '';
        }
    };

    self.loadRestButton = function() {
        if (currentFloor !== 0) {
            if (inBattle) {
                document.getElementById("restButton").innerHTML = '<button class="btn btn-danger btn-block" disabled="disabled">Rest</button>';
            }
            else if (resting) {
                document.getElementById("restButton").innerHTML = '<button class="btn btn-success btn-block" onClick="player.toggleRest()">Stop Resting</button>';
            }
            else {
                document.getElementById("restButton").innerHTML = '<button class="btn btn-default btn-block" onClick="player.toggleRest()">Rest</button>';
            }
        }
        else {
            document.getElementById("restButton").innerHTML = '';
        }
    };

    self.gainExperience = function(monster, attacking) {
        var multiplier = buffs.getLevelingSpeedMultiplier();
        if (attacking) {
            self.setStrengthExperience(strength.experience + multiplier*(monster.strength/constitution.level));
            self.setDexterityExperience(dexterity.experience + multiplier*(monster.dexterity/dexterity.level));
        }
        else {
            self.setConstitutionExperience(constitution.experience + multiplier*(monster.strength/constitution.level));
        }
    };

    self.death = function(monster) {
        inBattle = false;
        if (monsters.getInBossBattle()) {
            monsters.setInBossBattle(false);
        }
        document.getElementById("combatlog").innerHTML += "You have been defeated by the " + monster.name + "!";
        if (system.getIdleMode()) {
            system.toggleIdle();
        }
        tower.changeFloor(-currentFloor);
        upgrades.updateExcelia(-((100 - buffs.getExceliaSavedOnDeath()) * upgrades.getExcelia())/100);
        loseStats(10 - buffs.getDeathPenaltyReduction());
        loseAllExperience();
        monsters.loadMonsterInfo();
        spells.updateSpellbook();
        player.toggleRest();
    };

    var loseStats = function(percentage) {
        setStrengthLevel(strength.level - Math.floor(strength.level * (percentage/100)));
        setDexterityLevel(dexterity.level - Math.floor(dexterity.level * (percentage/100)));
        setConstitutionLevel(constitution.level - Math.floor(constitution.level * (percentage/100)));
        setSpeedLevel(speed.level - Math.floor(speed.level * (percentage/100)));
        setMagicLevel(magic.level - Math.floor(magic.level * (percentage/100)));
    };

    var loseAllExperience = function() {
        self.setStrengthExperience(0);
        self.setDexterityExperience(0);
        self.setConstitutionExperience(0);
        self.setSpeedExperience(0);
        self.setMagicExperience(0);
    };

    self.toggleRest = function() {
        resting = !resting;
        self.loadRestButton();
        self.loadExploreButton();
    };
};

var player = new Player();*/