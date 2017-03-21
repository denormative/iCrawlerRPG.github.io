<template>
  <div class="d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <img :src="requireIcon(icon)" class="mr-2" style="height: 25px;">
      <h5 class="card-title font-gothic">{{title}}</h5>
    </div>
    <div class="text-right">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

const icons = require.context('../assets/', false, /\.png$/)

export default {
  name: 'card-header',
  props: ['icon', 'title'],
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
    requireIcon() {
      return icons('./' + this.icon + '.png') // eslint-disable-line
    },
  },
}
</script>

<style scoped>

</style>
