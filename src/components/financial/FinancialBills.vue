<template>
  <div class="content-container">

    <Table :GoodsData="orderList" :Btn="btn" :TbName="tbname" :BtnIf="btnif" :Tableif="tableif" :TabIf="tabif"
      :TabName="tabname"></Table>
  </div>
</template>
<script>
import Mock from '@/mock/Mock.js'
import table from '../other/table.vue'
export default {
  data() {
    return {
      orderList: [],
      //不显示按钮
      btnif: {
        totl: false,
      },
      //table表头名称
      tbname: {
        name1: '日期',
        name2: '收入',
        name3: '支出',
        name4: '备注',
      },
      //table显示
      tableif: {
        if1: true,
        if2: true,
        if3: true,
        if4: true
      },
      //tab栏显示
      tabif: {
        totl: true,
        if1: true,
        if2: true,
        if3: true,
      },
      //tab组件名称
      tabname: {
        name1: '日汇总',
        name2: '月汇总',
        name3: '年汇总',
      },
      btn: {
        name1: '',
      }
    }
  },
  provide() {
    return {
      HandleClick: this.handleClick
    }
  },


  //组件渲染时获取数据
  mounted() {
    this.orderList = Mock.getbill()
  },
  //更新数据
  methods: {
    handleClick() {
      this.orderList = Mock.getbill()
    }
  },
  components: {
    Table: table
  }
}
</script>