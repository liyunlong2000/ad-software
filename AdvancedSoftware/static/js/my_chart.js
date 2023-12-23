
var genderDistributionOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    },
    legend: {
      position: 'right'
    },
  };

  var ageDistributionOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    },
    legend: {
          position: 'right'
    },
  };

  var equipmentDistributionOptions = {
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

  function updateGender(user_id){
  var $genderDistributionChart = $("#genderDistributionChart");
  //alert(user_id)
  $.ajax({
    url: '/genderDistributionChart/',
    data: {user_id:user_id},
    method: 'GET',
    success: function (data) {
      var ctx = $genderDistributionChart[0].getContext("2d");
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: data.data,
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
          labels: data.labels,
        },
        options: genderDistributionOptions,
      });
    }
  });
  }
  function updateloveWordCloud(user_id){

    var mycharts1 = echarts.init(document.getElementById("loveWordCloudChart"));
    var jsonlist1 = [];

    var $loveWordCloudChart = $("#loveWordCloudChart");
  //alert(user_id)
  $.ajax({
    url: '/loveWordCloudChart/',
    data: {user_id:user_id},
    method: 'GET',
    success: function (data) {
      var mycharts1 = echarts.init(document.getElementById("loveWordCloudChart"));
      var jsonlist1 = data.lovedata;
  
      // 小鸟的base64编码
      image1 = "data:image/png;base64,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"

      var maskResource1 = new Image()
      maskResource1.src = image1;
      var option1 = {
          //设置标题，居中显示
          title: {
              left: 'center',
          },
          //数据能够点击
          tooltip: {

          },

          series: [
              {
                  maskImage: maskResource1,
                  //词的类型
                  type: 'wordCloud',
                  //设置字符大小范围
                  sizeRange: [6, 78],
                  rotationRange: [-45, 90],
                  textStyle: {
                      normal: {
                          //生成随机的字体颜色
                          color: function () {
                              return 'rgb(' + [
                                  Math.round(Math.random() * 160),
                                  Math.round(Math.random() * 160),
                                  Math.round(Math.random() * 160)
                              ].join(',') + ')';

                          }
                      }

                  },
                  //不要忘记调用数据
                  data: jsonlist1,

              }
          ]
    };
    //加载图像，将数据放在图像中
    maskResource1.onload = function () {
        mycharts1.setOption(option1)
    };
    }
  });
  
}
  function updateEquipment(user_id){
    var $equipmentDistributionChart = $("#equipmentDistributionChart")
    $.ajax({
        url: '/equipmentDistributionChart',
        data: {user_id:user_id},
        method: 'GET',
        success: function (data) {
          var ctx = $equipmentDistributionChart[0].getContext("2d");
          new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                  label: '# of Votes',
                  data: data.data,
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
              },
            options: equipmentDistributionOptions
          });
        }
      });
  }

  function updateAge(user_id){
    var $ageDistributionChart = $("#ageDistributionChart");
    $.ajax({
      url: '/ageDistributionChart',
      data: {user_id:user_id},
      method: 'GET',
      success: function (data) {
        var ctx = $ageDistributionChart[0].getContext("2d");
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            datasets: [{
              data: data.data,
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
            labels: data.labels,
          },
          options: ageDistributionOptions,
        });
      }
    });
  }

  function updategameWordCloud(user_id){


  var $gameWordCloudChart = $("#gameWordCloudChart");
  //alert(user_id)
  $.ajax({
    url: '/gameWordCloudChart/',
    data: {user_id:user_id},
    method: 'GET',
    success: function (data) {
      var mycharts1 = echarts.init(document.getElementById("gameWordCloudChart"));
      var jsonlist1 = data.gamedata;
      // alert(data.gamedata)
  
      // 小鸟的base64编码
      image1 = "data:image/png;base64,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"

      var maskResource1 = new Image()
      maskResource1.src = image1;
      var option1 = {
          //设置标题，居中显示
          title: {
              left: 'center',
          },
          //数据能够点击
          tooltip: {

          },

          series: [
              {
                  maskImage: maskResource1,
                  //词的类型
                  type: 'wordCloud',
                  //设置字符大小范围
                  sizeRange: [6, 30],
                  rotationRange: [-45, 90],
                  textStyle: {
                      normal: {
                          //生成随机的字体颜色
                          color: function () {
                              return 'rgb(' + [
                                  Math.round(Math.random() * 160),
                                  Math.round(Math.random() * 160),
                                  Math.round(Math.random() * 160)
                              ].join(',') + ')';

                          }
                      }

                  },
                  //不要忘记调用数据
                  data: jsonlist1,

              }
          ]
    };
    //加载图像，将数据放在图像中
    maskResource1.onload = function () {
        mycharts1.setOption(option1)
    };
    }
  });
  
}

function updatetypeWordCloud(user_id){

  var mycharts1 = echarts.init(document.getElementById("typeWordCloudChart"));
  var jsonlist1 = [];
//alert(user_id)
$.ajax({
  url: '/typeWordCloudChart/',
  data: {user_id:user_id},
  method: 'GET',
  success: function (data) {
    var mycharts1 = echarts.init(document.getElementById("typeWordCloudChart"));
    var jsonlist1 = data.typedata;

    // 小鸟的base64编码
    image1 = "data:image/png;base64,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"

    var maskResource1 = new Image()
    maskResource1.src = image1;
    var option1 = {
        //设置标题，居中显示
        title: {
            left: 'center',
        },
        //数据能够点击
        tooltip: {

        },

        series: [
            {
                maskImage: maskResource1,
                //词的类型
                type: 'wordCloud',
                //设置字符大小范围
                sizeRange: [6, 78],
                rotationRange: [-45, 90],
                textStyle: {
                    normal: {
                        //生成随机的字体颜色
                        color: function () {
                            return 'rgb(' + [
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160)
                            ].join(',') + ')';

                        }
                    }

                },
                //不要忘记调用数据
                data: jsonlist1,

            }
        ]
  };
  //加载图像，将数据放在图像中
  maskResource1.onload = function () {
      mycharts1.setOption(option1)
  };
  }
});

}

  function updateGeographical(user_id){
    var $geographicalDistributionChart = $("#geographicalDistributionChart");
    $.ajax({
      url: '/geographicalDistributionChart',
      data: {user_id:user_id},
      method: 'GET',
      success: function (data) {
        var geographicalDistributionOptions={
            tooltip: {
      
            },
          //左侧小导航图标
            visualMap: {
                show : true,
                left: 10,
                bottom: 143,
                splitList: [
                    {start: 500, end:600},{start: 400, end: 500},
                    {start: 300, end: 400},{start: 200, end: 300},
                    {start: 100, end: 200},{start: 0, end: 100},
                ],
                color: ['#5475f5', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea']
            },
            grid: {
                    left: '10%',  // 设置表格距离左边框的距离
                    top: '20%',   // 设置表格距离顶部边框的距离
            },
            series: [
                {
                    name: '中国',
                    type: 'map',
                    mapType: 'china',
                    label: {
                        normal: {
                            show: false,//显示省份标签
                        },
                        emphasis: {
                            show: true,//对应的鼠标悬浮效果
                        }
                    },
                    data: data.dataMap
                }
            ]
        };
        //初始化echarts实例
        var geographicalDistributionChart = echarts.init(document.getElementById('geographicalDistributionChart'));
        //使用制定的配置项和数据显示图表
        geographicalDistributionChart.setOption(geographicalDistributionOptions); 
      }
    });
  }
