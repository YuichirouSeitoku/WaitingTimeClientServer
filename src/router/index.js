import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import OrderTop from '@/components/OrderTop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OrderTop',
      component: OrderTop
    }
  ]
})
