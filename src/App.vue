<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    this.$nextTick(() => {
      window.$('[data-toggle="tooltip"]').tooltip()
    })
  },
}
</script>

<style src="./assets/css/main.css">
</style>
