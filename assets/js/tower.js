game.service('tower', function() {
    this.totalFloors = 50;
    this.currentFloor = 0;
    this.floorLog = "";
    this.floors = [];

    this.fillFloors = function() {
        for (var i = 0; i <= this.totalFloors; i++) {
            if (i === 0) {
                this.floors.push({size: 100, explored: 100, canAdvance: true, stairsPosition: 0, monsterDensity: 0});
            } else {
                this.floors.push({size: Math.floor(2*this.floors[i-1].size),
                    explored: 0,
                    canAdvance: false,
                    stairsPosition: Math.floor(Math.random() * Math.floor(2*this.floors[i-1].size)),
                    monsterDensity: Math.floor(10 + Math.random() * 40)});
            }
        }
    };
    this.fillFloors();

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
                this.floors[i].stairsPosition = savedFloors[i].stairsPosition;
            }
            if (savedFloors[i].monsterDensity !== undefined) {
                this.floors[i].monsterDensity = savedFloors[i].monsterDensity;
            }
        }
    };
});

game.controller('towerController', function($scope, tower, player, buffs) {
    $scope.getCurrentFloor = function() {
        return tower.currentFloor;
    };

    $scope.explorationPercent = function() {
        var explored = tower.floors[tower.currentFloor].explored;
        var size = tower.floors[tower.currentFloor].size;
        return Math.round(100 * (100 * explored/size))/100;
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

    $scope.restButton = function() {
        var button = {text: 'Rest', color: 'btn-default', disabled: false};
        if (player.resting) {
            button.text = 'Stop Resting';
            button.color = 'btn-success';
        } else if (player.inBattle) {
            button.color = 'btn-danger';
            button.disabled = true;
        }
        return button;
    };

    $scope.toggleRest = function() {
        player.toggleRest();
    };

    $scope.changeFloor = function(number) {
        tower.currentFloor += number;
    };

    $scope.exploreFloor = function() {
        tower.floorLog = "";
        var currentFloor = tower.currentFloor;
        if (buffs.manaPerSecond > 0) {
            player.gainMana(buffs.manaPerSecond);
        }
        if ($scope.explorationPercent() != 100) {
            var floor = tower.floors[tower.currentFloor];
            var explored = $scope.exploration();
            var explorationLeft = floor.size - floor.explored;
            if (explored > explorationLeft) {
                explored = explorationLeft;
            }
            floor.explored += explored;
            if ($scope.hasFoundStairs(tower.floors[tower.currentFloor]) && !tower.floors[tower.currentFloor].canAdvance && tower.currentFloor < tower.totalFloors) {
                if (tower.currentFloor % 10 !== 0) {
                    tower.floors[tower.currentFloor].canAdvance = true;
                } else {

                }
            }
            var experience = 5 * explored * buffs.levelingSpeedMultiplier;
            player.gainExperience(player.speed, experience);
            if (!$scope.checkFloorEvent()) {
                //battle chance
            }
        } else {
            //battle
        }
    };

    $scope.exploration = function() {
        var multiplier = buffs.explorationSpeedMultiplier;
        var explored = player.totalStat(player.speed)/10;
        return (multiplier * explored);
    };

    $scope.hasFoundStairs = function(floor) {
        var stairsPosition = floor.stairsPosition;
        var explored = floor.explored;
        if (explored > stairsPosition) {
            return true;
        }
        return false;
    };

    $scope.checkFloorEvent = function() {
        var eventChance = 5;
        var eventRoll = Math.floor(Math.random() * 100);
        if (eventRoll <= eventChance) {
            eventRoll = Math.random() * 100;
            if (eventRoll < 25) {
                var rarity = tower.CurrentFloor + Math.floor(Math.random() * tower.CurrentFloor);
                tower.floorLog += "You turn a corner, finding a treasure chest."
            } else {
                var gold = Math.round(Math.random() * 50 * (tower.currentFloor + 1));
                tower.floorLog += "You find the body of another adventurer. You check their pockets, obtaining " + gold + " gold.";
            }
            return true;
        } else {
            tower.floorLog += "You walk around for a bit, finding nothing of interest.";
            return false;
        }
    };

    $scope.printFloorLog = function() {
        return tower.floorLog;
    };
});

/*var Tower = function() {

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
};

var tower = new Tower();*/