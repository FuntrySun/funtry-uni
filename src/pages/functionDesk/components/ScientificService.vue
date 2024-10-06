<script lang="ts" setup>
import FourGrid from '@/components/common/FourGrid.vue'

const scientificServiceList = ref([
  {
    id: 1,
    text: '专利申请备案',
    icon: 'i-solar-window-frame-bold-duotone',
    iconColor: 'text-#ECB746',
    clickTo: () => {
      uni.navigateTo({
        url: '/pages/scientificService/scientificService',
      })
    },
  },
])
//
</script>
<template>
  <view class="">
    <FourGrid :four-grids="scientificServiceList" />
  </view>
</template>

<style lang="scss" scoped>
//
</style>
