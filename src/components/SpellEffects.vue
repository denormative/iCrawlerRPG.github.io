<template>
  <div class="panel panel-default">
    <div class="panel-heading" data-toggle="collapse" data-target="#collapseBuffs">
      <h3 class="panel-title text-danger font-gothic">
        <img src="../assets/biceps.png" style="height: 25px;"> Spell&nbsp;Effects
      </h3>
    </div>
    <div id="collapseBuffs" class="panel-collapse collapse in">
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-12">
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

export default {
  name: 'spell-effects',
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

<style scoped>

</style>
