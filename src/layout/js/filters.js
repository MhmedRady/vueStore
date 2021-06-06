import Vue from "vue";

Vue.filter("cropText",function (text,maxLength = 100,end = '...') {
    return text.substring(0,maxLength) + ` ${end}`;
});

