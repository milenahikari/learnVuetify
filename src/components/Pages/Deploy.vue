<template>
  <section>
    <h1>Deploy  do app VUE + Webpack no Heroku</h1>

    <h2>1 - Fazendo o Build</h2>
    <p>Vamos primeiro fazer o build do nosso app:</p>
    <p>$ <span class="red--text">npm</span> run build</p>
    <p>Ao rodar o build vemos que o Webpack cria varios arquivos js na pasta “dist” com um único arquivo index.html, que pode ser rodado usando um servidor web.</p>
    <v-img src="src/img/dist.png"></v-img>

    <h2>2 - Criando arquivos de compilação</h2>
    <p>Esses passos são necessários para que a Heroku saiba como servir seus ativos estáticos sempre que dermos um push para o repo remoto. Adicione o postinstall e ganchos de início à sua seção de scripts no package.json (pasta raiz do app).</p>
    <p>"postinstall": "<span class="red--text">npm</span> run build",</p>
    <p>"start": "node server.js"</p>
    <p>Ficando desse jeito:</p>
    <v-img src='src/img/package.png'></v-img>

    <h2>3 - Criando server.js</h2>
    <p>Após feito isso, vamos criar um arquivo “server.js” na pasta raiz do app e escrever um script para fazer o servidor express rodar na pasta “dist”, com isso quando a aplicação iniciar no Heroku, vai rodar também nosso servidor:</p>
    <div class="code">
      <p>var express = require('express')</p>
      <p>var path = require('path')</p>
      <p>var serveStatic = require('serve-static')</p>
      <p>var app = express()</p>
      <p>app.use(serveStatic(path.join(__dirname, 'dist')))</p>
      <p>var port = process.env.PORT || 5000</p>
      <p>app.listen(port)</p>
      <p>console.log('server started ' + port)</p>
    </div>
    
    <h2>4 - Instalando express</h2>
    <p>$ <span class="red--text">npm</span> install express</p>

    <h2>5 - Instalando dependências</h2>
    <p>$ <span class="red--text">npm</span> i serve-static</p>
    <p>$ <span class="red--text">npm</span> i connect</p>

    <h2>6 - Subindo arquivos no Heroku</h2>
    <p>Basicamente o que fizemos até agora foi criar um servidor com o express e direcionar a pasta “dist” como raiz do app, fazendo com que esse server rode no <span class="green--text">heroku</span> logo ao fazermos o deploy.</p>
    <p>Agora é a parte que vamos fazer o deploy do app para o <span class="green--text">heroku</span>, vamos começar entrando na pasta raiz do projeto e logando no <span class="green--text">heroku</span>, depois vamos criar um projeto onde vamos fazer o deploy, veja:</p>
    <p>$ <span class="green--text">heroku</span> login</p>
    <p>$ <span class="green--text">heroku</span> create nome-projeto</p>

    <h2>7 - Conectando projeto local ao projeto remoto</h2>
    <p>$ <span class="green--text">heroku</span> git:remote -a nome-projeto</p>
    <p>$ git add .</p>
    <p>$ git commit -m "first commit"</p>
    <p>$ git push <span class="green--text">heroku</span> master</p>

    <h2>8 - Finalizando</h2>
  </section>
</template>

<script>
export default {
  
}
</script>

<style>
.code {
  background-color: #CFD8DC;
}
</style>