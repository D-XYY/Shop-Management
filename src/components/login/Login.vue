<template>
  <div id="container">
    <div class="title">
      <h1>后台管理系统</h1>
    </div>
    <div class="input">
      <!--输入用户名和密码-->
      <el-input v-model="name" :prefix-icon="User" placeholder="请输入用户名">
        <template #prefix>
          <el-icon class="el-input__icon">
            <!--图标不显示问题-->
            <user />
          </el-icon>
        </template>
      </el-input>
    </div>
    <div class="input">
      <el-input v-model="password" placeholder="请输入密码">
        <template #prefix>
          <el-icon class="el-input__icon">
            <Lock />
          </el-icon>
        </template>
      </el-input>
    </div>
    <!--登录按钮-->
    <div class="input">
      <el-button type="primary" style="width:500px" :disabled="disabled" @click="login">登录</el-button>
    </div>

</div>
</template>

<script>
import store from '@/store/index.js'
import { ElMessage } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'
export default {
  name: 'Login',
  data() {
    return {
      name: '',
      password: ''
    }
  },
  computed: {
    //当密码或用户名没有，禁用按钮
    disabled() {
      return this.name.length == 0 || this.password.length == 0
    }
  },
  methods: {
    //更新状态
    login() {
      store.commit("registUserInfo", {
        name: this.name,
        password: this.password
      })
      //显示登录成功的消息
      ElMessage({
        message: '成功登录',
        type: 'success',
        duration: 3000
      })
      //延时一秒
      setTimeout(() => {
        this.$router.push({ name: "Home" })

      }, 1000)
    }
  },
  components: {
    User,
    Lock
  }
}
</script>

<style scoped>
#container {
  background-image: url('@/assets/login.jpg');
  position: absolute;
  height: 100%;
  width: 100%;
}

.title {
  text-align: center;
  color: aliceblue;
  margin-top: 200px;
}

.input {
  margin: 20px auto;
  width: 500px;
}
</style>