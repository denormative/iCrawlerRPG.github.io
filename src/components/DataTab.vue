<template>
  <div role="tabpanel" class="tab-pane" id="dataTab">
    <div class="row" style="height: 10px;"></div>
    <div class="row">
      <div class="col-xs-12">
        <div class="panel panel-default">
          <div class="panel-heading" data-toggle="collapse" data-target="#collapseDataTab">
            <h3 class="panel-title" style="font-family: 'Germania One', cursive;">
              Game Data
            </h3>
          </div>
          <div id="collapseDataTab" class="panel-collapse collapse in">
            <div class="panel-body">
              <div class="row">
                <div class="col-xs-4 text-center">
                  <button class="btn btn-primary btn-block" onclick="system.exportGame()">Export</button>
                </div>
                <div class="col-xs-4 text-center">
                  <button class="btn btn-success btn-block" onclick="system.importGame()">Import</button>
                </div>
                <div class="col-xs-4 text-center">
                  <button class="btn btn-danger btn-block" onclick="system.hardReset()">Wipe data</button>
                </div>
                <hr>
              </div>
              <div class="row">
                <div class="col-xs-12">
                  <p class="text-center text-muted small">Click export to dump your data into the textbox below. Paste in exported data and click Import to load your saved data.</p>
                  <textarea rows="10" class="form-control" id="dataContainer"></textarea>
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

export default {
  name: 'data-tab',
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
