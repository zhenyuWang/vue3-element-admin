<template>
  <div class="box t_center">
    <img :src="avatar" alt="" />
    <HelloWorld msg="Vite2 + Vue3 + Element3 + TS + SCSS + jest + e2e buy wzy!" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import avatar from "@/assets/img/avatar.jpg";
export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  setup() {
    return { avatar };
  },
});
</script>
<style lang="scss" scoped>
.box {
  padding-top: 100px;
  > img {
    width: 100px;
    height: auto;
  }
}
</style>
