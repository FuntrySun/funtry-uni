<script lang="ts" setup>
import FourGrid from '@/components/common/FourGrid.vue'

const campusLifeList = ref([
  {
    id: 1,
    text: '大学生活动中心教室申请',
    icon: 'i-solar-home-bold-duotone',
    iconColor: 'text-#6FBAD3',
    clickTo: () => {
      uni.navigateTo({
        url: '/pages/campusLife/campusLife',
      })
    },
  },
])
//
</script>
<template>
  <view class="">
    <FourGrid :four-grids="campusLifeList" />
  </view>
</template>

<style lang="scss" scoped>
//
</style>
