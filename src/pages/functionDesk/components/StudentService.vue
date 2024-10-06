<script lang="ts" setup>
import FourGrid from '@/components/common/FourGrid.vue'

const studentServiceList = ref([
  {
    id: 1,
    text: '综合测评',
    icon: 'i-solar-document-medicine-bold-duotone',
    iconColor: 'text-#FE6E3E',
    clickTo: () => {
      uni.navigateTo({
        url: '/pages/teachService/teachService',
      })
    },
  },
  {
    id: 2,
    text: '奖学金申请',
    icon: 'i-solar-dollar-bold-duotone',
    iconColor: 'text-#F3CC77',
    clickTo: () => {
      uni.navigateTo({
        url: '/pages/teachService/teachService',
      })
    },
  },
  {
    id: 3,
    text: '校内荣誉',
    icon: 'i-solar-verified-check-bold-duotone',
    iconColor: 'text-#FE0B0B',
    clickTo: () => {
      uni.navigateTo({
        url: '/pages/teachService/teachService',
      })
    },
  },
  {
    id: 4,
    text: '学生走读申请',
    icon: 'i-solar-bicycling-round-bold-duotone',
    iconColor: 'text-#975BE1',
    clickTo: () => {
      uni.navigateTo({
        url: '/pages/teachService/teachService',
      })
    },
  },
  {
    id: 4,
    text: '学生处用印申请',
    icon: 'i-solar-crop-minimalistic-bold-duotone',
    iconColor: 'text-#3DBD96',
    clickTo: () => {
      uni.navigateTo({
        url: '/pages/teachService/teachService',
      })
    },
  },
])
//
</script>
<template>
  <view class="">
    <FourGrid :four-grids="studentServiceList" />
  </view>
</template>

<style lang="scss" scoped>
//
</style>
