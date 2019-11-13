<template>
<div id="NavFull">
  <v-card
    height="414px"
    width="180px  "
    class="justify-sm-start align-sm-center mt-5"
  >
    <v-navigation-drawer permanent>
      <v-list-item class="purple text-center">
        <v-list-item-content>
          <v-list-item-title class="white--text">
            Gladius Store
          </v-list-item-title>
          <v-list-item-subtitle class="white--text">
            Painel Administrativo
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <div class="ma-5 text-center" id="links">
       <router-link to="/Login"> <v-btn color="transparent" elevation="0" class="purple--text" id="btn" >
      Home</v-btn></router-link><br>
      <router-link to="/Cadastro"> <v-btn color="transparent" elevation="0" class="purple--text" id="btn" >
      Cadastro</v-btn></router-link><br>
      <router-link to="/"> <v-btn color="transparent" elevation="0" class="purple--text" id="btn" >
      Sair</v-btn></router-link>
      </div>
    </v-navigation-drawer>
  </v-card>
  </div>
</template>
<script>

</script>
<style>
#btn{
  width: 200px;
}
#btn:hover{
 background: white;
}
#links a{
  color: rgb(175, 8, 175);
}
*{
  text-decoration: none;
}
@media (max-width: 860px){
  #NavFull{
    display: none;
  }
  }
</style>