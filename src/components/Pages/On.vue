<template>
  <section>
    <h1>Utilizando v-on</h1>
    <button class="btn btn-primary" @click="enviar">Voltar</button>
  </section>
</template>

<script>
export default{
  methods: {
    enviar() {
      this.$router.push("/");
    }
  },
}
</script>
