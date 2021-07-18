import { createApp } from "vue";
import App from "./App.vue";
import { createMetaManager } from "vue-meta";

createApp(App).use(createMetaManager()).mount("#app");
