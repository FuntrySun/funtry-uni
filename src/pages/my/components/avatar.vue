<template>
  <view>
    <wd-img :width="70" :height="70" round :src="url" />
  </view>
</template>

<script lang="ts" setup>
defineProps({
  url: {
    type: String,
    default: 'https://img.yzcdn.cn/vant/cat.jpeg',
  },
})
//
const joy = ref('https://img.yzcdn.cn/vant/cat.jpeg')
</script>

<style lang="scss" scoped>
//
</style>
