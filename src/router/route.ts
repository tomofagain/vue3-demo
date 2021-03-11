import { JoinRoute } from "../../permission.js";
const routeArr = [
  {
    path: "/",
    name: "index",
    meta: { requiresAuth: true },
    redriect: "/home",
    component: () => import("/@/layout/index.vue"),
    children: [...JoinRoute],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("/@/views/login/login.vue"),
  },
  {
    path: "/:path(.*)*",
    name: "ErrorPage",
    component: () => import("/@/views/404.vue"),
  },
];

export default routeArr;
