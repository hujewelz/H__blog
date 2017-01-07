import Home from './components/Home'
import Detail from './components/Detail'

export default [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'detail',
    path: '/detail/:id',
    component: Detail
  }
]
