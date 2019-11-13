<template>
<div>
   <VNavMenor/>
  <div class="pa-5 d-flex">
    <VNavDrawer/>
    <TbProduto/> 
  </div>
  <Banner/>
  <Footer/>
</div>
</template>

<script>
import VNavDrawer from '../components/NavDrawer.vue'
import TbProduto from '../components/TabelaProduto.vue'
import VNavMenor from '../components/MenuResponsivo.vue'
import Banner from '../components/Banner.vue'
import Footer from '../components/Footer.vue'
export default {
components: {
    VNavDrawer,
    TbProduto,
    VNavMenor,
    Banner,
    Footer,
},
}
</script>
