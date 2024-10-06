<script lang="ts" setup>
import FourGrid from '@/components/common/FourGrid.vue'
//
const BsSystemList = ref([
  {
    text: '实验室管理系统',
    id: 1,
    icon: 'i-solar-buildings-2-bold-duotone',
    iconColor: 'text-#E27878',
    clickTo: (res) => {
      console.log('res')
    },
  },
  {
    text: '教学服务管理系统',
    id: 2,
    icon: 'i-solar-ruler-pen-bold-duotone',
    iconColor: 'text-#4A7FC4',
    clickTo: (res) => {
      console.log('res')
    },
  },
  {
    text: '中国知网',
    id: 3,
    icon: 'i-solar-notes-bold-duotone',
    iconColor: 'text-#1EC1CC',
    clickTo: (res) => {
      console.log('res')
    },
  },
  {
    text: '财务缴费',
    id: 4,
    icon: 'i-solar-wallet-bold',
    iconColor: 'text-#E2C636',
    clickTo: (res) => {
      console.log('res')
    },
  },
])
</script>
<template>
  <view class="">
    <FourGrid :fourGrids="BsSystemList" />
  </view>
</template>

<style lang="scss" scoped>
//
</style>
