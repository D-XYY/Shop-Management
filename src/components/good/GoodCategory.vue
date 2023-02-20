<template>
  <div class="content-container">
    <div class="content-row">
      <el-button type="primary" round @click="add">添加分类项</el-button>
    </div>
    <div>
      <el-table :data="CategoryList" style="width: 100%">
        <el-table-column prop="id" label="分类ID" width="200" />
        <el-table-column prop="name" label="分类名称" width="200" />
        <el-table-column prop="manager" label="分类负责人" width="200" />
        <el-table-column label="操作" width="200">
          <template #default="scope">
            <el-button type="danger" @click="deleteitem(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</div>
</template>
<script>
import { ElMessage, ElMessageBox } from 'element-plus'
export default {
  data() {
    return {
      CategoryList: [
        { id: 1234, name: '男装', manager: '用户一' },
        { id: 1235, name: '女装', manager: '用户二' },
        { id: 1236, name: '鞋帽', manager: '用户三' }
      ],
    }
  },
  methods: {
    add() {
      ElMessageBox.prompt('请输入要添加的分类名', 'Tip', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      })
        .then(({ value }) => {
          ElMessage({
            type: '成功',
            message: `您输入的分类名为:${value}`,
          }),
            this.CategoryList.push({
              id: 1237,
              name: value,
              manager: '管理员'
            })
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '取消输入',
          })
        })
    },
    deleteitem(index) {
      this.CategoryList.splice(index, 1)
      console.log(index)
    }
  }
}
</script>