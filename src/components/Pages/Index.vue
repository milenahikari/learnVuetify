<template>
  <section>

    <v-toolbar color="teal darken-1">
      <v-toolbar-side-icon class="white--text" v-on:click="hide"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Documentação VUE</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        
      </v-toolbar-items>
    </v-toolbar>
    
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list>
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click="toRouter(item.to)"
        >
          <v-list-tile-action>
            <v-icon :color="item.color">{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      
    </v-navigation-drawer>

    <v-container fluid>
      <v-layout row wrap>
        <v-flex v-for="item in items" :key="`4${item}`" xs12 sm6 md4 lg3>
          <v-card style="margin: 1rem;">
            <v-img
              :src="item.img"
              aspect-ratio="2.75"
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{item.title}}</h3>
                <div> {{ card_text }} </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn flat color="teal darken-1" :to="item.to">Veja mais</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </section>
</template>

<script>
export default{
  data() {
    return{
      titulo:"Aprendendo Diretivas",
      drawer: false,
      items: [
          { 
            title: 'v-if and v-show', 
            icon: 'view_agenda', 
            to: '/if', 
            color: 'green',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzDMj-l1mch1gzmCTD9EAdFj0aDsuCKNCAwc23Z-2yG3RIppMnsg'
          },
          { 
            title: 'v-for', 
            icon: 'cached', 
            to: '/for', 
            color: 'purple',
            img: 'https://i.ytimg.com/vi/SnlJ-iXBTdM/maxresdefault.jpg'
          },
          { 
            title: 'v-model', 
            icon: 'compare_arrows', 
            to: '/model', 
            color: 'red',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy4C9hF0bmKq4GkwLD9QgpU2_PVN4pzkcMTyX-rSAxshPwvpR16w'
          },
          { 
            title: 'v-bind', 
            icon: 'settings_ethernet', 
            to: '/bind', 
            color: 'orange',
            img: 'https://i.ytimg.com/vi/HwxI_n4oLzc/maxresdefault.jpg'
          },
          { 
            title: 'v-on', 
            icon: 'edit_attributes', 
            to: '/on', 
            color: 'yellow',
            img: 'data:image/png;base64,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'
          },
          { 
            title: 'filter', 
            icon: 'filter_list', 
            to: '/filters', 
            color: 'blue',
            img: 'data:image/png;base64,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'
          },
          { 
            title: 'computed', 
            icon: 'computer', 
            to: '/computed', 
            color: 'gray',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT70cF99SK68OwjUggOBIIKyeoXlaiukg_ETQem_jyM-FMDcawrrQ'
          },
          { 
            title: 'watch', 
            icon: 'visibility', 
            to: '/watch', 
            color: 'brown',
            img: 'data:image/jpeg;base64,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'
          }
        ]
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
}
</script>