<template>
  <div>
    <v-content>
      <div id="form" class="mt-10">
        <v-form>
          <h2 class="text-center">Está tendo algum problema? Nos envie um e-mail!</h2>
          <div id="area">
            <v-textarea v-model="textarea" :rules="textareaRules" label="Mensagem" rows="5"></v-textarea>
          </div>
          <div class="text-center mt-5">
            <Vbtnenviar />
          </div>
        </v-form>
      </div>
    </v-content>

    <Vfooter />
  </div>
</template>
<script>
import Vfooter from "../components/footer";
import Vbtnenviar from "../components/btn-enviar";
export default {
  components: {
    Vfooter,
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
  border: 15px solid rgb(102, 0, 102);
}
#form {
  width: 80%;
  margin: auto;
}
</style>
<style>
</style>