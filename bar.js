// Bar 柱状图 指定图表的配置项和数据
barOption = {
  title: {
    text: '活跃用户TOP',
    textStyle: {
      color: '#333',
      fontStyle: 'normal',
      fontWeight: "600",
      fontFamily: "microsoft yahei",
      fontSize: 16
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'none'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '8%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['李雪', '周成龙', '张敏', '元芳菲', '李菲儿', '陈洁', '张敏', '元芳菲', '李菲儿', '陈洁'],
      axisTick: {
        alignWithLabel: true
      },
      //设置字体倾斜  
      axisLabel: {
        rotate: 45//倾斜度 -90 至 90 默认为0  

      },
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '2017年',
      type: 'bar',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: '#bcd1ff' },
              { offset: 1, color: '#3964c1' }
            ]
          )
        },
        emphasis: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: '#bcd1ff' },
              { offset: 1, color: '#2851a7' }
            ]
          )
        }
      },
      data: [100, 300, 152, 121594, 134141, 81807, 31000, 121594, 134141, 81807]
    }
  ]
};

// 使用刚指定的配置项和数据显示图表。

// Bar 柱状图
barEcharts.setOption(barOption);