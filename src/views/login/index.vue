<template>
  <div class="login">

    <!--
         status-icon    是否在输入框中显示校验结果反馈图标
     -->
    <el-form
      status-icon
      :rules="loginFormOpt.rules"
      :ref="loginFormOpt.ref"
      :label-position="loginFormOpt.position"
      :label-width="loginFormOpt.labelWidth"
      :model="loginForm">
      <el-form-item label="用户名" prop="username">
        <el-input
          v-model="loginForm.username"
          autocomplete="off"
          placeholder="用户名"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="loginForm.password"
          autocomplete="off"
          placeholder="密码"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitLogin(loginFormOpt.ref)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import Rules from "@/utils/rules"

  export default {
    data() {
      return {
        loginFormOpt: { // 表单配置项
          position: 'right',
          ref: 'loginForm',
          labelWidth: '80px',
          rules: Rules.loginRules
        },
        loginForm: { // 表单数据
          username: '',
          password: '',
        }
      };
    },
    methods: {
      /*
      * @methods submitLogin 提交校验表单
      * @params  ref         表单ref
      * */
      submitLogin(ref) {
        this.$refs[ref].validate((valid) => {
          if (!valid) return false;
        })
      }
    }
  }
</script>
<style>
  .login {
    margin: 0 auto;
    max-width: 600px;
  }
</style>
