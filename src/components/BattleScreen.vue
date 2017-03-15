<template>
  <div class="card">
    <div class="card-header" data-toggle="collapse" data-target="#collapseBattle">
      <h3 class="card-title font-gothic"><img src="../assets/crossed-swords.png" style="height: 25px;"> Battle&nbsp;Screen</h3>
    </div>
    <div id="collapseBattle" class="panel-collapse collapse show">
      <div class="card-block">
        <div class="row">
          <div class="col-3">
            <div class="row">
              <div class="col-12">
                Monster: <span id="monstername">None</span><br>
              </div>
              <div class="col-12">
                STR: <span id="monsterstr">0</span><br>
              </div>
              <div class="col-12">
                DEX: <span id="monsterdex">0</span><br>
              </div>
              <div class="col-12">
                CON: <span id="monstercon">0</span>
              </div>
            </div>
          </div>
          <div class="col-9">
            <div class="row">
              <div class="col-12">
                <div class="progress">
                  <div id="monsterbar" class="progress-bar progress-bar-danger" role="progressbar" style="width: 0%;">
                    <span id="monsterhp">0</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <button class="btn btn-block btn-danger" onclick="monsters.attackMelee()">Fight</button>
              </div>
              <div class="col-6">
                <button class="btn btn-block btn-warning" onclick="monsters.runAway()">Run</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <div class="row">
        <div class="col-12">
          Combat Log:
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <span id="combatlog"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'battle-screen',
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
