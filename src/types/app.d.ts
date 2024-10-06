// 在你的 TypeScript 文件中定义 FourGrid 类型

// FourGrid 是在四宫格组件的每一个item 中定义的需要的对象
export type FourGrid = {
  text: string
  id: number
  icon: string
  iconColor: string
  clickTo?: (res?) => void // 可选属性，可以是函数或者 undefined
}
export type FourGridList = Array<FourGrid>

// LengthGird 是在长方形宫格组件的每一个item 中定义的需要的对象
export type LengthGird = {
  id: number
  bgColor: string
  name: string
  color: string
  size: string
  imgsrc: string
  clickTo?: (res?) => void
}
export type ThwartwiseGrid = {
  bgColor: string
  text: string
  buttonText: string
  src: string
  clickTo?: (res?) => void
}
export type ClassList = {
  id: string
  bgColor: string
  className: string
  classMajor: string
  classIcon: string
  rightIcon: string
  rightIconDown?: string
  actions: Array<any>
  iconColor: string
  isPopUp: boolean
  clickCut: (res?) => void
}
export type CardList = {
  id?: number
  title: string
  subTitle: string
  imgSrc: string
  examTime: number
  examContent: string
  takeNum: number
  allRecords: number
  records: number
  finishTime: string | null
  isFinshed: boolean
  clickToDetail?: (res?) => void
}
export type SelectOneList = {
  id: number
  icon: string
  isSelected: boolean
  content: string
}
