<template>
  <div class="login">
    <el-form
      :rules="LoginFormRules"
      ref="form"
      :model="LoginForm"
      label-position="right"
      label-width="auto"
    >
      <el-form-item
        :label="this.LoginName.label || '用户名'"
        v-if="!this.LoginName.hide"
        prop="LoginName"
      >
        <el-input
          type="text"
          prefix-icon="el-icon-user"
          v-model="LoginForm.LoginName"
          :placeholder="this.LoginName.placeholder || '请输入用户名'"
        ></el-input>
      </el-form-item>

      <el-form-item
        :label="this.LoginPassword.label || '密码'"
        v-if="!this.LoginPassword.hide"
        prop="LoginPassword"
      >
        <el-input
          type="password"
          prefix-icon="el-icon-unlock"
          v-model="LoginForm.LoginPassword"
          show-password
          :autocomplete="this.LoginPassword.autocomplete"
          :placeholder="this.LoginPassword.placeholder || '请输入密码'"
        ></el-input>
      </el-form-item>

      <el-form-item
        :label="this.LoginIdentify.label || '验证码'"
        v-if="!this.LoginIdentify.hide"
        prop="LoginIdentify"
      >
        <el-input
          type="text"
          prefix-icon="el-icon-c-scale-to-original"
          v-model="LoginForm.LoginIdentify"
          :autocomplete="this.LoginIdentify.autocomplete"
          :placeholder="this.LoginIdentify.placeholder || '请输入验证码'"
        >
          <template slot="append"
            ><!--具名slot-->
            <el-button
              type="primary"
              v-if="this.isPhone"
              @click="this.onSend"
              >{{ text }}</el-button
            >
            <span v-if="this.isImg">
              <img
                :src="this.codeSrc"
                alt=""
                @click="this.onRefresh"
                :width="this.code.width || '80'"
                :height="this.code.height || '25'"
              />
            </span>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="onSubmit" type="primary" @click="this.onSubmit"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
const INIT_TEXT = "发送验证码";
const TIP_TEXT = "{{time}}s后重新获取";
import create from "../../core/create";

export default create({
  name: "login",
  props: {
    option: {
      type: Object, //对象的箭头函数写法
      default: () => {
        return {};
      }
    }
  },
  computed: {
    LoginName: function() {
      return this.column.LoginName || {};
    },
    LoginPassword: function() {
      return this.column.LoginPassword || {};
    },
    LoginIdentify: function() {
      return this.column.LoginIdentify || {};
    },
    time: function() {
      return this.option.time || 60;
    },
    isImg: function() {
      return this.codeType === "img";
    },
    isPhone: function() {
      return this.codeType === "phone";
    },
    column: function() {
      return this.option.column || {};
    },
    codeSrc: function() {
      return this.option.codeSrc || "";
    }
  },
  data() {
    return {
      text: "",
      nowTime: "",
      check: {},
      codeType: this.option.codeType || "phone",
      LoginForm: {
        LoginName: "",
        LoginPassword: "",
        LoginIdentify: ""
      },
      //表单验证，需要在 el-form-item 元素中增加 prop 属性
      LoginFormRules: {
        LoginName: [
          { required: true, message: "账号不可为空", trigger: "blur" }
        ],
        LoginPassword: [
          { required: true, message: "密码不可为空", trigger: "blur" }
        ],
        LoginIdentify: [
          { required: true, message: "验证码不可为空", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    this.text = INIT_TEXT;
  },
  methods: {
    onSend: function() {
      const callback = () => {
        this.nowTime = this.time;
        this.text = TIP_TEXT.replace("{{time}}", this.nowTime);
        this.check = setInterval(() => {
          this.nowTime--;
          if (this.nowTime === 0) {
            this.text = INIT_TEXT;
            clearInterval(this.check);
          } else {
            this.text = TIP_TEXT.replace("{{time}}", this.nowTime);
          }
        }, 1000);
      };
      this.$emit("send", callback);
    },
    onRefresh: function() {
      this.$emit("refresh");
    },
    //返回表单中的数据
    onSubmit: function() {
      const onCover = () => {
        const form = {};
        for (let o in this.LoginForm) {
          let key = o;
          if (this[o].prop) {
            key = this[o].prop;
          }
          form[key] = this.LoginForm[o];
        }
        return form;
      };
      //验证数据的合法性
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$emit("submit", onCover());
        }
      });
    }
  }
});
</script>
<style>
el-form-item {
  margin-bottom: 18px;
}
.onSubmit {
  width: 100%;
}
</style>
