<template src="../index.html">
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import { system } from '../assets/js/system.js'
import TowerTab from './TowerTab'
import InventoryTab from './InventoryTab'
import UpgradesTab from './UpgradesTab'
import ChangelogTab from './ChangelogTab'
import DataTab from './DataTab'

window.system = system

export default {
  name: 'TEMPLATE',
  props: [],
  components: {
    TowerTab,
    InventoryTab,
    UpgradesTab,
    ChangelogTab,
    DataTab,
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
