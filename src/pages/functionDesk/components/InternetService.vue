<script lang="ts" setup>
import FourGrid from '@/components/common/FourGrid.vue'

const internetServiceList = ref([
  {
    id: 1,
    text: '学术邮箱申请',
    icon: 'i-solar-mailbox-bold-duotone',
    iconColor: 'text-#5EB1D4',
    clickTo: () => {
      uni.navigateTo({
        url: '/pages/onlineLearning/onlineLearning',
      })
    },
  },
])
//
</script>
<template>
  <view class="">
    <FourGrid :four-grids="internetServiceList" />
  </view>
</template>

<style lang="scss" scoped>
//
</style>
