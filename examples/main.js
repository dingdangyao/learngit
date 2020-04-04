import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "../lib/my.css";
import "element-ui/lib/theme-chalk/index.css";

// 导入组件库
import search from "./../packages/index";
import Login from "./../packages/index";
import navigation from "./../packages/index";
import card from "./../packages/index";

// 注册组件库
Vue.use(search);
Vue.use(Login);
Vue.use(ElementUI);
Vue.use(navigation);
Vue.use(card);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
