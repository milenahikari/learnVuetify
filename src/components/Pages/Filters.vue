<template>
  <section>
    <h1>Utilizando Filters</h1>
    <p>Métodos que formatam um dado recebido para que ele seja melhor apresentado na tela</p>
    <ul>
      <li v-for="usuario in usuarios">{{usuario.nome | upperCase()}} </li>
    </ul>
    <br><hr><br>
    <ul>
      <li v-for="usuario in usuarios">{{usuario.nome | truncate('10')}} </li>
    </ul>
    <br><br>
    <router-link to="/">Voltar</router-link>
  </section>
</template>

<script>
export default{
  data() {
    return {
      usuarios: [
        {nome: "Mariana Flores"},
        {nome: "Joaquina da Silva"},
        {nome: "Bruno José"}
      ]
    }
  },
  methods: {
    enviar() {
      this.$router.push("/");
    }
  },
  filters: {
    upperCase(string) {
      return string.toUpperCase();
    },
    truncate(str, lenght) {
      var output = str;
      if(output.lenght > lenght) output = str.substring(0, lenght) + ' ...';

      return str.substring(0, lenght);
    }
  }
}
</script>
