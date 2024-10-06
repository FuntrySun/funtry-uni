<script lang="ts" setup>
import FourGrid from '@/components/common/FourGrid.vue'

//
const teachServiceList = ref([
  {
    id: 1,
    text: '教室查询',
    icon: 'i-solar-home-bold-duotone',
    iconColor: 'text-#66D1DB',
    clickTo: () => {
      uni.navigateTo({
        url: '/pages/teachService/teachService',
      })
    },
  },
  {
    id: 2,
    text: '考级成绩',
    icon: 'i-solar-bill-bold-duotone',
    iconColor: 'text-#F9A825',
    clickTo: () => {
      uni.navigateTo({
        url: '/pages/teachService/teachService',
      })
    },
  },
  {
    id: 3,
    text: '教师评价',
    icon: 'i-solar-like-bold-duotone',
    iconColor: 'text-#DB8366',
    clickTo: () => {
      uni.navigateTo({
        url: '/pages/teachService/teachService',
      })
    },
  },
  {
    id: 4,
    text: '学习计划',
    icon: 'i-solar-checklist-minimalistic-bold',
    iconColor: 'text-#61BD95',
    clickTo: () => {
      uni.navigateTo({
        url: '/pages/teachService/teachService',
      })
    },
  },
  {
    id: 5,
    text: '上课任务',
    icon: 'i-solar-map-bold-duotone',
    iconColor: 'text-#9275E1',
    clickTo: () => {
      uni.navigateTo({
        url: '/pages/teachService/teachService',
      })
    },
  },
  {
    id: 6,
    text: '校历',
    icon: 'i-solar-calendar-bold-duotone',
    iconColor: 'text-#E17575',
    clickTo: () => {
      uni.navigateTo({
        url: '/pages/teachService/teachService',
      })
    },
  },
  {
    id: 7,
    text: '教务公告',
    icon: 'i-solar-clipboard-list-bold',
    iconColor: 'text-#F3CC77',
    clickTo: () => {
      uni.navigateTo({
        url: '/pages/teachService/teachService',
      })
    },
  },
  {
    id: 8,
    text: '教务学期注册',
    icon: 'i-solar-document-add-bold-duotone',
    iconColor: 'text-#72CE6F',
    clickTo: () => {
      uni.navigateTo({
        url: '/pages/teachService/teachService',
      })
    },
  },
])
</script>
<template>
  <view class="">
    <FourGrid :four-grids="teachServiceList" />
  </view>
</template>

<style lang="scss" scoped>
//
</style>
