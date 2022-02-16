import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { VueDapp } from 'vue-dapp'

createApp(App).use(store).use(router).use(VueDapp).mount("#app");