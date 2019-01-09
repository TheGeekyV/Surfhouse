<template>
  <div id="app">
    <TopBar/>
    <Navigation/>
    <router-view/>
  </div>
</template>
<script>
// TopBar
import TopBar from '@/components/TopBar.vue'
// Navigation
import Navigation from '@/components/Navigation.vue'

export default {
  components: {
    TopBar,
    Navigation
  }
}
</script>
<style lang="scss">
html,
body,
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #f8f8f8;
  box-sizing: border-box;
}
</style>
