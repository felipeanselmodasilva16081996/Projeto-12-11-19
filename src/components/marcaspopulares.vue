<template>
  <div class="tamanho d-flex align-center justify-space-around mt-10 mb-10" id="Marcas">
    <div>
     <router-link to="/"><img src="../assets/adidas.png"/></router-link>
    </div>
    <div>
      <router-link to="/"><img src="../assets/billa.png" width="160px"/></router-link>
    </div>
    <div>
      <router-link to="/"><img src="../assets/hollister.png"/></router-link>
    </div>
    <div>
      <router-link to="/"><img src="../assets/nike.png"/></router-link>
    </div>
    <div>
      <router-link to="/"><img src="../assets/oakley.png"/></router-link>
    </div>
  </div>
</template>

<style scoped>
img{
width: 120px;
}
@media (max-width: 800px){
#Marcas{
  flex-wrap: wrap;
}
img{
  padding: 10px;
}
}
</style>