# 学完Vue后自己做了一个仿猫眼的电影app，欢迎各位指教

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 项目描述

``` bash
使用vue+vue-route+vue-resource+axios实现项目功能
数据来源：vue-resource和Ajax跨域请求api数据，渲染在电影列表和电影院信息的首页
页面跳转：vue-route实现
电影详情页：获取每个电影id,发送数据请求
电影院详情页：获取每个电影院id,发送数据请求
预编译语言：使用stylus完成各个组件布局的样式编写
其他：购票选座未完成，地理位置定位未完成，电影院详情页的电影联动查询未完成
```
## API 请求转发配置

``` bash
# 猫眼api详情请移步 http://www.jianshu.com/p/9855610eb1d4
在 ./config/index.js 中的 proxyTable 配置代理：

proxyTable: {
      '/api': {
        target: 'http://m.maoyan.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }