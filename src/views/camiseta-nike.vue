<template>
  <div>
    <div class="div-tamanho mt-10">
      <div class="d-flex justify-center">
        <v-carousel :show-arrows="false" id="carousel">
          <v-carousel-item>
            <img src="../assets/camiseta1.svg" alt />
          </v-carousel-item>
          <v-carousel-item>
            <img src="../assets/camiseta2.svg" alt />
          </v-carousel-item>
        </v-carousel>
        <div class="text-center mt-10">
          <p class="display-1" id="title">Camiseta de Algodão Branca Nike</p>
          <p class="preco headline font-weight-medium">R$ 69,90</p>
          <p class="subtitle-1 font-weight-medium espacamento2">5x de R$ 14,00 sem juros*</p>
          <div class="d-flex align-center justify-center">
            <div class="mt-4 mr-5">
              <v-select :items="tamanho" label="Tamanho" class="input-select" dense solo></v-select>
            </div>
            <div>
              <v-text-field type="number" label="Quantidade" class="input-number"></v-text-field>
            </div>
          </div>
          <p class="espacamento2">
            <Vbtncomprar2 />
          </p>
        </div>
      </div>

      <div class="text-center produtos-similares">
        <h2 class="mb-2">Produtos Similares</h2>
        <div class="d-flex align-center justify-space-around">
          <div class="espaco-div">
            <img src="../assets/camiseta1.svg" alt class="item" />
            <p class="subtitle-1 font-weight-medium">Camiseta</p>
            <p class="color margin-item font-weight-bold">89,90</p>
            <p class="margin-item subtitle-2">5x de R$ 14,00 sem juros*</p>
          </div>
          <div class="espaco-div">
            <img src="../assets/camiseta1.svg" alt class="item" />
            <p class="subtitle-1 font-weight-medium">Camiseta</p>
            <p class="color margin-item font-weight-bold">89,90</p>
            <p class="margin-item subtitle-2">5x de R$ 14,00 sem juros*</p>
          </div>
          <div class="espaco-div">
            <img src="../assets/camiseta1.svg" alt class="item" />
            <p class="subtitle-1 font-weight-medium">Camiseta</p>
            <p class="color margin-item font-weight-bold">89,90</p>
            <p class="margin-item subtitle-2">5x de R$ 14,00 sem juros*</p>
          </div>
          <div class="espaco-div">
            <img src="../assets/camiseta1.svg" alt class="item" />
            <p class="subtitle-1 font-weight-medium">Camiseta</p>
            <p class="color margin-item font-weight-bold">89,90</p>
            <p class="margin-item subtitle-2">5x de R$ 14,00 sem juros*</p>
          </div>
          <div class="espaco-div">
            <img src="../assets/camiseta1.svg" alt class="item" />
            <p class="subtitle-1 font-weight-medium">Camiseta</p>
            <p class="color margin-item font-weight-bold">89,90</p>
            <p class="margin-item subtitle-2">5x de R$ 14,00 sem juros*</p>
          </div>
        </div>
      </div>
      <div class="text-center">
        <h3>Detalhes do Produto</h3>
        <p>
          <span class="font-weight-bold">marca:</span>
          <span>marca</span>
        </p>
      </div>

      <Vcomentario />
    </div>

    <Vfooter />
  </div>
</template>

<script>
import Vfooter from "../components/footer";
import Vbtncomprar2 from "../components/btn-comprar2";
import Vcomentario from "../components/comentario";
export default {
  components: {
    Vfooter,
    Vbtncomprar2,
    Vcomentario
  },
  data() {
    return {
      tamanho: ["P", "M", "G"]
    };
  }
};
</script>

<style scoped>
#carousel {
  width: 700px;
}
.item {
  height: 200px;
}
.color {
  color: purple;
}
.margin-item {
  margin-top: -15px;
}
.input-select {
  width: 110px;
  height: 100px;
}
.input-number {
  width: 90px;
  height: 100px;
}
.produtos-similares {
  margin-top: 80px;
  margin-bottom: 50px;
}
</style>
<style>
.espacamento2 {
  margin: -20px;
}
@media (max-width: 655px){
 #carousel{
   height: 300px;
 }
}
</style>