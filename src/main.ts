import { createApp } from 'vue'
import 'uno.css'
import '@unocss/reset/tailwind.css'
import App from "~/App.vue";
import router from "~/router";

import * as Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

createApp(App)
  .use(router)
  .mount("#app");
