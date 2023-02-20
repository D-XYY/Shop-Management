<template>
  <div class="content-container">
    <div>
      <el-container class="content-row">
        <!--手动输入-->
        <span class="input-tip">手机号:</span>
        <div class="input-field">
          <el-input v-model="queryParam.name"></el-input>
        </div>

        <span class="input-tip">昵称:</span>
        <div class="input-field">
          <el-input v-model="queryParam.id"></el-input>
        </div>

        <span class="input-tip">状态:</span>
        <el-select v-model="queryParam.state" class="input-field" placeholder="请选择">
          <el-option v-for="item in options" :key="item" :label="item" :value="item" />
        </el-select>
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
        <el-table-column label="分销人" width="150" prop="name" />
        <el-table-column label="微信信息" width="150" prop="weixin" />
        <el-table-column label="所处状态" width="150">
          <template #default="scope">
            <el-tag :type="scope.row.state ? '' : 'success'">{{ scope.row.state ? '审核通过' : '审核中' }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="收入总额" width="150" prop="total" />
        <el-table-column label="退款" width="150" prop="backPrice" />
        <el-table-column label="来源" width="150">
          <template #default="scope">
            <el-tag :type="success">{{ scope.row.origin }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="客户数量" width="150" prop="count" />
        <el-table-column label="更新时间" prop="updateTime" />

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
        phone: '',
        nickname: '',
        state: ''
      },
      options: ['休假', '外派', '在职'],
      list: []
    }
  },
  methods: {
    //检索
    requestData() {
      this.list = Mock.getList()
    },
    //清空
    clear() {
      this.queryParam = {
        phone: '',
        nickname: '',
        state: ''
      }
    }
  },
  mounted() {
    this.list = Mock.getList()
  }
}
</script>