<template>
  <div class="detail">
    <h1>{{ this.post.title }}</h1>
    <div v-html="markedContent"></div>
  </div>
</template>

<script>
import rend from '../utils/render'
import '../../node_modules/prismjs/themes/prism.css'
export default {
  data () {
    return {
      post: {}
    }
  },
  created () {
    const url = `http://localhost:3000/posts/${this.$route.params.id}`
    const self = this
    this.$http.get(url)
      .then(res => {
        console.log(JSON.stringify(res.body.result))
        self.post = res.body.result
      })
  },
  computed: {
    markedContent () {
      return rend(this.post.content || '')
    }
  }
}
</script>

<style scoped>

</style>
