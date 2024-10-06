<template>
  <view class="flex flex-row justify-between mt-4">
    <view
      :class="`h-25 ${item.bgColor} w-1/2 rounded-3 mx-2 flex flex-row justify-around items-center`"
      v-for="(item, index) in thwartwiseGrid"
      :key="index"
    >
      <view class="flex flex-col justify-between items-center pl-3">
        <view class="pb-4"><wd-text :text="item.text" color="black" bold></wd-text></view>
        <wd-button size="small" @click="item.clickTo">{{ item.buttonText }}</wd-button>
      </view>
      <view>
        <image :src="item.src" mode="widthFix" class="h-20 w-20"></image>
      </view>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { ThwartwiseGrid } from '@/types/app'

//
const props = defineProps<{
  thwartwiseGrid: ThwartwiseGrid[]
}>()
const { thwartwiseGrid } = props
</script>
<style lang="scss" scoped>
//
</style>
