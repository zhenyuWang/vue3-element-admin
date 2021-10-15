<template>
  <div class="login_main" @keyup.enter="login">
    <!-- 中间盒子 -->
    <div class="content">
      <h3 class="title">登录</h3>
      <el-form ref="form" :model="param" :rules="rules">
        <el-form-item prop="name">
          <el-input
            v-model="param.name"
            prefix-icon="el-icon-user"
            placeholder="账号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="param.password"
            prefix-icon="el-icon-lock"
            placeholder="密码"
            show-password
            autocomplete
          ></el-input>
        </el-form-item>
        <el-button class="w_100" type="primary" @click="login">登录</el-button>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "Login",
  setup() {
    // sotre实例
    const store = useStore();
    // 路由实例
    const router = useRouter();
    // 表单
    const form = ref(null);
    // 请求参数
    const param = reactive({
      name: "",
      password: "",
    });
    // 表单校验规则
    const rules = reactive({
      name: [
        { required: true, message: "请输入账号", trigger: "blur" },
        // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
      ],
      password: [{ required: true, message: "请输入密码", trigger: "blur" }],
    });
    // 密码表单类型
    const passInputType = ref("password");
    // 修改密码表单类型
    const changeInputType = (val: string) => {
      passInputType.value = val;
    };
    // 登录
    const login = () => {
      form.value.validate((valid: boolean) => {
        if (valid) {
          store.dispatch("user/login", param).then(() => {
            router.push({ name: "Home" });
          });
        } else {
          return false;
        }
      });
    };
    return {
      form,
      param,
      rules,
      passInputType,
      changeInputType,
      login,
    };
  },
});
</script>
<style lang="scss" scoped>
$bg: #364d81;
.login_main {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $bg;
  .content {
    width: 500px;
    .title {
      color: #fff;
    }
  }
}
</style>
