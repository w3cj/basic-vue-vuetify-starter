<template>
  <v-app id="app">
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
            <v-list-tile :router="true" :to="{ name: 'about'}">
              <v-list-tile-title>About</v-list-tile-title>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-sidebar>
      <v-content>
        <v-container>
          <router-view class="view"></router-view>
        </v-container>
      </v-content>
    </main>
    <v-footer>
      <div class="text-xs-right"><small>This starter uses the <a class="vuetify-link" href="https://vuetifyjs.com/" target="_blank">Vuetify.js</a> ui component framework.</small></div>
    </v-footer>
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
  justify-content: center;
}

a.vuetify-link {
  color: white;
}
</style>
