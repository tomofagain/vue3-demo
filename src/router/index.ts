import type App from "vue";
import { createWebHistory, createRouter } from "vue-router";
import routeArr from "./route";
import router from "/@/router";
import { ifLogIn } from "/@/reactive/user.js";

const history = createWebHistory(process.env.BASE_URL);

const router = createRouter({
  history,
  routes: routeArr,
});
router.beforeEach((to, from) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const userInfo = ifLogIn.value;
    if (userInfo) {
      if (to.path === "/login") {
        return true;
      } else {
        return true;
      }
    } else {
      router.push({ path: "/login" });
      return false;
    }
  } else {
    return true;
  }
});
export function setupRouter(app: App<Element>) {
  app.use(router);
}
export default router;
