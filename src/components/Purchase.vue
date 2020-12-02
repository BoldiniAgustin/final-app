<template>
  <v-dialog max-width="600" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" @click="create">Purchase</v-btn>
    </template>

    <v-card>
      <v-card-title class="headline grey darken-3">
        Confirm Purchase
      </v-card-title>
      <v-col cols="12">
        <v-card-title class="pa-0">
          Items
          <v-icon class="pa-1">mdi-gamepad-variant</v-icon>
        </v-card-title>
        <h4 v-for="item in title" :key="item">•{{ item }}</h4>

        <v-card-title class="pa-0">
          Price
          <v-icon class="pa-1">mdi-currency-usd</v-icon>
        </v-card-title>
        <h4>${{ price }}</h4>
      </v-col>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-4" text @click="confirm">
          Confirm
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['items'],
  data() {
    return {
      dialog: null,
      price: 0,
      title: [],
      gottaFetch: true,
    };
  },
  methods: {
    create() {
      this.price = this.items.reduce((acc, el) => acc + el.price, 0);
      this.title = this.items.map(item => item.title);
    },
    confirm() {
      this.dialog = false;
      this.$emit('clearCart');
    },
  },
};
</script>
