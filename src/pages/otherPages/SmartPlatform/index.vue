<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '智慧考核平台',
  },
}
</route>
<script lang="ts" setup>
import FourGrid from '@/components/common/FourGrid.vue'
import ThwartwiseGrid from '@/components/common/ThwartwiseGrid.vue'
import Title from '@/components/common/Title.vue'
import jieduan from '../../../static/svg/jieduan.svg'
import suitang from '../../../static/svg/suitang.svg'
import infoback from '../../../static/svg/infoback.svg'
//
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
// 过程考核的列表
const processAssessmentList = ref([
  {
    text: '期中考核',
    id: 2,
    icon: 'i-solar-diploma-verified-bold-duotone',
    iconColor: 'text-#E69119',
    clickTo: () => {
      uni.navigateTo({
        url: '/pages/otherPages/SmartPlatform/index',
      })
    },
  },
  {
    text: '综合考核',
    id: 3,
    icon: 'i-solar-diploma-bold',
    iconColor: 'text-#E65A37',
    clickTo: () => {
      uni.navigateTo({
        url: '/pages/otherPages/SmartPlatform/index',
      })
    },
  },
  {
    text: '自测',
    id: 1,
    icon: 'i-solar-bookmark-bold',
    iconColor: 'text-#5877D5',
    clickTo: () => {
      uni.navigateTo({
        url: '/pages/otherPages/SmartPlatform/index',
      })
    },
  },
  {
    text: '未考补考',
    id: 4,
    icon: 'i-solar-notification-unread-lines-bold-duotone',
    iconColor: 'text-#199F96',
    clickTo: () => {
      uni.navigateTo({
        url: '/pages/otherPages/SmartPlatform/index',
      })
    },
  },
])
const reStudyList = ref([
  {
    text: '错题本',
    id: 4,
    icon: 'i-solar-passport-bold',
    iconColor: 'text-#E65A37',
    clickTo: () => {
      uni.navigateTo({
        url: '/pages/otherPages/SmartPlatform/index',
      })
    },
  },
])
const thwartwiseList = ref([
  {
    bgColor: 'bg-[#FFCDB8]',
    text: '随堂测试',
    buttonText: '开始',
    src: suitang,
    clickTo: () => {
      uni.navigateTo({
        url: '/pages/otherPages/SmartPlatform/views/inClassAssessment',
        success: () => {
          console.log('success')
        },
        fail: () => {
          console.log('fail')
        },
      })
    },
  },
  {
    bgColor: 'bg-[#B8C3FF]',
    text: '阶段测试',
    buttonText: '开始',
    src: jieduan,
    clickTo: () => {
      uni.navigateTo({
        url: '/pages/otherPages/SmartPlatform/index',
      })
    },
  },
])
</script>
<template>
  <view class="px-4 pb-4" :style="{ marginTop: safeAreaInsets?.top - 20 + 'px' }">
    <view class="w-full h-30 bg-#F0F4FF rounded-4 mb-3 flex flex-row items-center justify-left">
      <view class="h-25 w-25 px-6">
        <image :src="infoback" mode="scaleToFill" class="w-25 h-25"></image>
      </view>
      <wd-text :text="'智慧考核平台'" color="black" size="30px" bold></wd-text>
    </view>
    <view>
      <Title title="考核方案" />
      <ThwartwiseGrid :thwartwise-grid="thwartwiseList" />
    </view>
    <view>
      <Title title="过程考核" />
      <view class="rounded-4 p-2 shadow mt-4 bg-white">
        <FourGrid :four-grids="processAssessmentList" />
      </view>
    </view>
    <view>
      <Title title="其他" />
      <view class="rounded-4 p-2 shadow mt-4 bg-white">
        <FourGrid :four-grids="reStudyList" />
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
//
</style>
