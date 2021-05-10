import Vue from "vue";
import bodyContent from "./contents/bodyContent.vue";
import widgets from "./contents/Widgets.vue";
import router from "./router";
import store from "./store";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { BCarousel } from 'bootstrap-vue'

import VueOwlCarousel from 'vue-owl-carousel'

import VueSlickCarousel from 'vue-slick-carousel'

import AOS from 'aos'

import './importPkgs.js'



// import * as globalFun from "./layout/js/helper.js";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.component('b-carousel', BCarousel)

Vue.component('OwlCarousel',VueOwlCarousel);
Vue.component('SlickCarousel', VueSlickCarousel)

// Vue.use(AOS)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    AOS.init()
  },
  render: (h) => h(bodyContent),
}).$mount("#body");

new Vue({
  router,
  store,
  render: (h) => h(widgets),
}).$mount("#widgets");

