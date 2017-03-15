<template>
  <div class="card">
    <div class="card-header" data-toggle="collapse" data-target="#collapseShop">
      <div class="row">
        <div class="col-6">
          <h5 class="card-title font-gothic">
            <img src="../assets/swap-bag.png" style="height: 25px;"> The&nbsp;Shop
          </h5>
        </div>
        <div class="col-6 text-right">
          Gold: <span id="gold">0</span>
        </div>
      </div>
    </div>
    <div id="collapseShop" class="panel-collapse collapse show">
      <div class="card-block">
        <div class="row">
          <div class="col-12">
            A weird stall is placed at the floor entrance. The shopkeeper seems bored, but rejoices upon noticing you and says: "Welcome, welcome
            to my humble shop! May I interest you in some keys or experience crystals? Or are you here to sell?"
          </div>
        </div>
        <div class="row" style="height: 10px;"></div>
        <div class="row">
          <div class="col-6">
            <button class="btn btn-block btn-primary" onclick="inventory.buyKey()">Buy a Chest Key! (Price: <span id="keyprice">0</span>)</button>
          </div>
          <div class="col-6">
            <span id="sellbutton">
              <button class="btn btn-block btn-success" onclick="inventory.updateInventory(true)">Enter Sell Mode</button>
            </span>
          </div>
        </div>
        <div class="row" style="height: 10px;"></div>
        <div class="row">
          <div class="col-12">
            Experience Crystals (Price: <span id="crystalprice">0</span>):
          </div>
        </div>
        <div class="row">
          <div class="col-12">
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
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'the-shop',
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
