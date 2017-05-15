<template>
  <v-card class="cat-card">
    <v-card-row v-bind:img="item.img" height="300px">
      <v-card-text class="white--text pa-0">
        <v-card-title>
          {{item.title}}
        </v-card-title>
        <v-card-row height="100%" class="pl-5 pt-5">
          <div class="display-1 pl-5 pt-5">{{item.title}}</div>
        </v-card-row>
      </v-card-text>
    </v-card-row>
    <v-list two-line>
      <v-list-item>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon class="indigo--text">pets</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
module.exports = {
  props: ['item']
}
</script>

<style>
.cat-card {
  max-width: 800px;
}
</style>
