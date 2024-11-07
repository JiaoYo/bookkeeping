<template>
  <nut-cell class="flex-col">
    <view mb-5px>月度收支趋势</view>
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
      // tooltip: {
      //   trigger: 'axis',
      //   axisPointer: {
      //     type: 'cross',
      //     label: {
      //       backgroundColor: '#6a7985',
      //     }
      //   },
      //   backgroundColor: '#6a7985',
      //   textStyle: {
      //     color: 'rgb(224, 224, 224)'
      //   },
      //   valueFormatter: function (value) {
      //     return (((value + '') !== 'undefined') ? value : '--') + 'MW'
      //   },
      // },
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
    });
  }
});
</script>

<style scoped></style>
