<template>
  <el-container class="layout">
    <el-header>
      <menuTab></menuTab>
    </el-header>
    <el-container>
      <el-aside class="aside-container" :style="{ width: slideWidth }">
        <div @click="hideSlide" class="aside-container-btn">
          <img :src="isCollapse ? right : left" />
        </div>
        <slider :isCollapse="isCollapse"></slider>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { ref } from "vue";
import slider from "./slider.vue";
import menuTab from "./menuTab.vue";
import left from "/@/assets/svg/toleft.svg";
import right from "/@/assets/svg/toright.svg";
export default {
  components: { slider, menuTab },
  setup() {
    let isCollapse = ref(false);
    let slideWidth = ref("240px");
    function hideSlide() {
      isCollapse.value = !isCollapse.value;
      if (isCollapse.value) {
        slideWidth.value = "60px !important";
      } else {
        slideWidth.value = "240px !important";
      }
    }
    return {
      isCollapse,
      slideWidth,
      hideSlide,
      left,
      right,
    };
  },
};
</script>
<style lang="less" scoped>
.layout {
  position: fixed;
  height: 100%;
  width: 100%;
  .el-header {
    height: 60px;
    background-color: #8966f7;
  }
}
.aside-container {
  transition: width 0.28s;
  width: 240px !important;
  padding: 0;
  background-color: #1d1b2b;
  overflow: hidden !important;
  position: relative;
  z-index: 9;
  font-size: 0;
  &-btn {
    height: 30px;
    line-height: 30px;
    z-index: 99;
    text-align: center;
    font-size: 16px;
    background-color: #39344e;
    padding: 8px 0;
    cursor: pointer;
    img {
      display: inline-block;
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }
}
</style>
