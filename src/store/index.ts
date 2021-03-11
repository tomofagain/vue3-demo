// import { reactive } from 'vue';

// const state = reactive({
//      userInfo: 6
// })

// const methods = {
//       commitUserInfo(val){
//          state.userInfo = val
//       }
// }
// export default {
//      state,
//      methods
// };
import type { App } from "vue";
import { config } from "vuex-module-decorators";

config.rawError = true;

import { createStore } from "vuex";

// const plugins: Plugin<any>[] = isDev ? [createLogger()] : [];

const store = createStore({
  modules: {},
});
export function setupStore(app: App<Element>) {
  app.use(store);
}
export default store;
