<template>
  <view class="flex flex-row justify-center items-center">
    <view class="ml-4"><AvatarUpload :url="avatarUrl" /></view>
    <view class="pl-4 flex flex-col justify-center">
      <view class="text-size-4.5 text-black font-bold pl-1.5">{{ nickname }}</view>
      <view class="mt-2">
        <view
          class="h-6 w-20 bg-#FFC125 flex flex-row justify-center items-center rounded-5"
          v-if="isAuth"
        >
          <view class="i-carbon-join-right text-white text-size-4"></view>
          <view class="text-size-3 ml-1 font-700 text-white">已认证</view>
        </view>
        <view
          class="h-6 w-20 bg-#EEE9E9 flex flex-row justify-center items-center rounded-5"
          v-if="!isAuth"
        >
          <view class="i-carbon-join-right text-#CDC9C9 text-size-4"></view>
          <view class="text-size-3 ml-1 font-700">未认证</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
//
import AvatarUpload from './avatar.vue'
defineProps<{
  avatarUrl: string
  nickname: string
  isAuth: boolean
}>()
</script>

<style lang="scss" scoped>
//
</style>
