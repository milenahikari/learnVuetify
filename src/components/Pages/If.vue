<template>
  <v-container grid-list-md>
    <h1 v-if="condicao">{{texto1}}</h1><!--Se passar false não aparece-->
    <p>A diretiva v-if é usada para renderizar condicionalmente um bloco. O bloco só será renderizado se a expressão da diretiva retornar um valor verdadeiro.</p>
    <p>Assim, se a condição for falsa, o conteúdo HTML não aparece no código.</p>
    <h1 v-show="condicao">{{texto2}}</h1><!--Se passar false aparece com diplay: none-->
    <router-link to="/"><span>Voltar</span></router-link>
  </v-container>
</template>

<script>
export default{
  data:() => ({
      condicao: true,
      texto1:"Utilizando v-if",
      texto2:"Utilizando v-show"
  })
}
</script>