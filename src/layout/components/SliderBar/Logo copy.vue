<template>
  <div class="flex flex_align_center logo_box">
    <img :src="logo" alt="" />
    <h1 class="pl_20 c_fff">商铺管理系统</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import logo from "@/assets/logo/logo.png";
export default defineComponent({
  name: "Logo",
  setup() {
    return { logo };
  },
});
</script>
<style lang="scss" scoped>
.logo_box {
  padding: 10px 20px;
  background-color: #438afe;
  img {
    width: 30px;
    height: 30px;
  }
}
</style>
