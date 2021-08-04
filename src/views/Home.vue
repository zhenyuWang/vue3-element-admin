<template>
  <div id="box">
    <div class="logo" />
    <HelloWorld msg="Vite + Vue3 + TS + SCSS + UnitTest buy wzy!" />
    <p>用户名：{{ userInfo.name }}</p>
    <p>年龄：{{ userInfo.age }}</p>
    <p>
      角色：
      <span v-for="(item, index) in userInfo.roles" :key="item"
        >{{ item }}{{ index === userInfo.roles.length - 1 ? "" : " | " }}</span
      >
    </p>
    <el-button>默认按钮</el-button>
    <el-button type="primary"> 主要按钮 </el-button>
    <el-button type="success"> 成功按钮 </el-button>
    <i class="el-icon-edit" />
    <el-link type="primary" @click="goLogin"> 主要链接 </el-link>
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
// import HelloWorld from "@/components/HelloWorld.vue";
import { apiUserInfo } from "../api/user";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    const store = useStore();
    const userInfo = reactive(store.getters.userInfo);
    console.log("userInfo", userInfo);
    const router = useRouter();
    const goLogin = () => {
      apiUserInfo({}).then((res) => {
        console.log(res);
      });
      console.log("this", this, "store");
      router.push({ name: "Login" });
    };
    return { userInfo, goLogin };
  },
};
</script>

<style lang="scss" scoped>
#box {
  text-align: center;
  color: green;
  .logo {
    width: 200px;
    height: 200px;
    margin: 20px auto;
    background-image: url("@/assets/avatar.jpg");
    background-size: 100% 100%;
    background-color: #09c;
  }
}
</style>
