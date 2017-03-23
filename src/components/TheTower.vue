<template>
  <div class="card">
    <div class="card-header" data-toggle="collapse" data-target="#collapseTower">
      <card-header icon="white-tower" title="The Tower">
        <span class="text-right">
          You are currently at Floor <span id="floor">0</span>.
        </span>
      </card-header>
    </div>
    <div id="collapseTower" class="panel-collapse collapse show">
      <div class="card-block">
        <div class="row">
          <div class="col-12">
            Floor explored:
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="progress">
              <div id="floorbar" class="progress-bar" role="progressbar" style="width: 0%;">
                <span id="explperc">0</span>
              </div>
            </div>
          </div>
        </div>
        <nav class="nav nav-pills nav-justified">
          <span class="nav-item m-1" id="retbut"></span>
          <span class="nav-item m-1" id="exploreButton"></span>
          <span class="nav-item m-1" id="restButton"></span>
          <span class="nav-item m-1" id="advbut"></span>
        </nav>

        <!-- <div class="row">
          <div class="col-3">
          </div>
          <div class="col-3">
          </div>
          <div class="col-3">
          </div>
          <div class="col-3">
          </div>
        </div> -->
      </div>
    </div>
    <div class="card-footer">
      <div class="row">
        <div class="col-12">
          Floor Log:
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <span id="floorlog">Nothing happened here yet.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import CardHeader from './CardHeader'

export default {
  name: 'the-tower',
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
