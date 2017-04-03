<template>
  <div class="card">
    <div class="card-header" data-toggle="collapse" data-target="#collapseInventory">
      <div class="row">
        <div class="col-6">
          <h5 class="card-title font-gothic">
            <img src="../assets/knapsack.png" style="height: 25px;"> Inventory
          </h5>
        </div>
        <div class="col-6 text-right">
          Keys: <span id="keys">0</span>
        </div>
      </div>
    </div>
    <div id="collapseInventory" class="panel-collapse collapse show">
      <div class="card-block">
        <div class="row">
          <div class="col-12">
            <button class="btn btn-block btn-success" onclick="inventory.useAllCrystals()">Use All Crystals</button>
          </div>
          <div class="col-12">
            <button class="btn btn-block btn-success" onclick="inventory.unlockAllChests()">Unlock All Chests</button>
          </div>
          <div class="col-12">
            <button class="btn btn-block btn-warning" onclick="inventory.sellCheaperThanEquipped()">Sell Cheaper Than Equipped</button>
          </div>
        </div>
        <div class="row" style="height:10px;"></div>
        <div class="row">
          <div class="col-12">
            <ul class="list-group" style="margin-bottom: 0px;">
              <span id="inventory"></span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'inventory',
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
