import { useLoginStore } from '@/store/login'

const loginStore = useLoginStore()
export const isLoginSys = async () => {
  const res = await loginStore.checkLoginStatus()
  if (res === true) {
    uni.showToast({
      title: '登录la',
      icon: 'none',
    })
    uni.reLaunch({
      url: '/pages/index/index',
    })
  } else {
    uni.showToast({
      title: '登录已过期，请重新登录',
      icon: 'none',
    })
    uni.reLaunch({
      url: '/pages/login/index',
    })
  }
}
