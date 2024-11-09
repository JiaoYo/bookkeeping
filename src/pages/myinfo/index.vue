<template>
  <div class="p-8px">
    <nut-cell-group title="个人中心">
      <nut-cell title="头像">
        <template #default>
          <image class="w-80px h-80px"
            src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
        </template>
      </nut-cell>
      <nut-cell>
        <template #default>
          <div class="flex justify-between items-center w-100%">
            <span>邮箱</span>
            <span>138****1234@163.com</span>
          </div>
        </template>
      </nut-cell>
      <nut-cell>
        <template #default>
          <div class="flex justify-between items-center w-100%">
            <span>手机号</span>
            <span>138****1234</span>
          </div>
        </template>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group title="">
      <nut-cell title="隐私设置" is-link></nut-cell>
      <nut-cell title="数据同步" is-link></nut-cell>
      <nut-cell title="导出数据" is-link></nut-cell>
      <nut-cell title="版本更新" is-link></nut-cell>
      <nut-cell title="关于智帐" is-link></nut-cell>
      <nut-cell title="退出"  is-link></nut-cell>
    </nut-cell-group>
  </div>
  <tab-bar></tab-bar>
</template>
<script setup lang="ts">
</script>
<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
  options: { styleIsolation: 'shared' },
})
</script>
<style lang="scss" scoped>
:deep(.nut-cell) {
  justify-content: center;
  align-items: center;
}
</style>
