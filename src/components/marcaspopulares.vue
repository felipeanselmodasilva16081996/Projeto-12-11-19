<template>
  <div class="tamanho d-flex align-center justify-space-around flex-wrap mt-10 mb-10" id="marcas">
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
width: 140px;
margin: 0 15px;
}
@media screen and (max-width: 944px){
  img{
    margin: 15px 20px;
  }
}
</style>