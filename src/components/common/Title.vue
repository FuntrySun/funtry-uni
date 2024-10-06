<template>
  <view class="flex flex-row justify-between mt-4">
    <view class="flex flex-row justify-center items-center ml-2.5">
      <view class="w-2 h-4 bg-blue-500 rounded-1"></view>
      <view class="px-2 font-bold">{{ title }}</view>
    </view>
    <view class="flex flex-row">
      <view class="px-2 font-bold">{{ text }}</view>
      <view><wd-icon name="arrow-right" size="22px" v-if="rightIcon"></wd-icon></view>
    </view>
  </view>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: '推荐', // 默认值
  },
  text: {
    type: String,
  },
  rightIcon: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
//
</style>
