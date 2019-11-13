<template>
  <v-footer id="footer" class="d-flex align-center justify-space-between mt-12">
      <div id="rede-sociais">
          <v-img class="mb-3" src="../assets/face.png" width="50px"></v-img>
          <v-img src="../assets/insta.png" width="50px"></v-img>
      </div>

      <div id="informacoes" class="text-center">
          <h2 class="mb-2">Localização da Loja</h2>
          <v-row class="alinhamento">
          <h3>Cidade:</h3><span>Taquaritinga - SP</span>
          </v-row>
          <v-row class="alinhamento">
          <h3>Rua:</h3><span>Manoel Martins Pereira, Centro</span>
          </v-row>
          <v-row class="alinhamento">
          <h3>Número:</h3><span>500</span>
          </v-row>
          <v-row class="alinhamento">
            <h3>Tel</h3><span>(16)9999-9999</span>
          </v-row>
      </div>

      <div id="maps">
          <v-img src="../assets/gmaps.png" width="120px"></v-img>
      </div>
  </v-footer>
</template>

<script>
export default {

}
</script>

<style scoped>
#footer{
    height: 200px;;
    background-color: black;
    color: #fff;
    padding: 0 20px;
    border-top: 5px solid purple;
}
.alinhamento{
    display: flex;
    align-items: center;
}
</style>