<template>
  <view v-for="item in cardList" :key="item.id">
    <wd-card type="rectangle">
      <template #title>
        <view class="flex flex-row justify-between items-center">
          <view>
            <wd-text :text="item.title" bold color="black"></wd-text>
          </view>
          <view class="title-tip">
            <wd-icon name="layers" size="14px" custom-style="vertical-align: bottom" />
            {{ item.subTitle }}
          </view>
        </view>
      </template>
      <view class="flex flex-row justify-between">
        <view class="flex flex-row items-center w-85%">
          <view class="flex flex-col justify-center">
            <wd-text :text="'考试内容：' + item.examContent" color="black" bold></wd-text>
            <wd-text :text="'考试时长：' + item.examTime + ' min'" color="black"></wd-text>
            <wd-text :text="'题目数：' + item.takeNum + ' 道'" color="black"></wd-text>
            <wd-text :text="'分值：' + item.allRecords + ' 分'" color="black"></wd-text>
          </view>
        </view>
        <view class="ml-1 flex justify-center items-center">
          <wd-text :text="item.records + '分'" color="red" bold size="16px"></wd-text>
        </view>
      </view>
      <template #footer>
        <view class="flex justify-between items-center flex-row">
          <view class="pr-20">
            <wd-text :text="'完成时间：' + item.finishTime" color="black" bold></wd-text>
          </view>
          <wd-button
            type="success"
            plain
            size="small"
            @click="item.clickToDetail"
            v-if="item.isFinshed"
          >
            查看详情
          </wd-button>
          <wd-button
            type="primary"
            plain
            size="small"
            @click="item.clickToDetail"
            v-if="!item.isFinshed"
          >
            开始考试
          </wd-button>
        </view>
      </template>
    </wd-card>
  </view>
</template>
<script lang="ts" setup>
import { CardList } from '@/types/app'
import smart from '../../static/svg/smart.svg'
const props = defineProps<{
  cardList: CardList[]
}>()
const { cardList } = props
</script>
<style lang="scss" scoped>
//
</style>
