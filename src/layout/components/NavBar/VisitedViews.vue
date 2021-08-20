<template>
  <div class="visited_views flex flex_align_center">
    <template v-for="view in visitedViews" :key="view.name">
      <div
        class="fontsize_12 c_666 pointer"
        :class="{ active: currentRoute.name === view.name }"
        @click="goTargetView(view)"
        @contextmenu.prevent="mouseRightClick(view, $event)"
      >
        {{ view.meta.title }}
        <i
          v-if="view.meta && !view.meta.fixed"
          class="el-icon-error"
          @click.stop="delTargetVisited(view)"
        ></i>
      </div>
    </template>
    <ul
      v-show="visible"
      ref="menu"
      class="menu bg_fff fontsize_13 pointer c_333"
    >
      <li @click="refresh">刷新</li>
      <li
        v-if="mouseRightView.data.meta && !mouseRightView.data.meta.fixed"
        @click="close"
      >
        关闭
      </li>
      <li @click="closeOther">关闭其他</li>
      <li @click="closeAll">关闭所有</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { reactive, ref } from "vue";
export default {
  name: "",
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    // 跳转目标路由
    const goTargetView = (view: any) => {
      router.push(view);
    };
    // 删除已访问路由
    const delTargetVisited = (view: any) => {
      store.dispatch("tagsView/deleteVisitedView", view);
      // 如果删除的是active路由，跳转访问路由最后一个
      if (view.name === route.name) {
        const visitedViews = store.getters.visitedViews;
        router.push(visitedViews[visitedViews.length - 1]);
      }
    };
    // 当前右键view
    const mouseRightView = reactive({
      data: { name: "" },
    });
    // 右键菜单html
    const menu = ref<any>();
    // 右键菜单是否显示
    const visible = ref(false);
    // 切换右键是否显示
    const hideMenu = () => {
      visible.value = false;
    };
    // 显示右键菜单
    const showMenu = (left: number, top: number) => {
      // 浏览器添加click关闭右键菜单
      window.addEventListener("click", hideMenu);
      visible.value = true;
      menu.value.style.left = `${left}px`;
      menu.value.style.top = `${top + 10}px`;
    };
    // 鼠标右键点击
    const mouseRightClick = (view: any, e: any) => {
      // 存储右键view
      mouseRightView.data = view;
      // 显示右键菜单
      showMenu(e.clientX, e.clientY);
    };
    // 刷新右键路由
    const refresh = async () => {
      await store.commit(
        "tagsView/DELETE_CACHE_VIEW",
        mouseRightView.data.name
      );
      if (mouseRightView.data.name === route.name) {
        await router.push({ name: "Home" });
        router.replace(mouseRightView.data);
      } else {
        router.push(mouseRightView.data);
      }
    };
    // 关闭右键路由
    const close = () => {
      delTargetVisited(mouseRightView.data);
    };
    // 右键关闭其他
    const closeOther = () => {
      store.commit("tagsView/DELETE_OTHER_VISITED_VIEW", mouseRightView.data);
      if (mouseRightView.data.name !== route.name) {
        router.push(mouseRightView.data);
      }
    };
    // 右键关闭所有
    const closeAll = () => {
      store.commit("tagsView/CLEAR_CACHE_VIEW");
      store.commit("tagsView/CLEAR_VISITED_VIEW");
      const visitedViews = store.getters.visitedViews;
      router.push(visitedViews[visitedViews.length - 1]);
    };
    return {
      goTargetView,
      delTargetVisited,
      mouseRightClick,
      visible,
      menu,
      refresh,
      close,
      closeOther,
      mouseRightView,
      closeAll,
    };
  },
  computed: {
    currentRoute() {
      return useRoute();
    },
    visitedViews() {
      return useStore().getters.visitedViews;
    },
  },
};
</script>
<style lang="scss" scoped>
.visited_views {
  height: 30px;
  > div {
    height: 24px;
    margin-right: 5px;
    padding: 0 10px;
    line-height: 24px;
    border: 1px solid #ccc;
    border-radius: 3px;
    &.active {
      background-color: rgb(19, 107, 19);
      border: none;
      color: #fff;
    }
  }
  .menu {
    width: 100px;
    padding: 5px 10px;
    position: absolute;
    z-index: 9999;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    > li {
      padding: 5px 2px;
      &:hover {
        color: #3477f2;
      }
    }
  }
}
</style>
