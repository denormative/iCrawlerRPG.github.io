<template>
  <div class="d-flex justify-content-between align-items-center">
    <span class="d-inline-flex align-items-center" :class="titleClass">
      <img :src="requireIcon(icon)" style="height: 2.5rem; width: 2.5rem;">
      <h5 class="card-title font-gothic ml-2">{{title}}</h5>
    </span>
    <span class="d-flex flex-column" style="width: 100%;">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

const icons = require.context('../../assets/', false, /\.png$/)

export default {
  name: 'card-header',
  props: ['icon', 'title', 'title-class'],
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
