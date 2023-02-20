<template>
  <div>
    <!--价格设置-->
    <div class="item1">
      <span class="item2">价格设置</span>
    </div>
    <el-container class="content-row">
      <span class="input-tip">市场价:</span>
      <div class="input-field">
        <el-input v-model="queryParam.marktetPrice"></el-input>
      </div>
    </el-container>
    <el-container class="content-row">
      <span class="input-tip">展示价:</span>
      <div class="input-field">
        <el-input v-model="queryParam.showPrice"></el-input>
      </div>
    </el-container>
    <el-container class="content-row">
      <span class="input-tip">积分数:</span>
      <div class="input-field">
        <el-input v-model="queryParam.coin"></el-input>
      </div>
    </el-container>
    <el-container class="content-row">
      <span class="input-tip">成本价:</span>
      <div class="input-field">
        <el-input v-model="queryParam.price"></el-input>
      </div>
    </el-container>
    <el-container class="content-row">
      <span class="input-tip">限购数:</span>
      <div class="input-field">
        <el-input v-model="queryParam.limit"></el-input>
      </div>
    </el-container>
    <!--库存设置-->
    <div class="item1">
      <span class="item2">库存设置</span>
    </div>
    <el-container class="content-row">
      <span class="input-tip">库存数量:</span>
      <div class="input-field">
        <el-input v-model="queryParam.count"></el-input>
      </div>
    </el-container>
    <el-container class="content-row">
      <span class="input-tip">基础销量:</span>
      <div class="input-field">
        <el-input v-model="queryParam.sellCount"></el-input>
      </div>
    </el-container>
    <el-container class="content-row">
      <span class="input-tip">浏览数量:</span>
      <div class="input-field">
        <el-input v-model="queryParam.viewCount"></el-input>
      </div>
    </el-container>
    <el-container>
      <el-button type="primary" plain @click="submit">提交</el-button>
      <el-button type="danger" plain style="margin-left: 40px;" @click="cancel">取消</el-button>
    </el-container>
</div>
</template>
<script>
export default {
  data() {
    return {
      queryParam: {
        marktetPrice: '',
        showPrice: '',
        coin: '',
        price: '',
        limit: '',
        count: '',
        sellCount: '',
        viewCount: ''

      }
    }
  },
  methods: {
    //提交
    submit() {
      this.$message({
        type: 'success',
        message: '提交成功'
      })
    },
    //取消
    cancel() {
      this.$router.go(-1)
    }
  }
}
</script>
<style>
.item1 {
  background-color: #e1e1e1;
  height: 35px;
  margin-bottom: 15px;
}

.item2 {
  line-height: 35px;
  margin-left: 25px;
}
</style>