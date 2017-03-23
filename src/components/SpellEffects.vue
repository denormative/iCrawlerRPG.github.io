<template>
  <div class="card">
    <div class="card-header" data-toggle="collapse" data-target="#collapseBuffs">
      <card-header icon="biceps" title="Spell Effects" title-class="text-danger">
      </card-header>
    </div>
    <div id="collapseBuffs" class="panel-collapse collapse show">
      <div class="card-block">
        <div class="row">
          <div class="col-12">
            <ul class="list-group">
              <span id="temporary">
              </span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import CardHeader from './CardHeader'

export default {
  name: 'spell-effects',
  props: [],
  components: {
    CardHeader,
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
