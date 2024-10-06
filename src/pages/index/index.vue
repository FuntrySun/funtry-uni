<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  layout: 'tabbar',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '首页',
  },
}
</route>
<script lang="ts" setup>
import zhineng from '../../static/images/zhineng.png'
import Title from '@/components/common/Title.vue'
import TopRight from './components/TopRight.vue'
import CommonUse from './components/CommonUse.vue'
import BsSystem from './components/BsSystem.vue'
import ServiceSystem from './components/ServiceSystem.vue'

defineOptions({
  name: 'Home',
})

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
// 实例化loginstore
const pageInfo = ref({
  smart: '智慧考核平台',
  toptitle: '常用',
  bsSystem: '业务系统',
  service: '服务',
  rightIcon: true,
  text: '更多',
})
// toSmartPlatform()
const toSmartPlatform = () => {
  uni.navigateTo({
    url: '/pages/otherPages/SmartPlatform/index',
    success: () => {
      console.log('success')
    },
    fail: () => {
      console.log('fail')
    },
  })
}
// 测试 uni API 自动引入
onLoad(() => {})
</script>
<template>
  <view
    class="safe-area-fill"
    :style="{ height: safeAreaInsets?.top + 'px', backgroundColor: '#FFFFFF' }"
  ></view>
  <view
    class="bg-white overflow-y-hidden pt-9 px-3"
    :style="{
      top: safeAreaInsets?.top + 'px',
      position: 'fixed',
      width: '100%',
      zIndex: 10,
      backgroundColor: '#fff',
    }"
  ></view>
  <view class="px-4 pb-4" :style="{ marginTop: safeAreaInsets?.top + 15 + 'px' }">
    <view class="h-7 w-100% pt-0"></view>
    <!-- 三宫格布局 -->
    <view class="flex flex-row justify-between items-center">
      <view
        class="h-44 w-40 bg-#FEF6D4 rounded-3 flex flex-col justify-center items-center"
        @click="toSmartPlatform"
      >
        <view class="mt-10">
          <wd-text :text="pageInfo.smart" color="#333333" bold size="20px"></wd-text>
        </view>

        <view>
          <image :src="zhineng" mode="scaleToFill" class="h-35 w-35" />
        </view>
      </view>

      <TopRight />
    </view>
    <!-- 标题 -->
    <view class="mt-4">
      <Title
        :title="pageInfo.toptitle"
        :text="pageInfo.text"
        :rightIcon="pageInfo.rightIcon"
      ></Title>
    </view>

    <view class="flex flex-row justify-between items-center mt-4">
      <CommonUse />
    </view>
    <view class="mt-4">
      <title :title="pageInfo.bsSystem"></title>
    </view>
    <view class="rounded-3 bg-white p-1 mt-3 mb-3 shadow">
      <BsSystem />
    </view>
    <view class="mt-4">
      <title :title="pageInfo.service"></title>
    </view>
    <view class="rounded-3 bg-white p-1 mt-3 mb-3 shadow">
      <ServiceSystem />
    </view>
  </view>
</template>

<style>
.main-title-color {
  color: #d14328;
}
.safe-area-fill {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
}
</style>
