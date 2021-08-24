<template>
  <div class="about">
    <div id="china" style="width:50vw;height:400px" />
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      var achart = this.$echarts.init(document.getElementById('china'))
      var option = {
        geo: {
          map: 'china-a',
          zoom: 1.2,
          itemStyle: {					// 定义样式
            areaColor: '#0a3066',
            borderColor: '#fff'
          },
          emphasis: {
            itemStyle: {
              areaColor: '#33c2df'
            }
          }
        },
        backgroundColor: '#071232', // 图表背景色
        series: [
          {
            name: '点', // series名称
            type: 'scatter', // series图表类型
            coordinateSystem: 'geo', // series坐标系类型
            data: [{
              name: '111',
              value: [104.502, 24.7412],
              category: 0
            }, {
              name: '222',
              value: [96.416, 42.7588],
              category: 0
            }, {
              name: '333',
              value: [101.7773, 33.5303],
              category: 1
            }
            ],
            symbol: 'image://https://img0.baidu.com/it/u=2460940297,1396634324&fm=26&fmt=auto&gp=0.jpg'
          },
          {
            name: '线', // series名称
            type: 'lines', // series图表类型
            coordinateSystem: 'geo', // series坐标系类型
            color: '#fff',
            data: [{ 'fromName': '111', 'toName': '222', 'coords': [[104.502, 24.7412], [96.416, 42.7588]] },
              { 'fromName': '333', 'toName': '222', 'coords': [[101.7773, 33.5303], [96.416, 42.7588]] }],
            lineStyle: {
              type: 'dashed',
              width: 2
            }
          }
        ]
      }
      achart.setOption(option)
      achart.on('click', (params) => {
        alert(params.name)
        console.log(params)
      })
    }
  }
}
</script>
