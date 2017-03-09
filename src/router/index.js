import Vue from 'vue'
import Router from 'vue-router'
import ICrawler from '@/components/ICrawler'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ICrawler',
      component: ICrawler,
    },
  ],
})
