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
        phone: '',
        nickname: '',
        state: ''
      },
      options: ['休假', '外派', '在职'],
      list: [],
      //按钮名称
      btn: {
        name1: '检索',
        name2: '清空'
      },
      tbname: {
        name1: '分销人',
        name2: '微信信息',
        name3: '收入总额',
        name4: '退款',
        tag1: '所处状态',
        tag2: '来源',
        name7: '客户数量',
        name8: '更新时间'
      },
      btnif: {
        totl: true,
        if1: true,
        if2: true,
      },
      tableif: {
        if1: true,
        if2: true,
        if3: true,
        if4: true,
        tag1: true,
        tag2: true,
        if7: true,
        if8: true,
      },
      tabif: {
        totl: false
      }
    }
  },
  //传送方法
  provide() {
    return {
      Method1: this.requestData,
      Method2: this.clear
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
  },
  components: {
    Table: table
  }
}
</script>