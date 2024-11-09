<template>
  <div class="p-8px">
    <nut-tabs v-model="tabvalue" background="#fff">
      <nut-tab-pane title="支出">
        <view class="flex justify-between items-center mb-10px" v-if="tabvalue === '0'">
          <view class="flex items-center">
            <i class="iconfont mr-10px" :class="expenditureList[activeIndex].icon"></i>
            <div>
              {{ expenditureList[activeIndex].text }}
            </div>
          </view>
          <nut-input-number v-model="money" input-width="80">
            <template #leftIcon>
              <span class="c-#000 font-size-20px" @click.stop>￥</span>
            </template>
            <template #rightIcon>
              <div @click.stop>
                <nut-icon name="setting"></nut-icon>
              </div>
            </template>
          </nut-input-number>
        </view>
        <nut-grid :column-num="5">
          <nut-grid-item :text="item.text" v-for="(item, index) in expenditureList" :key="item.icon"
            @click="activeIndex = index">
            <i class="iconfont" :class="item.icon" :style="{ color: activeIndex === index ? '#1989fa' : '' }"></i>
          </nut-grid-item>
        </nut-grid>
      </nut-tab-pane>
      <nut-tab-pane title="收入">
        <view class="flex justify-between items-center mb-10px" v-if="tabvalue === '1'">
          <view class="flex items-center">
            <i class="iconfont mr-10px" :class="incomeList[activeIndex].icon"></i>
            <div>{{ incomeList[activeIndex].text }}</div>
          </view>
          <nut-input-number v-model="money" input-width="80">
            <template #leftIcon>
              <span class="c-#000 font-size-20px" @click.stop>￥</span>
            </template>
            <template #rightIcon>
              <div @click.stop>
                <nut-icon name="setting"></nut-icon>
              </div>
            </template>
          </nut-input-number>
        </view>
        <nut-grid :column-num="5">
          <nut-grid-item :text="item.text" v-for="(item, index) in incomeList" :key="item.icon"
            @click="activeIndex = index">
            <i class="iconfont" :class="item.icon" :style="{ color: activeIndex === index ? '#1989fa' : '' }"></i>
          </nut-grid-item>
        </nut-grid>
      </nut-tab-pane>
    </nut-tabs>

  </div>
  <tab-bar></tab-bar>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
const tabvalue = ref('0')
const money = ref(undefined)
const activeIndex = ref(0)
watch(tabvalue, () => {
  activeIndex.value = 0
})
const expenditureList = [
  {
    text: '其他',
    icon: 'icon-qitawenti'
  },
  {
    text: '餐饮',
    icon: 'icon-canyin'
  },
  {
    text: '衣服',
    icon: 'icon-yifu'
  },
  {
    text: '加油',
    icon: 'icon-map-gas'
  },
  {
    text: '住宿',
    icon: 'icon-zhufangfuwu'
  },
  {
    text: '日用品',
    icon: 'icon-riyongpin'
  },
  {
    text: '医院',
    icon: 'icon-tubiao_-',
  },
  {
    text: '交通',
    icon: 'icon-gongjiao'
  },
  {
    text: '游戏',
    icon: 'icon-youxi'
  },
  {
    text: '通讯',
    icon: 'icon-tongxun'
  },
  {
    text: '红包',
    icon: 'icon-hongbao'
  },
  {
    text: '娱乐',
    icon: 'icon-yule'
  },
  {
    text: '运动',
    icon: 'icon-touzi'
  },
  {
    text: '投资',
    icon: 'icon-touzi'
  },
  {
    text: '烟酒',
    icon: 'icon-yanjiu'
  }
]
const incomeList = [{
  text: '其他',
  icon: 'icon-qitawenti'
}, {
  text: '薪资',
  icon: 'icon-xinzi'
}, {
  text: '奖金',
  icon: 'icon-jiangjinguize'
}, {
  text: '红包',
  icon: 'icon-hongbao'
}, {
  text: '投资',
  icon: 'icon-touzi'
}]
</script>
<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
  options: { styleIsolation: 'shared' },
})
</script>
<style lang="scss" scoped>
:deep(.nut-tabs .nut-tabs__titles .nut-tabs__titles-item.nut-tabs-active .nut-tabs__titles-item__line) {
  background: #636e72 !important;
}

:deep(.nut-input-number__text--input) {
  width: 120px !important;
  height: 40px !important;
  font-size: 20px !important;
}
</style>