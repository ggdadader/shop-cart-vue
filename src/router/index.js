import Vue from 'vue'
import VueRouter from 'vue-router'
import PageNotFound from '../views/PageNotFound.vue'
import CheckOutPage from '../views/CheckOutPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/checkout'
  },
  {
    path: '/checkout',
    name: 'checkOutPage',
    component: CheckOutPage,
  },
  {
    path: '*',
    name: 'pageNotFound',
    component: PageNotFound,
  }
]

const router = new VueRouter({
  routes
})

export default router