import { createRouter, createWebHashHistory} from 'vue-router'
import Home from './Home.vue'
import Plan from './Plan.vue'
import About from './About.vue'



export default createRouter({
  // Hash, History 모드 2가지
    // https://google.com/#/
  history:createWebHashHistory(),

  // page
  // https://google.com/
  routes:[
    {
      path:'/',
      component:Home
    },
    {
      path:'/plan',
      component:Plan
    },
    {
      path:'/about',
      component:About
    }
  ]
})