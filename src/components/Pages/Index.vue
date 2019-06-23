<template>
  <section>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex v-for="(item, index) in items" :key="index" xs12 sm6 md4 lg3>
          <v-card style="margin: 1rem;">
            <v-img
              :src="item.img"
              aspect-ratio="2.75"
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{item.title}}</h3>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn flat color="teal lighten-1" :to="item.to">Veja mais</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </section>
</template>

<script>
import axios from 'axios'

export default{
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
      .catch(erro => console.error(erro))
  },
}
</script>