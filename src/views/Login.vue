<template>
<div>
  <VNavMenor/>
<div class="d-flex">
  <VNavDrawer/>
  <div>
     <Cards/>
  </div>
</div> 
  <Banner/>
  </div>
</template>

<script>
import VNavDrawer from '../components/NavDrawer.vue'
import Cards from '../components/Cards.vue'
import Banner from '../components/Banner.vue'
import VNavMenor from '../components/MenuResponsivo.vue'

export default {
  components: {
    VNavDrawer,
    VNavMenor,
    Cards,
    Banner,
},
}
</script>
<style scoped>

</style>
