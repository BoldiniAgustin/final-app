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
  { name: 'home', path: '/', component: Home },
  { name: 'shop', path: '/shop', component: Shop },
  { name: 'game', path: '/game/:id', component: Game },
  { name: 'card', path: '/cart', component: Cart },
  { name: 'about', path: '/about', component: About },
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
