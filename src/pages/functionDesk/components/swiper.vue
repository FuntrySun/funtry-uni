<template>
  <view class="">
    <wd-swiper
      :list="swiperList"
      height="150"
      :indicator="{ type: 'dots-bar' }"
      v-model:current="current"
    ></wd-swiper>
    <view class="mt-4">
      <wd-notice-bar
        text="这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息"
        prefix="check-outline"
        color="#24ADF3"
        background-color="#F0F0F0"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
//

const current = ref<number>(0)

const swiperList = ref([
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/redpanda.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/capybara.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/panda.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/moon.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/meng.jpg',
])
// function handleClick(e) {
//   console.log(e)
// }
// function onChange(e) {
//   console.log(e)
// }
</script>

<style lang="scss" scoped>
//
</style>
