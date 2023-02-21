<template>
  <div class="content-container">
    <!--输入框-->
    <div>
      <el-container class="content-row">

        <span class="input-tip">商品名称:</span>
        <div class="input-field">
          <el-input v-model="queryParam.name"></el-input>
        </div>

        <span class="input-tip">商品编号:</span>
        <div class="input-field">
          <el-input v-model="queryParam.id"></el-input>
        </div>

        <span class="input-tip">商品分类:</span>
        <el-select v-model="queryParam.category" class="input-field" placeholder="请选择">
          <el-option v-for="item in categories" :key="item" :label="item" :value="item" />
        </el-select>
      </el-container>
      <el-container class="content-row">
        <span class="input-tip">是否上架:</span>
        <el-select v-model="queryParam.sellMode" class="input-field" placeholder="请选择">
          <el-option v-for="item in options" :key="item.key" :label="item.label" :value="item.value" />
        </el-select>

        <span class="input-tip">是否过期:</span>
        <el-select v-model="queryParam.expMode" class="input-field" placeholder="请选择">
          <el-option v-for="item in options" :key="item.key" :label="item.label" :value="item.value" />
        </el-select>

      </el-container>
    </div>
    <!--图表部分-->
    <Table :GoodsData="goodsData" :Btn="btn" :TbName="tbname" :BtnIf="btnif" :Tableif="tableif" :TabIf="tabif"></Table>
  </div>
</template>

<script>
import Mock from '@/mock/Mock.js'
import table from '../other/table.vue'
export default {
  data() {
    return {
      //图表数据
      goodsData: [],
      //select选项
      categories: ['全部', '男装', '女装'],
      //输入数据
      queryParam: {
        name: '',
        id: '',
        category: '',
        sellMode: '',
        expMode: ''
      },
      //select选项
      options: [
        { key: '0', label: '否', value: '0', },
        { key: '1', label: '是', value: '1', },
        { key: '2', label: '全部', value: '2', },
      ],
      //按钮名称
      btn: {
        name1: '检索',
        name2: '显示全部',
        name3: '新增商品',
      },
      //图表表头名称
      tbname: {
        goodimg: '商品',
        name1: '价格',
        name2: '销量',
        name3: '库存',
        name4: '退款数量',
        name5: '退款金额',
        goods: '操作',
        name7: '管理员',
        name8: '更新时间',
      },
      //按钮显示
      btnif: {
        totl: true,
        if1: true,
        if2: true,
        if3: true,
        if4: false,
        if5: false,
      },
      //图表组件显示
      tableif: {
        goodimg: true,
        if1: true,
        if2: true,
        if3: true,
        if4: true,
        if5: true,
        if7: true,
        if8: true,
        goods: true,
      },
      tabif: {
        totl: false
      }
    }
  },
  //组件渲染时获取数据
  mounted() {
    this.goodsData = Mock.getGoods(this.$route.params.type)
  },
  //路由更新时刷新数据
  beforeRouteUpdate(to) {
    this.goodsData = Mock.getGoods(to.params.type)
  },
  methods: {
    //检索
    requestData() {
      this.$message({
        type: 'success',
        message: '正在检索:' + JSON.stringify(this.queryParam)
      })
      this.goodsData = Mock.getGoods(this.$route.params.type)
    },
    //显示全部
    clear() {
      this.$message({
        type: 'success',
        message: '已清空'
      })
      this.queryParam = {
        name: '',
        id: '',
        category: '',
        sellMode: '',
        expMode: ''
      }
      this.goodsData = Mock.getGoods(this.$route.params.type)
    },
    //新增商品
    addGoods() {
      this.$router.push({ name: 'AddGoods', params: { type: this.$route.params.type } })
    },
    //上下架操作
    operate(item) {
      item.goods = !item.goods
    }
  },
  components: {
    Table: table
  },
  provide() {
    return {
      Method1: this.requestData,
      Method2: this.clear,
      Method3: this.addGoods,
      Operate: this.operate
    };
  },

}
</script>
