<template>
  <div id="Nav"> 
<div class="d-flex" > 
  <v-card
    height="50px"
    width="100%"
    class="justify-sm-start align-sm-center mt-5 purple"
  >


     <div class="d-flex">
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-item-icon class="white">
            <v-icon class="purple--text" >{{ item.icon }}</v-icon>
          </v-item-icon>

          
        </v-list-item>
     </div>
 
  </v-card>
  </div>
  </div>
</template> 
<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Inicio', icon: 'mdi-view-dashboard' },
          { title: 'Cadastro', icon: 'mdi-image' },
          { title: 'Sair', icon: 'mdi-help-box' },
        ],
        right: null,
      }
    },
  }
</script>
<style>
#Nav{
  display: none;
}
@media (max-width: 860px){
  #Nav{
    display: block;
  }
}
</style>