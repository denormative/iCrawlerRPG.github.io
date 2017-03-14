<template>
  <div role="tabpanel" class="tab-pane" id="changelogTab">
    <div class="row" style="height: 10px;"></div>
    <div class="row">
      <div class="col-xs-12">
        <change-log></change-log>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import ChangeLog from './ChangeLog'

export default {
  name: 'changelog-tab',
  props: [],
  components: {
    ChangeLog,
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
