
import Vue from "vue";
import VueI18n from "vue-i18n";

import ar from "../lang/ar.json";
import en from "../lang/en.json";

Vue.use(VueI18n);   

export default new VueI18n({
    locale: 'ar',
    ar : ar,
    en : en,
});