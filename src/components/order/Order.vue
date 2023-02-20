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
    <div class="content-row">
      <el-row><!--五个操作-->
        <el-button type="primary" @click="requestData">筛选</el-button>
        <el-button type="danger" @click="clear">清空筛选</el-button>
        <el-button type="primary" @click="exportData">导出</el-button>
        <el-button type="primary" @click="dispatchGoods">批量发货</el-button>
        <el-button type="primary" @click="exportDispatchGoods">批量下载发货样单</el-button>
      </el-row>
    </div>
    <!--商品列表-->
    <div>
      <el-tabs @tab-click="handleClick"><!--handleClick-->
        <el-tab-pane label="全部" name="first"></el-tab-pane>
        <el-tab-pane label="未支付" name="second"></el-tab-pane>
        <el-tab-pane label="已支付" name="third"></el-tab-pane>
        <el-tab-pane label="待发货" name="fourth"></el-tab-pane>
        <el-tab-pane label="已发货" name="fifth"></el-tab-pane>
        <el-tab-pane label="支付超时" name="sixth"></el-tab-pane>
      </el-tabs>
    </div>
    <div><!--改变操作-->
      <el-table :data="orderList" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="70px" />
        <el-table-column label="商品种类" width="127" prop="name" />
        <el-table-column label="总价/数量" width="127" prop="price" />
        <el-table-column label="购买人员" width="127" prop="buyer" />
        <el-table-column label="交易时间" width="210" prop="time" />
        <el-table-column label="分销信息" width="127">
          <template #default="scope">
            <el-tag :type="scope.row.role ? '' : 'success'">{{ scope.row.role ? '经理' : '销售员' }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="商品状态" width="127">
          <template #default="scope">
            <el-tag :type="scope.row.state ? 'success' : 'danger'">{{ scope.row.state ? '已完成' : '未完成' }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="执行操作" width="200">
          <template #default="scope"><!--删除和联系操作-->
            <el-button type="danger" @click="deleteitem(scope.$index)">删除</el-button>
            <el-button type="primary" @click="calluser(scope.row.phone)">联系</el-button>
          </template>
        </el-table-column>
        <el-table-column label="支付方式" width="127">
          <template #default="scope">
            <el-tag :type="scope.row.payType ? 'success' : ''">{{ scope.row.payType ? '微信' : '支付宝' }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="信息来源" width="260" prop="source" />
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
        consignee: '',
        phone: '',
        name: '',
        payTime: '',
        sendTime: ''
      },
      //选中的订单
      multipleSelection: []
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


  }
}
</script>

<style></style>