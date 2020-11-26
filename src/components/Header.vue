<template>
  <el-container class="header">
    <el-header style="el-header">
      <div style="display: flex; align-items: center">
        <img
          src="../assets/images/logo.png"
          style="width: auto; height: 60px"
        />
      </div>
      <div style="display: flex; align-items: center">
        <nav style>
          <ul class="menu">
            <!-- input form method -->
            <div style="width: 500px; display: flex">
              <input
                type="text"
                style=""
                class="inputone"
                placeholder="Account"
                v-model="loginname"
              />
              <input
                type="password"
                style=""
                class="inputtwo"
                placeholder="Password"
                v-model="loginpassword"
              />

              <div
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  cursor: pointer;
                  margin-right: 15px;
                "
              >
                <img
                  src="../assets/images/btnborder.png"
                  alt=""
                  style="width: 80px; height: 35.65px"
                  @click="Login()"
                />
                <p style="position: absolute; color: red" @click="Login()">
                  登录
                </p>
              </div>

              <div
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  cursor: pointer;
                "
                @click="GoRegister"
              >
                <img
                  src="../assets/images/btnborder.png"
                  alt=""
                  style="width: 80px; height: 35.65px"
                />
                <p style="position: absolute; color: white">注册</p>
              </div>
            </div>

            <li class="menu__item" @click="GoToQQ()">
              <a href="#" class="menu__link">
                <span class="menu__title">
                  <span class="menu__first-word" data-hover="电脑">电脑</span>
                  <span class="menu__second-word" data-hover="软件">软件</span>
                </span>
              </a>
            </li>

            <li class="menu__item" @click="GoplayGround()">
              <a href="#" class="menu__link">
                <span class="menu__title">
                  <span class="menu__first-word" data-hover="立即">立即</span>
                  <span class="menu__second-word" data-hover="游戏">游戏</span>
                </span>
              </a>
            </li>
          </ul>
        </nav>

        <!-- <div class="login" @click="GoLogin">
          <span style="color: white; cursor: pointer">登录</span>
        </div> -->

        <!-- green button -->
        <div class="test">
          <span style="color: white; cursor: pointer">免费试玩</span>
        </div>
      </div>
    </el-header>

    <el-dialog
      title
      :visible.sync="dialogFormVisible"
      width="450px"
      style="top: 18%"
      custom-class="role-mask"
    >
      <div
        style="display:flex;flex:direction:column;justify-content:center;text-align:center;
  
        "
      >
        <img
          src="../assets/images/logo.png"
          alt
          style="
            width: 110px;
            height: 80px;
            position: absolute;
            top: 10px;
            padding-top: 5px;
          "
        />
        <el-form
          :model="ruleForm"
          ref="ruleForm"
          :rules="rules"
          class="demo-ruleForm"
          @submit.native.prevent
          size="small"
        >
          <el-form-item prop="name" style="margin-top: 40px">
            <el-input
              type="text"
              v-model="ruleForm.name"
              autocomplete="off"
              placeholder="请输入账号"
              style="width: 300px"
              :clearable="true"
            ></el-input>
          </el-form-item>
          <el-form-item prop="pass" style="margin-top: 30px">
            <el-input
              placeholder="请输入密码"
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
              style="width: 300px"
              :clearable="true"
            ></el-input>
          </el-form-item>

          <el-form-item prop="checkPass" style="margin-top: 30px">
            <el-input
              placeholder="请确认密码"
              type="password"
              v-model="ruleForm.checkPass"
              autocomplete="off"
              style="width: 300px"
              :clearable="true"
            ></el-input>
          </el-form-item>

          <el-form-item prop="phone" style="margin-top: 30px">
            <el-input
              placeholder="123-45-678"
              type="number"
              v-model="ruleForm.phone"
              autocomplete="off"
              style="width: 300px"
              :clearable="true"
            ></el-input>
          </el-form-item>

          <el-button
            type
            @click="submitRegister()"
            style="
              margin-top: 20px;
              margin-bottom: 50px;
              background-color: #212121;
              color: white;
              font-size: bold;
              width: 300px;
              border: none;
            "
            >立即注册</el-button
          >
        </el-form>
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
export default {
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("Please input the name"));
      }
    };

    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("Please input the phone number"));
      }
    };

    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };

    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password again"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };

    return {
      loginname: "",
      loginpassword: "",
      loginphone: "",

      dialogFormVisible: false,
      ruleForm: {
        pass: "",
        checkPass: "",
        name: "",
        phone: "",
      },

      rules: {
        name: [{ validator: checkName, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        phone: [{ validator: checkPhone, trigger: "blur" }],
      },
    };
  },

  methods: {
    GoToQQ() {
      document.querySelector(".poster").scrollIntoView();
    },
    GoplayGround() {
      document.querySelector(".qq").scrollIntoView();
    },
    submitRegister() {
      if (this.ruleForm.name == "") return this.$message.warning("请输入账号");
      if (this.ruleForm.pass == "") return this.$message.warning("请输入密码");
      if (this.ruleForm.checkPass == "")
        return this.$message.warning("请输入确认密码");
      if (this.ruleForm.phone == "")
        return this.$message.warning("请输入手机号");
      if (this.ruleForm.pass !== this.ruleForm.checkPass)
        return this.$message.warning("两次输入密码不一致");

      console.log("11111111111111");
      let data = {
        name: this.ruleForm.name,
        pw: this.ruleForm.pass,
        phone: this.ruleForm.phone,
      };

      if (this.data == null) {
        console.log("nulllllllllllllll");
      } else {
        console.log(data, "222222222222");
        this.axios
          .post(this.$Global.registerurl, data)
          .then((res) => {
            console.log("result", res);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },

    GoRegister() {
      this.dialogFormVisible = true;
    },
    Login() {
      if (this.loginname == "") return this.$message.warning("请输入账号");
      if (this.loginpassword == "") return this.$message.warning("请输入密码");
      // if (this.logindata == null) {
      //   this.$message({
      //     showClose: true,
      //     message: "Field is Empty",
      //     type: "error",
      //   });
      // }

      // console.log(logindata, "222222222222");
      let logindata = {
        name: this.loginname,
        pw: this.loginpassword,
      };
      this.axios
        .post(this.$Global.loginurl, logindata)
        .then((res) => {
          console.log("result", res);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 75px;
  background-color: #212121;
  display: flex;
  align-items: center;
}
.el-header {
  width: 1275px !important;
  justify-content: flex-start;
  align-items: center;
  height: 100% !important;
  display: flex;
  position: relative;
}

a {
  outline: 0;
  text-decoration: none;
}
.menu {
  display: flex;
  margin-left: 20px;
  justify-content: center;
}
.menu__item {
  display: inline-block;
  white-space: nowrap;
}

.menu__item:last-child .menu__link {
  border-right: 0;
}
.menu__link {
  display: block;
  padding: 6px 30px 3px;
  /* border-right: 2px dotted #ccd7d7; */
}
.menu__link:hover .menu__first-word,
.menu__link:focus .menu__first-word {
  transform: translate3d(0, -105%, 0);
}
.menu__link:hover .menu__second-word,
.menu__link:focus .menu__second-word {
  transform: translate3d(0, 105%, 0);
}
@media screen and (min-width: 768px) {
  .menu__link {
    padding: 6px 20px 3px;
  }
}
.menu__title {
  display: inline-block;
  overflow: hidden;
}
.menu__first-word,
.menu__second-word {
  display: inline-block;
  position: relative;
  transition: transform 0.3s;
}
.menu__first-word::before,
.menu__second-word::before {
  position: absolute;
  content: attr(data-hover);
}
.menu__first-word {
  color: #fff;
  font-size: 16px;
}
.menu__first-word::before {
  top: 105%;
  color: #ffeb3b;
}
.menu__second-word {
  color: #ffeb3b;
  font-size: 16px;
}
.menu__second-word::before {
  bottom: 105%;
  color: #fff;
}

.register {
  display: flex;
  position: absolute;
  right: 10%;
  padding: 0 10px;
  // background-color: rgba(18, 172, 233, 0.774);
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 75px;
  cursor: pointer;
}
.test {
  display: flex;
  position: absolute;
  right: 0%;
  padding: 0 10px;
  background-color: rgb(179, 135, 17);
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 75px;
}
</style>

<style >
.role-mask {
  border-radius: 40px;
}

.inputone {
  color: white;
  background: transparent;
  outline: none;
  border: 2px solid rgb(239, 200, 98);
  border-radius: 20px;
  margin-right: 10px;
  padding: 0px 15px;
  width: 150px;
}
.inputtwo {
  color: white;
  background: transparent;
  outline: none;
  border: 2px solid rgb(239, 200, 98);
  margin-right: 10px;
  width: 150px;
  padding: 0px 15px;
  border-radius: 20px;
}
.inputthree {
  outline: none;
  border: 1px solid red;
  margin-right: 10px;
  width: 150px;
  padding: 0px 5px;
}
.LoginBtn {
  background: red;
}
</style>