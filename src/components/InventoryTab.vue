<template>
  <div role="tabpanel" class="tab-pane" id="inventoryTab">
    <div class="row" style="height: 10px;"></div>
    <div class="row">
      <div class="col-6">
        <div class="row">
          <div class="col-12">
            <the-shop></the-shop>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="row">
          <div class="col-12">
            <inventory></inventory>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="row">
          <div class="col-12">
            <equipment></equipment>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import TheShop from './TheShop'
import Inventory from './Inventory'
import Equipment from './Equipment'

export default {
  name: 'inventory-tab',
  props: [],
  components: {
    TheShop,
    Inventory,
    Equipment,
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
