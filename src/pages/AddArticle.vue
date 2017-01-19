<template>
  <div id="editor">
    <div class="input-area">
      <input v-model="title" type="text" name="title" >
      <div class="status-bar">
        <div class="left">
          <button>保存</button>
          <span></span>
        </div>
        <button>提交</button>
      </div>
      <textarea :value="content" @input="update"></textarea>
    </div>
    <div class="result">
      <h1 id="preview-title">{{ title }}</h1>
      <div v-html="markedContent"></div>
    </div>
  </div>
</template>

<script>
import rend from '../utils/render'
import '../../node_modules/prismjs/themes/prism.css'
import '../../static/prism.js'
export default {
  data () {
    return {
      title: '无标题文章',
      content: '# hello'
    }
  },
  computed: {
    markedContent () {
      return rend(this.content)
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
  .status-bar {
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
    min-height: 40px;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
  }
  .left span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    background-color: #42b983;
  }
  .result {
    border: none;
    border-left: 1px solid #ccc;
    padding: 30px;
    overflow: auto;
  }
  .result div {
    line-height: 1.6em;
    letter-spacing: 2px;
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
    font-size: 1em;
    font-family: 'Monaco', courier, monospace;
    background-color: #fff;
    padding: 20px;
    line-height: 1.6em;
    letter-spacing: 2px;
  }
  #preview-title {
    margin-top: 0;
  }
  .result code {
    color: #f66;
    background-color: red;
  }

</style>