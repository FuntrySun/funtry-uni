<template>
  <view class="">
    <wd-grid :gutter="10" :column="4">
      <wd-grid-item
        v-for="(item, index) in items"
        :key="item.id"
        :text="item.text"
        custom-class="custom-item"
        use-icon-slot
      >
        <template #icon>
          <image class="slot-img" :src="joy" />
        </template>
      </wd-grid-item>
    </wd-grid>
  </view>
</template>

<script setup lang="ts">
const items = ref([
  { id: 1, text: 'Item 1', icon: 'picture' },
  { id: 2, text: 'Item 2', icon: 'picture' },
  { id: 3, text: 'Item 3', icon: 'picture' },
  { id: 4, text: 'Item 4', icon: 'picture' },
  { id: 5, text: 'Item 4', icon: 'picture' },
])
</script>

<style lang="scss" scoped>
:deep(.custom-item) {
  border-radius: 25px;
}
.slot-img {
  width: 36px;
  height: 36px;
  border-radius: 4px;
}
.text {
  margin-top: 8px;
  color: #ffb300;
}
</style>
