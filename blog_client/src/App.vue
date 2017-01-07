<template>
  <div id="app">
    <!-- <nav class="navbar navbar-default navbar-static-top" role="navigation">
      <div class="container">
      </div>
    </nav> -->
    <home></home>
  </div>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
/*@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
