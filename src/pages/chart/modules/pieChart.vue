<template>
  <div class="chart">
    <view mb-5px font-size-14px class="c-#999">各分类支出占比</view>
    <view style="width:100%; height:240px"><l-echart ref="chartRef"></l-echart></view>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
  options: { styleIsolation: 'shared' },
})
</script>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
const echarts = require('../../../uni_modules/lime-echart/static/echarts.min');
const chartRef: any = ref(null);
onMounted(() => {
  setTimeout(async () => {
    if (!chartRef.value) return
    const myChart = await chartRef.value.init(echarts)
    myChart.setOption({
      tooltip: {
        trigger: 'item',
        show: false
      },
      legend: {
        show: false,
        top: '1%',
        left: 'center'
      },
      series: [
        {
          name: '',
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
              fontSize: 14,
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
    })
  }, 300)
});
</script>

<style scoped lang="scss">
.chart {
  padding: 14px !important;
  flex-direction: column;
  background: #fff;
  box-shadow: var(--nut-cell-box-shadow, 0 1px 7px 0 rgb(237, 238, 241));
  border-radius: 10px;
  margin-bottom: 8px;
}
</style>
