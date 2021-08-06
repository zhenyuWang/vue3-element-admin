<template>
  <div class="flex flex_justify_center login_main w_100 h_100">
    <!-- 中间盒子 -->
    <div class="content">
      <h3 class="t_center c_fff">登录</h3>
      <el-form ref="form" :model="param" :rules="rules">
        <el-form-item prop="name">
          <i class="el-icon-user fontsize_18"></i>
          <el-input v-model="param.name" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <i class="el-icon-lock fontsize_18"></i>
          <el-input
            v-model="param.password"
            placeholder="密码"
            show-password
          ></el-input>
        </el-form-item>
        <el-button class="w_100" type="primary" @click="submit()"
          >登录</el-button
        >
      </el-form>
    </div>
  </div>
</template>
<script>
import { ref, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "",
  components: {},
  setup() {
    // sotre实例
    const store = useStore();
    // 路由实例
    const router = useRouter();
    // 表单
    const form = ref(null);
    // 请求参数
    const param = reactive({
      param: {
        name: "",
        password: "",
      },
    });
    // 表单校验规则
    const rules = reactive({
      rules: {
        name: [
          { required: true, message: "请输入账号", trigger: "blur" },
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    });
    const passInputType = ref("password");
    const changeInputType = (val) => {
      passInputType.value = val;
    };
    // 表单提交
    const submit = () => {
      form.value.validate((valid) => {
        if (valid) {
          store.dispatch("user/login", param.param).then(() => {
            router.push({ name: "Home" });
          });
        } else {
          return false;
        }
      });
    };
    return {
      form,
      ...toRefs(param),
      ...toRefs(rules),
      passInputType,
      changeInputType,
      submit,
    };
  },
};
</script>
<style lang="scss" scoped>
.login_main {
  background-color: #314050;
  .content {
    width: 460px;
    margin-top: 200px;
    h3 {
      font-size: 30px;
    }
    .el-form {
      padding-top: 30px;
      .el-form-item {
        padding-left: 10px;
        background-color: #283443;
        border: 1px solid #434c58;
        border-radius: 4px;
        i {
          color: #999898;
        }
        .el-input {
          width: 430px;
          padding-right: 20px;
          display: inline-block;
          :deep(input) {
            height: 50px;
            font-size: 16px;
            background-color: transparent;
            border: none;
            color: #fff;
          }
          i {
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
