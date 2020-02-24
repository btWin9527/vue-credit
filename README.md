# vue-credit

## 1. 需求分析

1. 三种身份
    + 销售人员
    + 审批人员
    + 管理人员

## 2. 功能划分

### 2.1 登录功能【1】

### 2.2 登录功能【2】

## 3. 技术选型

+ js框架 -- vue框架
+ ui框架 -- elementui
+ css -- scss
```text
    + sass和scss的区别
        Sass 是以严格的缩进式语法规则来书写，不带大括号({})和分号(;)，而 SCSS 的语法书写和我们的 CSS 语法书写方式非常类似
    + 依赖安装
        + node-sass
        【npm i node-sass --save-dev】
        + sass-loader
        【npm i sass-loader@7.3.1 --save-dev】
```

## 4. 目录划分 (src目录下)

+ api           【接口api】
+ assets        【静态资源】
+ components    【公共组件】
+ constant    【常量配置】
+ layout        【布局容器】
+ router        【路由】
+ styles        【样式】
+ utils         【工具类】
+ views         【业务组件】
    + login          【登录】
    + home           【首页】
    + loan-input     【贷款申请】
+ App.vue       【app最外层组件】
+ main.js       【入口文件】

## 5. 接口文档

```text
# 接口文档
http://47.96.117.121:5003/api-docs/
# 用户名
admin
# 密码
admin@123
```

## 6. mysql配置

```text
# 启动mysql
service mysql start　
# 关闭服务
service mysql stop　
```
