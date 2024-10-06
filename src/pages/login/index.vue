<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '',
    navigationStyle: 'custom',
  },
}
</route>
<script lang="ts" setup>
import { encryptByRsa } from '@/utils/encrypt'
import { getImageCaptcha, login } from '../../service/login'
import { useToast, useMessage } from 'wot-design-uni'
const { success: showSuccess } = useToast()
const message = useMessage()

const model = reactive<{
  username: string
  password: string
  captcha: string
  uuid: string
  expired: boolean
  token: string
}>({
  username: 'admin',
  password: 'admin123',
  captcha: '',
  uuid: '',
  expired: false,
  token: '',
})
const captchaImgBase64 = ref('')

const form = ref()
const confirm = () => {
  message
    .confirm({
      msg: '点击确定即代表您同意《用户协议》《隐私政策》',
      title: '是否同意？',
    })
    .then(() => {
      toLogin()
    })
    .catch(() => {
      const toast = useToast()
      toast.error({
        msg: '已取消授权',
      })
    })
}
const toLogin = async () => {
  uni.showLoading()
  const res = await login({
    username: model.username,
    password: encryptByRsa(model.password) || '',
    captcha: model.captcha,
    uuid: model.uuid,
    token: '',
  })
  if (res.success) {
    showSuccess({
      msg: '登录成功',
    })
    uni.setStorageSync('token', res.data.token)
    uni.setStorageSync('expirationTime', res.timestamp)
    uni.reLaunch({
      url: '/pages/index/index',
    })
  } else {
    uni.showToast({
      title: '登录失败',
      content: res.msg,
      duration: 2000,
    })
    console.log(res.msg)
  }
  uni.hideLoading()
}

async function handleSubmit() {
  form.value
    .validate()
    .then(async ({ valid, errors }) => {
      if (valid) {
        showSuccess({
          msg: '校验通过',
        })
      }
      // 在这里调用 confirm 函数
      confirm()
    })
    .catch((error) => {
      console.log(error, 'error')
    })
}
// 验证码过期定时器
let timer

const startTimer = (expireTime: number) => {
  if (timer) {
    clearTimeout(timer)
  }
  const remainingTime = expireTime - Date.now()
  if (remainingTime <= 0) {
    model.expired = true
    return
  }
  timer = setTimeout(() => {
    model.expired = true
  }, remainingTime)
}
// 组件销毁时清理定时器
onBeforeUnmount(() => {
  if (timer) {
    clearTimeout(timer)
  }
})
// 获取验证码
const getCaptcha = async () => {
  await getImageCaptcha().then((res) => {
    const { uuid, img, expireTime } = res.data
    model.uuid = uuid
    captchaImgBase64.value = img
    model.expired = false
    startTimer(expireTime)
  })
}
</script>
<template>
  <view class="flex flex-col justify-center items-center">
    <view class="i-solar-square-academic-cap-bold-duotone text-#E86464 text-size-20 mt-70"></view>
    <view class="mt-3">
      <wd-text :text="'欢迎使用'" color="black" size="18px"></wd-text>
    </view>
    <!-- 表单组件 -->
    <view class="mt-6 p-2 bg-white rounded-4 min-w-80%">
      <wd-form ref="form" :model="model">
        <wd-cell-group border>
          <wd-input
            label="用户名"
            label-width="100px"
            prop="username"
            clearable
            v-model="model.username"
            placeholder="请输入用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <wd-input
            label="密码"
            label-width="100px"
            prop="password"
            show-password
            clearable
            v-model="model.password"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <view class="flex flex-row" @click="getCaptcha">
            <wd-input
              label="验证码"
              label-width="100px"
              prop="captcha"
              clearable
              v-model="model.captcha"
              placeholder="请输入验证码"
              :rules="[{ required: true, message: '请填写验证码' }]"
            />
            <view class="h-10 w-20 pos-relative inline-block pt-2">
              <image :src="captchaImgBase64" mode="scalToFill"></image>
              <view
                class="pos-absolute top-0 left-0 w-100% h-100% bg-coolgray flex justify-center items-center"
                v-if="model.expired"
              >
                <p style="font-size: 12px; color: #f0f0f0">验证码已过期</p>
              </view>
            </view>
          </view>
        </wd-cell-group>
        <view class="footer">
          <wd-button type="primary" size="large" @click="handleSubmit" block>登录</wd-button>
        </view>
      </wd-form>
    </view>
  </view>
  <wd-message-box />
</template>

<style lang="scss" scoped>
//
.footer {
  padding: 12px;
}
</style>
