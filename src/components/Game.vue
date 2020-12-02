<template>
  <v-container class="container" v-if="game">
    <v-col cols="12" class="container">
      <div style="padding-bottom: 0%; position: relative">
        <v-img :src="game.img" />
      </div>
      <v-card class="globalcard" elevation="10">
        <div class="blocky2">
          <h1>
            <v-card-title class="titlec font-weight-medium"
              ><h2>{{ game.title }}</h2></v-card-title
            >
            <v-rating
              :value="game.value"
              color="red accent-4"
              dense
              half-increments
              readonly
              size="70%"
              style="float: right; padding-right: 2%"
            ></v-rating>
          </h1>
        </div>

        <div class="blocky1">
          <v-chip-group>
            <v-chip>
              <v-icon>mdi-currency-usd</v-icon>
              {{ game.price }}
            </v-chip>
            <div v-if="availability">
              <v-chip color="green">
                <v-icon>mdi-check</v-icon>
                Available
              </v-chip>
            </div>
            <div v-else>
              <v-chip color="red">
                <v-icon>mdi-close</v-icon>
                Unavailable
              </v-chip>
            </div>
          </v-chip-group>

          <v-card elevation="10">
            <v-card-text>
              {{ game.description }}
            </v-card-text>
          </v-card>
        </div>

        <!-- This shall be fixed on the future, sadly 😭.
      Images must be cropped/resized to the exact size of [RESEARCH LATER] (No more😎),
      meaning I can only use ONE or two of the Games, gotta be careful(Not anymore 😎)
      IT'S SOLVED YEEEEEEEEEEEEEEEEEES, thx Emi
      -->
        <div>
          <v-card-title class="titlec font-weight-medium">
            <h3>
              Image Gallery
              <v-icon>mdi-image-area</v-icon>
            </h3>
          </v-card-title>

          <v-carousel class="carousel" hide-delimiters>
            <v-carousel-item
              class="c-item"
              position="center"
              v-for="img in game.carousel"
              :key="img"
            >
              <v-img :src="img" />
            </v-carousel-item>
          </v-carousel>
        </div>
        <div class="blocky2">
          <v-card-title class="titlec font-weight-medium">
            <h3>
              Tags
              <v-icon>mdi-tag</v-icon>
            </h3>
          </v-card-title>
          <v-chip-group class="pa-1">
            <v-chip v-for="tag in game.tags" :key="tag">
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </div>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: 'Game',
  data: () => ({
    fetched: false,
    game: null,
    availability: null,
  }),
  methods: {
    async fetchData() {
      const { id } = this.$route.params;
      const response = await fetch(`http://192.168.1.69:3000/games/${id}`);
      const game = await response.json();
      this.game = game;
      if (game.availability) {
        this.availability = true;
      } else {
        this.availability = false;
      }
    },
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: 'fetchData',
  },
};
</script>

<style scoped>
.container {
  max-width: 100vw;
  padding: 0px;
}
h1 {
  display: block;
}
.carousel {
  height: 250px !important;
  padding-top: 10px;
}
.c-item {
  background-size: contain;
}
.titlec {
  size: 6rem;
  float: left;
  padding-left: 5%;
}
.globalcard {
  padding: 1rem;
}
.blocky1 {
  display: inline-block;
}
.blocky2 {
  display: block;
}
</style>
