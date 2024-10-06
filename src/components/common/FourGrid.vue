<template>
  <view>
    <wd-grid :column="4">
      <wd-grid-item
        use-icon-slot
        use-text-slot
        v-for="item in fourGrids"
        :key="item.id"
        icon-size="36px"
      >
        <template #icon>
          <view
            :class="`${item.icon} ${item.iconColor} text-size-3xl`"
            @click="item.clickTo"
          ></view>
        </template>
        <template #text>
          <view class="mt-3">
            <wd-text
              :text="item.text"
              bold
              color="black"
              size="14px"
              @click="item.clickTo"
            ></wd-text>
          </view>
        </template>
      </wd-grid-item>
    </wd-grid>
  </view>
</template>

<script lang="ts" setup>
import { FourGrid } from '../../types/app'
const props = defineProps<{
  fourGrids: FourGrid[]
}>()
// ...
const { fourGrids } = props
</script>

<style lang="scss" scoped>
//
</style>
