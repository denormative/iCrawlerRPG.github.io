<template>
  <div class="panel panel-default">
    <div class="panel-heading" data-toggle="collapse" data-target="#collapseEquipment">
      <div class="row">
        <div class="col-xs-12">
          <h3 class="panel-title font-gothic">
            <img src="../assets/battle-gear.png" style="height: 25px;"> Equipment
          </h3>
        </div>
      </div>
    </div>
    <div id="collapseEquipment" class="panel-collapse collapse in">
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-12">
            <ul class="list-group" style="margin-bottom: 0px;">
              <span id="equipment"></span>
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
  name: 'equipment',
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
