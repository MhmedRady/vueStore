import Vue from "vue";
import bodyContent from "./contents/bodyContent.vue";
import widgets from "./contents/Widgets.vue";
import router from "./router";
import store from "./store";

import "normalize.css";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";

import "bootstrap-vue/dist/bootstrap-vue.css";

import "popper.js";
import "bootstrap/dist/js/bootstrap.js";

// import "../src/layout/css/font-awesome.min.css";
import "./layout/css/font-awesome.min.css";
import "../src/layout/css/material-icons.css";



// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(bodyContent),
}).$mount("#body");

new Vue({
  router,
  store,
  render: (h) => h(widgets),
}).$mount("#widgets");

