<template>
  <div class="content-container">
    <div>
      <!--输入框-->
      <el-container class="content-row">

        <span class="input-tip">商品名称：</span>
        <div class="input-field">
          <el-input v-model="queryParam.good"></el-input>
        </div>

        <span class="input-tip">用户名称：</span>
        <div class="input-field">
          <el-input v-model="queryParam.name"></el-input>
        </div>

        <span class="input-tip">手机号码：</span>
        <div class="input-field">
          <el-input v-model="queryParam.phone"></el-input>
        </div>
      </el-container>
      <el-container class="content-row">
        <span class="input-tip">订单类型：</span>
        <div class="input-field">
          <el-input v-model="queryParam.type"></el-input>
        </div>

        <span class="input-tip">平台单号：</span>
        <div class="input-field">
          <el-input v-model="queryParam.call"></el-input>
        </div>

        <span class="input-tip">支付时间：</span>
        <div class="input-field">
          <el-date-picker v-model="queryParam.paytime" type="daterange" range-separator="至" start-placeholder="Start date"
            end-placeholder="End date" />
        </div>
      </el-container>
    </div>
    <div class="content-row">
      <el-row><!--三个操作-->
        <el-button type="primary" @click="requestData">检索</el-button>
        <el-button type="danger" @click="clear">清空</el-button>
        <el-button type="primary" @click="exportData">导出</el-button>
      </el-row>
    </div>
    <div><!--改变操作-->
      <el-table :data="orderList" style="width: 100%">
        <el-table-column label="名称" width="127" prop="name" />
        <el-table-column label="单号" width="127" prop="call" />
        <el-table-column label="用户" width="127" prop="user" />
        <el-table-column label="支付方式" width="210" prop="pay">
          <template #default="scope">
            <el-tag :type="scope.row.pay ? '' : 'success'">{{ scope.row.pay ? '微信' : '支付宝' }}</el-tag>

          </template>
        </el-table-column>
        <el-table-column label="时间" width="210" prop="time" />
      </el-table>
    </div>
</div>
</template>

<script>
import Mock from '@/mock/Mock.js'
import Tool from '@/tools/Tool.js'
export default {
  data() {
    return {
      //mcok数据
      orderList: [],
      //用户输入数据
      queryParam: {
        good: '',
        name: '',
        phone: '',
        type: '',
        call: '',
        paytime: '',
      },
    }
  },//组件渲染时获取数据
  mounted() {
    this.orderList = Mock.getfinancial()
  },
  methods: {
    //请求数据
    requestData() {
      this.orderList = Mock.getfinancial()
    },
    //清空筛选项
    clear() {
      this.queryParam = {
        good: '',
        name: '',
        phone: '',
        type: '',
        call: '',
        paytime: '',
      }
      this.orderList = Mock.getfinancial()
    },
    //导出对应订单数据
    exportData() {
      this.$message({
        type: 'success',
        message: '已导出'
      })
      Tool.exportJson('订单数据.json', JSON.stringify(this.orderList))
    },
  }
}
</script>