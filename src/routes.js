import Home from './pages/Home'
import Detail from './pages/Detail'
import New from './pages/AddArticle'

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
  },
  {
    name: 'new',
    path: '/new',
    component: New
  }
]
