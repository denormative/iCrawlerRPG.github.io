<template>
  <div class="row">
    <div class="col-4">
      {{name}}:&nbsp;<span :id="statId">0</span>
    </div>
    <div class="col-8">
      <div class="progress" data-toggle="tooltip" data-placement="top" :title="title" style="margin-bottom: 5px;">
        <div :id="statId+'prog'" class="progress-bar" role="progressbar" style="width: 100%;">
          <span :id="statId+'per'">0%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'stat-panel',
  props: ['name', 'title', 'stat-id'],
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
