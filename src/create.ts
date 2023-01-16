import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";
import router from "@/router";
import OpenLayersMap from 'vue3-openlayers';

import 'vue3-openlayers/dist/vue3-openlayers.css';
import "@/assets/main.css";

export default function create({ config }) {
  const app = createApp(App, { config });

  app.use(createPinia());
  app.use(router);
  app.use(OpenLayersMap);

  app.mount("#app");
}