<template>
  <div class="card">
    <div class="card-header" data-toggle="collapse" data-target="#collapseDataTab">
      <h3 class="card-title font-gothic">
        Game&nbsp;Data
      </h3>
    </div>
    <div id="collapseDataTab" class="panel-collapse collapse show">
      <div class="card-block">
        <div class="row">
          <div class="col-4 text-center">
            <button class="btn btn-primary btn-block" onclick="system.exportGame()">Export</button>
          </div>
          <div class="col-4 text-center">
            <button class="btn btn-success btn-block" onclick="system.importGame()">Import</button>
          </div>
          <div class="col-4 text-center">
            <button class="btn btn-danger btn-block" onclick="system.hardReset()">Wipe data</button>
          </div>
          <hr>
        </div>
        <div class="row">
          <div class="col-12">
            <p class="text-center text-muted small">Click export to dump your data into the textbox below. Paste in exported data and click Import to load your saved data.</p>
            <textarea rows="10" class="form-control" id="dataContainer"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'game-data',
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
