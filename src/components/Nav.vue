<template>
  <nav>
    <v-app-bar app color="red darken-4">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app temporary class="grey darken-4">
      <v-list>
        <v-list-item
          link
          v-for="(tab, index) in tabs"
          :key="index"
          @click="$router.push(tab.route)"
        >
          <v-list-item-icon>
            <v-icon>{{ tab.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ tab.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      tabs: [
        { title: 'Home', icon: 'mdi-home', route: '/' },
        { title: 'Shop', icon: 'mdi-store', route: '/shop' },
        { title: 'Cart', icon: 'mdi-cart-outline', route: '/cart' },
        { title: 'About Us', icon: 'mdi-help', route: '/about' },
      ],
    };
  },

  methods: {
    nav: function() {
      this.drawer = !this.drawer;
      console.log(this.drawer);
    },
  },
};
</script>
