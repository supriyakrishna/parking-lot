import Vue from "vue";
import App from "./App.vue";
import router from "./components/router";
import store from "../src/store";
import './plugins/element.js'

// import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
// import { Button } from "element-ui";
// Vue.use(Button);
Vue.config.productionTip = false;

// Vue.use(ElementUI);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
