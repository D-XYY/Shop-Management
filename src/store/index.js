import { createStore } from 'vuex'

export default createStore({
  state: {
    return: {
      //用户名和密码
      userName: "",
      userPassword: ""
    }
  },
  getters: {
    isLogin: (state) => {
      if (state.reportArray) return state.userName.length > 0
      return true
    }
  },
  mutations: {
    //注销
    clearUserInfo(state) {
      state.userName = '';
      state.Psaaword = '';
    },
    //登录
    registUserInfo(state, { name, password }) {
      state.userName = name;
      state.Psaaword = password;
    }
  },
  actions: {
  },
  modules: {
  }
})
