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

    <Table :GoodsData="list" :Btn="btn" :TbName="tbname" :BtnIf="btnif" :Tableif="tableif" :TabIf="tabif">
    </Table>
  </div>
</template>
<script>
import Mock from '@/mock/Mock.js'
import table from '../other/table.vue'
export default {
  data() {
    return {
      queryParam: {
        state: '',
        id: ''
      },
      //数据源
      list: [],
      //按钮名称
      btn: {
        name1: '检索',
        name2: '清空'
      },
      //table表头名称
      tbname: {
        name1: '用户信息',
        tag1: '所处状态',
        name2: '添加时间',
        name3: '更新时间',
        leader: '操作'
      },
      //按钮显示
      btnif: {
        totl: true,
        if1: true,
        if2: true,
      },
      //table表头显示
      tableif: {
        if1: true,
        if2: true,
        if3: true,
        tag1: true,
        leader: true,
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
      Operateleader: this.operate
    }
  },


  methods: {
    //检索
    requestData() {
      this.$message({
        type: 'success',
        message: '正在检索:' + JSON.stringify(this.queryParam)
      })
      this.list = Mock.getvet()
    },
    //清空
    clear() {
      this.queryParam = {
        state: '',
        id: ''
      }
      this.list = Mock.getvet()
    },
    //删除操作
    operate(item) {
      if (item.tag1.length > 2) return item.tag1 = '通过'
      return item.tag1 = '待审核'
    }
  },
  mounted() {
    this.list = Mock.getvet()
  },
  components: {
    Table: table
  }

}
</script>