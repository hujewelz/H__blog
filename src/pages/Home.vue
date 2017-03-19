<template>
  <div class="home">
    <header class="main-header">
      <div class="header-context">
        <img src=".././assets/logo.png">
        <p>Thounghts, stories and ideas</p>
      </div>
    </header>
    <main>
      <blog-list-view :items="items"></blog-list-view>
    </main>
  </div>
</template>

<script>
import BlogListView from '../components/BlogListView'

export default {
  name: 'home',
  components: {
    BlogListView
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: []
    }
  },
  created () {
    const self = this
    this.$http.get('http://localhost:3000/posts')
      .then(res => {
        console.log(JSON.stringify(res.body.result))
        self.items = res.body.result
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}

.home {
  position: relative;
  top: -67px;
}

.main-header {
  background: #222 url(../assets/bg.jpeg) no-repeat center center;
  background-size: cover;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: table;
  text-align: center;
}

@media only screen and (max-width: 500px){
  .main-header {
    margin-bottom: 15px;
    height: 40vh;
  }
}

@media only screen and (max-width: 900px) {
  .main-header {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    min-height: 240px;
    height: 60vh;
    padding: 15% 0;
  }
}

.header-context {
  display: table-cell;
  vertical-align: middle;
}

.header-context p {
  font-size: 3rem;
  color: #fff;
}

</style>
