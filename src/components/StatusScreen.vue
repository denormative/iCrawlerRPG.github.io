<template>
  <div class="panel panel-default">
    <div class="panel-heading" data-toggle="collapse" data-target="#collapseStatusScreen">
      <div class="row">
        <div class="col-xs-3">
          <div class="row">
            <div class="col-xs-12">
              <h3 class="panel-title font-gothic">
                <img src="../assets/histogram.png" style="height: 25px;"> Status&nbsp;Screen
              </h3>
              Name: <span id="name">Crawler</span>
            </div>
          </div>
        </div>
        <div class="col-xs-9">
          <div class="row">
            <div class="col-xs-1">HP: </div>
            <div class="col-xs-11">
              <div class="progress" data-toggle="tooltip" data-placement="top" title="Your health. You die if this gets to 0." style="margin-bottom: 5px;">
                <div id="hpbar" class="progress-bar progress-bar-danger" role="progressbar" style="width: 100%;">
                  <span id="hp">0</span>/<span id="hpmax">0</span>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-1">MP: </div>
            <div class="col-xs-11">
              <div class="progress" data-toggle="tooltip" data-placement="top" title="Your mana. You cannot cast spells without this." style="margin-bottom: 0px;">
                <div id="mpbar" class="progress-bar progress-bar-info" role="progressbar" style="width: 100%;">
                  <span id="mp">0</span>/<span id="mpmax">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="collapseStatusScreen" class="panel-collapse collapse in">
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-6 half-right-padding">
            <stat-panel name="STR" title="Strength. Allows you to hit harder." stat-id="str"></stat-panel>
            <stat-panel name="CON" title="Constitution. Increase your health and decrease damage taken." stat-id="con"></stat-panel>
            <stat-panel name="MGC" title="Magic. Increase your mana and slightly boost your spell efficiency. Also unlocks new spells." stat-id="mgc"></stat-panel>
          </div>
          <div class="col-xs-6">
            <stat-panel name="DEX" title="Dexterity. Slight damage increase." stat-id="dex"></stat-panel>
            <stat-panel name="SPD" title="Speed. Allows you to explore the floor faster, and also increases the chance of running away." stat-id="spd"></stat-panel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import StatPanel from './StatPanel'

export default {
  name: 'status-screen',
  props: [],
  components: {
    StatPanel,
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
