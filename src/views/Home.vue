<template>
  <div>
    <v-content>
      <div>
        <Vcarousel />
      </div>

      <!-- Marcas Populares -->
      <div class="titulo d-flex align-center justify-center mt-12">
        <hr />
        <h2 class="text-center">Marcas Populares</h2>
        <hr />
      </div>

      <div>
        <Vmarcas />
      </div>

      <!-- Novidades -->
      <div >
      <div class="titulo d-flex align-center justify-center">
        <hr />
        <h2 class="text-center">Novidades</h2>
        <hr />
      </div>

      <div class="div-produtos tamanho text-center d-flex justify-center mt-10 mb-10" id="Novidades">
        <v-row>
          <v-col >
            <div class="marginbottom">
              <img src="../assets/bone1.svg" />
              <p class="title">Boné Jordan</p>
              <p class="preco headline font-weight-medium">R$ 89,90</p>
              <p class="subtitle-2 espacamento">5x de R$ 18,00 sem juros*</p>
              <p>
                <Vbtncomprar />
              </p>
            </div>
            <div id="produto">
              <img src="../assets/camiseta1.svg" />
              <p class="title">Camiseta Branca Nike</p>
              <p class="preco headline font-weight-medium">R$ 69,90</p>
              <p class="subtitle-2 espacamento">5x de R$ 14,00 sem juros*</p>
              <p>
                <router-link to="/camiseta-algodão-branca-nike" class="text-decoration">
                  <Vbtncomprar />
                </router-link>
              </p>
            </div>
          </v-col>
          <v-col>
            <div class="marginbottom" id="produto-alinhar">
              <img src="../assets/calca1.svg" />
              <p class="title">Calça Moleton Cinza</p>
              <p class="preco headline font-weight-medium">R$ 99,90</p>
              <p class="subtitle-2 espacamento">5x de R$ 20,00 sem juros*</p>
              <p>
                <Vbtncomprar />
              </p>
            </div>
            <div class id="produto-alinhar">
              <img src="../assets/colar1.svg" />
              <p class="title">Colar AK-47</p>
              <p class="preco headline font-weight-medium">R$ 39,90</p>
              <p class="subtitle-2 espacamento">5x de R$ 8,00 sem juros*</p>
              <p>
                <Vbtncomprar />
              </p>
            </div>
          </v-col>
          <v-col>
            <div class="marginbottom" id="produtos">
              <img src="../assets/moleton1.svg" />
              <p class="title">Moleton Preto Adidas</p>
              <p class="preco headline font-weight-medium">R$ 129,90</p>
              <p class="subtitle-2 espacamento">5x de R$ 26,00 sem juros*</p>
              <p>
                <Vbtncomprar />
              </p>
            </div>
            <div id="produtos">
              <img src="../assets/pulseira1.svg" />
              <p class="title">Pulseira de Couro</p>
              <p class="preco headline font-weight-medium">R$ 29,90</p>
              <p class="subtitle-2 espacamento">5x de R$ 9,90 sem juros*</p>
              <p>
                <Vbtncomprar />
              </p>
            </div>
          </v-col>
        </v-row>
      </div>

      <!-- Promoções -->
      <div class="titulo d-flex align-center justify-center">
        <hr />
        <h2 class="text-center">Promoções</h2>
        <hr />
      </div>

      <div class="div-produtos tamanho text-center mt-10 mb-5">
        <v-row class="mb-10">
          <v-col>
            <div class="marginbottom">
              <img src="../assets/bone1.svg" />
              <p class="title">Boné Jordan</p>
              <p class="preco headline font-weight-medium">R$ 89,90</p>
              <p class="subtitle-2 espacamento">5x de R$ 18,00 sem juros*</p>
              <p>
                <Vbtncomprar />
              </p>
            </div>
            <div class>
              <img src="../assets/camiseta1.svg" />
              <p class="title">Camiseta de Algodão Branca Nike</p>
              <p class="preco headline font-weight-medium">R$ 69,90</p>
              <p class="subtitle-2 espacamento">5x de R$ 14,00 sem juros*</p>
              <p>
                <router-link to="/camiseta-algodão-branca-nike" class="text-decoration">
                  <Vbtncomprar />
                </router-link>
              </p>
            </div>
          </v-col>
          <v-col>
            <div class="marginbottom">
              <img src="../assets/calca1.svg" />
              <p class="title">Calça Moleton Cinza</p>
              <p class="preco headline font-weight-medium">R$ 99,90</p>
              <p class="subtitle-2 espacamento">5x de R$ 20,00 sem juros*</p>
              <p>
                <Vbtncomprar />
              </p>
            </div>
            <div class>
              <img src="../assets/colar1.svg" />
              <p class="title">Colar AK-47</p>
              <p class="preco headline font-weight-medium">R$ 39,90</p>
              <p class="subtitle-2 espacamento">5x de R$ 8,00 sem juros*</p>
              <p>
                <Vbtncomprar />
              </p>
            </div>
          </v-col>
          <v-col>
            <div class="marginbottom" id="produtos">
              <img src="../assets/moleton1.svg" />
              <p class="title">Moleton Preto Adidas</p>
              <p class="preco headline font-weight-medium">R$ 129,90</p>
              <p class="subtitle-2 espacamento">5x de R$ 26,00 sem juros*</p>
              <p>
                <Vbtncomprar />
              </p>
            </div>
            <div id="produtos">
              <img src="../assets/pulseira1.svg"  />
              <p class="title">Pulseira de Couro</p>
              <p class="preco headline font-weight-medium">R$ 29,90</p>
              <p class="subtitle-2 espacamento">5x de R$ 9,90 sem juros*</p>
              <p>
                <Vbtncomprar />
              </p>
            </div>
          </v-col>
        </v-row>
        <div>
          <Vbtnvermais />
        </div>
      </div>
      </div>
    </v-content>
    <Vfooter />
  </div>
</template>

<script>
import Vfooter from "../components/footer";
import Vmarcas from "../components/marcaspopulares";
import Vbtnvermais from "../components/btn-vermais";
import Vbtncomprar from "../components/btn-comprar";
import Vcarousel from "../components/carousel";

export default {
  components: {
    Vfooter,
    Vmarcas,
    Vbtnvermais,
    Vbtncomprar,
    Vcarousel
  },
  data() {}
};
</script>
<style scoped>

.titulo hr {
  width: 32%;
  height: 10px;
  border: none;
  background-color: purple;
}
.titulo h2 {
  background-color: purple;
  font-size: 30px;
  padding: 10px 0;
  color: #fff;
  width: 320px;
}
.div-produtos img {
  width: 220px;
}
@media (max-width:800px){

  .Alinhar{
    justify-content: center; 
    display: flex;
    align-items: center;
  }
  #Novidades{
   align-items: center;
  }
.titulo hr{
  height: 5px;
  width: 50px;
}
.titulo h2{
  font-size: 20px;
}
 @media (max-width:788px){
   #produtos{
     display: none;
     
   }
   
 }#produto-alinhar{
  align-items: center;
 }

}
</style>
