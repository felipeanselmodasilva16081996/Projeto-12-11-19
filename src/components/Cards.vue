<template>

  <div id="app">
  <v-app id="inspire">
    <v-container class="grey lighten-5">
      <v-row no-gutters class="d-flex justify-center">
        <v-col
          v-for="card in cards"
          :key="card.tile"
          cols="8"
          sm="6"
        >
    
        <div class="ma-2 ">
          <v-card>
             <v-card-title
            class="d-flex justify-start align-start purple--text"
            v-text="card.title"

          ></v-card-title>
          <div class="d-flex">
          <v-img 
            :alt="card.alt"
            :src="card.src"
            class="pa-2 d-flex"
            outlined
            tile
            height="100px"
            width="200px"
            
          >
            </v-img>
            </div>
          <v-card-text
          class="subtitle-1 text-center "
           v-text="card.text">
          </v-card-text>
           <div class="d-flex justify-center">
            <v-btn class="purple white--text">Detalhes</v-btn>
          </div>
            <div class="purple--text d-flex justify-end pr-5">
               <h2 class="mb-5"
                v-text="card.valor">>R$58,932.27</h2>
                <div v-text="card.views" class="purple--text pa-2"></div>
            </div>
          </v-card>
        </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</div>

</template>

<script>
export default {
data: () => ({
    cards: [
      { title: 'Vendas',text:'Realizações de vendas dos ultimos 30, dias para mais detalhes click no botão abaixo',valor:'R$58,622.31',src: require('../assets/Vendas.svg'),alt:'Venda Mensal' },
      { title: 'Pendências',text:'Vendas pendêntes dos ultimos 30, dias para mais detalhes click no botão abaixo',valor:'R$4,328.74' ,src: require('../assets/Pendente.svg'),alt:'Venda Mensal' },
      { title: 'Não Finalizadas',text:'Vendas não finalizadas dos ultimos 30 dias, para mais detalhe click no botão abaixo',valor:'R$5,874.13',src: require('../assets/NaoFinalizadas.svg'),alt:'Venda Mensal' },
      { title: 'Visualizações',text:'Pessoas que entraram no site dos ultimos 30 dias, para mais detalhes click no botão abaixo',valor:'29.318',views:'Viwes',src: require('../assets/Visita.svg'),alt:'Venda Mensal' },
      { title: 'Categoria mais visitada',text:'Categoria mais visitadas do site e maior compra, click abaixo para detalhes',valor:'314.252',views:'Views',src: require('../assets/Camiseta.svg'),alt:'Venda Mensal' },
      { title: 'Recomendações',text:'Total de visitantes e clientes que recomendam o site, mais detalhes click abaixo',valor:'23.819',views:'Recomendam',src: require('../assets/Recomendado.svg'),alt:'Venda Mensal' },






    ],
  }),
}
</script>

<style>
@media (max-width: 599px){
  
}
</style>