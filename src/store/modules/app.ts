import {
  VuexModule,
  getModule,
  Module,
  Mutation,
  Action,
} from "vuex-module-decorators";
import router from "/@/router";
import store from "../index";

@Module({ name: "passenger", dynamic: true, namespaced: true, store })
class App extends VuexModule {
  public loginInfo = null;
  public num: Number = 6;
  get userNumber() {
    return this.loginInfo;
  }
  get hello() {
    return this.loginInfo;
  }

  @Mutation
  USERINFO(user) {
    this.loginInfo = user;
  }

  @Action({ commit: "USERINFO" })
  getZhangSan() {
    router.push({ path: "/" });
    return { username: "李四", password: "lisi" };
  }

  @Action
  async login() {
    try {
      this.USERINFO({ username: "zhangsan", password: "111111" });
      const userInfo = {
        username: "zhangsan",
        password: "111111",
      };
      return userInfo;
    } catch (error) {
      return null;
    }
  }
}

export { App };
export const appStore = getModule<App>(App);
