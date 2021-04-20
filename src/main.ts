import { createApp } from "vue";
import App from "./App.vue";
import { setupElementPlus } from "/@/setup/element-plus";
import "/@/style/element-variables.scss";
import { setupStore } from "/@/store/index";
import router, { setupRouter } from "/@/router/index";
// import "../permission.js";
import "/@/style/index.less";

const app = createApp(App);

setupRouter(app);
setupStore(app);
setupElementPlus(app);

router.isReady().then(() => {
  app.mount("#app");
});
