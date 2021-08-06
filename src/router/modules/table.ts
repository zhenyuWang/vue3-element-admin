export default {
  path: "table",
  name: "Table",
  redirect: "/table/1",
  children: [
    {
      path: "/1",
      name: "Table1",
      component: () => import("@/views/Table/Table1.vue"),
    },
  ],
};
