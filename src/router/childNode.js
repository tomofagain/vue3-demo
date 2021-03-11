import { reactive } from 'vue'
export const childroute = reactive([
    {
      name: "导航一",
      icon: "el-icon-menu",
      path: "/home",
      index: "1",
    },
    {
      name: "导航二",
      icon: "el-icon-location",
      index: "2",
      children: [
        {
          name: "选项1",
          path: "/test/page1",
          index: "2-1",
        }
      ],
    }
  ]);