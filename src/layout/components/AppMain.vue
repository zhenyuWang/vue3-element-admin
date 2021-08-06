<template>
  <section class="app_main">
    <p>app-main</p>
    <transition name="fade-transform" mode="out-in">
      <router-view v-slot="{ Component }">
        <keep-alive :include="cachedViews">
          <component :is="Component" :key="key" />
        </keep-alive>
      </router-view>
    </transition>
  </section>
</template>
<script lang="ts">
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const cachedViews = store.getters.cachedViews;
    function key() {
      console.log("useRoute()", useRoute());
      return useRoute().fullPath;
    }
    return {
      cachedViews,
      key,
    };
  },
};
</script>
