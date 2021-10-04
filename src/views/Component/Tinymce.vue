<template>
  <div>
    <Tinymce @updateContent="updateTinymceContent" />
    <Tinymce :disabled="true" @updateContent="updateTinymceContent" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Tinymce from "@/components/tinymce/index.vue";
export default defineComponent({
  name: "TinymceDemo",
  components: { Tinymce },
  setup() {
    const tinymceContent = ref("");
    const updateTinymceContent = (val: string) => {
      tinymceContent.value = val;
    };
    return {
      updateTinymceContent,
    };
  },
});
</script>
