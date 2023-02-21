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
    <Table :GoodsData="orderList" :Btn="btn" :TbName="tbname" :BtnIf="btnif" :Tableif="tableif" :TabIf="tabif"></Table>
  </div>
</template>

<script>
import Mock from '@/mock/Mock.js'
import Tool from '@/tools/Tool.js'
import table from '../other/table.vue'
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

      //按钮名称
      btn: {
        name1: '检索',
        name2: '清空',
        name3: '导出'
      },
      btnif: {
        totl: true,
        if1: true,
        if2: true,
        if3: true,
      },
      //table组件表头名称
      tbname: {
        name1: '名称',
        name2: '单号',
        name3: '用户',
        tag1: '支付方式',
        name7: '时间'
      },
      tableif: {
        if1: true,
        if2: true,
        if3: true,
        tag1: true,
        if7: true,
      },
      tabif: {
        totl: false
      }
    }
  },
  provide() {
    return {
      Method1: this.requestData,
      Method2: this.clear,
      Method3: this.exportData,

    }
  },

  //组件渲染时获取数据
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
  },
  components: {
    Table: table
  }
}
</script>