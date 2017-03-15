<template>
  <div class="card">
    <div class="card-header" data-toggle="collapse" data-target="#collapseChangelog">
      <h5 class="card-title font-gothic">
        <a style="cursor:pointer;" class="accordion-toggle">
          <img src="../assets/hazard-sign.png" style="height: 25px;"> Latest&nbsp;Changes
        </a>
      </h5>
    </div>
    <div id="collapseChangelog" class="panel-collapse collapse show">
      <div class="card-block">
        <div class="row">
          <div class="col-12">
            <div id="changelog"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'change-log',
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
