<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '随堂考核',
  },
}
</route>
<script lang="ts" setup>
import CardList from '@/components/common/CardList.vue'
import smart from '../../../../static/svg/smart.svg'
import SelectNav from '@/components/common/SelectNav.vue'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const classList = ref([
  {
    id: '1',
    className: '请选择课程',
    classMajor: '',
    classIcon: smart,
    rightIcon: 'i-solar-square-transfer-vertical-line-duotone',
    rightIconDown: 'i-solar-square-transfer-vertical-bold-duotone',
    iconColor: 'text-[#5F72CE]',
    bgColor: 'bg-[#F4F1EE]',
    isPopUp: false,
    actions: [
      {
        name: '计算机网络原理',
        subname: '信管',
      },
      {
        name: '数据库',
        subname: '信管',
      },
      {
        name: 'java',
        subname: '信工',
      },
    ],
    clickCut: () => {
      classList.value.map((item) => {
        item.isPopUp = !item.isPopUp
        return {
          ...item,
        }
      })
    },
  },
])
// 选择课程后的事件
const select = (res) => {
  classList.value.map((item) => {
    item.className = res.item.name
    item.classMajor = res.item.subname
    return item
  })
}

// 分段器的数据
const list = ref<string[]>(['全部', '已考核', '未考核', '弃考'])
// 分段器默认的选中项
const current = ref<string>('全部')

// 点击分段器
const segCut = (index: string) => {
  // current.value = index
  console.log('点击了current为', index)
}
// 分段器change事件
const change = (index: string) => {
  console.log('change', index)
}
// 卡片列表数据
const cardList = ref([
  {
    id: 1,
    title: 'Java程序设计',
    subTitle: '未考核',
    imgSrc: 'https://img.yzcdn.cn/vant/cat.jpeg',
    examTime: 2,
    examContent: 'Java程序设计的撒独立声卡的拉萨大家洒家打开撒',
    takeNum: 2,
    allRecords: 100,
    records: 99,
    finishTime: '2024-05-01',
    isFinshed: false,
    clickToDetail: () => {
      uni.navigateTo({
        url: '/pages/otherPages/SmartPlatform/views/subView/startExam',
      })
    },
  },
  {
    id: 2,
    title: 'Java程序设计',
    subTitle: '未考核',
    imgSrc: 'https://img.yzcdn.cn/vant/cat.jpeg',
    examTime: 2,
    examContent: 'Java程序设计',
    takeNum: 2,
    allRecords: 100,
    records: 100,
    finishTime: '2024-05-01',
    isFinshed: false,
    clickToDetail: () => {
      uni.navigateTo({
        url: '/pages/otherPages/SmartPlatform/views/subView/startExam',
      })
    },
  },
])
</script>
<template>
  <view class="px-4 pb-4" :style="{ marginTop: safeAreaInsets?.top - 20 + 'px' }">
    <SelectNav :class-list="classList" :select="select" />
    <wd-segmented
      :options="list"
      v-model:value="current"
      @click="segCut"
      @change="change"
    ></wd-segmented>
    <view class="mt-4 p-2 min-h-100 rounded-4 shadow bg-white">
      <CardList :card-list="cardList" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
//
</style>
