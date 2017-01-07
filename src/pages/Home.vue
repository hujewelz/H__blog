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
      items: [
        {
          id: 1,
          title: 'Vue2.0 toturs',
          context: 'Vue.js（读音 /vjuː/, 类似于 view） 是一套构建用户界面的 渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，并且非常容易学习，非常容易与其它库或已有项目整合。另一方面，Vue 完全有能力驱动采用单文件组件和 Vue 生态系统支持的库开发的复杂单页应用。'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*@import url('../../node_modules/bootstrap/dist/css/bootstrap.min.css');*/

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
