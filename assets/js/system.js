var game = angular.module('system', []);

game.service('system', function() {
    this.theGame;
    this.version = "alpha v0.9.2";
    this.refreshSpeed = 1000;
    this.init = false;
    this.idleMode;
    this.idleHealthSlider;
    this.idleManaSlider;

    this.loadIdleHealthSlider = function() {
        this.idleHealthSlider = new Slider("#idleRest", {
            ticks: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            ticks_snap_bounds: 10,
            value: 100
        });
    };

    this.loadIdleManaSlider = function() {
        this.idleManaSlider = new Slider("#idleMpRest", {
            ticks: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            ticks_snap_bounds: 10,
            value: 100
        });
    };

    this.displayBigNumber = function(number) {
        var suffixes = ['', 'K', 'M', 'B', 'T', 'Qa'];
        var order = 0;
        var precision = 1;
        while (number >= 1000) {
            number = number/1000;
            order++;
        }
        if (order > 0) {
            if (number < 10) {
                precision = 100;
            } else if (number < 100) {
                precision = 10;
            } else {
                precision = 1;
            }
            number = Math.round(precision*number)/precision;
        }
        return (number + suffixes[order]);
    };
});

game.controller('systemController', function($scope, $document, $interval, system, player, tower) {
    $scope.getVersion = function() {
        return system.version;
    };

    $scope.getTicks = function() {
        return system.ticks;
    };

    $scope.saveAll = function() {
        player.save();
        tower.save();
    };

    $scope.loadAll = function() {
        player.load();
        tower.load();
    };

    $scope.main = function() {
        if (!system.init) {
            //$scope.startTheEngine();
        }
        if (player.resting) {
            player.rest();
            if (player.isFullyRested()) {
                player.toggleRest();
            }
        }
        if (system.idleMode) {
            if (!player.inBattle) {

            }
            else {

            }
        }
        $scope.saveAll();
    };

    /*var main = function() {
        if (!init) {
            startTheEngine();
        }
        ticks++;
        if (player.getResting()) {
            player.rest();
        }
        if (idleMode) {
            if (!player.getInBattle()) {
                if (buffs.getBarrierLeft() === 0 && buffs.getAutoBarrierCast()) {
                    spells.castSpell("barrier");
                }
                if ((100*(player.getHealthCurrentValue()/player.getHealthMaximumValue()) >= idleHealthSlider.getValue()) && (100*(player.getManaCurrentValue()/player.getManaMaximumValue())) >= idleManaSlider.getValue() && !player.getResting()) {
                    tower.exploreFloor();
                }
                else if (!player.getResting() || player.isFullyRested()) {
                    player.toggleRest();
                }
            }
            else {
                monsters.attackMelee();
            }
        }
    };*/

    $scope.runGame = function() {
        $scope.loadAll();
        system.theGame = $document.ready($interval($scope.main, system.refreshSpeed));
    };

    $scope.gameSpeed = function(number) {
        if (system.idleMode) {
            system.refreshSpeed = number;
            $interval.cancel(system.theGame);
            $scope.runGame();
        }
    };

    $scope.exportGame = function() {
        $interval.cancel(system.theGame);
        $scope.saveAll();
        var exportedData = {
            playerSave: localStorage.getItem('playerSave'),
            spellsSave: localStorage.getItem('spellsSave'),
            upgradesSave: localStorage.getItem('upgradesSave'),
            buffsSave: localStorage.getItem('buffsSave'),
            monstersSave: localStorage.getItem('monstersSave'),
            towerSave: localStorage.getItem('towerSave'),
            inventorySave: localStorage.getItem('inventorySave')
        };
        document.getElementById('dataContainer').innerHTML = JSON.stringify(exportedData);
        $scope.runGame();
    };

    $scope.importGame = function() {
        $interval.cancel(system.theGame);
        try {
            var text = document.getElementById('dataContainer').value;
            var importedData = JSON.parse(text);
            if (confirm("Are you sure you want to import this data? Your existing save will be wiped.")) {
                localStorage.clear();
                localStorage.setItem('playerSave', importedData.playerSave);
                localStorage.setItem('spellsSave', importedData.spellsSave);
                localStorage.setItem('upgradesSave', importedData.upgradesSave);
                localStorage.setItem('buffsSave', importedData.buffsSave);
                localStorage.setItem('monstersSave', importedData.monstersSave);
                localStorage.setItem('towerSave', importedData.towerSave);
                localStorage.setItem('inventorySave', importedData.inventorySave);
                $scope.loadAll();
                location.reload();
            }
        } catch (e) {
            console.warn(e);
            alert('Unable to parse save game data!');
        }
        $scope.runGame();
    };

    $scope.hardReset = function() {
        $interval.cancel(system.theGame);
        if (confirm("Are you sure you want to wipe all your progress?")) {
            localStorage.removeItem('playerSave');
            localStorage.removeItem('spellsSave');
            localStorage.removeItem('upgradesSave');
            localStorage.removeItem('buffsSave');
            localStorage.removeItem('monstersSave');
            localStorage.removeItem('towerSave');
            localStorage.removeItem('inventorySave');
            location.reload();
        }
        else {
            $scope.runGame();
        }
    };

    $scope.runGame();
});

/*var System = function() {

    self.toggleIdle = function() {
        if (player.getCurrentFloor() === 0) {
            return false;
        }
        if (idleMode) {
            self.gameSpeed(1000);
            idleMode = false;
            loadIdleButton();
        }
        else {
            idleMode = true;
            loadIdleButton();
        }
    };

    var startTheEngine = function() {
        loadAll();
        loadIdleHealthSlider();
        loadIdleManaSlider();
        loadIdleButton();
        player.loadPlayerScreen();
        player.loadExploreButton();
        player.loadRestButton();
        spells.updateSpellbook();
        upgrades.loadExcelia();
        upgrades.updateUpgrades();
        upgrades.loadTimeUpgrades();
        buffs.updateTemporaryBuffs(false);
        buffs.updateToggleableBuffs();
        buffs.updatePermanentBuffs();
        if (player.getInBattle()) {
            monsters.loadMonsterInfo(monsters.getInstancedMonster());
        }
        tower.loadTowerScreen();
        inventory.updateInventoryHTML();
        inventory.updateInventory();
        inventory.updateEquipment();
        self.gameSpeed(1000);
        init = true;
    };

    var loadIdleButton = function() {
        if (idleMode) {
            document.getElementById("idleSwitch").innerHTML = '<button class="btn btn-success" onClick="system.toggleIdle()">Idle ON</button>';
        }
        else {
            document.getElementById("idleSwitch").innerHTML = '<button class="btn btn-danger" onClick="system.toggleIdle()">Idle OFF</button>';
        }
    };
};

$.get( "https://raw.githubusercontent.com/iCrawlerRPG/iCrawlerRPG.github.io/master/CHANGELOG.md", function( data ) {

    var converter       = new showdown.Converter(),
        md_content        = data,
        md_to_html      = converter.makeHtml( md_content );
    $("#changelog").html( md_to_html );

});

var system = new System();
system.runGame();*/
