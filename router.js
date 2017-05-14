Vue.use(VueRouter);

const Home = Vue.component('home', httpVueLoader('components/Home.vue'));
const Foo = Vue.component('foo', httpVueLoader('components/Foo.vue'));
const Bar = Vue.component('bar', httpVueLoader('components/Bar.vue'));

const router = new VueRouter({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/foo', name: 'foo', component: Foo },
    { path: '/bar', name: 'bar', component: Bar }
  ]
});
