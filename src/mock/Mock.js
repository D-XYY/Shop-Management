import mockjs from 'mockjs'
const Mock = {
  //type: 0为正常订单，1为促销订单
  //生成模拟数据
  getOrder(type) {
    let array = [];
    for (let i = 0; i < mockjs.Random.integer(8, 10); i++) {
      array.push(mockjs.mock({
        'name': type == 0 ? '正常商品' : '促销商品' + i,
        'price': mockjs.Random.integer(20, 500) + '元',
        'buyer': mockjs.Random.cname(),
        'time': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
        'role': mockjs.Random.boolean(),
        'state': mockjs.Random.boolean(),
        'payType': mockjs.Random.boolean(),
        'source': mockjs.Random.url(),
        'phone': mockjs.mock(/\d{11}/)//这里还是不太懂
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
        'name': (type == 0 ? '正常商品' : type == 1 ? '促销商品' : '推荐商品') + i,
        'img': mockjs.Random.dataImage('60x100', '商品视图'),
        'price': mockjs.Random.integer(20, 500) + '元',
        'sellCount': mockjs.Random.integer(50, 100),
        'count': mockjs.Random.integer(10, 100),
        'back': mockjs.Random.integer(10, 100),
        'backPrice': mockjs.Random.integer(0, 5000) + '元',
        'owner': mockjs.Random.cname(),
        'time': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
        'state': mockjs.Random.boolean(),
      }))
    }
    return array
  },
  //获取模拟分销信息与审批事项
  getList() {
    let array = [];
    for (let i = 0; i < mockjs.Random.integer(10, 15); i++) {
      array.push(mockjs.mock({
        'name': mockjs.Random.cname(),//二者共用
        'weixin': mockjs.Random.string(6, 10),
        'state': mockjs.Random.boolean(),//二者共用
        'total': mockjs.Random.integer(1000, 100000) + '元',//收入总额
        'backPrice': mockjs.Random.integer(0, 5000) + '元',//退款
        'origin': '本站内',//来源
        'count': mockjs.Random.integer(10, 100) + '人',//客户数量
        'updateTime': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),//更新时间，二者共用
        //以下为审批事项单独数据
        'addTime': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),//添加时间
        'operate': mockjs.Random.boolean()
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
        'name': mockjs.Random.string(8, 10),//名称
        'call': mockjs.Random.integer(11, 12),//单号
        'user': mockjs.Random.cname(),//用户
        'pay': mockjs.Random.boolean(),//支付方式
        'time': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),//支付时间
      }))
    }
    return array
  }, getbill() {
    let array = [];
    for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
      array.push(mockjs.mock({
        'date': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),//日期
        'income': mockjs.Random.integer(1000, 5000) + '元',//收入
        'outlay': mockjs.Random.integer(1000, 5000) + '元',//支出
        'note': mockjs.Random.string(8, 10),//备注
      }))
    }
    return array
  },

}

export default Mock;