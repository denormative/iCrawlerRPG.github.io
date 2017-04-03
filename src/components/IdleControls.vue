<template>
  <div class="card">
    <div class="card-header" data-toggle="collapse" data-target="#collapseIdleControls">
      <card-header icon="empty-hourglass" title="Idle Controls">
        <span class="text-right">
          Time Speed:&nbsp;x<span id="speed">1</span>
        </span>
      </card-header>
    </div>
    <div id="collapseIdleControls" class="panel-collapse collapse show">
      <div class="card-block">
        <div class="flex-column">
          <div class="text-right">
            Current Run:
            <span id="days">0</span> days,
            <span id="hours">0</span> hours,
            <span id="minutes">0</span> minutes,
            <span id="seconds">0</span> seconds
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <div class="" style="width: 100%">
            <span id="idleSwitch"></span>
            <button class="btn btn-primary" onclick="system.gameSpeed(1000)">x1</button>
            <span id="speed2"></span>
            <span id="speed5"></span>
            <span id="speed10"></span>
          </div>
          <div class="">
            <a class="btn btn-info" role="button" data-toggle="collapse" href="#idleOptions" aria-expanded="false" aria-controls="collapseExample">Options</a>
          </div>
        </div>
      </div>
      <div class="collapse" id="idleOptions">
        <div class="d-flex" style="margin-bottom:10px;">
          <div class="col-3">
            Auto-Rest at HP%:
          </div>
          <div class="col-8">
            <input type="text" id="idleRest" name="idleRest" style="width: 100%;">
          </div>
        </div>
        <div class="d-flex" style="margin-bottom:10px;">
          <div class="col-3">
            Auto-Rest at MP%:
          </div>
          <div class="col-8">
            <input type="text" id="idleMpRest" name="idleMpRest" style="width: 100%;">
          </div>
        </div>
        <div class="">
          <div class="col-12 mb-3">
            <div class="list-group">
              <div id="toggleable">
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
import CardHeader from './widgets/CardHeader'

export default {
  name: 'idle-controls',
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
.flex-column > div {
  margin-bottom: 1rem;
}
</style>
