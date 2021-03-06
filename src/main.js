import Vue from "vue";
import bodyContent from "./contents/bodyContent.vue";
import footerContent from "./contents/footer.vue";
import widgets from "./contents/Widgets.vue";
import router from "./router";
import store from "./store";

import Lazyload from 'vue-lazyload'

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { BCarousel } from 'bootstrap-vue'

import VueOwlCarousel from 'vue-owl-carousel'

import VueSlickCarousel from 'vue-slick-carousel'

// import VueLazyload from 'vue-lazyload'

import AOS from 'aos'

import './importPkgs.js'
import './layout/js/filters'
import Helper from "./layout/js/helper.js";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(Lazyload);

Vue.component('b-carousel', BCarousel)

Vue.component('OwlCarousel',VueOwlCarousel);
Vue.component('SlickCarousel', VueSlickCarousel)

Vue.config.productionTip = false;

// Vue Lazy Load with options
const loadimage = require('./assets/svg/image-default.png')
const errorimage = require('./assets/svg/image-default.png')

Vue.use(Lazyload, {
  preLoad: 1.3,
  error: errorimage,
  loading: loadimage,
  attempt: 1
})

new Vue({
  router,
  store,
  
  created() {
    AOS.init()
  },
  mounted() {
    window.addEventListener('resize', Helper.reSize);
  },
  render: (h) => h(bodyContent),
}).$mount("#body");

new Vue({
  router,
  store,
  mounted() {
    Helper.reSize()
  },
  render: (h) => h(footerContent),
}).$mount("#mainFooter");

new Vue({
  router,
  store,
  render: (h) => h(widgets),
}).$mount("#widgets");

