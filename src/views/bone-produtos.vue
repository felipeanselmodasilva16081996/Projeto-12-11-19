<template>
  <div>
    <v-container>
      <div class="div-produtos tamanho text-center mt-10 mb-10">
        <v-row>
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
            <div class="marginbottom">
              <img src="../assets/moleton1.svg" />
              <p class="title">Moleton Preto Adidas</p>
              <p class="preco headline font-weight-medium">R$ 129,90</p>
              <p class="subtitle-2 espacamento">5x de R$ 26,00 sem juros*</p>
              <p>
                <Vbtncomprar />
              </p>
            </div>
            <div class>
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
    </v-container>
    <Vfooter />
  </div>
</template>

<script>
import Vfooter from "../components/footer";
import Vbtncomprar from "../components/btn-comprar";

export default {
  components: {
    Vfooter,
    Vbtncomprar
  }
};
</script>
