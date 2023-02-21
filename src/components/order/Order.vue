<template>
  <div class="content-container">
    <!--输入框-->
    <div>
      <el-container class="content-row">

        <span class="input-tip">商品名：</span>
        <div class="input-field">
          <el-input v-model="queryParam.good"></el-input>
        </div>

        <span class="input-tip">收货人：</span>
        <div class="input-field">
          <el-input v-model="queryParam.consignee"></el-input>
        </div>

        <span class="input-tip">支付时间:</span>
        <div class="input-field">
          <el-date-picker v-model="queryParam.payTime" type="daterange" range-separator="至" start-placeholder="Start date"
            end-placeholder="End date" />
        </div>
      </el-container>
      <el-container class="content-row">
        <span class="input-tip">用户名：</span>
        <div class="input-field">
          <el-input v-model="queryParam.name"></el-input>
        </div>

        <span class="input-tip">手机号：</span>
        <div class="input-field">
          <el-input v-model="queryParam.phone"></el-input>
        </div>

        <span class="input-tip">发货时间:</span>
        <div class="input-field">
          <el-date-picker v-model="queryParam.sendTime" type="daterange" range-separator="至"
            start-placeholder="Start date" end-placeholder="End date" />
        </div>
      </el-container>
    </div>
    <Table :GoodsData="orderList" :Btn="btn" :TbName="tbname" :BtnIf="btnif" :Tableif="tableif" :TabIf="tabif">
    </Table>
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
        consignee: '',
        phone: '',
        name: '',
        payTime: '',
        sendTime: ''
      },
      //选中的订单
      multipleSelection: [],

      //btn按钮名称
      btn: {
        name1: '筛选',
        name2: '清空筛选',
        name3: '导出',
        name4: '批量发货',
        name5: '批量下载发货样单',
      },
      //table图表表头名称
      tbname: {
        name1: '商品',
        name2: '总价/数量',
        name3: '购买人员',
        name4: '交易时间',
        tag1: '分销信息',
        tag2: '商品状态',
        tag3: '支付方式',
        order: '操作',
        name7: '来源'
      },
      //btn按钮显示
      btnif: {
        totl: true,
        if1: true,
        if2: true,
        if3: true,
        if4: true,
        if5: true,
      },
      //table组件显示
      tableif: {
        Tselect: true,
        goodimg: false,
        if1: true,
        if2: true,
        if3: true,
        if4: true,
        if5: false,
        if6: false,
        tag1: true,
        tag2: true,
        tag3: true,
        goods: false,
        order: true,
        leader: false,
        if7: true,
        if8: false,
      },
      tabif: {
        totl: true
      }

    }
  },
  //向table子组件传方法
  provide() {
    return {
      Method1: this.requestData,
      Method2: this.clear,
      Method3: this.exportData,
      Method4: this.dispatchGoods,
      Method5: this.exportDispatchGoods,
      HandleClick: this.handleClick,
      HandleSelectionChange: this.handleSelectionChange,
      Deleteitem: this.deleteitem,
      Calluser: this.calluser
    }
  },

  //组件渲染时获取数据
  mounted() {
    this.orderList = Mock.getOrder(this.$route.params.type)
  },


  //路由更新时刷新数据
  beforeRouteUpdate(to) {
    this.orderList = Mock.getOrder(to.params.type)
  },


  methods: {
    //请求数据
    requestData() {
      this.orderList = Mock.getOrder(this.$route.params.type)
    },
    //清空筛选项
    clear() {
      this.queryParam = {
        good: '',
        consignee: '',
        phone: '',
        name: '',
        payTime: '',
        sendTime: ''
      }
      this.orderList = Mock.getOrder(this.$route.params.type)
    },
    //导出对应订单数据
    exportData() {
      this.$message({
        type: 'success',
        message: '已导出'
      })
      Tool.exportJson('订单数据.json', JSON.stringify(this.orderList))
    },
    //批量发货
    dispatchGoods() {
      this.$message({
        type: 'success',
        message: '已发货:' + JSON.stringify(this.multipleSelection)
      })
    },
    //导出选中的订单
    exportDispatchGoods() {
      this.$message({
        type: 'success',
        message: '已下载'
      })
      Tool.exportJson('订单数据.json', JSON.stringify(this.multipleSelection))
    },
    //刷新数据
    handleClick(tab) {
      this.$message({
        type: 'succwss',
        message: '刷新请求参数' + tab.props.label
      })
      this.orderList = Mock.getOrder(this.$route.params.type)
    },
    //多选
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    //删除动作
    deleteitem(index) {
      this.orderList.splice(index, 1)
      console.log(index)
    },
    //联系客户
    calluser(item) {
      this.$message({
        type: 'success',
        message: '正在联系：' + item
      })
    }
  },

  components: {
    Table: table
  }
}
</script>

<style></style>