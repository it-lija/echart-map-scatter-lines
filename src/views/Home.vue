<template>
  <div class="about">
    <div id="china" style="width:50vw;height:400px" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      seriesData: [{
        name: '湖南',
        value: 0
      }, {
        name: '广东',
        value: 1
      }, {
        name: '江西',
        value: 1
      }
      ]
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      var achart = this.$echarts.init(document.getElementById('china'))
      var option = {
        tooltip: {
          show: true,
          formatter: val => {
            return val.data && val.data.value >= 0 ? `<p style="color: rgba(255,255,255, .8)">省内商家数 &nbsp;<span style="color: #00aeff">${val.data.value}</span></p>
        <p style="color: rgba(255,255,255, .8)">省内代理数 &nbsp;<span style="color: #00aeff">${val.data.value}</span></p>` : ''
          }
        },
        visualMap: {
          min: 0,
          max: 4,
          inRange: {
            color: ['#e0ffff', 'red', '#0f0', '#f0f']// 取值范围的颜色
          },
          show: false// 图注
        },
        backgroundColor: '#071232',
        series: [
          {
            name: 'china',
            type: 'map',
            map: 'china-a',
            roam: false, // 是否开启鼠标缩放和平移漫游
            data: this.seriesData,
            top: 'middle', // 组件距离容器的距离
            selectedMode: 'single',
            tooltip: {
              backgroundColor: 'rgba(0, 29, 122, .6)'
            },
            zoom: 1.2,
            label: {
              show: true,
              color: '#fbfdfe'
            },
            itemStyle: {
              areaColor: '#0a3066',
              borderColor: '#fff'
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
