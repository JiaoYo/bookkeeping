<template>
  <nut-cell class="flex-col">
    <view mb-5px>收入 VS 支出</view>
    <div ref="chartRef" style="height: 240px;width: 100%;margin: 0 auto;"></div>
  </nut-cell>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

const chartRef = ref(null);
onMounted(() => {
  if (chartRef.value) {
    const chart = echarts.init(chartRef.value);
    chart.setOption({
      xAxis: {
        type: 'category',
        data: ['收入', '支出']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [{
            value: 320,
            itemStyle: {
              color: '#1890ff'
            }
          }, {
            value: 200,
            itemStyle: {
              color: '#f39c12'
            }
          }],
          type: 'bar'
        }
      ]
    });
  }
});
</script>

<style scoped></style>
