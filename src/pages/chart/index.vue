<template>
  <div class="p-8px">
    <nut-cell title="统计分析" class="items-center important-py-0 important-pl-15px important-pr-0">
      <template #link>
        <nut-tabs v-model="tabvalue" background="#fff">
          <nut-tab-pane title="日"></nut-tab-pane>
          <nut-tab-pane title="月"></nut-tab-pane>
          <nut-tab-pane title="年"></nut-tab-pane>
        </nut-tabs>
      </template>
    </nut-cell>
    <nut-cell title="选择日期" @click="show = true">
      <template #link>
        <text>
          {{ popupDesc }}
        </text>
      </template>
    </nut-cell>
    <nut-popup v-model:visible="show" position="bottom" safe-area-inset-bottom>
      <nut-date-picker v-model="currentDate" :min-date="minDate" :max-date="maxDate" is-show-chinese
        @confirm="onConfirm" @change="" @cancel="show = false">
      </nut-date-picker>
    </nut-popup>
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
    <lineChart class="box-shadow "/>
    <pieChart class="box-shadow "/>
    <barChart class="box-shadow "/>
  </div>
  <tab-bar></tab-bar>
</template>
<script setup lang="ts">
import { formatDate } from '@/utils/common'
import lineChart from './modules/lineChart'
import pieChart from './modules/pieChart'
import barChart from './modules/barChart'
const tabvalue = ref('0')

const show = ref<boolean>(false)
const popupDesc = ref<string>(formatDate(0, new Date()))
const minDate = new Date(1974, 0, 1)
const maxDate = new Date(2099, 10, 1)
const currentDate = ref<Date>(formatDate(0, new Date()))
function onConfirm({ date, selectedValue, selectedOptions }: DatePickerBaseEvent) {
  popupDesc.value = formatDate(0, selectedValue)
  show.value = false
}
</script>
<style lang="scss" scoped>
.box-shadow {
  box-shadow: var(--nut-cell-box-shadow, 0 1px 7px 0 rgb(237, 238, 241));
  background-color: #fff;
}

.nut-tabs .nut-tabs__titles .nut-tabs__titles-item.nut-tabs-active .nut-tabs__titles-item__line {
  background: #1890ff !important;
}

.nut-tab-pane {
  padding: 0 !important;
}
</style>