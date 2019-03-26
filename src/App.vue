<template>
  <div id="app">
    <TopNav />
    <MainNav />
    <router-view/>
  </div>
</template>

<script>
  import TopNav from './components/layout/topnav'
  import MainNav from './components/layout/mainnav'

  export default {
    name: "app",
    components: {
      TopNav,
      MainNav
    }
  }
</script>

<style>
@import './assets/css/custom.css';

body {
  margin:0;
}
#app {
  font-family: 'Avenir Next', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
