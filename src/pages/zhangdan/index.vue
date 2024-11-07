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
        <text class="color-#000 font-size-24px font-700">￥{{ getRandomNum(100, 1000) }}</text>
        <nut-icon name="eye"></nut-icon>
      </view>
      <view class="flex justify-between items-center">
        <view>
          <text class="color-#999 font-size-16px mr-8px">本月收入</text>
          <text class="font-size-18px">暂无收入</text>
        </view>
        <view>
          <text class="color-#999 font-size-16px  mr-8px">预算剩余</text>
          <text lass="font-size-18px">未设置预算</text>
        </view>
      </view>
      <view class="flex justify-center mt-10px">
        <view class="c-#439afc flex items-center font-size-16px mt-10px">
          <nut-icon name="link"></nut-icon>
          <text class="ml-6px">查看图表分析</text>
        </view>
      </view>
    </view>

    <view class="c-#000 mt-20px mb-10px ml-10px">
      今日支出 {{ '￥' + getRandomNum(100, 1000) }}<text class="ml-15px"> 收入 </text>{{ '￥' + getRandomNum(100, 1000) }}
    </view>

    <view class="my-10px p-14px box-shadow flex justify-between items-center">
      <view class="flex justify-between items-center">
        <nut-icon name="follow"></nut-icon>
        <view class="flex flex-col ml-10px">
          <text>衣服</text>
          <text class="font-size-14px color-#999 mt-5px">备注</text>
        </view>
      </view>
      <view class="flex flex-col ml-10px">
        <text font-540>{{ '￥' + getRandomNum(100, 1000) }}</text>
        <text class="font-size-14px color-#999 mt-5px">今天15:09</text>
      </view>
    </view>

    <view class="my-10px p-14px box-shadow flex justify-between items-center">
      <view class="flex justify-between items-center">
        <nut-icon name="follow"></nut-icon>
        <view class="flex flex-col ml-10px">
          <text>衣服</text>
          <text class="font-size-14px color-#999 mt-5px">备注</text>
        </view>
      </view>
      <view class="flex flex-col ml-10px">
        <text font-540>{{ '￥' + getRandomNum(100, 1000) }}</text>
        <text class="font-size-14px color-#999 mt-5px">今天15:09</text>
      </view>
    </view>

  </div>
  <tab-bar></tab-bar>
</template>
<script setup lang="ts">
const searchValue = ref('')
const getRandomNum = (min: number, max: number): number => {
  const randomNum = Math.random() * (max - min) + min;
  return parseFloat(randomNum.toFixed(2));
}
</script>
<style lang="scss">
.box-shadow {
  box-shadow: var(--nut-cell-box-shadow, 0 1px 7px 0 rgb(237, 238, 241));
  background-color: #fff;
}
</style>