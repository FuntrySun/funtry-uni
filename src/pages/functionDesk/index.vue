<route lang="json5" type="page">
{
  layout: 'tabbar',
  style: {
    navigationBarTitleText: '功能台',
  },
}
</route>

<template>
  <view class="px-4 pb-4" :style="{ marginTop: safeAreaInsets?.top - 25 + 'px' }">
    <view class="">
      <Swiper />
      <title :title="titleInfo.title1" />
      <view class="bg-white rounded-3 mt-4 p-2 shadow">
        <TeachService />
      </view>
      <title :title="titleInfo.title2" />
      <view class="bg-white rounded-3 mt-4 p-2 shadow">
        <StudentService />
      </view>
      <title :title="titleInfo.title3" />
      <view class="bg-white rounded-3 mt-4 p-2 shadow">
        <ScientificService />
      </view>
      <title :title="titleInfo.title4" />
      <view class="bg-white rounded-3 mt-4 p-2 shadow">
        <CampusLife />
      </view>
      <title :title="titleInfo.title5" />
      <view class="bg-white rounded-3 mt-4 p-2 shadow">
        <LogisticsService />
      </view>
      <title :title="titleInfo.title6" />
      <view class="bg-white rounded-3 mt-4 p-2 shadow">
        <InternetService />
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
//
import FiveGrid from './components/fiveGrid.vue'
import Swiper from './components/swiper.vue'
import title from '@/components/common/Title.vue'
import TeachService from './components/TeachService.vue'
import StudentService from './components/StudentService.vue'
import ScientificService from './components/ScientificService.vue'
import CampusLife from './components/CampusLife.vue'
import LogisticsService from './components/LogisticsService.vue'
import InternetService from './components/InternetService.vue'
const titleInfo = ref({
  title1: '教学服务',
  title2: '学生服务',
  title3: '科研服务',
  title4: '校园生活',
  title5: '后勤服务',
  title6: '网络服务',
})
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<style lang="scss" scoped>
//
</style>
