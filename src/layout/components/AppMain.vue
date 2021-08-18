<template>
  <section class="app_main flex">
    <SliderBar />
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <router-view v-slot="{ Component }">
          <template v-if="Component">
            <transition mode="out-in">
              <keep-alive :include="cachedViews">
                <component :is="Component" :key="key" />
              </keep-alive>
            </transition>
          </template>
        </router-view>
      </el-main>
    </el-container>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import SliderBar from "./SliderBar/index.vue";
import Header from "./Header/index.vue";
export default defineComponent({
  components: { SliderBar, Header },
  setup() {
    const store = useStore();
    const cachedViews = store.getters.cachedViews;
    const route = useRoute();
    const key = ref(route.fullPath);
    watchEffect(() => (key.value = route.fullPath));
    return {
      cachedViews,
      key,
    };
  },
});
</script>
<style lang="scss" scoped>
.app_main {
  height: 100%;
}
</style>
