<template>
  <div class="content-container">
    <div>
      <el-container class="content-row">
        <!--手动输入-->
        <span class="input-tip">用户状态:</span>
        <div class="input-field">
          <el-input v-model="queryParam.state"></el-input>
        </div>

        <span class="input-tip">用户信息:</span>
        <div class="input-field">
          <el-input v-model="queryParam.id"></el-input>
        </div>
      </el-container>
    </div>
    <div class="content-row">
      <el-row><!--两个操作-->
        <el-button type="primary" @click="requestData">检索</el-button>
        <el-button type="primary" @click="clear">清空</el-button>
      </el-row>
    </div>
    <div>
      <el-table :data="list" style="width: 100%;">
        <el-table-column label="用户信息" width="150" prop="name" />
        <el-table-column label="所处状态" width="150">
          <template #default="scope">
            <el-tag :type="scope.row.state ? '' : 'success'">{{ scope.row.state ? '审核通过' : '审核中' }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="添加时间" width="250" prop="addTime" />
        <el-table-column label="更新时间" width="250" prop="updateTime" />
        <el-table-column label="操作">
          <template #default="scope">
            <el-button :type="scope.row.operate ? 'danger' : 'success'" @click="operate(scope.row)">{{ scope.row.operate
              ? '下线' : '通过' }}</el-button>
          </template>
        </el-table-column>

      </el-table>
    </div>

</div>
</template>
<script>
import Mock from '@/mock/Mock.js'
export default {
  data() {
    return {
      queryParam: {
        state: '',
        id: ''
      },
      list: []
    }
  },
  methods: {
    //检索
    requestData() {
      this.$message({
        type: 'success',
        message: '正在检索:' + JSON.stringify(this.queryParam)
      })
      this.list = Mock.getList()
    },
    //清空
    clear() {
      this.queryParam = {
        state: '',
        id: ''
      }
      this.list = Mock.getList()
    },
    //删除操作
    operate(item) {
      item.operate = !item.operate
    }
  },
  mounted() {
    this.list = Mock.getList()
  },

}
</script>