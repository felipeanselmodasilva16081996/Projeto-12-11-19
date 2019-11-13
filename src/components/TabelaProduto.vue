<template>

  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation ma-5 align-center"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title class="white--text purple pa-2">Produtos</v-toolbar-title>
       
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="purple" dark class="mb-2" v-on="on">Adicionar Produto</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name" label="Nome"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.categoria" label="Categoria"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.id" label="Marca"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.tamanho" label="Tamanho"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.qtd" label="Quantidade"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.cor" label="Cor"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="save">Salvar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        Editar
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        Excluir
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
 
</template>
<script>
  export default {
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Nome',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: 'Categoria', value: 'categoria' },
        { text: 'Marca', value: 'marca' },
        { text: 'Tamanho', value: 'tamanho' },
        { text: 'Qtd', value: 'qtd' },
        { text: 'Cor', value: 'cor' },
        { text: 'Ação', value: 'action', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        categoria: '',
        marca: '',
        tamanho: '',
        qtd: '',
        cor:'',
      },
      
      
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Novo Produto' : 'Editar Produto'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            name: 'Air Max 90 Essential',
            categoria: 'Tênis',
            marca: 'Nike',
            tamanho: '38/39/40/41/42',
            qtd: '15',
            cor: 'Branco/Preto/Cinza',
          },
          {
            name: ' Adidas MH BOS',
            categoria: 'Camiseta',
            marca: 'Adidas',
            tamanho: 'P/M/G/GG',
            qtd: '8',
            cor:'Branco/Cinza/Preto',
          },
           {
            name: 'Gradt Lcr3',
            categoria: 'Tênis',
            marca: 'Lacoste',
            tamanho: '40/42/43',
            qtd: '12',
            cor:'Branco/vermelho/marrom',
          },
           {
            name: 'Boné Jordan Pro Jumpman',
            categoria: 'Acessorio',
            marca: 'Jordan',
            tamanho: 'Unico',
            qtd: '4',
            cor:'Vermelho/Azul',
          },  
            {
            name: 'Moleton Canguru Reserva',
            categoria: 'Blusas',
            marca: 'Reserva',
            tamanho: '8/12/16',
            qtd: '3',
            cor:'Verde/Preto',
          },  
            {
            name: 'Bermuda Adidas E3S',
            categoria: 'Shorts',
            marca: 'Adidas',
            tamanho: '40/42/44',
            qtd: '7',
            cor:'Preto/Azul/Amarelo',
          },  
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Deseja excluir este produto?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>
<style>
#table{
 margin: 
}
</style>