<template>
  <div>
    <v-system-bar id="topo" class="d-flex align-center justify-space-between">
      <h3>Rastreie seu pedido</h3>
      <h3>Fale Conosco</h3>
      <h3>Tel: (16)3253 - 5555</h3>
    </v-system-bar>

    <header>
      <div id="sub-topo1">
        <div id="logo">
          <v-img src="../assets/logo.png" width="80px"></v-img>
        </div>

        <nav id="menu">
          <v-menu v-model="menu" :close-on-content-click="false">
            <template v-slot:activator="{ on }">
              <router-link to="/" class="text-decoration">
                <v-btn color="transparent" elevation="0" dark v-on="on">Início</v-btn>
              </router-link>
            </template>
          </v-menu>
          <v-menu v-model="menu" :close-on-content-click="false" offset-y>
            <template v-slot:activator="{ on }">
              <v-btn color="transparent" elevation="0" dark v-on="on">
                Acessório
                <v-img src="../assets/icon-seta.svg"></v-img>
              </v-btn>
            </template>
            <v-list class="text-center" id="link">
              <router-link to="/boné" tag="button" id="a">Boné</router-link>
            </v-list>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">carteira</router-link>
            </v-list>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Colar</router-link>
            </v-list>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Óculos</router-link>
            </v-list>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Relógio</router-link>
            </v-list>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Pulseira</router-link>
            </v-list>
          </v-menu>
          <v-menu v-model="menu" :close-on-content-click="false" offset-y>
            <template v-slot:activator="{ on }">
              <v-btn color="transparent" elevation="0" dark v-on="on">
                Roupa
                <v-img src="../assets/icon-seta.svg"></v-img>
              </v-btn>
            </template>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Blusa</router-link>
            </v-list>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Camiseta</router-link>
            </v-list>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Calça</router-link>
            </v-list>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Moleton</router-link>
            </v-list>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Shorts</router-link>
            </v-list>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Jaqueta</router-link>
            </v-list>
          </v-menu>
          <v-menu v-model="menu" :close-on-content-click="false" offset-y>
            <template v-slot:activator="{ on }">
              <v-btn color="transparent" elevation="0" dark v-on="on">
                Calçados
                <v-img src="../assets/icon-seta.svg"></v-img>
              </v-btn>
            </template>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Chinelo</router-link>
            </v-list>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Tênis</router-link>
            </v-list>
          </v-menu>
          <v-menu v-model="menu" :close-on-content-click="false" offset-y>
            <template v-slot:activator="{ on }">
              <v-btn color="transparent" elevation="0" dark v-on="on">
                Infantil
                <v-img src="../assets/icon-seta.svg"></v-img>
              </v-btn>
            </template>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Blusa</router-link>
            </v-list>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Calça</router-link>
            </v-list>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Moleton</router-link>
            </v-list>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Shorts</router-link>
            </v-list>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Tênis</router-link>
            </v-list>
          </v-menu>
          <v-menu v-model="menu" :close-on-content-click="false">
            <template v-slot:activator="{ on }">
              <router-link to="/contato" class="text-decoration">
                <v-btn color="transparent" elevation="0" dark v-on="on">Contato</v-btn>
              </router-link>
            </template>
          </v-menu>
          <v-menu v-model="menu" :close-on-content-click="false">
            <template v-slot:activator="{ on }">
              <router-link to="/sobre" class="text-decoration">
                <v-btn color="transparent" elevation="0" dark v-on="on">Sobre</v-btn>
              </router-link>
            </template>
          </v-menu>
        </nav>
        <div id="div-busca" class="d-flex align-center">
          <div>
            <v-text-field type="text" dark></v-text-field>
          </div>
          <div>
            <v-btn small color="transparent" elevation="0">
              <img src="../assets/icon-search.svg" />
            </v-btn>
          </div>
        </div>

        <div id="div-logincarrinho" class="d-flex align-center pl-4">
          <router-link to="/" class="text-decoration">
            <img src="../assets/icon-login.svg" class="ml-1" />
          </router-link>

          <hr id="hr" />

          <button class="mt-2">
            <img src="../assets/icon-cart.svg" />
          </button>
        </div>
      </div>

      <div id="sub-topo2">
        <div class="d-flex align-center justify-space-between">
          <div id="logo">
            <v-img src="../assets/logo.png" width="80px"></v-img>
          </div>
          <div id="div-busca" class="d-flex align-center">
            <div>
              <v-text-field type="text" dark></v-text-field>
            </div>
            <div>
              <v-btn small color="transparent" elevation="0">
                <img src="../assets/icon-search.svg" />
              </v-btn>
            </div>
          </div>

          <div id="div-logincarrinho" class="d-flex align-center pl-4">
            <router-link to="/login" class="text-decoration">
              <img src="../assets/icon-login.svg" class="ml-1" />
            </router-link>

            <hr id="hr" />

            <button class="mt-2">
              <img src="../assets/icon-cart.svg" />
            </button>
          </div>
        </div>

        <nav id="menu">
          <v-menu v-model="menu" :close-on-content-click="false">
            <template v-slot:activator="{ on }">
              <router-link to="/" class="text-decoration">
                <v-btn color="transparent" elevation="0" dark v-on="on">Início</v-btn>
              </router-link>
            </template>
          </v-menu>
          <v-menu v-model="menu" :close-on-content-click="false" offset-y>
            <template v-slot:activator="{ on }">
              <v-btn color="transparent" elevation="0" dark v-on="on">
                Acessório
                <v-img src="../assets/icon-seta.svg"></v-img>
              </v-btn>
            </template>
            <v-list class="text-center" id="link">
              <router-link to="/boné" tag="button" id="a">Boné</router-link>
            </v-list>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">carteira</router-link>
            </v-list>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Colar</router-link>
            </v-list>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Óculos</router-link>
            </v-list>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Relógio</router-link>
            </v-list>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Pulseira</router-link>
            </v-list>
          </v-menu>
          <v-menu v-model="menu" :close-on-content-click="false" offset-y>
            <template v-slot:activator="{ on }">
              <v-btn color="transparent" elevation="0" dark v-on="on">
                Roupa
                <v-img src="../assets/icon-seta.svg"></v-img>
              </v-btn>
            </template>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Blusa</router-link>
            </v-list>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Camiseta</router-link>
            </v-list>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Calça</router-link>
            </v-list>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Moleton</router-link>
            </v-list>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Shorts</router-link>
            </v-list>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Jaqueta</router-link>
            </v-list>
          </v-menu>
          <v-menu v-model="menu" :close-on-content-click="false" offset-y>
            <template v-slot:activator="{ on }">
              <v-btn color="transparent" elevation="0" dark v-on="on">
                Calçados
                <v-img src="../assets/icon-seta.svg"></v-img>
              </v-btn>
            </template>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Chinelo</router-link>
            </v-list>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Tênis</router-link>
            </v-list>
          </v-menu>
          <v-menu v-model="menu" :close-on-content-click="false" offset-y>
            <template v-slot:activator="{ on }">
              <v-btn color="transparent" elevation="0" dark v-on="on">
                Infantil
                <v-img src="../assets/icon-seta.svg"></v-img>
              </v-btn>
            </template>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Blusa</router-link>
            </v-list>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Calça</router-link>
            </v-list>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Moleton</router-link>
            </v-list>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Shorts</router-link>
            </v-list>
            <v-list class="text-center" id="link">
              <router-link to="/" tag="button" id="a">Tênis</router-link>
            </v-list>
          </v-menu>
          <v-menu v-model="menu" :close-on-content-click="false">
            <template v-slot:activator="{ on }">
              <router-link to="/contato" class="text-decoration">
                <v-btn color="transparent" elevation="0" dark v-on="on">Contato</v-btn>
              </router-link>
            </template>
          </v-menu>
          <v-menu v-model="menu" :close-on-content-click="false">
            <template v-slot:activator="{ on }">
              <router-link to="/sobre" class="text-decoration">
                <v-btn color="transparent" elevation="0" dark v-on="on">Sobre</v-btn>
              </router-link>
            </template>
          </v-menu>
        </nav>

        <div class="hamburguer" @click="burguer">
          <div class="line line-1"></div>
          <div class="line line-2"></div>
          <div class="line line-3"></div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style>
#topo {
  background-color: rgb(97, 2, 97);
  color: #fff;
  padding: 20px 50px;
}
header {
  background-color: rgb(53, 0, 53);
  padding: 20px 25px;
}
#sub-topo1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}
#sub-topo2 {
  display: none;
}
#hr {
  height: 45px;
  margin: 0 20px;
}
#link:hover {
  background-color: purple;
}
#link:hover #a {
  color: #fff;
}
@media (max-width: 1300px) {
  #sub-topo1 {
    display: none;
  }
  #sub-topo2 {
    display: grid;
    grid-template-rows: 1fr 1fr;
    padding: 0 15px;
    text-align: center;
  }
  #menu {
    grid-row: 2/3;
    margin: 40px auto;
  }
  #hr {
    width: 2px;
    height: 45px;
  }
}
@media (max-width: 870px) {
  #menu {
    display: none;
  }
  .hamburguer {
    width: 35px;
    height: 30px;
    margin: 40px auto;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .line {
    width: 100%;
    height: 3px;
    background-color: #fff;
    transition: all 0.8s;
  }
  .change .line-1 {
    transform: rotateZ(-45deg) translate(-8px, 6px);
  }
  .change .line-2 {
    opacity: 0;
  }
  .change .line-3 {
    transform: rotateZ(45deg) translate(-8px, -6px);
  }
}
</style>
