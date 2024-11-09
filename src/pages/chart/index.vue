<template>
  <div class="p-8px chart">
    <nut-cell title="统计分析">
      <template #link>
        <nut-tabs v-model="tabvalue" background="#fff" @change="handleTabsChange">
          <nut-tab-pane title="日"></nut-tab-pane>
          <nut-tab-pane title="月"></nut-tab-pane>
          <nut-tab-pane title="年"></nut-tab-pane>
        </nut-tabs>
      </template>
    </nut-cell>
    <div class="date">
      <nut-cell title="选择日期" @click="show = true">
        <template #link>
          <text>
            {{ popupDesc }}
          </text>
        </template>
      </nut-cell>
    </div>
    <nut-popup v-model:visible="show" position="bottom" safe-area-inset-bottom>
      <nut-date-picker v-if="tabvalue === '0'" v-model="currentDate" :min-date="minDate" :max-date="maxDate"
        is-show-chinese @confirm="onConfirm" @cancel="show = false">
      </nut-date-picker>
      <nut-date-picker v-if="tabvalue === '1'" v-model="currentDate" type="year-month" :min-date="minDate"
        :max-date="maxDate" is-show-chinese @confirm="onConfirm" @cancel="show = false">
      </nut-date-picker>
      <div class="year">
        <nut-date-picker v-if="tabvalue === '2'" v-model="currentDate" type="year-month" :min-date="minDate"
          :max-date="maxDate" is-show-chinese @confirm="onConfirm" :formatter="formatter" @cancel="show = false">
        </nut-date-picker>
      </div>
    </nut-popup>
    <div class="mb-8px">
      <nut-grid :column-num="2">
        <nut-grid-item>
          <view class="font-700 font-size-24px">
            {{ '￥' + 888 }}
          </view>
          <template #text>
            <text class="font-size-16px">
              支出总额
            </text>
          </template>
        </nut-grid-item>
        <nut-grid-item>
          <view class="font-700 font-size-24px">
            {{ '￥' + 999 }}
          </view>
          <template #text>
            <text class="font-size-16px">
              收入总额
            </text>
          </template>
        </nut-grid-item>
      </nut-grid>
    </div>
    <lineChart />
    <pieChart />
    <barChart />
  </div>
  <tab-bar></tab-bar>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
  options: { styleIsolation: 'shared' },
})
</script>
<script setup lang="ts">
import { formatDate } from '../../utils/common'
import lineChart from './modules/lineChart.vue'
import pieChart from './modules/pieChart.vue'
import barChart from './modules/barChart.vue'
import type { DatePickerColumnType, PickerOption, DatePickerBaseEvent } from 'nutui-uniapp'
const tabvalue = ref('0')

const show = ref<boolean>(false)
const popupDesc = ref<any>(formatDate(0, new Date()))
const minDate = new Date(1974, 0, 1)
const maxDate = new Date(2099, 10, 1)
const currentDate = ref<any>(formatDate(0, new Date()))

const handleTabsChange = (option: any) => {
  if (option.paneKey === '0') {
    popupDesc.value = currentDate.value = formatDate(0, new Date())
  } else if (option.paneKey === '1') {
    popupDesc.value = currentDate.value = formatDate(3, new Date())
  } else if (option.paneKey === '2') {
    currentDate.value = formatDate(3, new Date())
    popupDesc.value = currentDate.value.slice(0, 4)
  }
}
function onConfirm({ date, selectedValue, selectedOptions }: DatePickerBaseEvent) {
  if (tabvalue.value === '0') {
    popupDesc.value = formatDate(0, selectedValue)
  } else if (tabvalue.value === '1') {
    popupDesc.value = formatDate(3, selectedValue)
  } else if (tabvalue.value === '2') {
    popupDesc.value = formatDate(4, selectedValue)
  }
  show.value = false
}
function formatter(type: DatePickerColumnType, option: PickerOption) {
  switch (type) {
    case 'year':
      option.text += '年'
      break
    case 'month':
      option.text = ''
      break
    default:
      option.text += ''
  }
  return option
}
</script>
<style lang="scss" scoped>
:deep(.nut-tabs .nut-tabs__titles .nut-tabs__titles-item.nut-tabs-active .nut-tabs__titles-item__line) {
  background: #1890ff !important;
}

:deep(.nut-tab-pane) {
  padding: 0 !important;
}

:deep(.nut-cell) {
  padding: 0 0 0 15px !important;
  align-items: center
}

:deep(.date .nut-cell) {
  padding: 14px !important;
  align-items: center
}

:deep(.year .nut-picker picker-view picker-view-column) {
  &:last-child {
    display: none !important;
  }
}
</style>
