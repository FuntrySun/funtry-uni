import { http } from '@/utils/http'
export interface ILoginData {
  token: any
  username: string
  password: string
  uuid: string
  captcha: string
}
export interface ImageCaptcha {
  img: string
  uuid: string
  expireTime: number
}
export const loginWx = (code: string) => {
  return http<ILoginData>({
    method: 'GET',
    url: '/userWx/getOpenId',
    query: { code },
  })
}
// 账号密码登录
export const login = (loginData: ILoginData) => {
  console.log('loginData', loginData)
  return http<ILoginData>({
    method: 'POST',
    url: '/auth/account',
    data: loginData,
  })
}
// 获取验证码
export const getImageCaptcha = () => {
  console.log('getImageCaptcha')
  return http.get<ImageCaptcha>('/captcha/image')
}
// 退出
export const logout = () => {
  return http({
    method: 'POST',
    header: { Authorization: 'Bearer ' + uni.getStorageSync('token') },
    url: '/auth/logout',
  })
}
