<template>
  <div id="editor">
    <div class="input-area">
      <input v-model="title" type="text" name="title" >
      <textarea :value="content" @input="update"></textarea>
    </div>
    <div class="result">
      <h1 id="preview-title">{{ title }}</h1>
      <p v-html="markedContent"></p>
    </div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  data () {
    return {
      title: '无标题文章',
      content: '# hello'
    }
  },
  computed: {
    markedContent () {
      return marked(this.content, { sanitize: true })
    }
  },
  methods: {
    update (e) {
      this.content = e.target.value
    }
  }
}
</script>

<style scoped>
  @import '../../static/default.css';

  #editor {
    display: flex;
    display: -webkit-flex;
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
  }

  .input-area, .result {
    width: 50%;
    height: 100%;
    vertical-align: top;
    box-sizing: border-box;
    background-color: rgb(252,250,242);
    margin: 0;
  }
  .input-area {
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
  }
  .result {
    border: none;
    border-left: 1px solid #ccc;
    padding: 30px;
  }

  input {
    width: 100%;
    height: 32px;
    font-size: 30px;
    font-weight: bold;
    padding: 18px 40px;
    border: none;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
  }

  textarea {
    display: inline-block;
    box-sizing: border-box;
    border: none;
    width: 100%;
    height: 100%;
    resize: none;
    outline: none;
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
    background-color: #fff;
    padding: 20px;
  }

  #preview-title {
    margin-top: 0;
  }
  pre {
    padding: 20px;
    background-color: red;
  }

  code {
    color: #f66;
    background-color: red;
  }

</style>
