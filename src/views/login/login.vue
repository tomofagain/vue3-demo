<template>
  <div class="login">
    <img src="/@/assets/images/login-bg.png" alt="" />
    <div class="main">
      <div class="login-tip">
        <div class="contain-left-content">
          <p>数据可用不可拥&ensp;&ensp;安全可见又可验</p>
          <p>让安全审计可见</p>
        </div>
        <img src="/@/assets/images/login-img.png" alt="" />
      </div>
      <div class="login-verify">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm"
        >
          <p>账号登录</p>
          <el-form-item label="" prop="username">
            <el-input v-model="ruleForm.username" autocomplete="true">
              <template #prefix>
                <i class="el-input__icon el-icon-user"></i>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
              autocomplete="true"
            >
              <template #prefix>
                <i class="el-input__icon el-icon-lock"></i>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="" prop="checkcode" class="confirm-code">
            <div style="width: 200px; display: inline-block">
              <el-input
                type="input"
                v-model="ruleForm.checkcode"
                autocomplete="true"
              >
              </el-input>
            </div>
            <div style="display: inline-block; position: absolute">
              <el-image
                style="
                  width: 100px;
                  height: 40px;
                  margin-left: 18px;
                  border-radius: 3px;
                "
                :src="url"
              ></el-image>
            </div>
          </el-form-item>
          <el-form-item class="button-check">
            <el-button type="primary" @click="submitForm('ruleForm')"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import router from "/@/router";
import { ElMessage } from "element-plus";
import { Flag } from "/@/assets/static/enum";
import { userInfo, ifLogIn } from "/@/reactive/user.js";

export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    var validateCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "zhangsan",
        password: "111111",
        checkcode: "",
      },
      rules: {
        username: [{ validator: validateUser, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        checkcode: [{ validator: validateCode, trigger: "blur" }],
      },
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // console.log(userInfo.value);
          userInfo.value = this.ruleForm;
          router.push({ path: "/" });
          ifLogIn.value = true;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  setup() {
    function login() {
      appStore.login().then((res) => {
        console.log(res);
      });
    }
    return {
      login,
      Flag,
    };
  },
};
</script>
<style lang="less" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100vh;
  img {
    position: inherit;
    z-index: -10;
    width: 100%;
    height: 100%;
  }
  .main {
    width: 900px;
    height: 500px;
    position: absolute;
    top: 50%;
    margin-top: -250px;
    left: 50%;
    margin-left: -450px;
    display: flex;
    flex-flow: row;
    background: #9063ee;
    border-radius: 5px;
    .login-tip {
      width: 500px;
      height: 500px;
      position: relative;
      .contain-left-content {
        color: #fff;
        width: 100%;
        text-indent: 40px;
        p:first-child {
          margin-top: 54px;
          font-size: 24px;
        }
        p:last-child {
          margin-top: 20px;
          font-size: 32px;
        }
      }
      img {
        position: absolute;
        width: 100%;
        height: auto;
        z-index: 10;
        bottom: 0;
      }
    }
    .login-verify {
      box-sizing: border-box;
      width: 400px;
      height: 500px;
      background-color: #ffffff;
      // border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 20px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      .demo-ruleForm {
        margin-top: -60px;
        p {
          width: 100%;
          text-align: center;
          font-size: 24px;
          color: #000000;
        }
        width: 320px;
        .button-check {
          text-align: center;
          .el-button {
            width: 100%;
          }
        }
      }
      .confirm-code {
        position: relative;
      }
    }
  }
}
</style>
