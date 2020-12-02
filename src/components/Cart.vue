<template>
  <v-container class="pa-0">
    <v-card max-width="500" class="mx-auto">
      <v-list>
        <v-list-item v-for="(game, index) in games" :key="index">
          <v-list-item-avatar>
            <v-img :src="game.img"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="game.title"></v-list-item-title>
            <v-list-item-subtitle> ${{ game.price }} </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-icon>
            <v-btn icon @click="deleteItem(game.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-card>
    <v-footer padless fixed>
      <v-card flat tile width="100%">
        <v-card-text>
          <Purchase :items="games" @clearCart="clearCart" />
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>

<script>
import Purchase from './Purchase.vue';
export default {
  components: { Purchase },
  data() {
    return {
      games: null,
    };
  },
  methods: {
    async fetchItems() {
      try {
        const cart = JSON.parse(localStorage.getItem('weebstore-cart')) || [];
        if (cart.length) {
          const response = await fetch(
            `http://192.168.1.69:3000/games?${cart.map(x => `id=${x}&`).join``}`
          );
          const data = await response.json();
          this.games = data;
        }
      } catch (error) {
        console.error(error);
      }
    },
    deleteItem(id) {
      const cart = JSON.parse(localStorage.getItem('weebstore-cart'));
      const newCart = cart.filter(x => x !== id);
      this.games = this.games.filter(x => x.id !== id);
      localStorage.setItem('weebstore-cart', JSON.stringify(newCart));
    },
    clearCart() {
      this.games = [];
      localStorage.setItem('weebstore-cart', JSON.stringify([]));
    },
  },
  created() {
    this.fetchItems();
  },
  watch: {
    $route: 'fetchItems',
  },
};
</script>
