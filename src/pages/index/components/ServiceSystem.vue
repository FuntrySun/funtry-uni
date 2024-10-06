<script lang="ts" setup>
//
import FourGrid from '@/components/common/FourGrid.vue'
const ServiceList = ref([
  {
    text: '一卡通',
    id: 1,
    icon: 'i-solar-card-2-bold-duotone',
    iconColor: 'text-#EAB366',
    clickTo: (res) => {
      console.log('res')
    },
  },
  {
    text: '图书借阅',
    id: 2,
    icon: 'i-solar-book-bold-duotone',
    iconColor: 'text-#66B8EA',
    clickTo: (res) => {
      console.log('res')
    },
  },
  {
    text: '专利申请',
    id: 3,
    icon: 'i-solar-notebook-bookmark-bold-duotone',
    iconColor: 'text-#E88645',
    clickTo: (res) => {
      console.log('res')
    },
  },
  {
    text: '教室申请',
    id: 4,
    icon: 'i-solar-buildings-bold-duotone',
    iconColor: 'text-#565FE1',
    clickTo: (res) => {
      console.log('res')
    },
  },
])
</script>
<template>
  <view class="">
    <FourGrid :fourGrids="ServiceList" />
  </view>
</template>

<style lang="scss" scoped>
//
</style>
