import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify';
import Shop from './components/Shop.vue';
import Home from './components/Index.vue';
import Game from './components/Game.vue';
import Cart from './components/Cart.vue';
import About from './components/About.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/shop', component: Shop },
  { path: '/game/:id', component: Game },
  { path: '/cart', component: Cart},
  {path:"/about", component: About}
];

const router = new VueRouter({
  routes,
});

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app');
