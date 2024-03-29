import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from 'pinia'
import { piniaHistoryPlugin } from "@/plugins/PiniaHistoryPlugin";

import FontAwesomePlugin from "./plugins/FontAwesome";
import "./assets/main.pcss";

import AppButton from "./components/AppButton.vue";
import AppCountInput from "./components/AppCountInput.vue";
import AppModalOverlay from "./components/AppModalOverlay.vue";

const pinia = createPinia()
pinia.use(piniaHistoryPlugin)

createApp(App)
  .use(FontAwesomePlugin)
  .use(pinia)
  .component("AppButton", AppButton)
  .component("AppCountInput", AppCountInput)
  .component("AppModalOverlay", AppModalOverlay)
  .mount("#app");
