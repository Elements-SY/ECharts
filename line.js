// Line 折线图 指定图表的配置项和数据
lineOption = {
  title: {
    text: '用户在线率/资源占用率',
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
      type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  legend: {
    x: 'right',
    data: ['用户在线率', '磁盘', '内存']
  },
  grid: {
    width: 'auto',
    left: '3%',
    right: '3%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['8:10', '8:20', '8:30', '8:40', '8:50', '9:00', '9:10']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '用户在线率',
      type: 'line',
      data: [50, 59, 67, 53, 72, 65, 70]
    },
    {
      name: '磁盘',
      type: 'line',
      data: [61, 72, 72, 65, 83, 82, 90]
    },
    {
      name: '内存',
      type: 'line',
      data: [55, 67, 62, 75, 93, 72, 80],
      markPoint: {
        data: [
          { type: 'max', name: '最大值' },
          { type: 'min', name: '最小值' }
        ]
      }
    }
  ]
};

// 使用刚指定的配置项和数据显示图表。

// Line 折线图
lineEcharts.setOption(lineOption);
