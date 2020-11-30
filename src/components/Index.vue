<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <div style="padding-bottom: 0%; position: relative">
          <v-img src=https://i.imgur.com/6387aXl.jpg />
        </div>

        <h2>Welcome to GameStart</h2>
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
