<template>
  <div ref="chartRef" style="width: 1200px; height: 600px"></div>
</template>
<script>
import { ref, onMounted } from "vue";
import { initCharts } from "./public/initchart.js";
export default {
  name: "page1",
  setup() {
    const chartRef = ref(null);
    onMounted(() => {
      initCharts(chartRef.value);
    });
    return {
      chartRef,
    };
  },
};
</script>
<style lang="less"></style>
