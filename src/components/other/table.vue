<template>
  <div>

    <div class="content-row" v-if="BtnIf.totl">
      <el-row><!--操作按钮-->
        <el-button v-if="BtnIf.if1" type="primary" @click="Method1">{{ Btn.name1 }}</el-button>
        <el-button v-if="BtnIf.if2" type="primary" @click="Method2">{{ Btn.name2 }}</el-button>
        <el-button v-if="BtnIf.if3" type="primary" @click="Method3">{{ Btn.name3 }}</el-button>
        <el-button v-if="BtnIf.if4" type="primary" @click="Method4">{{ Btn.name4 }}</el-button>
        <el-button v-if="BtnIf.if5" type="primary" @click="Method5">{{ Btn.name5 }}</el-button>
      </el-row>
    </div>
    <!--横向分类栏-->
    <div>
      <el-tabs v-model="activeName" @tab-click="HandleClick" v-if="TabIf.totl">
        <el-tab-pane v-if="TabIf.if1" :label="TabName.name1" name="1"></el-tab-pane>
        <el-tab-pane v-if="TabIf.if2" :label="TabName.name2" name="2"></el-tab-pane>
        <el-tab-pane v-if="TabIf.if3" :label="TabName.name3" name="3"></el-tab-pane>
        <el-tab-pane v-if="TabIf.if4" :label="TabName.name4" name="4"></el-tab-pane>
        <el-tab-pane v-if="TabIf.if5" :label="TabName.name5" name="5"></el-tab-pane>
        <el-tab-pane v-if="TabIf.if6" :label="TabName.name6" name="6"></el-tab-pane>
      </el-tabs>
    </div>
    <!--商品列表-->
    <div>
      <el-table :data="GoodsData" style="width: 100%" @selection-change="HandleSelectionChange">
        <!--多选表格-->
        <el-table-column v-if="TableIf.Tselect" type="selection" width="70px" />

        <!--商品页面图文部分-->
        <el-table-column v-if="TableIf.goodimg" :label="TbName.goodimg" width="150">
          <template #default="scope">
            <div text-align="center">
              <el-image style="width: 60px; height: 100px" :src="scope.row.img" />
            </div>
            <span class="demonstration" text-align="center">{{ scope.row.imgname }}</span>
          </template>
        </el-table-column>

        <!--常规表格-->
        <el-table-column v-if="TableIf.if1" :label="TbName.name1" width="150" prop="prp1" />
        <el-table-column v-if="TableIf.if2" :label="TbName.name2" width="150" prop="prp2" />
        <el-table-column v-if="TableIf.if3" :label="TbName.name3" width="150" prop="prp3" />
        <el-table-column v-if="TableIf.if4" :label="TbName.name4" width="150" prop="prp4" />
        <el-table-column v-if="TableIf.if5" :label="TbName.name5" width="150" prop="prp5" />
        <el-table-column v-if="TableIf.if6" :label="TbName.name6" width="150" prop="prp6" />

        <!--标签图表-->
        <el-table-column v-if="TableIf.tag1" :label="TbName.tag1" width="150">
          <template #default="scope">
            <el-tag :type="scope.row.tag1.length > 2 ? '' : 'success'">{{ scope.row.tag1 }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column v-if="TableIf.tag3" :label="TbName.tag2" width="150">
          <template #default="scope">
            <el-tag :type="scope.row.tag2.length > 2 ? '' : 'success'">{{ scope.row.tag2 }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column v-if="TableIf.tag3" :label="TbName.tag3" width="150">
          <template #default="scope">
            <el-tag :type="scope.row.tag3.length > 2 ? '' : 'success'">{{ scope.row.tag3 }}</el-tag>
          </template>
        </el-table-column>

        <!--商品、订单、店长组件的表格按钮-->
        <el-table-column v-if="TableIf.goods" :label="TbName.goods" width="140">
          <template #default="scope"><!--商品组件-->
            <el-button :type="scope.row.goods ? 'danger' : 'success'" @click="Operate(scope.row)">{{
              scope.row.goods ? '下架' : '上架' }}</el-button>
          </template>
        </el-table-column>
        <el-table-column v-if="TableIf.order" :label="TbName.order" width="200">
          <template #default="scope"><!--订单组件-->
            <el-button type="danger" @click="Deleteitem(scope.$index)">删除</el-button>
            <el-button type="primary" @click="Calluser(scope.row.order)">联系</el-button>
          </template>
        </el-table-column>
        <el-table-column v-if="TableIf.leader" :label="TbName.leader" width="130">
          <template #default="scope"><!--店长组件-->
            <el-button :type="scope.row.tag1.length > 2 ? 'success' : 'danger'" @click="Operateleader(scope.row)">{{
              scope.row.tag1.length > 2 ? '通过' : '下线' }}</el-button>
          </template>
        </el-table-column>

        <!--常规表格-->
        <el-table-column v-if="TableIf.if7" :label="TbName.name7" width="150" prop="prp7" />
        <el-table-column v-if="TableIf.if8" :label="TbName.name8" width="150" prop="prp8" />
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 1,
      BtnIf: {
        totl: true,
        if1: true,
        if2: true,
        if3: true,
        if4: true,
        if5: true,
      },
      TableIf: {
        Tselect: true,
        goodimg: true,
        if1: true,
        if2: true,
        if3: true,
        if4: true,
        if5: true,
        if6: true,
        tag1: true,
        tag2: true,
        tag3: true,
        goods: true,
        order: true,
        leader: true,
        if7: true,
        if8: true,
      },
    }
  },
  //BtnIf：按钮是否显示；   Btn：按钮的对应名称；    Method1~5：对应按钮的方法；   'Operate', 'deleteitem', 'calluser', 'operateleader',主要为按钮的方法    'handleClick'顶部横向分类栏方法
  //GoodsData：图表的数据来源；    prp1~8：正常组件的数据；   tag1~3：标签组件的数据;    goods、order、leader：商品、订单、店长组件按钮数据
  //TableIf：图表组件是否显示；    if1~8:正常组件是否显示；   tag1~3：标签组件的是否显示;    goods、order、leader：商品、订单、店长组件是否显示
  //TbName：图表组件的表头；    name1~8：正常组件表头；    tag1~3：标签组件表头；    goods、order、leader：商品、订单、店长组件表头
  //TabIf：tab组件的显示与否    TabName：tab组建的名称
  props: ['BtnIf', 'Btn', 'GoodsData', 'Tableif', 'TbName', 'TagName', 'TabIf', 'TabName'],
  inject: ['Method1', 'Method2', 'Method3', 'Method4', 'Method5', 'HandleSelectionChange', 'Operate', 'Deleteitem', 'Calluser', 'Operateleader', 'HandleClick'],
  mounted() {
    this.BtnIf = this.Btnif
    this.TableIf = this.Tableif
  },
  methods: {

  }
}
</script>
