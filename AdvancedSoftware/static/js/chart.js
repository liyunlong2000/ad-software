$(function() {
  /* ChartJS
   * -------
   * Data and config for chartjs
   */
  'use strict';
  var data = {
    labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
    datasets: [{
      label: '# of Votes',
      data: [10, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      fill: false
    }]
  };

  // var equipmentDistributionData = {
  //     labels: ["apple(28.76%)", "huawei(28.06%)", "xiaomi(16.05%)", "vivo(9.57%)", "oppo(7.75%)", "其它(9.79%)"],
  //     datasets: [{
  //       label: '# of Votes',
  //       data: [28, 28.06, 16.05, 9.57, 7.75, 9.79],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.2)',
  //         'rgba(54, 162, 235, 0.2)',
  //         'rgba(255, 206, 86, 0.2)',
  //         'rgba(75, 192, 192, 0.2)',
  //         'rgba(153, 102, 255, 0.2)',
  //         'rgba(255, 159, 64, 0.2)'
  //       ],
  //       borderColor: [
  //         'rgba(255,99,132,1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(153, 102, 255, 1)',
  //         'rgba(255, 159, 64, 1)'
  //       ],
  //       borderWidth: 1,
  //       fill: false
  //     }]
  //   };


function randomData() {
	return Math.round(Math.random()*500);
};


// var dataMap =[
//     {name: '北京',value: '100' },{name: '天津',value: randomData() },
//     {name: '上海',value: randomData() },{name: '重庆',value: randomData() },
//     {name: '河北',value: randomData() },{name: '河南',value: randomData() },
//     {name: '云南',value: randomData() },{name: '辽宁',value: randomData() },
//     {name: '黑龙江',value: randomData() },{name: '湖南',value: randomData() },
//     {name: '安徽',value: randomData() },{name: '山东',value: randomData() },
//     {name: '新疆',value: randomData() },{name: '江苏',value: randomData() },
//     {name: '浙江',value: randomData() },{name: '江西',value: randomData() },
//     {name: '湖北',value: randomData() },{name: '广西',value: randomData() },
//     {name: '甘肃',value: randomData() },{name: '山西',value: randomData() },
//     {name: '内蒙古',value: randomData() },{name: '陕西',value: randomData() },
//     {name: '吉林',value: randomData() },{name: '福建',value: randomData() },
//     {name: '贵州',value: randomData() },{name: '广东',value: randomData() },
//     {name: '青海',value: randomData() },{name: '西藏',value: randomData() },
//     {name: '四川',value: randomData() },{name: '宁夏',value: randomData() },
//     {name: '海南',value: randomData() },{name: '台湾',value: randomData() },
//     {name: '香港',value: randomData() },{name: '澳门',value: randomData() },{name: '南海诸岛',value: randomData() }
// ];

  // var geographicalDistributionOptions={
  //     tooltip: {

  //     },
  //   //左侧小导航图标
  //     visualMap: {
  //         show : true,
  //         left: 10,
  //         bottom: 143,
  //         splitList: [
  //             {start: 500, end:600},{start: 400, end: 500},
  //             {start: 300, end: 400},{start: 200, end: 300},
  //             {start: 100, end: 200},{start: 0, end: 100},
  //         ],
  //         color: ['#5475f5', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea']
  //     },
  //     grid: {
  //             left: '10%',  // 设置表格距离左边框的距离
  //             top: '20%',   // 设置表格距离顶部边框的距离
  //     },
  //     series: [
  //         {
  //             name: '中国',
  //             type: 'map',
  //             mapType: 'china',
  //             label: {
  //                 normal: {
  //                     show: false,//显示省份标签
  //                 },
  //                 emphasis: {
  //                     show: true,//对应的鼠标悬浮效果
  //                 }
  //             },
  //             data: dataMap
  //         }
  //     ]
  //   };

  var multiLineData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
        label: 'Dataset 1',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: [
          '#587ce4'
        ],
        borderWidth: 2,
        fill: false
      },
      {
        label: 'Dataset 2',
        data: [5, 23, 7, 12, 42, 23],
        borderColor: [
          '#ede190'
        ],
        borderWidth: 2,
        fill: false
      },
      {
        label: 'Dataset 3',
        data: [15, 10, 21, 32, 12, 33],
        borderColor: [
          '#f44252'
        ],
        borderWidth: 2,
        fill: false
      }
    ]
  };
  var options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };
  
  // var equipmentDistributionOptions = {
  //     scales: {
  //       yAxes: [{
  //         ticks: {
  //           beginAtZero: true
  //         }
  //       }]
  //     },
  //     legend: {
  //       display: false
  //     },
  //     elements: {
  //       point: {
  //         radius: 0
  //       }
  //     }
  //   };
  var doughnutPieData = {
    datasets: [{
      data: [30, 40, 30],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Pink',
      'Blue',
      'Yellow',
    ]
  };

  var doughnutPieOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };

  // var ageDistributionData = {
  //     datasets: [{
  //       data: [49.1, 24.56, 16.57,9.78],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.5)',
  //         'rgba(54, 162, 235, 0.5)',
  //         'rgba(255, 206, 86, 0.5)',
  //         'rgba(75, 192, 192, 0.5)',
  //         'rgba(153, 102, 255, 0.5)',
  //         'rgba(255, 159, 64, 0.5)'
  //       ],
  //       borderColor: [
  //         'rgba(255,99,132,1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(153, 102, 255, 1)',
  //         'rgba(255, 159, 64, 1)'
  //       ],
  //     }],

  //     // These labels appear in the legend and in the tooltips when hovering different arcs
  //     labels: [
  //       '18-24(49.71%)',
  //       '0-17(24.56%)',
  //       '25-30(16.57%)',
  //       '30以上(9.78%)'
  //     ]
  //   };

  //   var ageDistributionOptions = {
  //     responsive: true,
  //     animation: {
  //       animateScale: true,
  //       animateRotate: true
  //     },
  //     legend: {
  //           position: 'right'
  //     },
  //   };

    // var genderDistributionData = {
    //   datasets: [{
    //     data: [30, 70],
    //     backgroundColor: [
    //       'rgba(255, 99, 132, 0.5)',
    //       'rgba(54, 162, 235, 0.5)',
    //       'rgba(255, 206, 86, 0.5)',
    //       'rgba(75, 192, 192, 0.5)',
    //       'rgba(153, 102, 255, 0.5)',
    //       'rgba(255, 159, 64, 0.5)'
    //     ],
    //     borderColor: [
    //       'rgba(255,99,132,1)',
    //       'rgba(54, 162, 235, 1)',
    //       'rgba(255, 206, 86, 1)',
    //       'rgba(75, 192, 192, 1)',
    //       'rgba(153, 102, 255, 1)',
    //       'rgba(255, 159, 64, 1)'
    //     ],
    //   }],

    //   // These labels appear in the legend and in the tooltips when hovering different arcs
    //   labels: [
    //     '女性(39.14%)',
    //     '男性(60.86%)',
    //   ]
    // };

    // var genderDistributionOptions = {
    //     responsive: true,
    //     animation: {
    //       animateScale: true,
    //       animateRotate: true
    //     },
    //     legend: {
    //       position: 'right'
    //     },
    //   };

  var areaData = {
    labels: ["2013", "2014", "2015", "2016", "2017"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      fill: true, // 3: no fill
    }]
  };

  var areaOptions = {
    plugins: {
      filler: {
        propagate: true
      }
    }
  }

  var multiAreaData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        label: 'Facebook',
        data: [8, 11, 13, 15, 12, 13, 16, 15, 13, 19, 11, 14],
        borderColor: ['rgba(255, 99, 132, 0.5)'],
        backgroundColor: ['rgba(255, 99, 132, 0.5)'],
        borderWidth: 1,
        fill: true
      },
      {
        label: 'Twitter',
        data: [7, 17, 12, 16, 14, 18, 16, 12, 15, 11, 13, 9],
        borderColor: ['rgba(54, 162, 235, 0.5)'],
        backgroundColor: ['rgba(54, 162, 235, 0.5)'],
        borderWidth: 1,
        fill: true
      },
      {
        label: 'Linkedin',
        data: [6, 14, 16, 20, 12, 18, 15, 12, 17, 19, 15, 11],
        borderColor: ['rgba(255, 206, 86, 0.5)'],
        backgroundColor: ['rgba(255, 206, 86, 0.5)'],
        borderWidth: 1,
        fill: true
      }
    ]
  };

  var multiAreaOptions = {
    plugins: {
      filler: {
        propagate: true
      }
    },
    elements: {
      point: {
        radius: 0
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  }

  var scatterChartData = {
    datasets: [{
        label: 'First Dataset',
        data: [{
            x: -10,
            y: 0
          },
          {
            x: 0,
            y: 3
          },
          {
            x: -25,
            y: 5
          },
          {
            x: 40,
            y: 5
          }
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)'
        ],
        borderWidth: 1
      },
      {
        label: 'Second Dataset',
        data: [{
            x: 10,
            y: 5
          },
          {
            x: 20,
            y: -30
          },
          {
            x: -25,
            y: 15
          },
          {
            x: -10,
            y: 5
          }
        ],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1
      }
    ]
  }

  var scatterChartOptions = {
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom'
      }]
    }
  }
  // Get context with jQuery - using jQuery's .get() method.
  if ($("#barChart").length) {
    var barChartCanvas = $("#barChart").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart = new Chart(barChartCanvas, {
      type: 'bar',
      data: data,
      options: options
    });
  }

  //  if ($("#equipmentDistributionChart").length) {
  //     var equipmentDistributionChartCanvas = $("#equipmentDistributionChart").get(0).getContext("2d");
  //     // This will get the first returned node in the jQuery collection.
  //     var equipmentDistributionChart = new Chart(equipmentDistributionChartCanvas, {
  //       type: 'bar',
  //       data: equipmentDistributionData,
  //       options: equipmentDistributionOptions
  //     });
  //   }

  if ($("#lineChart").length) {
    var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
    var lineChart = new Chart(lineChartCanvas, {
      type: 'line',
      data: data,
      options: options
    });
  }

  if ($("#linechart-multi").length) {
    var multiLineCanvas = $("#linechart-multi").get(0).getContext("2d");
    var lineChart = new Chart(multiLineCanvas, {
      type: 'line',
      data: multiLineData,
      options: options
    });
  }


  if ($("#areachart-multi").length) {
    var multiAreaCanvas = $("#areachart-multi").get(0).getContext("2d");
    var multiAreaChart = new Chart(multiAreaCanvas, {
      type: 'line',
      data: multiAreaData,
      options: multiAreaOptions
    });
  }

  if ($("#doughnutChart").length) {
    var doughnutChartCanvas = $("#doughnutChart").get(0).getContext("2d");
    var doughnutChart = new Chart(doughnutChartCanvas, {
      type: 'doughnut',
      data: doughnutPieData,
      options: doughnutPieOptions
    });
  }

  // if ($("#ageDistributionChart").length) {
  //     var ageDistributionChartCanvas = $("#ageDistributionChart").get(0).getContext("2d");
  //     var ageDistributionChart = new Chart(ageDistributionChartCanvas, {
  //       type: 'doughnut',
  //       data: ageDistributionData,
  //       options: ageDistributionOptions
  //     });
  //   }

  // if ($("#genderDistributionChart").length) {
  //     var genderDistributionChartCanvas = $("#genderDistributionChart").get(0).getContext("2d");
  //     var genderDistributionChart = new Chart(genderDistributionChartCanvas, {
  //       type: 'doughnut',
  //       data: genderDistributionData,
  //       options: genderDistributionOptions
  //     });
  //   }


    // //初始化echarts实例
    // var geographicalDistributionChart = echarts.init(document.getElementById('geographicalDistributionChart'));
    // //使用制定的配置项和数据显示图表
    // geographicalDistributionChart.setOption(geographicalDistributionOptions);

  if ($("#pieChart").length) {
    var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
    var pieChart = new Chart(pieChartCanvas, {
      type: 'pie',
      data: doughnutPieData,
      options: doughnutPieOptions
    });
  }

  if ($("#areaChart").length) {
    var areaChartCanvas = $("#areaChart").get(0).getContext("2d");
    var areaChart = new Chart(areaChartCanvas, {
      type: 'line',
      data: areaData,
      options: areaOptions
    });
  }

  if ($("#scatterChart").length) {
    var scatterChartCanvas = $("#scatterChart").get(0).getContext("2d");
    var scatterChart = new Chart(scatterChartCanvas, {
      type: 'scatter',
      data: scatterChartData,
      options: scatterChartOptions
    });
  }

  if ($("#browserTrafficChart").length) {
    var doughnutChartCanvas = $("#browserTrafficChart").get(0).getContext("2d");
    var doughnutChart = new Chart(doughnutChartCanvas, {
      type: 'doughnut',
      data: browserTrafficData,
      options: doughnutPieOptions
    });
  }
});