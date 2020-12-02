<template>
  <v-container>
    <v-layout row wrap>
      <v-flex v-for="game in games" :key="game.title" class="pa-2 xs6 md4">
        <v-card max-width="100%" elevation="6" shaped>
          <div @click="getInfo(game)">
            <div class="asp-rt">
              <v-img :src="game.img" />
            </div>

            <v-card-title> {{ game.title }} </v-card-title>
            <v-card-subtitle class="subtitle-1"
              >${{ game.price }}</v-card-subtitle
            >
            <v-rating
              :value="game.value"
              color="red accent-4"
              dense
              half-increments
              readonly
              size="100%"
              class="pl-2 my-0"
            ></v-rating>

            <!--ADD TAGS WHENEVER POSIBLE: Added 😎-->
            <v-card-text>
              <div v-for="tag in game.tags" :key="tag" class="my-0 subtitle-1">
                •{{ tag }}
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>
          </div>

          <v-card-actions>
            <v-btn color="red darken-4" text @click="snacc(game)"
              >Add to Cart
              <v-icon> mdi-plus </v-icon>
            </v-btn>

            <v-snackbar v-model="snackbar" timeout="1000">
              <template class="snacc">
                <span class="tab">{{ cont }} {{ text }}</span>
                <v-icon v-if="inCart">mdi-close</v-icon>
                <v-icon v-else> mdi-check</v-icon>
              </template>
            </v-snackbar>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Shop',
  computed: {
    cart() {
      return JSON.parse(localStorage.getItem('weebstore-cart')) || [];
    },
  },
  methods: {
    snacc: function(game) {
      this.snackbar = true;
      this.cont = game.title;
      this.available = game.availability;

      if (this.cart.includes(game.id)) {
        this.text = 'already in cart.';
        this.inCart = true;
      } else {
        if (this.available) {
          this.text = 'succesfully added to cart.';
          this.inCart = false;
          this.cart.push(game.id);
          localStorage.setItem('weebstore-cart', JSON.stringify(this.cart));
        } else {
          this.text = 'is not available';
        }
      }
    },
    async fetchData() {
      const response = await fetch('http://192.168.1.69:3000/games');
      const games = await response.json();
      this.games = games;
      this.fetched = true;
    },
    getInfo: function(game) {
      this.$router.push(`/game/${game.id}`);
    },
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: 'fetchData',
  },
  data: () => ({
    snackbar: false,
    fetched: false,
    cont: '',
    text: '',
    games: null,
    tags: null,
    inCart: true,
    available: false,
  }),
};
</script>

<style scoped>
.asp-rt {
  padding-bottom: 0%;
  position: relative;
}
.snacc {
  text-align: center;
}
</style>
