<template>
  <div class="chart">
    <view mb-5px font-size-14px class="c-#999">月度收支趋势</view>
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
  if (chartRef.value) {
    setTimeout(async () => {
      if (!chartRef.value) return
      const myChart = await chartRef.value.init(echarts)
      myChart.setOption({
        legend: {
          data: ['收入', '支出'],
          show: true,
          top: "top",
        },
        grid: {
          left: '2%',
          right: '4%',
          bottom: '5%',
          top: '15%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [
            "2024-10-11",
            "2024-10-12",
            "2024-10-13",
            "2024-10-14",
            "2024-10-15",
            "2024-10-23",
            "2024-10-24",
            "2024-10-25"
          ]
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}',
          },
        },
        series: [
          {
            color: '#1890ff',
            type: 'line',
            name: '收入',
            smooth: true,
            emphasis: {
              focus: 'series'
            },
            lineStyle: {
              width: 1
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(24, 144, 255,0.3)'
              },
              {
                offset: 1,
                color: 'rgba(24, 144, 255,0)'
              }
              ], false),
              shadowColor: 'rgba(24, 144, 255,0.9)',
              shadowBlur: 20
            },
            label: {
              show: true,
              position: 'top'
            },
            data: [
              184,
              155,
              687,
              710,
              486,
              182,
              45,
              288
            ],
            connectNulls: true,
          },
          {
            color: '#f39c12',
            type: 'line',
            name: '支出',
            smooth: true,
            emphasis: {
              focus: 'series'
            },
            lineStyle: {
              width: 1
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(243, 156, 18,0.3)'
              },
              {
                offset: 1,
                color: 'rgba(243, 156, 18,0)'
              }
              ], false),
              shadowColor: 'rgba(243, 156, 18,0.9)',
              shadowBlur: 20
            },
            label: {
              show: true,
              position: 'top'
            },
            data: [
              283,
              35,
              27,
              70,
              6,
              12,
              5,
              28
            ],
            connectNulls: true,
          },
        ],
      })
    }, 300)
  }
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
