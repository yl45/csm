import Vue from "vue"
import router from "./router.js"
import app from "./app.vue"

import VueRouter from "vue-router";
Vue.use(VueRouter);
import VueResource from "vue-resource"
Vue.use(VueResource)
import {Header,Swipe, SwipeItem} from "mint-ui"
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.component(Header.name,Header)

import "./lib/mui/css/mui.min.css"
import "./lib/mui/css/icons-extra.css"
// import "mint-ui/lib/style.css"



// import Vue from "vue";

let vm=new Vue({
    el:"#app",
    render:c=>c(app),
    router
})


