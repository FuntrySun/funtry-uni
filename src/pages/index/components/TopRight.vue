<template>
  <view class="">
    <LengthGird :lengthGird="lengthGirdList" />
  </view>
</template>

<script lang="ts" setup>
//
import LengthGird from '@/components/common/LengthGird.vue'
import teach from '../../../static/svg/teach.svg'
import selectClass from '../../../static/svg/selectclass.svg'
import xuanke from '../../../static/svg/xuanke.svg'
const lengthGirdList = ref([
  {
    id: 1,
    bgColor: 'bg-[#DBE1FF]',
    name: '教务系统',
    color: 'text-[#333333]',
    size: '18px',
    imgsrc: teach,
    clickTo: () => {
      uni.navigateTo({
        url: '/pages/otherPages/EducationSys/index',
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
    id: 2,
    bgColor: 'bg-[#BAF2FD]',
    name: '选课系统',
    color: 'text-[#333333]',
    size: '18px',
    imgsrc: xuanke,
    clickTo: () => {
      uni.navigateTo({
        url: '/pages/otherPages/SelectClassSys/index',
        success: () => {
          console.log('success')
        },
        fail: () => {
          console.log('fail')
        },
      })
    },
  },
])
</script>

<style lang="scss" scoped>
//
</style>
