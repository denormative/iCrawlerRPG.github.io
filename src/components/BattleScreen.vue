<template>
  <div class="card">
    <div class="card-header" data-toggle="collapse" data-target="#collapseBattle">
      <card-header icon="crossed-swords" title="Battle Screen">
      </card-header>
    </div>
    <div id="collapseBattle" class="panel-collapse collapse show">
      <div class="card-block">
        <div class="d-flex justify-content-between">
          <div class="flex-column">
            <table class="table table-sm mr-2 mb-0" style="width: 10rem">
              <thead>
                <tr>
                  <th colspan="2"><span id="monstername">None</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-right" style="width: 50%">STR:</td>
                  <td><span id="monsterstr">0</span></td>
                </tr>
                <tr>
                  <td class="text-right" style="width: 50%">DEX:</td>
                  <td><span id="monsterdex">0</span></td>
                </tr>
                <tr>
                  <td class="text-right" style="width: 50%">CON:</td>
                  <td><span id="monstercon">0</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="flex-column ml-2" style="width: 100%;">
            <div class="progress mb-2">
              <div id="monsterbar" class="progress-bar bg-danger" role="progressbar" style="width: 0%;">
                <span id="monsterhp">0</span>
              </div>
            </div>
            <div class="d-flex btn-group">
              <button class="btn w-50 btn-danger" onclick="monsters.attackMelee()">Fight</button>
              <button class="btn w-50 btn-warning" onclick="monsters.runAway()">Run</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <span id="combatlog"></span>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import CardHeader from './widgets/CardHeader'

export default {
  name: 'battle-screen',
  props: [],
  components: {
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
