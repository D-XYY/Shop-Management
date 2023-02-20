<template>
  <el-container id="container">
    <el-aside width="250px">
      <!--左侧头部-->
      <el-container id="side-top">
        <img src="@/assets/logo.png" style="width:25px;height:25px;margin:auto;margin-right: 0;">
        <h1 style="margin:auto;margin-left: 10px;color: #ffffff;font-size: 17px;">后台管理系统</h1>
      </el-container>
      <!--左侧项目列表-->
      <el-menu :default-active="$route.path" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
        style="height: 93.5%;" @select="menuitem">
        <!--订单管理-->
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <Star />
            </el-icon>
            <span>订单管理</span>
          </template>
          <el-menu-item index="/home/order/0">正常订单</el-menu-item>
          <el-menu-item index="/home/order/1">促销订单</el-menu-item>
        </el-sub-menu>
        <!--商品管理-->
        <el-sub-menu index="2">
          <template #title>
            <el-icon>
              <Goods />
            </el-icon>
            <span>商品管理</span>
          </template>
          <el-menu-item index="/home/goods/0">正常商品</el-menu-item>
          <el-menu-item index="/home/goods/1">促销商品</el-menu-item>
          <el-menu-item index="/home/goods/2">推荐商品</el-menu-item>
          <el-menu-item index="/home/category">商品分类</el-menu-item>
        </el-sub-menu>
        <!--店长管理-->
        <el-sub-menu index="3">
          <template #title>
            <el-icon>
              <User />
            </el-icon>
            <span>店长管理</span>
          </template>
          <el-menu-item index="/home/distributionlist">分销信息</el-menu-item>
          <el-menu-item index="/home/leadervetting">审批事项</el-menu-item>
        </el-sub-menu>
        <!--财务管理-->
        <el-sub-menu index="4">
          <template #title>
            <el-icon>
              <Coin />
            </el-icon>
            <span>财务管理</span>
          </template>
          <el-menu-item index="/home/tradingrecord">交易记录</el-menu-item>
          <el-menu-item index="/home/financialbills">财务账单</el-menu-item>
        </el-sub-menu>
        <!--其他管理-->
        <el-sub-menu index="5">
          <template #title>
            <el-icon>
              <Tickets />
            </el-icon>
            <span>其他管理</span>
          </template>
          <el-menu-item index="/home/salesdata">销售数据</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-main style="padding:0">
      <!--注销登录功能的实现-->
      <el-header style="margin: 0;padding: 0; height: 80px;">
        <el-container style="background-color:blanchedalmond;margin: 0;padding: 0;height: 80px;">
          <div style="margin: auto;margin-left: 100px;">
            <h1>欢迎您的登录：管理员</h1>
          </div>
          <div style="margin: auto;margin-right: 50px;">
            <el-button type="primary" @click="loginout">注销登录</el-button>
          </div>
        </el-container>
      </el-header>

      <!--主页面渲染-->
      <router-view></router-view>
    </el-main>
</el-container>
</template>

<script>
import { Star, Goods, User, Coin, Tickets } from '@element-plus/icons-vue'
import store from '@/store/index.js'
export default {
  name: 'Login',
  components: {
    Star,
    Goods,
    User,
    Coin,
    Tickets,
  },
  methods: {
    //注销登录，清空用户名和密码，回退到登录页
    loginout() {
      store.commit('clearUserInfo');
      this.$router.push({ name: 'Login' })
    },
    menuitem(index) {
      this.$router.push(index)
      console.log(index)
    }
  },//@select="menuitem"无法使用
}
</script>

<style scoped>
#container {
  width: 100%;
  height: 100%;
  position: absolute;
}

#side-top {
  background-color: #545c64;
  margin-right: 1px;
  text-align: center;
  height: 60px;
}
</style>