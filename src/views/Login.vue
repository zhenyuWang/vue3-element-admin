<template>
  <div>
    <h3>这里是登录页面</h3>
    <el-button type="primary" @click="login">登录</el-button>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "",
  components: {},
  setup() {
    const store = useStore();
    const router = useRouter();
    const login = () => {
      console.log("store", store);
      store.commit("user/setUserInfo", {
        name: "小明",
        age: 18,
        roles: ["admin", "管理员", "操作员", "游客"],
      });
      router.push({ name: "Home" });
    };
    return {
      login,
    };
  },
};
</script>
<style lang="scss" scoped></style>
