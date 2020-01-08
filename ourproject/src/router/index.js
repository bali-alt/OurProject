import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from '../views/category.vue'
import goods_list from '../views/goods_list.vue'
import goods_detail from '../views/goods_detail.vue'
import cart from '../views/cart.vue'
import collect from '../views/collect.vue'
import order from '../views/order.vue'
import search from '../views/search.vue'
import user from '../views/user.vue'
import feedback from '../views/feedback.vue'
import login from '../views/login.vue'
import resigter from '../views/register.vue'
import pay from '../views/pay.vue'

Vue.use(VueRouter)

const routes = [
  //重定向
  {
    path:'/',
    redirect:'/index'
  },
  //登录页面
  {
    path: '/login',
    name: 'login',
    component: login
  },
  //注册页面
  {
    path: '/resigter',
    name: 'resigter',
    component: resigter
  },
  //结算页面
  {
    path: '/pay',
    name: 'pay',
    component: pay
  },
  //意见反馈页面
  {
    path: '/feedback',
    name: 'feedback',
    component: feedback
  },
  //个人中心页面
  {
    path: '/user',
    name: 'user',
    component: user
  },
  //搜索页面
  {
    path: '/search',
    name: 'search',
    component: search
  },
  //订单页面
  {
    path: '/order',
    name: 'order',
    component: order
  },
  //收藏页面
  {
    path: '/collect',
    name: 'collect',
    component: collect
  },
  //购物车
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
  //商品详情
  {
    path: '/goods_detail',
    name: 'goods_detail',
    component: goods_detail
  },
  //商品列表
  {
    path: '/goods_list',
    name: 'goods_list',
    component: goods_list
  },
  //分类页面
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  //首页
  {
    path: '/index',
    name: 'index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
