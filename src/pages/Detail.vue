<template>
  <div class="detail">
    <h1>{{ $route.params.id }} detail !!!</h1>
    <div v-html="content"></div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  data () {
    return {
      content: '```js\n console.log("hello"); \n```'
    }
  },
  mounted () {
    this.$http.get('http://localhost:3001/api')
      .then(res => {
        console.log(JSON.stringify(res.body.data))
        this.content = JSON.stringify(res.body.data)
      })
  },
  computed: {
    markedContent () {
      return marked(this.content)
    }
  }
}
</script>

<style scoped>
  /*@import '../../node_modules/highlight/lib/vendor/lighlight.js/styles/default.css'*/
  
</style>
