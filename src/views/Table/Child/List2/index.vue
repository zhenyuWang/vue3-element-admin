<template>
  <div>
    <el-table :data="list.data" highlight-current-row border stripe>
      <el-table-column label="序号" align="center" width="80" type="index">
      </el-table-column>
      <el-table-column label="姓名" align="center" width="100" prop="name" />
      <el-table-column label="角色" align="center" width="100" prop="role" />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :page-size="param.pageSize"
      layout="prev, pager, next"
      :total="totalCount"
      @current-change="getList"
    >
    </el-pagination>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  onMounted,
  onActivated,
  onDeactivated,
} from "vue";
import { apiList2 } from "@/api/table.ts";
export default defineComponent({
  name: "TableChildList2",
  components: {},
  setup() {
    const list = reactive({
      data: [],
    });
    const param = reactive({
      pageNo: 1,
      pageSize: 10,
    });
    const totalCount = ref(0);
    const getList = (index?: number) => {
      if (index) param.pageNo = index;
      apiList2(param).then((res) => {
        list.data = res.body.data;
        totalCount.value = res.body.totalCount;
      });
    };
    getList();
    const handleDelete = (item: any) => {
      console.log(`del ${item.id}`);
    };

    onMounted(() => {
      console.log("List2 onMounted");
    });
    onActivated(() => {
      console.log("List2 onActivated");
    });
    onDeactivated(() => {
      console.log("List2 onDeactivated");
    });
    return {
      list,
      param,
      getList,
      totalCount,
      handleDelete,
    };
  },
});
</script>
