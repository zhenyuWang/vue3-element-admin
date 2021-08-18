<template>
  <div class="flex">
    <div class="collapse_box" @click="changeCollapse">
      <span v-if="isCollapse" class="el-icon-s-unfold"></span>
      <span v-else class="el-icon-s-fold"></span>
    </div>
    <div>header</div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "",
  setup() {
    const store = useStore();
    const changeCollapse = () => {
      store.commit("setting/SET_COLLAPSE", !store.getters.isCollapse);
    };
    return {
      changeCollapse,
    };
  },
  computed: {
    isCollapse() {
      return useStore().getters.isCollapse;
    },
  },
});
</script>
