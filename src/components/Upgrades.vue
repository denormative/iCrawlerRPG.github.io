<template>
  <div class="card">
    <div class="card-header" data-toggle="collapse" data-target="#collapseUpgrades">
      <div class="row">
        <div class="col-5">
          <h5 class="card-title font-gothic"><img src="../assets/plain-arrow.png" style="height: 25px;"> Upgrades</h5>
        </div>
        <div class="col-7 text-right">
          Excelia: <span id="excelia">0</span>
        </div>
      </div>
    </div>
    <div id="collapseUpgrades" class="panel-collapse collapse show">
      <div class="card-block">
        <div class="row">
          <div class="col-12">
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
