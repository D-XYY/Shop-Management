import mockjs from 'mockjs'
const Mock = {
  //type: 0为正常订单，1为促销订单
  //生成模拟数据
  getOrder(type) {
    let array = [];
    for (let i = 0; i < mockjs.Random.integer(8, 10); i++) {
      array.push(mockjs.mock({
        'prp1': type == 0 ? '正常商品' : '促销商品' + i,//商品种类
        'prp2': mockjs.Random.integer(20, 500) + '元',//总价/数量
        'prp3': mockjs.Random.cname(),//购买人员
        'prp4': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),//交易时间
        'tag1': mockjs.Random.boolean() ? '分销员' : '经理',//分销信息
        'tag2': mockjs.Random.boolean() ? '完成' : '未完成',//商品状态
        'tag3': mockjs.Random.boolean() ? '微信' : '支付宝',//支付方式
        'order': mockjs.mock(/\d{11}/),//手机号
        'prp7': mockjs.Random.url(),//来源
        'tag1n': '刘佳颖',
        'tag1m': '铁馨慧'
      }))
    }
    return array
  },
  //生成商品数据
  //type: 0为正常，1为促销商品，2为推荐商品
  getGoods(type) {
    let array = [];
    for (let i = 0; i < mockjs.Random.integer(8, 10); i++) {
      array.push(mockjs.mock({
        'imgname': (type == 0 ? '正常商品' : type == 1 ? '促销商品' : '推荐商品') + i,//商品名称
        'img': mockjs.Random.dataImage('60x100', '商品视图'),//商品图片
        'prp1': mockjs.Random.integer(20, 500) + '元',//商品价格
        'prp2': mockjs.Random.integer(50, 100),//销量
        'prp3': mockjs.Random.integer(10, 100),//库存
        'prp4': mockjs.Random.integer(10, 100),//退款数量
        'prp5': mockjs.Random.integer(0, 5000) + '元',//退款金额
        'goods': mockjs.Random.boolean(),//操作
        'prp7': mockjs.Random.cname(),//管理员
        'prp8': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),//更新时间
      }))
    }
    return array
  },
  //获取模拟分销信息
  getList() {
    let array = [];
    for (let i = 0; i < mockjs.Random.integer(10, 15); i++) {
      array.push(mockjs.mock({
        'prp1': mockjs.Random.cname(),//分销人
        'prp2': mockjs.Random.string(6, 10),//微信信息
        'prp3': mockjs.Random.integer(1000, 100000) + '元',//收入总额
        'prp4': mockjs.Random.integer(0, 5000) + '元',//退款
        'tag1': mockjs.Random.boolean() ? '审核中' : '激活',//所处状态
        'tag2': '本站内',//来源
        'prp7': mockjs.Random.integer(10, 100) + '人',//客户数量
        'prp8': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),//更新时间
      }))
    }
    return array
  },
  //模拟获取审批事项
  getvet() {
    let array = [];
    for (let i = 0; i < mockjs.Random.integer(10, 15); i++) {
      array.push(mockjs.mock({
        'prp1': mockjs.Random.cname(),//用户信息 
        'tag1': mockjs.Random.boolean() ? '待审核' : '通过',//状态
        'prp2': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),//添加时间
        'prp3': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),//更新时间
      }))
    }
    return array
  },


  getData() {
    let array = [];
    for (let i = 0; i < 6; i++) {
      array.push(mockjs.Random.integer(1, 100))
    }
    return array
  },
  getTrade() {
    return mockjs.mock({
      'allTrade': mockjs.Random.integer(10000, 50000),//总销售额
      'SecKill': mockjs.Random.integer(0, 5000),//秒杀
      'goodsTrade': mockjs.Random.integer(0, 5000),//商品销售数量
      'userCount': mockjs.Random.integer(50, 300),//用户数量
      'Distributors': mockjs.Random.integer(0, 100),//分销员数量
      'time': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss')
    })

  },
  getfinancial() {
    let array = [];
    for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
      array.push(mockjs.mock({
        'prp1': mockjs.Random.csentence(),//名称
        'prp2': mockjs.Random.string(11, 12),//单号
        'prp3': mockjs.Random.cname(),//用户
        'tag1': mockjs.Random.boolean() ? '支付宝' : '微信',//支付方式
        'prp7': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),//支付时间
      }))
    }
    return array
  }, getbill() {
    let array = [];
    for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
      array.push(mockjs.mock({
        'prp1': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),//日期
        'prp2': mockjs.Random.integer(1000, 5000) + '元',//收入
        'prp3': mockjs.Random.integer(1000, 5000) + '元',//支出
        'prp4': mockjs.Random.string(8, 10),//备注
      }))
    }
    return array
  },

}

export default Mock;