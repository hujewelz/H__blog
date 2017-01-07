import Home from './pages/Home'
import Detail from './pages/Detail'

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
