import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Rpbones from './views/bone-produtos.vue'
import Rcamisetanike from './views/camiseta-nike.vue'
import Rsobre from './views/sobre.vue'
import Rcontato from './views/contato.vue'
import Vlogin from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/boné',
      name: 'Rpbones',
      component: Rpbones
    },
    {
      path: '/camiseta-algodão-branca-nike',
      name: 'Rcamisetanike',
      component: Rcamisetanike
    },
    {
      path: '/sobre',
      name: 'Rsobre',
      component: Rsobre
    },
    {
      path: '/contato',
      name: 'Rcontato',
      component: Rcontato
    },
    {
      path: '/login',
      name: 'Vlogin',
      component: Vlogin
    },
  ]
})
