<template>
  <div class="content-container">
    <!--头部数据栏-->
    <el-container class="content-row">
      <div class="top1">交易总额：{{ this.Top.allTrade }}</div>
      <div class="top">促销交易额：{{ this.Top.SecKill }}</div>
      <div class="top">常规交易额：{{ this.Top.goodsTrade }}</div>
      <div class="top">用户数量：{{ this.Top.userCount }}</div>
      <div class="top">分销总数：{{ this.Top.Distributors }}</div>
    </el-container>

    <!--头部导航栏-->
    <el-container style="margin-left: 350px;">
      <el-radio-group v-model="radio1" size="large" @change="changedata">
        <el-radio-button label="1">交易总额</el-radio-button>
        <el-radio-button label="2">商品交易额</el-radio-button>
        <el-radio-button label="3">新用户销量</el-radio-button>
        <el-radio-button label="4">下单转化率</el-radio-button>
        <el-radio-button label="5">付款转化率</el-radio-button>
        <el-radio-button label="6">流水</el-radio-button>
      </el-radio-group>
    </el-container>

    <!--中间柱状图-->
    <echart :Xdata="xdata" :Edata="data"></echart>

    <!--底部方框数据-->
    <div style="border: 1px solid black; width: 1200px; height: 300px;margin-left: 100px;">
      <el-container class="title">
        <!--时间-->
        <div class="top">数据时间：{{ this.Top.time }}</div>
      </el-container>
      <!--第一层数据-->
      <el-container class="content-row">
        <div class="footer">
          <div>付款金额：45000</div>
          <div>今日：12345</div>
          <div>昨日：2345</div>
        </div>
        <div class="footer">
          <div>支付订单数：7654</div>
          <div>今日：2343</div>
          <div>昨日：1432</div>
        </div>
        <div class="footer">
          <div>付款人数：2345</div>
          <div>今日：23</div>
          <div>昨日：456</div>
        </div>
        <div class="footer">
          <div>转换率：80</div>
          <div>今日：23</div>
          <div>昨日：57</div>
        </div>
      </el-container>
      <!--第二层数据-->
      <el-container>
        <div class="footer">
          <div>访客数：7654</div>
          <div>今日3435：</div>
          <div>昨日：5555</div>
        </div>
        <div class="footer">
          <div>访问次数：70743</div>
          <div>今日：23563</div>
          <div>昨日：23343</div>
        </div>
        <div class="footer">
          <div>新增用户：2456</div>
          <div>今日：234</div>
          <div>昨日：688</div>
        </div>
        <div class="footer">
          <div>累计用户：6794</div>
          <div>今日：243</div>
          <div>昨日：2424</div>
        </div>
      </el-container>
    </div>
</div>
</template>
<script>
import Echarts5 from './ECharts5.vue'
import Mock from '@/mock/Mock';
export default {
  data() {
    return {
      Top: {},
      xdata: ["2月21日", "2月22日", "2月23日", "2月24日", "2月25日", "2月26日"],
      data: [],
      radio1: 1

    }
  },
  components: {
    echart: Echarts5
  },
  mounted() {
    this.Top = Mock.getTrade()
    this.data = Mock.getData()
  },
  methods: {
    //点击导航栏时变换数据
    changedata() {
      this.data = Mock.getData()
    }
  }
}
</script>

<style>
.top1 {
  font-size: 20px;
  color: #777777;
  margin: 20px 40px 20px 160px;
}

.top {
  font-size: 20px;
  color: #777777;
  margin: 20px 40px;
}

.title {
  font-size: 20px;
  color: #777777;
  margin: auto;
  padding-left: 40px;
}

.footer {
  font-size: 20px;
  color: #777777;
  margin: auto;
  width: 300px;
  padding-left: 80px;
}
</style>