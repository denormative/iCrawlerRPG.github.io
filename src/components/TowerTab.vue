<template>
  <div role="tabpanel" class="tab-pane active" id="towerTab">
    <div class="row" style="height: 10px;"></div>
    <div class="row">
      <div class="col-6">
        <div class="row">
          <div class="col-12">
            <status-screen></status-screen>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <the-tower></the-tower>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <battle-screen></battle-screen>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col-12">
            <idle-controls></idle-controls>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <div class="row">
              <div class="col-12">
                <spellbook></spellbook>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col-12">
                <spell-effects></spell-effects>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import StatusScreen from './StatusScreen'
import TheTower from './TheTower'
import BattleScreen from './BattleScreen'
import IdleControls from './IdleControls'
import Spellbook from './Spellbook'
import SpellEffects from './SpellEffects'

export default {
  name: 'tower-tab',
  props: [],
  components: {
    StatusScreen,
    TheTower,
    BattleScreen,
    IdleControls,
    Spellbook,
    SpellEffects,
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
