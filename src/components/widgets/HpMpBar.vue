<template>
  <div class="d-flex flex-row align-items-center">
    {{name}}:&nbsp;
      <div class="progress" data-toggle="tooltip" data-placement="top" :title="description">
        <div :id="statId+'bar'" class="progress-bar" :class="barColour" role="progressbar">
          <span :id="statId">0</span>/<span :id="statId+'max'">0</span>
        </div>
      </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'hp-mp-bar',
  props: ['name', 'description', 'stat-id', 'bar-colour'],
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
