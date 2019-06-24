<template>
  <section>
    <h1>Usando o v-model em formulário</h1>

    <div>
      <label for="">Nome</label><br>
      <input class="format-input" type="text" v-model="nome">

      <br><br>
      <label for="">Telefone</label><br>
      <input class="format-input" type="text" v-model="telefone">

      <br><br>
      <label for="">Deseja receber nossas novidades?</label><br>
      <input type="radio" value="Sim" v-model="novidades">Sim
      <input type="radio" value="Não" v-model="novidades">Não

      <br><br>
      <label for="">Interesses</label><br>
      <input type="checkbox" value="Futebol" v-model="interesses">Futebol <br>
      <input type="checkbox" value="Formula" v-model="interesses">Formula <br>
      <input type="checkbox" value="Corrida" v-model="interesses">Corrida <br>

      <br><br>
      <label for="">Como nos conheceu?</label><br>
      <select class="format-input" v-model="conheceu">
        <option value="Escolha">Escolha</option>
        <option value="Google">Google</option>
        <option value="TV">TV</option>
        <option value="Revista">Revista</option>
      </select>

      <br><br>

      <hr>
      <br><br>
      Nome: {{nome}} <br>
      Telefone: {{telefone}} <br>
      Novidades: {{novidades}} <br>
      Interesses: {{interesses}} <br>
      Como conheceu: {{conheceu}} <br>

    </div>

    <br>
    <router-link to="/">Voltar</router-link>
  </section>
</template>

<script scoped>
export default {
  data() {
    return {
      nome: "",
      telefone: "",
      novidades: "",
      interesses: [],
      conheceu: ""
    }
  }
}
</script>

<style>
label {
  margin-top: 20px;
  margin-bottom: 10px;
}
.format-input {
  width: 400px;
  height: 35px;
}
</style>