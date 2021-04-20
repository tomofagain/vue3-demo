import { reactive } from "vue";
export const childroute = reactive([
  {
    name: "客户管理",
    icon: "el-icon-user",
    index: "1",
    children: [
      {
        name: "客户列表",
        path: "/test/page1",
        index: "1-1",
      },
    ],
  },
  {
    name: "任务列表",
    icon: "el-icon-tickets",
    path: "/home",
    index: "2",
  },
]);
