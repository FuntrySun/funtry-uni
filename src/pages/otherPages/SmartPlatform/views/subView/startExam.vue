<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '测试',
  },
}
</route>
<script lang="ts" setup>
import { SelectOneList } from '@/types/app'
import SelectOne from '../../components/SelectOne.vue'

//
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const value = ref<number>(1)
function handleChange({ value }) {
  console.log(value)
}
const format = ref<string>('DD 天 HH 时 mm 分 ss 秒')
const time = ref<number>(30 * 60 * 60 * 1000)

const selectOneList = ref<SelectOneList[]>([
  {
    id: 1,
    icon: 'i-emojione-monotone-letter-a',
    isSelected: false,
    content:
      '都开始拉到卡萨丁看看萨拉丁凯撒六点开始斯卡连电视卡的数量的撒打算卡拉斯科但是说的啥看到啥的就撒娇的卡 就撒开你的集散地',
  },
  {
    id: 2,
    icon: 'i-emojione-monotone-letter-b',
    isSelected: false,
    content: '萨达撒简单介绍老咔叽的撒家里的凯撒',
  },
  {
    id: 3,
    icon: 'i-emojione-monotone-letter-c',
    isSelected: false,
    content: '上的祭扫降低扫街递送安静的',
  },
  {
    id: 4,
    icon: 'i-emojione-monotone-letter-d',
    isSelected: false,
    content: '世道啊降低撒娇的撒大家沙克萨达萨达是啦声卡的是卡到拉萨到拉萨卡萨雷斯凯迪拉克多少啦',
  },
])

const show = ref(false)
const isShow = () => {
  show.value = !show.value
}
const finish = () => {
  uni.showToast({
    title: '完成',
    icon: 'none',
  })
  uni.navigateTo({ url: '/pages/otherPages/SmartPlatform/views/subView/finishedExam' })
}
</script>
<template>
  <!-- 考试或者测试页面 -->
  <view class="mx-3 mb-2 bg-white h-97vh shadow rounded-3 p-2">
    <view class="flex flex-row justify-between items-center">
      <view class="flex flex-row items-center justify-center">
        <view class="i-solar-alarm-bold text-#C66C6C text-size-6 mr-2"></view>
        <wd-count-down :time="time" :format="format" />
      </view>
      <view class="i-solar-clipboard-check-bold text-#C66C6C text-size-6" @click="isShow"></view>
    </view>
    <view>
      <!-- 题型 -->
      <view class="pt-3">
        <wd-text :text="'单选题'" bold color="black" size="20px"></wd-text>
      </view>
      <!-- 题号和分值 -->
      <view class="flex flex-row pt-4">
        <view>
          <wd-text :text="'1.'" bold color="black" size="16px"></wd-text>
        </view>
        <view class="pl-2">
          <wd-text :text="'(10分)'" bold color="black" size="16px"></wd-text>
        </view>
      </view>
      <!-- 题目内容 -->
      <view class="pt-4 mx-4">
        <wd-text
          :text="'我只能的圣诞节案例的声卡的萨拉大厦的了了拉萨的萨拉丁就是很帅吧？'"
          color="black"
          bold
        ></wd-text>
      </view>
      <!-- 选项 -->
      <view class="pt-4">
        <SelectOne :select-one-list="selectOneList" />
      </view>
    </view>
    <view class="mt-4">
      <wd-pagination
        v-model="value"
        @change="handleChange"
        :total="100"
        :page-size="10"
        show-icon
      />
    </view>
    <wd-button @click="finish">完成</wd-button>
  </view>
  <wd-action-sheet v-model="show" title="标题">
    <view style="padding: 15px 15px 150px 15px">内容</view>
  </wd-action-sheet>
</template>

<style lang="scss" scoped>
//
.container {
  width: 100vw;
  height: 50px;
}
</style>
