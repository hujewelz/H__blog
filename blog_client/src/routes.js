import Home from './components/Home'
import Detail from './components/Detail'

export default [
  { path: '/', component: Home },
  { path: '/detail/:id', component: Detail }
]
