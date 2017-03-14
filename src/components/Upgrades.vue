<template>
  <div class="panel panel-default">
    <div class="panel-heading" data-toggle="collapse" data-target="#collapseUpgrades">
      <div class="row">
        <div class="col-xs-5">
          <h3 class="panel-title font-gothic"><img src="../assets/plain-arrow.png" style="height: 25px;"> Upgrades</h3>
        </div>
        <div class="col-xs-7 text-right">
          Excelia: <span id="excelia">0</span>
        </div>
      </div>
    </div>
    <div id="collapseUpgrades" class="panel-collapse collapse in">
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-12">
            <span id="upgrades"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'upgrades',
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
