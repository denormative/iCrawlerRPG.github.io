<template>
  <div class="icrawler">
    <!-- <script type="text/javascript">
      $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
      });
    </script> -->
    <!-- <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-76169051-1', 'auto');
      ga('send', 'pageview');
    </script> -->
    <div class="container-fluid">
      <div class="row" style="height: 10px;"></div>
      <div class="row">
        <div class="col-xs-12">
          <span class="pull-left">
            <span class="h1 font-gothic">ICrawler</span>
            <span class="h4 font-gothic text-muted">alpha ver0.9.1</span>
            <span>&nbsp;&nbsp;&nbsp;</span>
          </span>
          <span class="pull-left">
            <ul class="nav nav-tabs" role="tablist">
              <li role="presentation" class="active">
                <a href="#towerTab" role="tab" data-toggle="tab">Tower</a>
              </li>
              <li role="presentation">
                <a href="#inventoryTab" role="tab" data-toggle="tab">Inventory</a>
              </li>
              <li role="presentation">
                <a href="#upgradesTab" role="tab" data-toggle="tab">Upgrades</a>
              </li>
              <li role="presentation">
                <a href="#changelogTab" role="tab" data-toggle="tab">Changelog</a>
              </li>
              <li role="presentation">
                <a href="#dataTab" role="tab" data-toggle="tab">Game Data</a>
              </li>
            </ul>
          </span>
        </div>
      </div>
      <div class="tab-content">
        <tower-tab></tower-tab>
        <inventory-tab></inventory-tab>
        <upgrades-tab></upgrades-tab>
        <changelog-tab></changelog-tab>
        <data-tab></data-tab>
      </div>
      <div class="row">
        <hr>
        <div class="col-xs-12 text-center">
          ICrawler was made by the <a href="https://github.com/iCrawlerRPG">ICrawlerRPG Team</a> Icons are from their respective creators at
          <a href="http://game-icons.net/">Game-icons.net</a>.
        </div>
      </div>
    </div>
  </div>
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
  name: 'i-crawler',
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
.no-gutter > [class*='col-'] {
  padding-right: 0;
  padding-left: 0;
}
.half-padding {
  padding-right: 7.5px;
  padding-left: 7.5px;
}
.half-right-padding {
  padding-right: 7.5px;
}
.half-left-padding {
  padding-left: 7.5px;
}
.no-right-padding {
  padding-right: 0 !important;
}
.no-left-padding {
  padding-left: 0 !important;
}
</style>
