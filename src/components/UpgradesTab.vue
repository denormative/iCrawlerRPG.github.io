<template>
  <div role="tabpanel" class="tab-pane" id="upgradesTab">
    <div class="row" style="height: 10px;"></div>
    <div class="row">
      <div class="col-6">
        <div class="row">
          <div class="col-12">
            <upgrades></upgrades>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col-12">
            <upgrade-effects></upgrade-effects>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import Upgrades from './Upgrades'
import UpgradeEffects from './UpgradeEffects'

export default {
  name: 'upgrades-tab',
  props: [],
  components: {
    Upgrades,
    UpgradeEffects,
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
