<template>
  <div>
    <p>This is Home</p>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Hello  Vite + Vue 3 + TypeScript" />
    <p>Name: {{ userInfo.name }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import HelloWorld from "@/components/HelloWorld.vue";
export default defineComponent({
  name: "Home",
  components: { HelloWorld },
  setup() {
    // 获取类型化的 store
    const store = useStore();
    // 获取 userInfo
    const userInfo = store.getters.userInfo;
    return { userInfo };
  },
});
</script>
