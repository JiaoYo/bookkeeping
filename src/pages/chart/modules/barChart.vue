<template>
  <div class="chart">
    <view mb-5px font-size-14px class="c-#999">收入 VS 支出</view>
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
          label: {
            show: true,
            position: 'top'
          },
          type: 'bar'
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
