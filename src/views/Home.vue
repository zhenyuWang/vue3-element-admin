<template>
  <div>
    <p>This is Home</p>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Hello  Vite + Vue 3 + TypeScript" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
export default defineComponent({
  name: "Home",
  components: { HelloWorld },
  setup() {
    return {};
  },
});
</script>
