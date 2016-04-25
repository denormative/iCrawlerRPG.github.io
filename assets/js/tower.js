game.service('tower', function() {
    this.currentFloor = 0;
    this.floors = [];

    this.save = function() {
        var towerSave = {
            savedCurrentFloor: this.currentFloor,
            savedFloors: this.floors
        };
        localStorage.setItem("towerSave",JSON.stringify(towerSave));
    };

    this.load = function() {
        var towerSave = JSON.parse(localStorage.getItem("towerSave"));
        if (towerSave) {
            if (towerSave.savedCurrentFloor !== undefined) {
                this.currentFloor = towerSave.savedCurrentFloor;
            }
            if (towerSave.savedFloors !== undefined) {
                this.loadFloors(towerSave.savedFloors);
            }
        }
    };

    this.loadFloors = function(savedFloors) {
        for (var i = 0; i < savedFloors.length; i++) {
            if (i == this.floors.length) {
                break;
            }
            if (savedFloors[i].explored !== undefined) {
                this.floors[i].explored = savedFloors[i].explored;
            }
            if (savedFloors[i].canAdvance !== undefined) {
                this.floors[i].canAdvance = savedFloors[i].canAdvance;
            }
            if (savedFloors[i].stairsPosition !== undefined) {
                this.this.floors[i].stairsPosition = savedFloors[i].stairsPosition;
            }
            if (savedFloors[i].monsterDensity !== undefined) {
                this.floors[i].monsterDensity = savedFloors[i].monsterDensity;
            }
        }
    };
});

game.controller('towerController', function($scope, tower, player) {
    $scope.getCurrentFloor = function() {
        return tower.currentFloor;
    };

    $scope.fillFloors = function() {
        for (var i = 0; i <= 10; i++) {
            if (i === 0) {
                tower.floors.push({size: 100, explored: 100, canAdvance: true, stairsPosition: 0, monsterDensity: 0});
            } else {
                tower.floors.push({size: Math.floor(2*tower.floors[i-1].size),
                    explored: 0,
                    canAdvance: false,
                    stairsPosition: Math.floor(Math.random() * Math.floor(2*tower.floors[i-1].size)),
                    monsterDensity: Math.floor(10 + Math.random() * 40)});
            }
        }
    };
    $scope.fillFloors();

    $scope.explorationPercent = function() {
        var explored = tower.floors[tower.currentFloor].explored;
        var size = tower.floors[tower.currentFloor].size;
        return (100 * explored/size);
    };

    $scope.returnButton = function() {
        var button = {text: 'Previous Floor', color: 'btn-default', disabled: false};
        if (tower.currentFloor === 0) {
            button.disabled = true;
            button.color = 'btn-danger';
        }
        return button;
    };

    $scope.nextButton = function() {
        var button = {text: 'Next Floor', color: 'btn-danger', disabled: true};
        if (tower.floors[tower.currentFloor].canAdvance) {
            button.disabled = false;
            button.color = 'btn-default';
        }
        return button;
    };

    $scope.exploreButton = function() {
        var button = {text: 'Explore', color: 'btn-default', disabled: false};
        if ($scope.explorationPercent() == 100) {
            button.text = 'Find Monster';
        }
        if (player.resting || player.inBattle || tower.currentFloor === 0) {
            button.color = 'btn-danger';
            button.disabled = true;
        }
        return button;
    };

    $scope.changeFloor = function(number) {
        tower.currentFloor += number;
    };
});

/*var Tower = function() {

    //Other Methods
    self.floorExplorationComplete = function(floor) {
        if (floors[floor].size == floors[floor].explored) {
            return true;
        }
        return false;
    };

    self.startBossBattle = function() {
        if (!player.getInBattle()) {
            monsters.setInstancedMonster(monsters.getBossMonster((player.getCurrentFloor()/10)-1));
            monsters.setInBossBattle(true);
            monsters.battle(monsters.getInstancedMonster(), false);
        }
    };

    self.bossDefeated = function() {
        floors[player.getCurrentFloor()].canAdvance = true;
        self.loadTowerScreen();
    };

    self.changeFloor = function(floorsChanged) {
        if (!player.getInBattle()) {
            player.setCurrentFloor(player.getCurrentFloor() + floorsChanged);
            self.loadTowerScreen();
            player.loadRestButton();
            player.loadExploreButton();
        }
    };

    var hasFoundStairs = function(currentFloor) {
        if (floors[currentFloor].explored > floors[currentFloor].stairsPosition) {
            return true;
        }
        return false;
    };

    self.exploreFloor = function() {
        var currentFloor = player.getCurrentFloor();
        player.setManaCurrentValue(player.getManaCurrentValue() + buffs.getManaPerSecond());
        if (!self.floorExplorationComplete(currentFloor)) {
            var explored = buffs.getExplorationSpeedMultiplier() * ((player.getSpeedLevel() + player.getSpeedBonus())/10);
            var explorationLeft = floors[currentFloor].size - floors[currentFloor].explored;
            if (explored > explorationLeft) {
                explored = explorationLeft;
            }
            floors[currentFloor].explored += explored;
            if (hasFoundStairs(currentFloor) && !floors[currentFloor].canAdvance && currentFloor < monsters.getMonsterList().length) {
                if (currentFloor % 10 !== 0) {
                    floors[currentFloor].canAdvance = true;
                }
                else {
                    bossFound = true;
                }
            }
            player.setSpeedExperience(player.getSpeedExperience() + 5*explored*buffs.getLevelingSpeedMultiplier()/buffs.getExplorationSpeedMultiplier());
            self.loadTowerScreen();
            if (!checkFloorEvent()) {
                monsters.battleChance(false);
            }
        }
        else {
            monsters.battleChance(true);
        }
    };

    var checkFloorEvent = function() {
        var eventChance = 10;
        var eventRoll = Math.floor(Math.random()*100);
        if (eventRoll <= eventChance) {
            eventRoll = Math.random()*100;
            if (eventRoll < 5) {
                var rarity = player.getCurrentFloor() + Math.floor(Math.random() * player.getCurrentFloor());
                document.getElementById("floorlog").innerHTML = "You turn a corner, finding a treasure chest."
                inventory.findChest(rarity);
            }
            else {
                var gold = Math.round(Math.random() * 50 * player.getCurrentFloor()) + 1;
                document.getElementById("floorlog").innerHTML = "You find the body of another adventurer. You check their pockets, obtaining " + gold + " gold.";
                inventory.setGold(inventory.getGold() + gold);
            }
            return true;
        }
        else {
            document.getElementById("floorlog").innerHTML = "You walk around for a bit, finding nothing of interest."
            return false;
        }
    };
};

var tower = new Tower();*/