import Vue from 'vue'
import Router from 'vue-router'
import OrderTop from '@/components/OrderTop'
import OrderStatus from '@/components/OrderStatus'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/order',
      name: 'OrderTop',
      component: OrderTop
    },
    {
      path: '/',
      name: 'OrderStatus',
      component: OrderStatus
    }
  ]
})
