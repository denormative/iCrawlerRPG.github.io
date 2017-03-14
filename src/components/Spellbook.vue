<template>
  <div class="panel panel-default">
    <div class="panel-heading" data-toggle="collapse" data-target="#collapseSpellbook">
      <div class="row">
        <div class="col-xs-5">
          <h3 class="panel-title font-gothic"><img src="../assets/book-cover.png" style="height: 25px;"> Spellbook</h3>
        </div>
        <div class="col-xs-7 text-right">
          Arcania: <span id="arcania">0</span>
        </div>
      </div>
    </div>
    <div id="collapseSpellbook" class="panel-collapse collapse in">
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-12">
            <ul class="nav nav-pills" role="tablist">
              <li role="presentation" class="active">
                <a href="#all" aria-controls="healing" role="tab" data-toggle="tab">All</a>
              </li>
              <li role="presentation">
                <a href="#healing" aria-controls="healing" role="tab" data-toggle="tab">Healing</a>
              </li>
              <li role="presentation">
                <a href="#damage" aria-controls="damage" role="tab" data-toggle="tab">Damage</a>
              </li>
              <li role="presentation">
                <a href="#debuff" aria-controls="debuff" role="tab" data-toggle="tab">Debuff</a>
              </li>
              <li role="presentation">
                <a href="#utility" aria-controls="utility" role="tab" data-toggle="tab">Utility</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row" style="height: 10px;"></div>
        <div class="row">
          <div class="col-xs-12">
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="all">
                <span id="spellbook"></span>
              </div>
              <div role="tabpanel" class="tab-pane" id="healing">
                <span id="spellbook0"></span>
              </div>
              <div role="tabpanel" class="tab-pane" id="damage">
                <span id="spellbook1"></span>
              </div>
              <div role="tabpanel" class="tab-pane" id="debuff">
                <span id="spellbook2"></span>
              </div>
              <div role="tabpanel" class="tab-pane" id="utility">
                <span id="spellbook3"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'spellbook',
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
