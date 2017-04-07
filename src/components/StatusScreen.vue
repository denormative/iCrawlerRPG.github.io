<template>
  <div class="card">
    <div class="card-header" data-toggle="collapse" data-target="#collapseStatusScreen">
      <card-header icon="histogram" title="Status Screen">
        <hp-mp-bar name="HP" description="Your health. You die if this gets to 0." stat-id="hp" bar-colour="bg-danger"></hp-mp-bar>
        <hp-mp-bar name="MP" description="Your mana. You cannot cast spells without this." stat-id="mp" bar-colour="bg-info"></hp-mp-bar>
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
            <stat-panel name="CON" title="Constitution. Increase your health and decrease damage taken." stat="constitution"></stat-panel>
            <stat-panel name="SPD" title="Speed. Allows you to explore the floor faster, and also increases the chance of running away." stat="speed"></stat-panel>
          </div>
          <div class="col-6">
            <stat-panel name="STR" title="Strength. Allows you to hit harder." stat="strength"></stat-panel>
            <stat-panel name="DEX" title="Dexterity. Slight damage increase." stat="dexterity"></stat-panel>
            <stat-panel name="MGC" title="Magic. Increase your mana and slightly boost your spell efficiency. Also unlocks new spells." stat="magic"></stat-panel>
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
import HpMpBar from './widgets/HpMpBar'

export default {
  name: 'status-screen',
  props: [],
  components: {
    StatPanel,
    CardHeader,
    HpMpBar,
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
