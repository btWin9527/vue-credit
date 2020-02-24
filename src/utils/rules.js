/* 校验规则 */
export default {
  loginRules: {
    account: [
      {required: true, message: '请输入用户名', trigger: 'blur'},
      {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'}
    ],
    password: [
      {required: true, message: '请输入密码', trigger: 'blur'},
      {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'}
    ],
  }
}
