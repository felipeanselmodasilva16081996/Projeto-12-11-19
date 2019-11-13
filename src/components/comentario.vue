<template>
  <div id="form">
    <v-form>
      <div id="area">
        <v-textarea v-model="textarea" :rules="textareaRules" label="Deixe seu comentário" rows="3"></v-textarea>
      </div>
      <div class="text-center mt-5">
        <Vbtnenviar />
      </div>
    </v-form>
  </div>
</template>
<script>
import Vbtnenviar from "../components/btn-enviar";
export default {
  components: {
    Vbtnenviar
  },
  data() {
    return {
      textareaRules: [v => !!v || "O comentário é obrigatório"]
    };
  }
};
</script>
<style scoped>
#area {
  border-top: 30px solid rgb(102, 0, 102);
  border-bottom: 30px solid rgb(102, 0, 102);
  border-left: 70px solid rgb(102, 0, 102);
  border-right: 70px solid rgb(102, 0, 102);
}
#form {
  width: 80%;
  margin: auto;
}
</style>
<style>
</style>