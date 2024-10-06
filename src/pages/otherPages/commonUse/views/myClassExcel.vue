<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '我的课表',
  },
}
</route>

<template>
  <view class="p-4">
    <view class="flex justify-center w-full h-40">
      <image :src="kebiao" mode="widthFix"></image>
    </view>
    <view class="mt-0">
      <view class="flex flex-row justify-center items-center">
        <wd-text :text="`我的课表`" color="black" bold size="24px"></wd-text>
      </view>
    </view>
    <view class="mt-20">
      <view class="my-4 pl-4 flex flex-row justify-between items-center">
        <view class="h-10 flex flex-row justify-left items-center">
          <view class="w-2 h-4 bg-blue-200 mr-2 rounded-3"></view>
          <wd-text :text="`日期：` + dateTime" color="black" bold></wd-text>
        </view>
        <view class="flex flex-row justify-center items-center">
          <view class="mr-2">
            <wd-text :text="`切换日期`"></wd-text>
          </view>
          <wd-calendar
            v-model="value"
            label="日期选择"
            @confirm="handleConfirm"
            placeholder="请选择日期"
            use-default-slot
          >
            <view class="i-solar-calendar-date-bold-duotone text-#90C0FE text-size-6"></view>
          </wd-calendar>
        </view>
      </view>
      <view v-for="(item, index) in items" :key="index" class="p-2 my-4 rounded-3.5 bg-#fff shadow">
        <view class="flex flex-row justify-around items-center">
          <view
            :class="`w-30% h-10 ${item.leftColor} rounded-3 mr-3 flex justify-center items-center`"
          >
            <wd-text :text="`第` + item.leftText + `节`" color="black" bold></wd-text>
          </view>
          <view :class="`w-70% h-10 ${item.rightColor} rounded-3 flex justify-center items-center`">
            <wd-text :text="item.rightText" color="black" bold></wd-text>
          </view>
        </view>
        <view
          :class="`mt-3 ${item.bottomColor} rounded-3 w-full h-20 flex justify-center items-center`"
        >
          <wd-text :text="item.bottomText" color="black" size="20px"></wd-text>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { timestampToDate } from '@/utils/dateEncy'
import kebiao from '../../../../static/svg/kebiao.svg'
//
const value = ref<number>(null)
const handleConfirm = ({ value }) => {
  console.log(value)
  dateTime.value = timestampToDate(value)
}
const dateTime = ref<string>('')

const items = ref([
  {
    leftColor: 'bg-#C2D1FF',
    rightColor: 'bg-#FBD0A2',
    bottomColor: 'bg-#86D6FE',
    leftText: '1-2',
    rightText: '教学A201',
    bottomText: '计算机网络原理',
  },
  {
    leftColor: 'bg-#C2D1FF',
    rightColor: 'bg-#FBD0A2',
    bottomColor: 'bg-#86D6FE',
    leftText: '3-4',
    rightText: '教学A201',
    bottomText: '计算机网络原理',
  },
  {
    leftColor: 'bg-#C2D1FF',
    rightColor: 'bg-#FBD0A2',
    bottomColor: 'bg-#86D6FE',
    leftText: '5-6',
    rightText: '教学A201',
    bottomText: '计算机网络原理',
  },
  {
    leftColor: 'bg-#C2D1FF',
    rightColor: 'bg-#FBD0A2',
    bottomColor: 'bg-#86D6FE',
    leftText: '7-8',
    rightText: '教学A201',
    bottomText: '计算机网络原理',
  },
  {
    leftColor: 'bg-#C2D1FF',
    rightColor: 'bg-#FBD0A2',
    bottomColor: 'bg-#86D6FE',
    leftText: '9-10',
    rightText: '',
    bottomText: '',
  },
])
</script>

<style lang="scss" scoped>
//
</style>
