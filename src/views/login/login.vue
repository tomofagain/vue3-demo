<template>
  <div class="login">
    <div class="login-verify conic">
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
        <el-form-item class="button-check">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
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
    return {
      ruleForm: {
        username: "zhangsan",
        password: "111111",
      },
      rules: {
        username: [{ validator: validateUser, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
      },
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
  background: rgb(14, 2, 15);
  width: 100%;
  height: 100vh;
  &-verify {
    box-sizing: border-box;
    width: 360px;
    height: 400px;
    background-color: rgba(0, 0, 0, 1);
    position: absolute;
    top: 50%;
    left: 50%;
    box-shadow: 4px 4px 24px rgba(255, 255, 255, 0.1);
    // border-radius: 6px;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    .demo-ruleForm {
      margin-top: -60px;
      p {
        width: 100%;
        text-align: center;
        font-size: 24px;
        color: #ffffff;
      }
      width: 320px;
      .button-check {
        text-align: center;
        .el-button {
          width: 100%;
        }
      }
    }
  }
}

.conic {
  position: relative;
  z-index: 0;
  margin: 20px;
  border-radius: 10px;
  overflow: hidden;
  padding: 2rem;
  &::before {
    content: "";
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #1a232a;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: conic-gradient(
      transparent,
      rgb(85, 8, 92),
      transparent 30%
    );
    animation: rotate 4s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: #000;
    border-radius: 5px;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}
@keyframes clippath {
  0%,
  100% {
    clip-path: inset(0 0 0 95%);
  }

  25% {
    clip-path: inset(95% 0 0 0);
  }
  50% {
    clip-path: inset(0 95% 0 0);
  }
  75% {
    clip-path: inset(0 0 95% 0);
  }
}
</style>
