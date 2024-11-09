<template>
  <view>
    <zhangdan v-if="PageCur == 'zhangdan'"></zhangdan>
    <chart v-if="PageCur == 'chart'"></chart>
    <remember v-if="PageCur == 'remember'"></remember>
    <admin v-if="PageCur == 'admin'"></admin>
    <myinfo v-if="PageCur == 'myinfo'"></myinfo>

    <view class="box">
      <view class="cu-bar tabbar bg-white shadow foot">
        <view class="action" @click="NavChange" data-cur="zhangdan">
          <view class='cuIcon-cu-image'>
            <image v-if="PageCur == 'zhangdan'" src="@/static/tabBar/bill_cur.png"></image>
            <image v-if="PageCur != 'zhangdan'" src="@/static/tabBar/bill.png"></image>
          </view>
          <view :class="PageCur == 'zhangdan' ? 'color_main' : 'text-gray'">我的账单</view>
        </view>

        <view class="action" @click="NavChange" data-cur="chart">
          <view class='cuIcon-cu-image'>
            <!-- <view class="cu-tag badge"></view> -->
            <image v-if="PageCur == 'chart'" src="@/static/tabBar/chart_cur.png"></image>
            <image v-if="PageCur != 'chart'" src="@/static/tabBar/chart.png"></image>
          </view>
          <view :class="PageCur == 'chart' ? 'color_main' : 'text-gray'">统计分析</view>
        </view>

        <view @click="NavChange" class="action text-gray add-action" data-cur="remember">
          <image v-if="PageCur == 'remember'" class="logo_btn" mode="widthFix" src="@/static/tabBar/remember_cur.png">
          </image>
          <image v-if="PageCur != 'remember'" class="logo_btn" mode="widthFix" src="@/static/tabBar/remember.png"></image>
          <view :class="PageCur == 'remember' ? 'color_main' : 'text-gray'">记一笔</view>
        </view>

        <view class="action" @click="NavChange" data-cur="admin">
          <view class='cuIcon-cu-image'>
            <!-- <view class="cu-tag badge">{{message}}</view> -->
            <image v-if="PageCur == 'admin'" src="@/static/tabBar/admin_cur.png"></image>
            <image v-if="PageCur != 'admin'" src="@/static/tabBar/admin.png"></image>
          </view>
          <view :class="PageCur == 'admin' ? 'color_main' : 'text-gray'">预算管理</view>
        </view>

        <view class="action" @click="NavChange" data-cur="myinfo">
          <view class='cuIcon-cu-image'>
            <image v-if="PageCur == 'myinfo'" src="@/static/tabBar/myinfo_cur.png"></image>
            <image v-if="PageCur != 'myinfo'" src="@/static/tabBar/myinfo.png"></image>
          </view>
          <view :class="PageCur == 'myinfo' ? 'color_main' : 'text-gray'">个人中心</view>
        </view>

      </view>
    </view>

  </view>
</template>

<script setup>
import zhangdan from '../zhangdan/index.vue'
import chart from '../chart/index.vue'
import remember from '../remember/index.vue'
import admin from '../admin/index.vue'
import myinfo from '../myinfo/index.vue'
const NavChange = (e) => {
  PageCur.value = e.currentTarget.dataset.cur;
}
const PageCur = ref('zhangdan')
</script>

<style lang="scss">
.color_main {
  color: #000000;
  font-weight: 900;
}

.box {
  margin: 20upx 0;
  background-color: #f0f4f4;
  padding-bottom: 52px;
}

.box view.cu-bar {
  margin-top: 20upx;
}

.logo_btn {
  width: 38*2rpx;
  height: 38*2rpx;
  position: absolute;
  z-index: 2;
  border-radius: 50%;
  top: -40rpx;
  left: 0rpx;
  right: 0;
  margin: auto;
  padding: 0;
}

.cu-bar.tabbar .action.add-action {
  padding-top: 56rpx !important;
}

.cu-bar {
  display: flex;
  position: relative;
  align-items: center;
  min-height: 100upx;
  justify-content: space-between;
}

.cu-bar .action {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  max-width: 100%;
}

.cu-bar .action.border-title {
  position: relative;
  top: -10upx;
}

.cu-bar .action.border-title text[class*="bg-"]:last-child {
  position: absolute;
  bottom: -0.5rem;
  min-width: 2rem;
  height: 6upx;
  left: 0;
}

.cu-bar .action.sub-title {
  position: relative;
  top: -0.2rem;
}

.cu-bar .action.sub-title text {
  position: relative;
  z-index: 1;
}

.cu-bar .action.sub-title text[class*="bg-"]:last-child {
  position: absolute;
  display: inline-block;
  bottom: -0.2rem;
  border-radius: 6upx;
  width: 100%;
  height: 0.6rem;
  left: 0.6rem;
  opacity: 0.3;
  z-index: 0;
}

.cu-bar .action.sub-title text[class*="text-"]:last-child {
  position: absolute;
  display: inline-block;
  bottom: -0.7rem;
  left: 0.5rem;
  opacity: 0.2;
  z-index: 0;
  text-align: right;
  font-weight: 900;
  font-size: 36upx;
}

.cu-bar.justify-center .action.border-title text:last-child,
.cu-bar.justify-center .action.sub-title text:last-child {
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
}

.cu-bar .action:first-child {
  margin-left: 30upx;
  font-size: 30upx;
}

.cu-bar .action text.text-cut {
  text-align: left;
  width: 100%;
}

.cu-bar .cu-avatar:first-child {
  margin-left: 20upx;
}

.cu-bar .action:first-child>text[class*="cuIcon-"] {
  margin-left: -0.3em;
  margin-right: 0.3em;
}

.cu-bar .action:last-child {
  margin-right: 30upx;
}

.cu-bar .action>text[class*="cuIcon-"],
.cu-bar .action>view[class*="cuIcon-"] {
  font-size: 36upx;
}

.cu-bar .action>text[class*="cuIcon-"]+text[class*="cuIcon-"] {
  margin-left: 0.5em;
}

.cu-bar .content {
  position: absolute;
  text-align: center;
  width: calc(100% - 340upx);
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  height: 60upx;
  font-size: 32upx;
  line-height: 60upx;
  cursor: none;
  pointer-events: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.cu-bar.ios .content {
  bottom: 7px;
  height: 30px;
  font-size: 32upx;
  line-height: 30px;
}

.cu-bar.btn-group {
  justify-content: space-around;
}

.cu-bar.btn-group button {
  padding: 20upx 32upx;
}

.cu-bar.btn-group button {
  flex: 1;
  margin: 0 20upx;
  max-width: 50%;
}

.cu-bar .search-form {
  background-color: #f5f5f5;
  line-height: 64upx;
  height: 64upx;
  font-size: 24upx;
  color: #333333;
  flex: 1;
  display: flex;
  align-items: center;
  margin: 0 30upx;
}

.cu-bar .search-form+.action {
  margin-right: 30upx;
}

.cu-bar .search-form input {
  flex: 1;
  padding-right: 30upx;
  height: 64upx;
  line-height: 64upx;
  font-size: 26upx;
  background-color: transparent;
}

.cu-bar .search-form [class*="cuIcon-"] {
  margin: 0 0.5em 0 0.8em;
}

.cu-bar .search-form [class*="cuIcon-"]::before {
  top: 0upx;
}

.cu-bar.fixed,
.nav.fixed {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1024;
  box-shadow: 0 1upx 6upx rgba(0, 0, 0, 0.1);
}

.cu-bar.foot {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 1024;
  box-shadow: 0 -1upx 6upx rgba(0, 0, 0, 0.1);
}

.cu-bar.tabbar {
  padding: 0;
  height: calc(100upx + env(safe-area-inset-bottom) / 2);
  padding-bottom: calc(env(safe-area-inset-bottom) / 2);
}

.cu-tabbar-height {
  min-height: 100upx;
  height: calc(100upx + env(safe-area-inset-bottom) / 2);
}

.cu-bar.tabbar.shadow {
  box-shadow: 0 -1upx 6upx rgba(0, 0, 0, 0.1);
}

.cu-bar.tabbar .action {
  font-size: 22upx;
  position: relative;
  flex: 1;
  text-align: center;
  padding: 0;
  display: block;
  height: auto;
  line-height: 1;
  margin: 0;
  background-color: inherit;
  overflow: initial;
}

.cu-bar.tabbar.shop .action {
  width: 140upx;
  flex: initial;
}

.cu-bar.tabbar .action.add-action {
  position: relative;
  z-index: 2;
  padding-top: 50upx;
}

.cu-bar.tabbar .action.add-action [class*="cuIcon-"] {
  position: absolute;
  width: 70upx;
  z-index: 2;
  height: 70upx;
  border-radius: 50%;
  line-height: 70upx;
  font-size: 50upx;
  top: -35upx;
  left: 0;
  right: 0;
  margin: auto;
  padding: 0;
}

.cu-bar.tabbar .action.add-action::after {
  content: "";
  position: absolute;
  width: 100upx;
  height: 100upx;
  top: -50upx;
  left: 0;
  right: 0;
  margin: auto;
  box-shadow: 0 -3upx 8upx rgba(0, 0, 0, 0.08);
  border-radius: 50upx;
  background-color: inherit;
  z-index: 0;
}

.cu-bar.tabbar .action.add-action::before {
  content: "";
  position: absolute;
  width: 100upx;
  height: 30upx;
  bottom: 30upx;
  left: 0;
  right: 0;
  margin: auto;
  background-color: inherit;
  z-index: 1;
}

.cu-bar.tabbar .btn-group {
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 10upx;
}

.cu-bar.tabbar button.action::after {
  border: 0;
}

.cu-bar.tabbar .action [class*="cuIcon-"] {
  width: 100upx;
  position: relative;
  display: block;
  height: auto;
  margin: 0 auto 10upx;
  text-align: center;
  font-size: 40upx;
}

.cu-bar.tabbar .action .cuIcon-cu-image {
  margin: 0 auto;
}

.cu-bar.tabbar .action .cuIcon-cu-image image {
  width: 50upx;
  height: 50upx;
  display: inline-block;
}

.cu-bar.tabbar .submit {
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  position: relative;
  flex: 2;
  align-self: stretch;
}

.cu-bar.tabbar .submit:last-child {
  flex: 2.6;
}

.cu-bar.tabbar .submit+.submit {
  flex: 2;
}

.cu-bar.tabbar.border .action::before {
  content: " ";
  width: 200%;
  height: 200%;
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(0.5);
  transform-origin: 0 0;
  border-right: 1upx solid rgba(0, 0, 0, 0.1);
  z-index: 3;
}

.cu-bar.tabbar.border .action:last-child:before {
  display: none;
}

.cu-bar.input {
  padding-right: 20upx;
  background-color: #ffffff;
}

.cu-bar.input input {
  overflow: initial;
  line-height: 64upx;
  height: 64upx;
  min-height: 64upx;
  flex: 1;
  font-size: 30upx;
  margin: 0 20upx;
}

.cu-bar.input .action {
  margin-left: 20upx;
}

.cu-bar.input .action [class*="cuIcon-"] {
  font-size: 48upx;
}

.cu-bar.input input+.action {
  margin-right: 20upx;
  margin-left: 0upx;
}

.cu-bar.input .action:first-child [class*="cuIcon-"] {
  margin-left: 0upx;
}
</style>
