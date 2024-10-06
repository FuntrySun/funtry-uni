<script lang="ts" setup>
import { SelectOneList } from '@/types/app'

// 定义 props
const props = defineProps<{
  selectOneList: SelectOneList[]
}>()

// 创建一个响应式的副本
const selectOneListCopy = ref<SelectOneList[]>([])

// 更新选中状态的函数
const updateSelected = (val: number) => {
  const index = selectOneListCopy.value.map((item) => {
    return item.id
  })
  // value的值为index数组中的第val -1 位置的元素的值且不为未定义
  // 更新 selectOneListCopy 中每个元素的 isSelected 状态
  if (value.value === index[val - 1] && value.value !== undefined) {
    selectOneListCopy.value.forEach((item) => {
      item.isSelected = item.id === val
    })
  }
}

// 初始化 selectOneListCopy 并监听其变化
watchEffect(() => {
  selectOneListCopy.value = props.selectOneList.map((item) => ({
    ...item,
    isSelected: false, // 初始化时将所有项的 isSelected 设置为 false
  }))
})

// 创建一个响应式的 value
const value = ref<number>(null)

// 监听 value 的变化，并更新选中状态
watchEffect(() => {
  if (value.value !== null) {
    updateSelected(value.value)
  }
})
</script>

<template>
  <view class="">
    <wd-radio-group v-model="value" cell @change="updateSelected">
      <wd-radio :value="item.id" v-for="item in selectOneListCopy" :key="item.id">
        <view class="flex flex-row items-center">
          <view
            :class="[
              `${item.icon} mr-2 text-size-6 min-h-8 min-w-8`,
              item.isSelected ? 'text-#CE5F5F' : 'text-#B5B5B5',
            ]"
          ></view>
          <view class="mr-3"><wd-text :text="item.content" color="black"></wd-text></view>
        </view>
      </wd-radio>
    </wd-radio-group>
  </view>
</template>

<style lang="scss" scoped>
//
</style>
