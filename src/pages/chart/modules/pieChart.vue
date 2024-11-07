<template>
  <nut-cell class="flex-col">
    <view mb-5px>各分类支出占比</view>
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
      tooltip: {
        trigger: 'item'
      },
      legend: {
        show: false,
        top: '1%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: true,
            position: 'outside',
            formatter: '{b}\n{d}%',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: true
          },
          data: [
            { value: 50, name: '餐饮' },
            { value: 20, name: '旅游' },
            { value: 30, name: '游戏' }
          ]
        }
      ]
    });
  }
});
</script>

<style scoped></style>
