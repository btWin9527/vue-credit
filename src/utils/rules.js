/* 校验规则 */
export default {
  loginRules: {
    username: [
      {required: true, message: '请输入用户名', trigger: 'blur'},
      {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
    ],
    password: [
      {required: true, message: '请输入密码', trigger: 'blur'},
      {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
    ],
  }
}
