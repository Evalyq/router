// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from '/config/routes'
import VueRouter from 'vue-router'
import Main from './Main.vue'
import BookDetail from './BookDetail.vue'
import Explorer from './Explorer.vue'
import Cart from './Cart.vue'
import Me from './Me.vue'

const Home = resolve => require(['./Home.vue'], resolve)

Vue.use(VueRouter)
Vue.config.productionTip = false
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  // routes:[
  //     //将页面组件与path指定的路由关联
  //     {path:'/home',component:Home},
  //     {path:'/explorer',component:Explorer},
  //     {path:'/cart',component:Cart},
  //     {path:'/me',component:Me},
  // ]
  linkActiveClass: 'active',
  routes: [{
    name: 'Main',
    path: '/',
    component: Main,
    children: [
      // 将页面组件与path指定的路由关联
      {name: 'Home', path: 'home', component: Home},
      {name: 'Explorer', path: 'explorer', component: Explorer},
      {name: 'Cart', path: 'cart', component: Cart},
      {name: 'Me', path: 'me', component: Me},
      {name: 'BookDetail', path: '/books/:id', component: BookDetail}
    ]
  }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
  // components: { App },
  // template: '<App/>'
})
