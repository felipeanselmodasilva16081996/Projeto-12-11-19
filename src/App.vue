<template>
  <v-app app>
    <Vheader />
    <router-view></router-view>
    <Vstyle />
  </v-app>
</template>

<script>
import Vstyle from './components/style'
import Vheader from './components/header'

export default {
  name: 'App',
  components: {
    Vstyle,
    Vheader,
  },
  data: () => ({
  }),
};
</script>
<style>
</style>
