<template>
  <section class="container">
    <div class="login-wrap">
      <h1>Login</h1>
      <div class="list">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="60px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input type="password" v-model="ruleForm.username" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
      // 输入框验证
    var validateUser = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("姓名不能为空"));
      }
      setTimeout(()=>{
        callback()
      },1000)
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        setTimeout(() => {
          if (!Number(value)) {
            callback(new Error("请输入数字值"));
          } else {
            callback();
          }
        }, 1000);
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      // 验证规则
      rules: {
        username: [{ validator: validateUser, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    // element-ui内置方法
    submitForm(formName) {
        console.log(this.ruleForm.username)
        console.log(Number(this.ruleForm.password))
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log("submit!!");
          this.$router.push(`/`)
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  -webkit-box-shadow: none;
  box-shadow: none;
  .login-wrap {
    padding: 20px;
    border-radius: 5px;
    -webkit-box-shadow: 0 0 6px rgba(99, 99, 99, 0.4);
    box-shadow: 0 0 6px rgba(99, 99, 99, 0.4);
    width: 360px !important;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    min-height: 210px;
  }
}
</style>
