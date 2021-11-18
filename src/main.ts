import { key } from "./store/index";
import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

createApp(App).use(store, key).mount("#app");
