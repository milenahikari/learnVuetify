<template>
  <div id="app">
    <v-toolbar color="teal lighten-1">
      <v-toolbar-side-icon class="white--text" v-on:click="hide"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">
        <router-link to="/">
          Documentação VUE
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        
      </v-toolbar-items>
    </v-toolbar>
    
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list
        v-for="(item, index) in items"
          :key="item.title"  
      >
        <v-list-tile @click="toRouter(item.to)">
          <v-list-tile-action>
            <v-icon :color="item.color">{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
          
        </v-list-tile>
        <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
      </v-list>
      
    </v-navigation-drawer>
    
    <v-container>
      <router-view></router-view>
    </v-container>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'app',

  data() {
    return{
      titulo:"Aprendendo Diretivas",
      drawer: false,
      items: [],
    }
  },

  methods: {
    hide() {
      this.drawer = !this.drawer;
    }, 
    toRouter(url) {
      this.$router.push(`${url}`);
    }
  },

  mounted() {
    axios.get('/items.json')
      .then(res => this.items = res.data)
  },
}
</script>

<style>
#app {
  font-family: 'Nunito Sans', sans-serif;
}
h1 {
  color: #26A69A;
  margin-top: 25px;
  margin-bottom: 15px;
}
h2 {
  margin-top: 15px;
  margin-bottom: 10px;
}
a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}
p {
  font-size: 18px;
}
</style>
