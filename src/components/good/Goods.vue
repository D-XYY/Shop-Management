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
    <div class="content-row">
      <el-row><!--三个操作-->
        <el-button type="primary" @click="requestData">检索</el-button>
        <el-button type="primary" @click="clear">显示全部</el-button>
        <el-button type="primary" @click="addGoods">新增商品</el-button>
      </el-row>
    </div>
    <!--商品列表-->
    <div><!--改变操作-->
      <el-table :data="goodsData" style="width: 100%">
        <el-table-column label="商品" width="150" prop="name">
          <template #default="scope">
            <div text-align="center">
              <el-image style="width: 60px; height: 100px" :src="scope.row.img" />
            </div>
            <span class="demonstration" text-align="center">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="价格" width="150" prop="price" />
        <el-table-column label="销量" width="150" prop="sellCount" />
        <el-table-column label="库存" width="150" prop="count" />
        <el-table-column label="退款数量" width="150" prop="back" />
        <el-table-column label="退款金额" width="150" prop="price" />
        <el-table-column label="操作" width="150">
          <template #default="scope"><!--删除和联系操作-->
            <el-button :type="scope.row.state ? 'danger' : 'success'" @click="operate(scope.row)">{{ scope.row.state
              ? '下架' : '上架' }}</el-button>
          </template>
        </el-table-column>
        <el-table-column label="管理员" width="150" prop="owner" />
        <el-table-column label="更新时间" width="200" prop="time" />
      </el-table>
    </div>
</div>
</template>

<script>
import Mock from '@/mock/Mock.js'
export default {
  data() {
    return {
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
        {
          key: '0',
          label: '否',
          value: '0',
        }, {
          key: '1',
          label: '是',
          value: '1',
        }, {
          key: '2',
          label: '全部',
          value: '2',
        },]
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
      item.state = !item.state
    }
  },

}
</script>
