<template>
  <div class="detail">
    <h1>{{ $route.params.id }} detail !!!</h1>
    <div v-html="markedContent"></div>
  </div>
</template>

<script>
import marked from '../marked'

export default {
  data () {
    return {
      content: '```js\n console.log("hello"); \n```'
    }
  },
  computed: {
    markedContent () {
      return marked(this.content)
    }
  }
}
</script>
