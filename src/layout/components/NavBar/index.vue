<template>
  <div class="navbar flex flex_align_center flex_justify_between border_b">
    <div class="flex flex_align_center">
      <Collapse />
      <Breadcrumb />
    </div>
    <AvatarDropDown />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Collapse from "./Collapse.vue";
import Breadcrumb from "./Breadcrumb.vue";
import AvatarDropDown from "./AvatarDropDown.vue";
export default defineComponent({
  name: "",
  components: { Collapse, Breadcrumb, AvatarDropDown },
});
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
}
</style>
