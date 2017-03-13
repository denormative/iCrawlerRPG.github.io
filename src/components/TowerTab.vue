<template>
  <div role="tabpanel" class="tab-pane active" id="towerTab">
    <div class="row" style="height: 10px;"></div>
    <div class="row">
      <div class="col-xs-6">
        <div class="row">
          <div class="col-xs-12">
            <status-screen></status-screen>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <div class="panel panel-default">
              <div class="panel-heading" data-toggle="collapse" data-target="#collapseTower">
                <div class="row">
                  <div class="col-xs-3">
                    <h3 class="panel-title font-gothic"><img src="../assets/white-tower.png" style="height: 25px;"> The&nbsp;Tower</h3>
                  </div>
                  <div class="col-xs-9 text-right">
                    You are currently at Floor <span id="floor">0</span>.
                  </div>
                </div>
              </div>
              <div id="collapseTower" class="panel-collapse collapse in">
                <div class="panel-body">
                  <div class="row">
                    <div class="col-xs-12">
                      Floor explored:
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-12">
                      <div class="progress">
                        <div id="floorbar" class="progress-bar" role="progressbar" style="width: 0%;">
                          <span id="explperc">0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-3">
                      <span id="retbut"></span>
                    </div>
                    <div class="col-xs-3">
                      <span id="exploreButton"></span>
                    </div>
                    <div class="col-xs-3">
                      <span id="restButton"></span>
                    </div>
                    <div class="col-xs-3">
                      <span id="advbut"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="panel-footer">
                <div class="row">
                  <div class="col-xs-12">
                    Floor Log:
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12">
                    <span id="floorlog">Nothing happened here yet.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <div class="panel panel-default">
              <div class="panel-heading" data-toggle="collapse" data-target="#collapseBattle">
                <h3 class="panel-title font-gothic"><img src="../assets/crossed-swords.png" style="height: 25px;"> Battle&nbsp;Screen</h3>
              </div>
              <div id="collapseBattle" class="panel-collapse collapse in">
                <div class="panel-body">
                  <div class="row">
                    <div class="col-xs-3">
                      <div class="row">
                        <div class="col-xs-12">
                          Monster: <span id="monstername">None</span><br>
                        </div>
                        <div class="col-xs-12">
                          STR: <span id="monsterstr">0</span><br>
                        </div>
                        <div class="col-xs-12">
                          DEX: <span id="monsterdex">0</span><br>
                        </div>
                        <div class="col-xs-12">
                          CON: <span id="monstercon">0</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-xs-9">
                      <div class="row">
                        <div class="col-xs-12">
                          <div class="progress">
                            <div id="monsterbar" class="progress-bar progress-bar-danger" role="progressbar" style="width: 0%;">
                              <span id="monsterhp">0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-xs-6">
                          <button class="btn btn-block btn-danger" onclick="monsters.attackMelee()">Fight</button>
                        </div>
                        <div class="col-xs-6">
                          <button class="btn btn-block btn-warning" onclick="monsters.runAway()">Run</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="panel-footer">
                <div class="row">
                  <div class="col-xs-12">
                    Combat Log:
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12">
                    <span id="combatlog"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="row">
          <div class="col-xs-12">
            <div class="panel panel-default">
              <div class="panel-heading" data-toggle="collapse" data-target="#collapseTimeControls">
                <div class="row">
                  <div class="col-xs-3">
                    <h3 class="panel-title font-gothic"><img src="../assets/empty-hourglass.png" style="height: 25px;"> Idle&nbsp;Controls</h3>
                  </div>
                  <div class="col-xs-9 text-right">
                    Current Run: <span id="days">0</span> days, <span id="hours">0</span> hours, <span id="minutes">0</span> minutes, <span
                    id="seconds">0</span> seconds
                  </div>
                </div>
              </div>
              <div id="collapseTimeControls" class="panel-collapse collapse in">
                <div class="panel-body">
                  <div class="row">
                    <div class="col-xs-2">
                      Time speed: x<span id="speed">1</span>
                    </div>
                    <div class="col-xs-7">
                      <div class="row">
                        <div class="col-xs-12">
                          <span id="idleSwitch"></span>
                          <button class="btn btn-primary" onclick="system.gameSpeed(1000)">x1</button>
                          <span id="speed2"></span>
                          <span id="speed5"></span>
                          <span id="speed10"></span>
                        </div>
                      </div>
                    </div>
                    <div class="col-xs-3">
                      <a class="btn btn-primary btn-block" role="button" data-toggle="collapse" href="#idleOptions" aria-expanded="false" aria-controls="collapseExample">Options</a>
                    </div>
                  </div>
                </div>
                <div class="collapse" id="idleOptions">
                  <div class="row" style="margin-left:0px; margin-bottom:10px;">
                    <div class="col-xs-3">
                      Auto-Rest at HP%:
                    </div>
                    <div class="col-xs-8">
                      <input type="text" id="idleRest" name="idleRest" style="width: 100%;">
                    </div>
                  </div>
                  <div class="row" style="margin-left:0px; margin-bottom:10px;">
                    <div class="col-xs-3">
                      Auto-Rest at MP%:
                    </div>
                    <div class="col-xs-8">
                      <input type="text" id="idleMpRest" name="idleMpRest" style="width: 100%;">
                    </div>
                  </div>
                  <div class="row" style="margin-left:0px; margin-bottom:10px; margin-right:0px;">
                    <div class="col-xs-12">
                      <div class="list-group" style="margin-bottom:5px;">
                        <span id="toggleable">
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6">
            <div class="row">
              <div class="col-xs-12">
                <div class="panel panel-default">
                  <div class="panel-heading" data-toggle="collapse" data-target="#collapseSpellbook">
                    <div class="row">
                      <div class="col-xs-5">
                        <h3 class="panel-title font-gothic"><img src="../assets/book-cover.png" style="height: 25px;"> Spellbook</h3>
                      </div>
                      <div class="col-xs-7 text-right">
                        Arcania: <span id="arcania">0</span>
                      </div>
                    </div>
                  </div>
                  <div id="collapseSpellbook" class="panel-collapse collapse in">
                    <div class="panel-body">
                      <div class="row">
                        <div class="col-xs-12">
                          <ul class="nav nav-pills" role="tablist">
                            <li role="presentation" class="active">
                              <a href="#all" aria-controls="healing" role="tab" data-toggle="tab">All</a>
                            </li>
                            <li role="presentation">
                              <a href="#healing" aria-controls="healing" role="tab" data-toggle="tab">Healing</a>
                            </li>
                            <li role="presentation">
                              <a href="#damage" aria-controls="damage" role="tab" data-toggle="tab">Damage</a>
                            </li>
                            <li role="presentation">
                              <a href="#debuff" aria-controls="debuff" role="tab" data-toggle="tab">Debuff</a>
                            </li>
                            <li role="presentation">
                              <a href="#utility" aria-controls="utility" role="tab" data-toggle="tab">Utility</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="row" style="height: 10px;"></div>
                      <div class="row">
                        <div class="col-xs-12">
                          <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="all">
                              <span id="spellbook"></span>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="healing">
                              <span id="spellbook0"></span>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="damage">
                              <span id="spellbook1"></span>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="debuff">
                              <span id="spellbook2"></span>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="utility">
                              <span id="spellbook3"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-6">
            <div class="row">
              <div class="col-xs-12">
                <div class="panel panel-default">
                  <div class="panel-heading" data-toggle="collapse" data-target="#collapseBuffs">
                    <h3 class="panel-title text-danger font-gothic">
                      <img src="../assets/biceps.png" style="height: 25px;"> Spell&nbsp;Effects
                    </h3>
                  </div>
                  <div id="collapseBuffs" class="panel-collapse collapse in">
                    <div class="panel-body">
                      <div class="row">
                        <div class="col-xs-12">
                          <ul class="list-group">
                            <span id="temporary">
                            </span>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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

export default {
  name: 'tower-tab',
  props: [],
  components: {
    StatusScreen,
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
