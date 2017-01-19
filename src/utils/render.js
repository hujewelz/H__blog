import marked from 'marked'
import Prism from '../../static/prism'
let toc = []

const renderer = new marked.Renderer()

renderer.heading = function (text, level) {
  toc.push({
    level,
    title: text
  })
  if (level === 2) {
    return `<h${level} id="${text}"><a href="#${text}">${text}</a></h${level}>`
  }
  return `<h${level} id="${text}">${text}</h${level}>`
}
marked.setOptions({
  renderer
})

// highlight code
renderer.code = function (code, lang = '', line = false) {
  const hl = Prism.highlight(code, Prism.languages[lang] || Prism.languages.markup)
    .replace(/{{/g, '<span>{{</span>')
  let lineNumClass = ''
  if (line) {
    lineNumClass = ' line-numbers'
  }
  return `<pre class="language-${lang}${lineNumClass}"><code class="language-${lang}">${hl}</code></pre>`
}

export default function rend (md) {
  return marked(md)
}
