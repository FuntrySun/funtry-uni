<script lang="ts" setup>
import { ClassList } from '@/types/app'

//
const props = defineProps<{
  classList: ClassList[]
  select: (res) => void
}>()
const { classList, select } = props
const close = () => {
  classList.map((item) => {
    item.isPopUp = false
    return item
  })
}
// const select = ({ item, index }) => {
//   console.log(item, index)
//   item.name = classList.map((res) => {
//     item.className = res.className
//     return res.className
//   })
//   item.subname = classList.map((res) => {
//     item.subname = res.classTeacher
//     return res.classTeacher
//   })
// }
</script>
<template>
  <view
    :class="`h-20 w-full my-4 rounded-3 ${item.bgColor} flex flex-row justify-center items-center `"
    v-for="item in classList"
    :key="item.id"
  >
    <view class="w-1/4 mx-2 flex justify-center items-center">
      <image :src="item.classIcon" class="w-18 h-18" mode="widthFix"></image>
    </view>
    <view class="w-3/4 p-2 flex flex-col justify-center">
      <wd-text :text="item.className" bold size="18px" color="black"></wd-text>
      <view class="pt-2">
        <wd-text :text="item.classMajor" bold color="black"></wd-text>
      </view>
    </view>
    <view class="mr-4 ml-2" @click="item.clickCut">
      <view
        :class="`${item.rightIcon} ${item.iconColor} text-size-4xl`"
        v-if="!item.isPopUp"
      ></view>
      <view
        :class="`${item.rightIconDown} ${item.iconColor} text-size-4xl`"
        v-if="item.isPopUp"
      ></view>
    </view>
    <wd-action-sheet
      v-model="item.isPopUp"
      :actions="item.actions"
      @close="close"
      @select="select"
    />
  </view>
</template>

<style lang="scss" scoped>
//
</style>
