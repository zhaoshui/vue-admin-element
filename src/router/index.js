import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'

Vue.use(Router)

const router = new Router({
  routes,
  mode:'hash'
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('TOken');
  if(!token && to.name !=='Login' ){
    next({
      name:'Login'
    })
  }else if(token && to.name ==='Login'){
    next({
      name:'Login'
    })
  }else{
    next()
  }
})

export default router
