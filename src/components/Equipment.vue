<template>
  <div class="card">
    <div class="card-header" data-toggle="collapse" data-target="#collapseEquipment">
      <div class="row">
        <div class="col-12">
          <h5 class="card-title font-gothic">
            <img src="../assets/battle-gear.png" style="height: 25px;"> Equipment
          </h5>
        </div>
      </div>
    </div>
    <div id="collapseEquipment" class="panel-collapse collapse show">
      <div class="card-block">
        <div class="row">
          <div class="col-12">
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
