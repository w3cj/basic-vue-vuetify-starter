Vue.use(VueRouter);

const componentInfos = [
  {
    name: 'home',
    componentUrl: 'components/Home.vue',
    path: '/'
  },
  {
    name: 'about',
    componentUrl: 'components/About.vue',
    path: '/about'
  }
]

const routes = componentInfos.map(function(component) {
  component.component = Vue.component(component.name, httpVueLoader(component.componentUrl));
  return component;
});

const router = new VueRouter({
  routes: routes
});
