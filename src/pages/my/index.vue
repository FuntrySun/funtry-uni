<route lang="json5" type="page">
{
  layout: 'tabbar',
  style: {
    navigationBarTitleText: '我的',
    navigationStyle: 'custom',
  },
}
</route>
<script lang="ts" setup>
import Person from './components/person.vue'
import fourGrid from '@/components/common/FourGrid.vue'
import titleComp from '@/components/common/Title.vue'
import { logout } from '@/service/login'
import { useLoginStore } from '@/store/login'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const avatarUrl = ref('https://img.yzcdn.cn/vant/cat.jpeg')
const nickname = ref('魏邦龙')
const email = ref('2222')
const isAuth = ref(true)
const rate = ref(5)
// 我的学习
const gridInfoStudy = ref([
  {
    text: '学习记录',
    id: 1,
    icon: 'i-solar-calendar-minimalistic-bold-duotone',
    iconColor: 'text-#62B3FF',
    clickTo: (res) => studyRecord(res),
  },
  {
    text: '学分记录',
    id: 2,
    icon: 'i-solar-inbox-archive-bold-duotone',
    iconColor: 'text-#7B93FF',
    clickTo: undefined,
  },
  {
    text: '我的证书',
    id: 3,
    icon: 'i-solar-bookmark-square-bold-duotone',
    iconColor: 'text-#FB9975',
    clickTo: undefined,
  },
  {
    text: '学习评价',
    id: 4,
    icon: 'i-solar-cup-bold-duotone',
    iconColor: 'text-#FF7A7B',
    clickTo: undefined,
  },
])
// 我的账户
const gridInfoAccount = ref([
  {
    text: '奖学金',
    id: 2,
    icon: 'i-solar-chat-round-money-bold-duotone',
    iconColor: 'text-#7B93FF',
    clickTo: undefined,
  },
  {
    text: '助学金',
    id: 3,
    icon: 'i-solar-hand-money-bold-duotone',
    iconColor: 'text-#FF7A7B',
    clickTo: undefined,
  },
  {
    text: '我的积分',
    id: 4,
    icon: 'i-solar-medal-ribbons-star-bold-duotone',
    iconColor: 'text-#FB9975',
    clickTo: undefined,
  },
  {
    text: '我的兑换',
    id: 5,
    icon: 'i-solar-shop-bold-duotone',
    iconColor: 'text-#FF7A7B',
    clickTo: undefined,
  },
])
// cellList cell列表的类型定义
interface CellItem {
  id: number
  title: string
  icon: string
  customText?: string // 可选属性
  url: string
}
// cellList cell列表的数据列表
const cellList = ref<CellItem[]>([
  {
    id: 1,
    title: '设置与帮助',
    icon: 'i-solar-settings-minimalistic-bold text-size-4.5 mr-2.5 text-gray-500',
    url: '/pages/index/index',
  },
  {
    id: 2,
    title: '常见问题',
    icon: 'i-tabler-help-square-rounded-filled text-size-4.5 mr-2.5 text-gray-500',
    url: '/pages/index/index',
  },
  {
    id: 3,
    title: '客服与反馈',
    icon: 'i-solar-call-medicine-rounded-bold text-size-4.5 mr-2.5 text-gray-500',
    url: '/pages/index/index',
  },
  {
    id: 4,
    title: '关于我们',
    icon: 'i-tabler-inner-shadow-bottom-filled text-size-4.5 mr-2.5 text-gray-500',
    url: '/pages/index/index',
  },
])

const tabs = ref([
  { id: 1, title: '科目总时长', data: '1000' },
  { id: 2, title: '科目总绩点', data: '1000' },
  { id: 3, title: '总进度排名', data: '1000' },
])
const studyRecord = (res) => {
  uni.navigateTo({
    url: '/pages/about/about',
    success: () => {
      console.log('页面跳转成功')
    },
    fail: (err) => {
      console.log('页面跳转失败', err)
    },
  })
}
const loginStore = useLoginStore()
const logOut = async () => {
  uni.showModal({
    title: '提示',
    content: '确定退出登录？',
    success: async (res) => {
      if (res.confirm) {
        await logout()
        uni.removeStorageSync('token')
        uni.removeStorageSync('expirationTime')
        const res = await loginStore.checkLoginStatus()
        if (!res) {
          uni.showToast({
            title: '退出登录成功',
            icon: 'none',
          })
          uni.reLaunch({
            url: '/pages/login/index',
          })
        } else {
          uni.showToast({
            title: '退出登录失败',
            icon: 'none',
          })
        }
      }
    },
  })
}
</script>
<template>
  <view>
    <view
      class="safe-area-fill"
      :style="{ height: safeAreaInsets?.top + 'px', backgroundColor: '#FFFFFF' }"
    ></view>
    <view
      class="bg-white overflow-y-hidden pt-9 px-3"
      :style="{
        top: safeAreaInsets?.top + 'px',
        position: 'fixed',
        width: '100%',
        zIndex: 10,
        backgroundColor: `rgba(255, 255, 255, 0`,
      }"
    ></view>
    <view class="p-4" :style="{ marginTop: safeAreaInsets?.top + 40 + 'px' }">
      <!-- <view class="i-carbon-customer-service text-black text-size-5 ml-2"></view> -->
      <view class="flex flex-row justify-between mt-3 items-center">
        <Person :avatarUrl="avatarUrl" :nickname="nickname" :isAuth="isAuth" />
        <view class="pr-5"><wd-rate v-model="rate" /></view>
      </view>
      <view
        class="h-28 w-full mt-4 rounded-t-3 rounded-b-3 mb-4 font-500 text-size-4 shadow gradient-background"
      >
        <view class="pt-4">
          <wd-row :gutter="Number('20')">
            <wd-col :span="8" v-for="item in tabs" :key="item.id">
              <view class="flex justify-center items-center h-22">
                <view class="flex-col flex justify-between h-15 items-center">
                  <wd-text :text="item.data" color="black" size="20px"></wd-text>
                  <wd-text :text="item.title" bold color="black" size="14px"></wd-text>
                </view>
              </view>
            </wd-col>
          </wd-row>
        </view>
      </view>
      <titleComp :title="'我的学习'" />
      <view class="mt-4 h-auto w-auto bg-white rounded-3 p-1 mb-4 content-shadow">
        <fourGrid :fourGrids="gridInfoStudy" />
      </view>
      <titleComp :title="'我的账户'" />
      <view class="mt-4 h-auto w-auto bg-white rounded-3 p-1 mb-4 content-shadow">
        <fourGrid :fourGrids="gridInfoAccount" />
      </view>
      <view class="mt-3 h-auto w-auto bg-white rounded-3 p-2 content-shadow">
        <wd-cell-group>
          <wd-cell
            :title="cellInfo.title"
            is-link
            :to="cellInfo.url"
            v-for="cellInfo in cellList"
            :key="cellInfo.id"
            custom-class="py-1.5 font-bold"
          >
            <template #icon>
              <view :class="cellInfo.icon"></view>
            </template>
            <view class="custom-text">{{ cellInfo.customText }}</view>
          </wd-cell>
          <view class="mt-4">
            <wd-button type="primary" @click="logOut" block>退出登录</wd-button>
          </view>
        </wd-cell-group>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.safe-area-fill {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9; // 确保它位于固定头部之下
  width: 100%;
}
.content-shadow {
  // 较小的阴影效果
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.1),
    0 1px 2px rgba(0, 0, 0, 0.06);
}
.gradient-background {
  background-image: linear-gradient(to bottom, white, #cdd0ee);
}
</style>
