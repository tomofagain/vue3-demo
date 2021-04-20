<template>
  <div class="header">
    <div class="header-left">
      <div class="logo">LOGO</div>
    </div>
    <div>
      <el-dropdown>
        <span class="el-dropdown-link">
          你好，{{ username }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
import router from "/@/router";
import { userInfo, ifLogIn } from "/@/reactive/user.js";

export default {
  setup() {
    const username = userInfo.value.username;
    function logOut() {
      ifLogIn.value = false;
      router.push({ path: "/login" });
    }
    return {
      username,
      logOut,
    };
  },
};
</script>
<style lang="less">
.header {
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  height: 60px;
  line-height: 60px;
  .header-left {
    height: 60px;
    width: 220px;
    line-height: 70px;
    border-right: 1px solid;
    border-image: linear-gradient(#8966f7, white, #8966f7) 1 round; /* 标准的必须写在最后 */
    img {
      width: 180px;
    }
    .logo {
      letter-spacing: 2px;
      font-style: italic;
      font-weight: 600;
    }
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #ffffff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
