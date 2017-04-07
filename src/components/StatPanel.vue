<template>
  <div class="row align-items-center">
    <div class="col-4">
      {{name}}:&nbsp;{{statValue}}
    </div>
    <div class="col-8">
      <div class="progress" data-toggle="tooltip" data-placement="top" :title="title">
        <div :style="statPercentWidth" class="progress-bar" role="progressbar" style="width: 100%;">
          {{statPercent}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'stat-panel',
  props: ['name', 'title', 'stat'],
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
    statValue() {
      const s = this.$store.state.player[this.stat]
      return Math.round(100 * (s.level + s.bonus)) / 100
    },
    statPercent() {
      const s = this.$store.state.player[this.stat]
      return `${Math.round(100 * (100 * (s.experience / s.nextLevel))) / 100}%`
    },
    statPercentWidth() {
      const s = this.$store.state.player[this.stat]
      return { width: `${100 * (s.experience / s.nextLevel)}%` }
    },
  },
  methods: {
    ...mapActions([]),
    ...mapMutations([]),
  },
}
</script>

<style scoped>

</style>
