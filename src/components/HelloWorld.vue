<template>
  <h1>{{ msg }}</h1>
  <ul>
    <li v-for="item in courses" :key="item.id" class="item">
      {{ item.name }}
    </li>
  </ul>
  <p>{{ count }}</p>
  <button class="plus" type="button" @click="count++">add count</button>
</template>

<script lang="ts">
import { ref, reactive } from "vue";
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup() {
    const count = ref(0);
    type Course = {
      id: number;
      name: string;
    };
    const courses = reactive<Course[]>([
      { id: 1, name: "小明" },
      { id: 2, name: "小红" },
      { id: 3, name: "小花" },
      { id: 3, name: "小壮" },
    ]);
    return { count, courses };
  },
};
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  .item {
    color: purple;
  }
}
p {
  font-size: 20px;
  color: red;
}
</style>
