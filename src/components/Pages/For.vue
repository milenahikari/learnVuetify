<template>
  <section>
    <h1>Laço de repetição com v-for</h1>
    <ul>
      <li v-for="(linguagem, key) in linguagens">{{key}} - {{linguagem.nome}}</li>
    </ul>
    <router-link to="/">Voltar</router-link>
  </section>
</template>

<script>
export default{
  data() {
    return {
      linguagens: [
        {
          nome: "Javascript"
        },
        {
          nome: "PHP"
        },
        {
          nome: "Python"
        }
      ]
    }
  }
}
</script>