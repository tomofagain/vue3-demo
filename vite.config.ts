const fs = require("fs");
const path = require("path");
import { resolve } from "path";

// Dotenv 是一个零依赖的模块，它能将环境变量中的变量从 .env 文件加载到 process.env 中
const dotenv = require("dotenv");

const envFiles = [
  /** default file */ `.env`,
  /** mode file */ `.env.${process.env.NODE_ENV}`,
];

for (const file of envFiles) {
  const envConfig = dotenv.parse(fs.readFileSync(file));
  for (const k in envConfig) {
    process.env[k] = envConfig[k];
  }
}

function pathResolve(dir: string) {
  return resolve(__dirname, ".", dir);
}

module.exports = {
  alias: {
    "/@/": pathResolve("src"),
  },
  pwa: {
    iconPaths: {
      favicon32: "favicon.ico",
      favicon16: "favicon.ico",
      appleTouchIcon: "favicon.ico",
      maskIcon: "favicon.ico",
      msTileImage: "favicon.ico",
    },
  },
  optimizeDeps: {
    include: ["echarts", "echarts/map/js/china", "moment/locale/zh-cn"],
  },
  hostname: process.env.VITE_HOST,
  port: process.env.VITE_PORT,
  // 引用全局 scss
  cssPreprocessOptions: {
    less: {
      javascriptEnabled: true,
    },
  },

  // 压缩
  minify: "esbuild",
  // 是否自动在浏览器打开
  open: true,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  /**
   * Base public path when served in production.
   * @default '/'
   */
  base: process.env.VITE_BASE_URL,
  /**
   * Directory relative from `root` where build output will be placed. If the
   * directory exists, it will be removed before the build.
   * @default 'dist'
   */
  outDir: process.env.VITE_OUTPUT_DIR,
  // 反向代理
  proxy: {
    api: {
      target: "http://www.baidu.com",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
};
