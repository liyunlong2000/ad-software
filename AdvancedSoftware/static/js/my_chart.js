

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

  $(document).ready(function () {
    //gender
    var $genderDistributionChart = $("#genderDistributionChart");
    $.ajax({
      url: '/genderDistributionChart',
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
    //equitment
    var $equipmentDistributionChart = $("#equipmentDistributionChart")
    $.ajax({
        url: '/equipmentDistributionChart',
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
    
    //age
    var $ageDistributionChart = $("#ageDistributionChart");
    $.ajax({
      url: '/ageDistributionChart',
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

    //geo
    var $geographicalDistributionChart = $("#geographicalDistributionChart");
    $.ajax({
      url: '/geographicalDistributionChart',
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
});

