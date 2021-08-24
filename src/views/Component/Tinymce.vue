<template>
  <div>
    <Tinymce @updateContent="updateTinymceContent" />
    <Tinymce :disabled="true" @updateContent="updateTinymceContent" />
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import Tinymce from "@/components/tinymce/index.vue";
export default {
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
};
</script>
