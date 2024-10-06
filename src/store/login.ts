import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// 假设这是用户登录状态的接口定义
interface ILoginStatus {
  token: string
  // token的有效期（秒）
  expiresIn: number
  // 是否过期
  expired: boolean
}

// 初始化登录状态
const initLoginStatus = {
  token: '',
  expiresIn: 86400,
  expired: true,
}

export const useLoginStore = defineStore(
  'login',
  () => {
    // 一个响应式引用，用于存储登录状态。
    const loginStatus = ref<ILoginStatus>(initLoginStatus)
    // 一个函数，用于设置登录状态。
    const setLoginStatus = (val: ILoginStatus) => {
      loginStatus.value = val
    }
    // 一个函数，用于清除登录状态。
    const clearLoginStatus = () => {
      loginStatus.value = { ...initLoginStatus }
    }
    // 一个计算属性，用于判断用户是否已登录。
    const isLogined = computed(() => {
      return loginStatus.value.token && !loginStatus.value.expired
    })
    // 一个函数，用于登出并清除登录状态。
    const logout = () => {
      clearLoginStatus()
    }
    // 检查token是否过期
    const checkTokenExpired = () => {
      const currentTime = Date.now()
      const expirationTime =
        loginStatus.value.expiresIn * 1000 + uni.getStorageSync('expirationTime')
      return currentTime > expirationTime
    }
    /**
     * 更新 loginStatus 对象中的 token 和 expiresIn 属性。
        计算令牌过期时间戳 expirationTime。
        判断当前时间是否已超过 expirationTime，更新 loginStatus.expired 的值。
     * @param token 字符串类型的用户认证令牌。
     * @param expiresIn 数字类型，表示令牌的有效时间（秒）。
     */
    const login = (token: string, expiresIn: number) => {
      loginStatus.value.token = token
      loginStatus.value.expiresIn = expiresIn
      const expirationTime = Date.now() + expiresIn * 1000
      loginStatus.value.expired = expirationTime < Date.now()
    }
    /**
     * 获取存储中的token和expirationTime。
    计算当前时间和expirationTime的时间差expiresIn。
    若expiresIn大于0，则调用login函数更新登录状态。
    否则，调用clearLoginStatus清除过期的登录状态。
     */
    const checkLoginStatus = async () => {
      const token = uni.getStorageSync('token')
      if (token !== null) {
        let expirationTime = uni.getStorageSync('expirationTime')
        expirationTime += 24 * 60 * 60 * 1000
        const currentTime = Date.now()
        console.log('当前时间：', currentTime)
        const expiresIn = expirationTime - currentTime
        console.log('expiresIn:', expiresIn)
        if (expiresIn > 0) {
          login(token, expiresIn / 1000)
          return true
        } else {
          clearLoginStatus()
          return false
        }
      } else {
        clearLoginStatus()
        return false
      }
    }

    return {
      loginStatus,
      setLoginStatus,
      clearLoginStatus,
      isLogined,
      logout,
      login,
      checkLoginStatus,
    }
  },
  {
    persist: true,
  },
)
