<template>
  <div class="card">
    <div class="card-header" data-toggle="collapse" data-target="#collapseSpellbook">
      <card-header icon="book-cover" title="Spellbook">
        <span class="text-right">
          Arcania: <span id="arcania">0</span>
        </span>
      </card-header>
    </div>
    <div id="collapseSpellbook" class="panel-collapse collapse show">
      <div class="card-block">
        <div class="row">
          <div class="col-12">
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
          <div class="col-12">
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
import CardHeader from './widgets/CardHeader'

export default {
  name: 'spellbook',
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
