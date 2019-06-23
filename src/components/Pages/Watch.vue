<template>
  <section>
    <h1>Utilizando Watch</h1>
    <p>Propriedade que observa quando uma variável se altera para rodar uma rotina.</p>
    <p>Sempre executa a rotina</p>
    
    <input type="text" v-model="busca">
    <p>{{resultado}}</p>
  </section>
</template>
<script>
export default {
  data() {
    return {
      busca: "",
      resultado: "",
    }
  },

  watch: {
    busca(newValue, oldValue) {
      this.resultado = "Digitando...";
      this.recolherRespota();
    }
  },

  methods: {
    recolherRespota() {
      let valor = this.busca;
      setTimeout(()=>{
        if(valor == this.busca) 
          this.resultado = "Terminou de digitar...";
      }, 500);
    }
  },

}
</script>
<style>
</style>