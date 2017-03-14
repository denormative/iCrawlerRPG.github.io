<template>
  <div class="panel panel-default">
    <div class="panel-heading" data-toggle="collapse" data-target="#collapseInventory">
      <div class="row">
        <div class="col-xs-6">
          <h3 class="panel-title font-gothic">
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
