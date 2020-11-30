<template>
  <v-container class="container pa-0">
    <v-col class="container pa-0">
      <div style="padding-bottom: 0%; position: relative">
        <v-img src="https://i.imgur.com/2duAvu7.jpg" />
      </div>

      <div style="text-align: center">
        <h2>This is us, the humble people at GameStart</h2>
        <h4>
          We strive to bring the best games to our community, at the best price
          possible
        </h4>
        <br />
        <h3>We hope you enjoy shopping with us!</h3>
        <div style="padding-bottom: 0%; position: relative">
          <v-img src="https://i.imgur.com/CozCyGm.jpg" />
        </div>
        <h5>This will be you, after buying a game from us</h5>
        <br /><br /><br />
      </div>

      <v-footer padless fixed>
        <v-card flat tile width="100%">
          <v-card-text>
            <v-btn>
              <v-icon class="pr-1">mdi-thumb-up-outline</v-icon>
              Check out our GitHub repo!
            </v-btn>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-col>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.center {
  left: 15%;
  right: 15%;
}
</style>
