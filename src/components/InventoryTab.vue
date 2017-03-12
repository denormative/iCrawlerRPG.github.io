<template>
  <div role="tabpanel" class="tab-pane" id="inventoryTab">
    <div class="row" style="height: 10px;"></div>
    <div class="row">
      <div class="col-xs-6">
        <div class="row">
          <div class="col-xs-12">
            <div class="panel panel-default">
              <div class="panel-heading" data-toggle="collapse" data-target="#collapseShop">
                <div class="row">
                  <div class="col-xs-6">
                    <h3 class="panel-title" style="font-family: 'Germania One', cursive;">
                      <img src="../assets/swap-bag.png" style="height: 25px;"> The Shop
                    </h3>
                  </div>
                  <div class="col-xs-6 text-right">
                    Gold: <span id="gold">0</span>
                  </div>
                </div>
              </div>
              <div id="collapseShop" class="panel-collapse collapse in">
                <div class="panel-body">
                  <div class="row">
                    <div class="col-xs-12">
                      A weird stall is placed at the floor entrance. The shopkeeper seems bored, but rejoices upon noticing you and says: "Welcome, welcome
                      to my humble shop! May I interest you in some keys or experience crystals? Or are you here to sell?"
                    </div>
                  </div>
                  <div class="row" style="height: 10px;"></div>
                  <div class="row">
                    <div class="col-xs-6">
                      <button class="btn btn-block btn-primary" onclick="inventory.buyKey()">Buy a Chest Key! (Price: <span id="keyprice">0</span>)</button>
                    </div>
                    <div class="col-xs-6">
                      <span id="sellbutton">
                        <button class="btn btn-block btn-success" onclick="inventory.updateInventory(true)">Enter Sell Mode</button>
                      </span>
                    </div>
                  </div>
                  <div class="row" style="height: 10px;"></div>
                  <div class="row">
                    <div class="col-xs-12">
                      Experience Crystals (Price: <span id="crystalprice">0</span>):
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-12">
                      <button class="btn btn-primary" onclick="inventory.buyCrystal('Strength')">Strength</button>
                      <button class="btn btn-primary" onclick="inventory.buyCrystal('Dexterity')">Dexterity</button>
                      <button class="btn btn-primary" onclick="inventory.buyCrystal('Constitution')">Constitution</button>
                      <button class="btn btn-primary" onclick="inventory.buyCrystal('Speed')">Speed</button>
                      <button class="btn btn-primary" onclick="inventory.buyCrystal('Magic')">Magic</button>
                      <button class="btn btn-danger" data-toggle="tooltip" title="Small tip: A random crystal costs only half the price!" onclick="inventory.buyCrystal('')">Random</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-3">
        <div class="row">
          <div class="col-xs-12">
            <div class="panel panel-default">
              <div class="panel-heading" data-toggle="collapse" data-target="#collapseInventory">
                <div class="row">
                  <div class="col-xs-6">
                    <h3 class="panel-title" style="font-family: 'Germania One', cursive;">
                      <img src="../assets/knapsack.png" style="height: 25px;"> Inventory
                    </h3>
                  </div>
                  <div class="col-xs-6 text-right">
                    Keys: <span id="keys">0</span>
                  </div>
                </div>
              </div>
              <div id="collapseInventory" class="panel-collapse collapse in">
                <div class="panel-body">
                  <div class="row">
                    <div class="col-xs-12">
                      <button class="btn btn-block btn-success" onclick="inventory.useAllCrystals()">Use All Crystals</button>
                    </div>
                  </div>
                  <div class="row" style="height:10px;"></div>
                  <div class="row">
                    <div class="col-xs-12">
                      <ul class="list-group" style="margin-bottom: 0px;">
                        <span id="inventory"></span>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-3">
        <div class="row">
          <div class="col-xs-12">
            <div class="panel panel-default">
              <div class="panel-heading" data-toggle="collapse" data-target="#collapseEquipment">
                <div class="row">
                  <div class="col-xs-12">
                    <h3 class="panel-title" style="font-family: 'Germania One', cursive;">
                      <img src="../assets/battle-gear.png" style="height: 25px;"> Equipment
                    </h3>
                  </div>
                </div>
              </div>
              <div id="collapseEquipment" class="panel-collapse collapse in">
                <div class="panel-body">
                  <div class="row">
                    <div class="col-xs-12">
                      <ul class="list-group" style="margin-bottom: 0px;">
                        <span id="equipment"></span>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'inventory-tab',
  props: [],
  components: {
  },
  data() {
    return {}
  },
  mounted() {
    this.$nextTick(() => {
    })
  },
  computed: {
    ...mapState([]),
    ...mapGetters([]),
  },
  methods: {
    ...mapActions([]),
    ...mapMutations([]),
  },
}
</script>

<style scoped>

</style>
