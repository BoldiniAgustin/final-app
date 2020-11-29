<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/GameStop.png')"
          class="my-3"
          contain
          height="100"
        />
        <h2>Welcome to GameStop</h2>
        <p>The place where gaming begins</p>
      </v-col>

      <v-col cols="12">
        <v-btn color="red darken-4" @click="$router.push('/shop')"
          >Start Shopping
          <v-icon>
            mdi-store
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Index',
  methods: {},

  data: () => ({}),
};
</script>

<style scoped>
.v-icon {
  margin-left: 0.3rem;
}
</style>
