import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
  return originalReplace.call(this, to).catch(err => err)
}

const Home = () => import('@/views/home/Home')
const Classify = () => import('@/views/classify/classify')
const Cart = () => import('@/views/cart/cart')
const Profile = () => import('@/views/profile/profile')

const Detail = () => import('@/views/detail/detail')
const Shop = () => import('@/views/detail/childcommon/Shop')
const Conment = () => import('@/views/detail/childcommon/Conment')
const Parameter = () => import('@/views/detail/childcommon/Parameter')
const Recommend = () => import('@/views/detail/childcommon/Recommend')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/classify',
    component:Classify
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail',
    component:Detail,
    children:[
      {
        path:'/',
        redirect:'shop',
      },
      {
        path:'shop',
        component: Shop
      },
      {
        path:'conment',
        component: Conment
      },
      {
        path:'parameter',
        component: Parameter
      },
      {
        path:'recommend',
        component: Recommend
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
