import Vue from 'vue'
import Router from 'vue-router'
import RootView from '../views/RootView'
import HomeView from '../views/HomeView'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect:"/root"
    },
    {
      path: '/root',
      name: 'RootView',
      component: RootView,
      children:[
        {
          path: '/root/home',
          name: 'HomeView',
          component: HomeView
        },
        {
          path: '',
          redirect: '/root/home'
        }
      ]
    }
    
  ]
})
