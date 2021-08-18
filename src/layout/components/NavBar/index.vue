<template>
  <div class="navbar flex flex_align_center border_b">
    <Collapse />
    <Breadcrumb />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Collapse from "./Collapse.vue";
import Breadcrumb from "./Breadcrumb.vue";
export default defineComponent({
  name: "",
  components: { Collapse, Breadcrumb },
});
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
}
</style>
