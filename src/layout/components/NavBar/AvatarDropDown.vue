<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      <el-avatar shape="square" :size="36" :src="avatar"></el-avatar>
    </span>
    <el-dropdown-menu>
      <el-dropdown-item>个人中心</el-dropdown-item>
      <el-dropdown-item>退出登录</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script lang="ts">
import { useStore } from "vuex";
export default {
  name: "",
  setup() {
    return {};
  },
  computed: {
    avatar() {
      return useStore().getters.userInfo.avatar;
    },
  },
};
</script>
