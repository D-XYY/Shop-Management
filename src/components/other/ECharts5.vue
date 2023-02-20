<template><div ref="main" style="width: 1400px;height: 400px;"></div></template>

<script>
import * as echarts from 'echarts';
export default {
  props: ['Xdata', 'Edata'],
  mounted() {
    this.echart()
  },
  //监听数据变化
  watch: {
    //X轴
    Xdata() {
      this.echart()
    },
    //数据
    Edata() {
      this.echart()
    }
  },
  mounted() {
    this.echart()
  },
  methods: {
    echart() {
      var myChart = echarts.init(this.$refs.main);
      myChart.setOption({
        xAxis: {
          data: this.Xdata
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: this.Edata
          }
        ]
      });
    }
  }
}
</script>