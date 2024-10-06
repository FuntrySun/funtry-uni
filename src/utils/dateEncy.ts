// 方法：将时间戳转换为年月日格式
export const timestampToDate = (timestamp: number) => {
  const date = new Date(timestamp) // JavaScript中时间戳是毫秒，所以乘以1000
  const YYYY = date.getFullYear()
  const MM = (date.getMonth() + 1).toString().padStart(2, '0') // 月份是从0开始的
  const DD = date.getDate().toString().padStart(2, '0')

  // 返回格式化的日期字符串
  return `${YYYY}-${MM}-${DD}`
}
