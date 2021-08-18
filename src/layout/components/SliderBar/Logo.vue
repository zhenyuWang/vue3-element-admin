<template>
  <div class="flex flex_align_center logo_box">
    <div class="logo"></div>
    <h1 class="pl_20 c_fff">商铺管理系统</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Logo",
});
</script>
<style lang="scss" scoped>
.logo_box {
  width: 230px;
  padding: 10px 20px;
  background-color: #438afe;
  .logo {
    width: 30px;
    height: 30px;
    background: url("../../../assets/img/logo/logo.png");
    background-size: 100% 100%;
  }
}
</style>
