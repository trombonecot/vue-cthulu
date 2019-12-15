import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Step1 from '@/components/Step1';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/edit',
      name: 'Step1',
      component: Step1
    }
  ]
})
