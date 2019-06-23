<template>
  <section>
    <h1>Utilizando Computed</h1>
    <p>Nome computado: {{nomeFormatado}}</p>
    <input type="text" v-model="nome">

    <p>Propriedade utilizada para retornar valores após a execução de rotinas de programação. Sempre é atualizada de acordo com a atualização das variáveis.</p>
    <p>Armazena o resultado da operação em cache com base nas propriedades, faz com que economize processamento, utilizando os valores que já foram processados.</p>
    

  </section>
</template>

<script>
export default {
  data(){
    return {
      nome: "",
    }
  },
  computed: {
    nomeFormatado() {
      return this.nome.toUpperCase();
    }
  },
  methods: {
  },
}
</script>