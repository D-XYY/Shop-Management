import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../components/login/Login.vue'
import Home from '../components/home/Home.vue'
import store from '../store/index.js'
import Order from '../components/order/Order.vue'
import Goods from '../components/good/Goods.vue'
import AddGoods from '../components/good/AddGoods.vue'
import GoodCategory from '../components/good/GoodCategory.vue'
import DistributionList from '../components/leader/DistributionList.vue'
import LeaderVetting from '../components/leader/LeaderVetting'
import TradingRecord from '../components/financial/TradingRecord.vue'
import FinancialBills from '../components/financial/FinancialBills.vue'
import SalesData from '../components/other/SalesData.vue'


const routes = [
  { path: '/', component: Login, name: 'Login' },
  {
    path: '/home',
    component: Home,
    name: 'Home',
    redirect: '/home/order/0',
    children: [
      { path: 'order/:type', component: Order, name: 'Order' },//0是正常订单；1是促销订单
      { path: 'goods/:type', component: Goods, name: 'Goods' },//0是正常商品；1是促销商品；2是推荐商品
      { path: 'addgoods/:type', component: AddGoods, name: 'AddGoods' },//0是正常商品；1是促销商品；2是推荐商品
      { path: 'category', component: GoodCategory, name: 'Category' },//商品分类
      { path: 'distributionlist', component: DistributionList, name: 'DistributionList' },//分销信息
      { path: 'leadervetting', component: LeaderVetting, name: 'leadervetting' },//店长审批
      { path: 'tradingrecord', component: TradingRecord, name: 'TradingRecord' },//交易记录
      { path: 'financialbills', component: FinancialBills, name: 'FinancialBills' },//财务账单
      { path: 'salesdata', component: SalesData, name: 'SalesData' },//销售数据
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((from) => {
  let isLogin = store.getters.isLogin;
  if (isLogin || from.name == 'Login') {
    return true;
  } else {
    return { name: 'Login' }
  }

})

export default router
