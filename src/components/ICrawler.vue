<template src="../index.html">
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import { system } from '../assets/js/system.js'

window.system = system

export default {
  name: 'TEMPLATE',
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

<style>
.font-gothic {
  font-family: 'Germania One', cursive;
}
</style>
