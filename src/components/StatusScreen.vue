<template>
  <div class="card">
    <div class="card-header" data-toggle="collapse" data-target="#collapseStatusScreen">
      <card-header icon="histogram" title="Status Screen">
        <div class="d-flex flex-row align-items-center">
          HP:&nbsp;
            <div class="progress" data-toggle="tooltip" data-placement="top" title="Your health. You die if this gets to 0.">
              <div id="hpbar" class="progress-bar bg-danger" role="progressbar">
                <span id="hp">0</span>/<span id="hpmax">0</span>
              </div>
            </div>
        </div>
        <div class="d-flex flex-row align-items-center">
          MP:&nbsp;
            <div class="progress" data-toggle="tooltip" data-placement="top" title="Your mana. You cannot cast spells without this." style="margin-bottom: 0px;">
              <div id="mpbar" class="progress-bar bg-info" role="progressbar" style="width: 100%;">
                <span id="mp">0</span>/<span id="mpmax">0</span>
              </div>
          </div>
        </div>
      </card-header>
    </div>
    <div id="collapseStatusScreen" class="panel-collapse collapse show">
      <div class="card-block">
        <div class="row">
          <div class="col-6 half-right-padding">
            <div class="row">
              <div class="col-4">
                Name:
              </div>
              <div class="col-8">
                <span id="name">Crawler</span>
              </div>
            </div>
            <stat-panel name="CON" title="Constitution. Increase your health and decrease damage taken." stat-id="con"></stat-panel>
            <stat-panel name="SPD" title="Speed. Allows you to explore the floor faster, and also increases the chance of running away." stat-id="spd"></stat-panel>
          </div>
          <div class="col-6">
            <stat-panel name="STR" title="Strength. Allows you to hit harder." stat-id="str"></stat-panel>
            <stat-panel name="DEX" title="Dexterity. Slight damage increase." stat-id="dex"></stat-panel>
            <stat-panel name="MGC" title="Magic. Increase your mana and slightly boost your spell efficiency. Also unlocks new spells." stat-id="mgc"></stat-panel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import StatPanel from './StatPanel'
import CardHeader from './widgets/CardHeader'

export default {
  name: 'status-screen',
  props: [],
  components: {
    StatPanel,
    CardHeader,
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
