<script lang="ts" setup>
import FourGrid from '@/components/common/FourGrid.vue'

const logisticsServiceList = ref([
  {
    id: 1,
    text: '校园报修',
    icon: 'i-solar-socket-bold-duotone',
    iconColor: 'text-#A2C936',
    clickTo: () => {
      uni.navigateTo({
        url: '/pages/logistics/logistics',
      })
    },
  },
])
//
</script>
<template>
  <view class="">
    <FourGrid :four-grids="logisticsServiceList" />
  </view>
</template>

<style lang="scss" scoped>
//
</style>
