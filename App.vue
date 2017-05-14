<template>
  <v-app left-fixed-sidebar id="app">
    <v-toolbar>
      <v-toolbar-side-icon @click.native.stop="showNav = !showNav" />
      <v-toolbar-logo>Hello Vuetify</v-toolbar-logo>
    </v-toolbar>
    <main>
      <v-sidebar left fixed drawer v-model="showNav">
        <v-list>
          <v-list-item>
            <v-list-tile :router="true" :to="{ name: 'home'}">
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile>
          </v-list-item>
          <v-list-item>
            <v-list-tile :router="true" :to="{ name: 'foo'}">
              <v-list-tile-title>Foo</v-list-tile-title>
            </v-list-tile>
          </v-list-item>
          <v-list-item>
            <v-list-tile :router="true" :to="{ name: 'bar'}">
              <v-list-tile-title>Bar</v-list-tile-title>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-sidebar>
      <v-content>
        <v-container fluid>
          <router-view class="view"></router-view>
        </v-container>
      </v-content>
    </main>
    <v-footer>Footer</v-footer>
  </v-app>
</template>

<script>
module.exports = {
	data: function() {
		return {
      showNav: false
    };
	}
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
}
</style>
