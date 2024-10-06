<script lang="ts" setup>
import LengthGird from '@/components/common/LengthGird.vue'
import teach from '../../../static/svg/teach.svg'
import signin from '../../../static/svg/signin.svg'
import kebiao from '../../../static/svg/kebiao.svg'
import zuoye from '../../../static/svg/zuoye.svg'
import suzhi from '../../../static/svg/suzhi.svg'
import upload from '../../../static/svg/upload.svg'
const lengthGirdListLeft = ref([
  {
    id: 1,
    bgColor: 'bg-[#A4D5EA]',
    name: '我的课表',
    color: 'text-[#333333]',
    size: '18px',
    imgsrc: kebiao,
    clickTo: () => {
      uni.navigateTo({
        url: '/pages/otherPages/commonUse/views/myClassExcel',
      })
    },
  },
  {
    id: 2,
    bgColor: 'bg-[#A5E9CB]',
    name: '我的作业',
    color: 'text-[#333333]',
    size: '18px',
    imgsrc: upload,
    clickTo: () => {
      uni.navigateTo({
        url: '/pages/otherPages/commonUse/views/myHomework',
      })
    },
  },
])

const lengthGirdListRight = ref([
  {
    id: 1,
    bgColor: 'bg-[#BCECF0]',
    name: '扫码签到',
    color: 'text-[#333333]',
    size: '18px',
    imgsrc: signin,
    clickTo: () => {
      uni.navigateTo({
        url: '/pages/otherPages/commonUse/views/scanToSign',
      })
    },
  },
  {
    id: 2,
    bgColor: 'bg-[#FFD7B3]',
    name: '素质测评',
    color: 'text-[#333333]',
    size: '18px',
    imgsrc: suzhi,
    clickTo: () => {
      uni.navigateTo({
        url: '/pages/otherPages/commonUse/views/qualiyAssessment',
      })
    },
  },
])
//
</script>
<template>
  <view class="flex flex-row">
    <view class="mr-4">
      <LengthGird :length-gird="lengthGirdListLeft" />
    </view>
    <view>
      <LengthGird :length-gird="lengthGirdListRight" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
//
</style>
