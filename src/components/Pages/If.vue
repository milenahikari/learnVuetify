<template>
  <section>
    <h2 v-if="condicao">{{texto1}}</h2><!--Se passar false não aparece-->
    <h2 v-show="condicao">{{texto2}}</h2><!--Se passar false aparece com diplay: none-->
    <router-link to="/"><span>Voltar</span></router-link>
  </section>
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