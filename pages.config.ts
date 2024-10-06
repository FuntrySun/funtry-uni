import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: 'unibest',
    navigationBarBackgroundColor: '#f8f8f8',
    navigationBarTextStyle: 'black',
    backgroundColor: '#FFFFFF',
  },
  easycom: {
    autoscan: true,
    custom: {
      '^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue',
      '^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)':
        'z-paging/components/z-paging$1/z-paging$1.vue',
    },
  },
  tabBar: {
    color: '#999999',
    selectedColor: '#5C69C9',
    backgroundColor: '#F6F7F9',
    height: '50px',
    fontSize: '10px',
    iconWidth: '24px',
    spacing: '3px',
    list: [
      {
        iconPath: 'static/tabbar/indexno.png',
        selectedIconPath: 'static/tabbar/index.png',
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        iconPath: 'static/tabbar/funnono.png',
        selectedIconPath: 'static/tabbar/funun.png',
        pagePath: 'pages/functionDesk/index',
        text: '功能台',
      },
      {
        iconPath: 'static/tabbar/meno.png',
        selectedIconPath: 'static/tabbar/me.png',
        pagePath: 'pages/my/index',
        text: '我的',
      },
    ],
  },
})
