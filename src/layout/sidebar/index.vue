<template>
  <!--
   配置项：
   router: 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转
   -->
  <el-menu
    router
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <!-- 首页 -->
    <el-menu-item index="/home">
      <i class="el-icon-setting"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <!-- 贷款申请 -->
    <el-menu-item index="/loan-input/index">
      <i class="el-icon-setting"></i>
      <span slot="title">贷款申请</span>
    </el-menu-item>
    <!-- 申请管理 -->
    <el-menu-item index="/input-manager/index">
      <i class="el-icon-setting"></i>
      <span slot="title">申请管理</span>
    </el-menu-item>
    <!-- 贷款审批 -->
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>贷款审批</span>
      </template>
      <el-menu-item index="4-1">初审</el-menu-item>
      <el-menu-item index="4-2">终审</el-menu-item>
    </el-submenu>
    <!-- 标的管理 -->
    <el-menu-item index="5">
      <i class="el-icon-setting"></i>
      <span slot="title">标的管理</span>
    </el-menu-item>
    <!-- 权限管理 -->
    <el-submenu index="6">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>权限管理</span>
      </template>
      <el-menu-item index="6-1">创建管理员</el-menu-item>
      <el-menu-item index="6-2">列表展示</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

</style>
