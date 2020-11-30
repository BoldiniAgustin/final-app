<template>
  <div class="text-center">
    <v-dialog width="600">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          Click Me
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey darken-3">
          Search
        </v-card-title>

        <v-col cols="12">
          <v-card-title class="pa-0">
            Name
            <v-icon class="pa-1">mdi-gamepad-variant</v-icon>
          </v-card-title>
          <v-text-field class="pa-0" placeholder="Insert name"></v-text-field>

          <v-card-title class="pa-0">
            Tags
            <v-icon class="pa-1">mdi-tag</v-icon>
          </v-card-title>
          <div>
            <v-checkbox label="Insert" class="ma-0 pa-0"> </v-checkbox>
          </div>

          <v-card-title class="pa-0">
            Price
            <v-icon class="pa-1">mdi-currency-usd</v-icon>
          </v-card-title>
          <v-text-field type="number" prefix="$"> </v-text-field>
        </v-col>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-4" text @click="logName(selectedName)">
            Search
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style></style>

<script>
export default {
  data: () => ({
    selectedTags: [],
    selectedname: '',
  }),

  methods: {
    search: function() {
      this.name = 'Bruh';
    },
    logName: function(selectedname) {
      console.log(selectedname);
    },
  },
};
</script>
