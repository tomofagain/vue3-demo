<template>
  <el-menu
    :uniqueOpened="false"
    default-active="1-1"
    class="el-menu-vertical"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollapse"
  >
    <template v-for="item in childroute" :key="item.name">
      <el-submenu
        v-if="item.children"
        :index="item.index"
        popper-append-to-body
      >
        <template #title>
          <i :class="item.icon"></i>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item-group v-for="child in item.children" :key="child.name">
          <router-link :to="child.path">
            <el-menu-item :index="child.index">{{ child.name }}</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <router-link v-else :to="item.path">
        <el-menu-item :index="item.index" :key="item.name">
          <i :class="item.icon"></i>
          <template #title>{{ item.name }}</template>
        </el-menu-item>
      </router-link>
    </template>
  </el-menu>
</template>
<script>
import { ref, reactive } from "vue";
import { childroute } from "/@/router/childNode";
export default {
  props: {
    isCollapse: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {
      childroute,
    };
  },
  methods: {
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {},
  },
};
</script>
<style lang="less" scoped>
.el-menu-vertical {
  height: 100%;
  border: 0;
}
a {
  text-decoration: none;
}
</style>
