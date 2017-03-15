<template>
  <div role="tabpanel" class="tab-pane" id="dataTab">
    <div class="row" style="height: 10px;"></div>
    <div class="row">
      <div class="col-12">
        <game-data></game-data>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import GameData from './GameData'

export default {
  name: 'data-tab',
  props: [],
  components: {
    GameData,
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
