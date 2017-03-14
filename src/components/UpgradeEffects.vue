<template>
  <div class="panel panel-default">
    <div class="panel-heading" data-toggle="collapse" data-target="#collapseUpgrades">
      <div class="row">
        <div class="col-xs-12">
          <h3 class="panel-title font-gothic"><img src="../assets/plain-arrow.png" style="height: 25px;"> Upgrade&nbsp;Effects:</h3>
        </div>
      </div>
    </div>
    <div id="collapseUpgrades2" class="panel-collapse collapse in">
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-12">
            <ul class="list-group" style="margin-bottom:0px;">
              <span id="permanent">
              </span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'upgrade-effects',
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
