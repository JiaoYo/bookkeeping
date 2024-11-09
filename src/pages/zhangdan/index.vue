<template>
  <div class="p-8px">
    <nut-cell title="我的账单">
      <template #link>
        <nut-input v-model="searchValue" placeholder="请输入关键词" clearable clear-size="14"
          style="padding: 0px;"></nut-input>
      </template>
    </nut-cell>
    <view class="my-10px p-14px box-shadow">
      <text class="color-#999 font-size-16px">本月支出</text>
      <view class="flex justify-between items-center my-10px">
        <text class="color-#000 font-size-24px font-700">￥{{ isEye ? numbers.expenditure : '⁕⁕⁕' }}</text>
        <i class="iconfont icon-yanjing_xianshi_o" @click="isEye = !isEye" v-if="isEye"></i>
        <i class="iconfont icon-yanjing_yincang_o" @click="isEye = !isEye" v-else></i>
      </view>
      <view class="flex justify-between items-center">
        <view>
          <text class="color-#999 font-size-16px mr-8px">本月收入</text>
          <text class="font-size-16px">{{ isEye ? (numbers.income ? `￥${numbers.income}` : '暂无收入') : '⁕⁕⁕' }}</text>
        </view>
        <view>
          <text class="color-#999 font-size-16px  mr-8px">本月预算</text>
          <text class="font-size-16px" @click="setBudget">{{ isEye ? (numbers.budget ? `￥${numbers.budget}` :
            '未设置预算') : '⁕⁕⁕'
            }}</text>
        </view>
      </view>
    </view>

    <view class="c-#000 mt-20px mb-10px ml-10px">
      今日支出 {{ '￥' + dayIncomeAndExpenditure.expenditure }}<text class="ml-15px"> 收入 </text>{{ '￥' +
        dayIncomeAndExpenditure.income }}
    </view>

    <view class="my-10px p-14px box-shadow flex justify-between items-center">
      <view class="flex justify-between items-center">
        <i class="iconfont icon-yifu"></i>
        <view class="flex flex-col ml-10px">
          <text>衣服</text>
          <text class="font-size-14px color-#999 mt-5px">人靠衣装马靠鞍</text>
        </view>
      </view>
      <view class="flex flex-col ml-10px text-right">
        <text font-540>{{ '￥ −' + 888 }}</text>
        <text class="font-size-14px color-#999 mt-5px">今天15:09</text>
      </view>
    </view>

    <view class="my-10px p-14px box-shadow flex justify-between items-center">
      <view class="flex justify-between items-center">
        <i class="iconfont icon-xinzi"></i>
        <view class="flex flex-col ml-10px">
          <text>薪资</text>
          <text class="font-size-14px color-#999 mt-5px">发工资了</text>
        </view>
      </view>
      <view class="flex flex-col ml-10px text-right">
        <text font-540>{{ '￥ +' + 666 }}</text>
        <text class="font-size-14px color-#999 mt-5px">今天17:09</text>
      </view>
    </view>
  </div>
  <nut-popup :custom-style="{ width: '70%', height: '180px', padding: '20px' }" round v-model:visible="numbers.visible">
    <view class="font-size-22px font-weight-700 mb-20px">
      设置预算
    </view>
    <view class="mt-20px flex justify-center">
      <nut-input-number :max="100000000" v-model="numbers.budgetInput" placeholder="请输入预算金额" step="10"
        decimal-places="2" input-width="100" button-size="30"></nut-input-number>
    </view>
    <view class="mt-20px flex justify-around">
      <view>
        <nut-button type="default" @click="numbers.visible = false">取消</nut-button>
      </view>
      <view>
        <nut-button type="info" @click="isok">确定</nut-button>
      </view>
    </view>
  </nut-popup>
  <tab-bar></tab-bar>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
  options: { styleIsolation: 'shared' },
})
</script>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
const searchValue = ref('')
const isEye = ref(true) // 是否显示本月收支
// 今日收支
const dayIncomeAndExpenditure = ref({
  income: 666, // 收入
  expenditure: 888, // 支出
})
// 本月
const numbers:any = ref({
  income: 666, // 收入
  budget: 1000, // 预算
  budgetInput: undefined, // 预算输入框
  expenditure: 888, // 支出
  visible: false, // 是否显示预算弹窗
})
const setBudget = () => {
  // req
  numbers.value.budgetInput = numbers.value.budget
  numbers.value.visible = true
}
const isok = () => {
  // req
  numbers.value.budget = numbers.value.budgetInput
  numbers.value.visible = false
}
</script>
<style lang="scss">
.box-shadow {
  box-shadow: var(--nut-cell-box-shadow, 0 1px 7px 0 rgb(237, 238, 241));
  background-color: #fff;
}

:deep(.nut-input) {
  padding: 0 !important;
}

:deep(.nut-popup) {
  .nut-input-number .nut-input-number__text--input {
    width: 200px !important;
    height: 50px !important;
    font-size: 20px !important;
  }

  .nut-button {
    width: 100px !important;
  }
}
</style>
