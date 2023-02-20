<template>
  <div class="content-container">
    <el-container class="content-row" style="margin-left: 10px;">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="日汇总" name="1"></el-tab-pane>
        <el-tab-pane label="月汇总" name="2"></el-tab-pane>
        <el-tab-pane label="年汇总" name="3"></el-tab-pane>
      </el-tabs>
    </el-container>
    <div>
      <el-table :data="orderList" style="width: 100%">
        <el-table-column label="日期" width="200" prop="date" />
        <el-table-column label="收入" width="200" prop="income" />
        <el-table-column label="支出" width="200" prop="outlay" />
        <el-table-column label="备注" width="200" prop="note" />
      </el-table>
    </div>
</div>
</template>
<script>
import Mock from '@/mock/Mock.js'
export default {
  data() {
    return {
      orderList: [],
      activeName: 1,
    }
  },//组件渲染时获取数据
  mounted() {
    this.orderList = Mock.getbill()
  },
  //更新数据
  methods: {
    handleClick() {
      this.orderList = Mock.getbill()
    }
  }
}
</script>