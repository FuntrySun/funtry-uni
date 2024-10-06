<script lang="ts" setup>
import { LengthGird } from '@/types/app'

const props = defineProps<{
  lengthGird: LengthGird[]
}>()
const { lengthGird } = props
</script>
<template>
  <view class="flex flex-col justify-between items-center">
    <view
      :class="`h-20 w-42 ${item.bgColor} rounded-3 flex flex-row justify-between items-center my-2`"
      v-for="item in lengthGird"
      :key="item.id"
      @click="item.clickTo"
    >
      <view class="pl-5">
        <wd-text :text="item.name" :color="item.color" :size="item.size" bold></wd-text>
      </view>
      <view class="p-3">
        <image :src="item.imgsrc" class="h-20 w-20" />
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
//
</style>
