Vue.use(httpVueLoader);
Vue.use(Vuetify);

new Vue({
  router,
  template: '<app></app>',
  components: {
    app: 'url:App.vue'
  }
}).$mount('#root');
