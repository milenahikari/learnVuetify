<template>
  <section>
    <h1 :class="classHtml">{{titulo}}</h1>
    <img :src="caminho" :alt="descricao">
    <br>
    <br>
    <button :class="`btn ${btnClassLimpar}`">Limpar</button>
    <button class="btn" :class="btnClassRemover">Remover</button>
    <button class="btn" :class="btnClassEnviar">Enviar</button>

    <br>
    <br>
    <router-link to="/">Voltar</router-link>
  </section>
</template>

<script>
export default{
  data() {
    return {
      titulo: "Imagem de urso",
      caminho: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkrOHD5GDcmxuYxDHtCvZcI-c5c9I4jpDeOY0Le9y_VdOzvIiEzQ",
      descricao: "Urso bravo",
      classHtml: "green",

      btnClassRemover: "btn-danger btn-lg",
      btnClassEnviar: {
        "btn-primary": true,
        "btn-lg": true
      },
      btnClassLimpar: [
        "btn-secondary btn-lg"
      ]
    }
  }
}
</script>

<style>
.red {
  color: red
}
.green {
  color: green
}
</style>