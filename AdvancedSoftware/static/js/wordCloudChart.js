
var mycharts = echarts.init(document.getElementById("wordCloudChart"));
//用来存储数据
var jsonlist = [];
jsonlist.push(
    {
        "name": "花鸟市场",
        "value": 1446
    },
    {
        "name": "汽车",
        "value": 928
    },
    {
        "name": "视频",
        "value": 906
    },
    {
        "name": "电视",
        "value": 825
    },
    {
        "name": "Lover Boy 88",
        "value": 514
    },
    {
        "name": "动漫",
        "value": 486
    },
    {
        "name": "音乐",
        "value": 5999
    },
    {
        "name": "直播",
        "value": 163
    },
    {
        "name": "广播电台",
        "value": 86
    },
    {
        "name": "戏曲曲艺",
        "value": 17
    },
    {
        "name": "演出票务",
        "value": 6
    },
    {
        "name": "给陌生的你听",
        "value": 1
    },
    {
        "name": "资讯",
        "value": 1437
    },
    {
        "name": "商业财经",
        "value": 422
    },
    {
        "name": "娱乐八卦",
        "value": 353
    },
    {
        "name": "军事",
        "value": 331
    },
    {
        "name": "科技资讯",
        "value": 313
    },
    {
        "name": "社会时政",
        "value": 307
    },
    {
        "name": "时尚",
        "value": 43
    },
    {
        "name": "网络奇闻",
        "value": 15
    },
    {
        "name": "旅游出行",
        "value": 438
    },
    {
        "name": "景点类型",
        "value": 957
    },
    {
        "name": "国内游",
        "value": 927
    },
    {
        "name": "远途出行方式",
        "value": 908
    },
    {
        "name": "酒店",
        "value": 693
    },
    {
        "name": "关注景点",
        "value": 611
    },
    {
        "name": "旅游网站偏好",
        "value": 512
    },
    {
        "name": "出国游",
        "value": 382
    },
    {
        "name": "交通票务",
        "value": 312
    },
    {
        "name": "旅游方式",
        "value": 187
    },
    {
        "name": "旅游主题",
        "value": 163
    },
    {
        "name": "港澳台",
        "value": 104
    },
    {
        "name": "本地周边游",
        "value": 3
    },
    {
        "name": "小卖家",
        "value": 1331
    },
    {
        "name": "全日制学校",
        "value": 941
    },
    {
        "name": "基础教育科目",
        "value": 585
    },
    {
        "name": "考试培训",
        "value": 473
    },
    {
        "name": "语言学习",
        "value": 358
    },
    {
        "name": "留学",
        "value": 246
    },
    {
        "name": "K12课程培训",
        "value": 207
    },
    {
        "name": "艺术培训",
        "value": 194
    },
    {
        "name": "技能培训",
        "value": 104
    },
    {
        "name": "IT培训",
        "value": 87
    },
    {
        "name": "高等教育专业",
        "value": 63
    },
    {
        "name": "家教",
        "value": 48
    },
    {
        "name": "体育培训",
        "value": 23
    },
    {
        "name": "职场培训",
        "value": 5
    },
    {
        "name": "金融财经",
        "value": 1328
    },
    {
        "name": "银行",
        "value": 765
    },
    {
        "name": "股票",
        "value": 452
    },
    {
        "name": "保险",
        "value": 415
    },
    {
        "name": "贷款",
        "value": 253
    },
    {
        "name": "基金",
        "value": 211
    },
    {
        "name": "信用卡",
        "value": 180
    },
    {
        "name": "外汇",
        "value": 138
    },
    {
        "name": "P2P",
        "value": 116
    },
    {
        "name": "贵金属",
        "value": 98
    },
    {
        "name": "债券",
        "value": 93
    },
    {
        "name": "网络理财",
        "value": 92
    },
    {
        "name": "信托",
        "value": 90
    },
    {
        "name": "征信",
        "value": 76
    },
    {
        "name": "期货",
        "value": 76
    },
    {
        "name": "公积金",
        "value": 40
    },
    {
        "name": "银行理财",
        "value": 36
    },
    {
        "name": "银行业务",
        "value": 30
    },
    {
        "name": "典当",
        "value": 7
    },
    {
        "name": "海外置业",
        "value": 1
    },
    {
        "name": "汽车",
        "value": 1309
    },
    {
        "name": "汽车档次",
        "value": 965
    },
    {
        "name": "汽车品牌",
        "value": 900
    },
    {
        "name": "汽车车型",
        "value": 727
    },
    {
        "name": "购车阶段",
        "value": 461
    },
    {
        "name": "二手车",
        "value": 309
    },
    {
        "name": "汽车美容",
        "value": 260
    },
    {
        "name": "新能源汽车",
        "value": 173
    },
    {
        "name": "汽车维修",
        "value": 155
    },
    {
        "name": "租车服务",
        "value": 136
    },
    {
        "name": "车展",
        "value": 121
    },
    {
        "name": "违章查询",
        "value": 76
    },
    {
        "name": "汽车改装",
        "value": 62
    },
    {
        "name": "汽车用品",
        "value": 37
    },
    {
        "name": "路况查询",
        "value": 32
    },
    {
        "name": "汽车保险",
        "value": 28
    },
    {
        "name": "陪驾代驾",
        "value": 4
    },
    {
        "name": "网络购物",
        "value": 1275
    },
    {
        "name": "作个人猫",
        "value": 1088
    },
    {
        "name": "只想要你知道",
        "value": 907
    },
    {
        "name": "团购",
        "value": 837
    },
    {
        "name": "比价",
        "value": 201
    },
    {
        "name": "海淘",
        "value": 195
    },
    {
        "name": "移动APP购物",
        "value": 179
    },
    {
        "name": "支付方式",
        "value": 119
    },
    {
        "name": "代购",
        "value": 43
    },
    {
        "name": "体育健身",
        "value": 1234
    },
    {
        "name": "体育赛事项目",
        "value": 802
    },
    {
        "name": "运动项目",
        "value": 405
    },
    {
        "name": "体育类赛事",
        "value": 337
    },
    {
        "name": "健身项目",
        "value": 199
    },
    {
        "name": "健身房健身",
        "value": 78
    },
    {
        "name": "运动健身",
        "value": 77
    },
    {
        "name": "家庭健身",
        "value": 36
    },
    {
        "name": "健身器械",
        "value": 29
    },
    {
        "name": "办公室健身",
        "value": 3
    },
    {
        "name": "商务服务",
        "value": 1201
    },
    {
        "name": "法律咨询",
        "value": 508
    },
    {
        "name": "化工材料",
        "value": 147
    },
    {
        "name": "广告服务",
        "value": 125
    },
    {
        "name": "会计审计",
        "value": 115
    },
    {
        "name": "人员招聘",
        "value": 101
    },
    {
        "name": "印刷打印",
        "value": 66
    },
    {
        "name": "知识产权",
        "value": 32
    },
    {
        "name": "翻译",
        "value": 22
    },
    {
        "name": "安全安保",
        "value": 9
    },
    {
        "name": "公关服务",
        "value": 8
    },
    {
        "name": "商旅服务",
        "value": 2
    },
    {
        "name": "展会服务",
        "value": 2
    },
    {
        "name": "特许经营",
        "value": 1
    },
    {
        "name": "休闲爱好",
        "value": 1169
    },
    {
        "name": "收藏",
        "value": 412
    },
    {
        "name": "摄影",
        "value": 393
    },
    {
        "name": "温泉",
        "value": 230
    },
    {
        "name": "博彩彩票",
        "value": 211
    },
    {
        "name": "美术",
        "value": 207
    },
    {
        "name": "书法",
        "value": 139
    },
    {
        "name": "DIY手工",
        "value": 75
    },
    {
        "name": "舞蹈",
        "value": 23
    },
    {
        "name": "钓鱼",
        "value": 21
    },
    {
        "name": "棋牌桌游",
        "value": 17
    },
    {
        "name": "KTV",
        "value": 6
    },
    {
        "name": "密室",
        "value": 5
    },
    {
        "name": "采摘",
        "value": 4
    },
    {
        "name": "电玩",
        "value": 1
    },
    {
        "name": "真人CS",
        "value": 1
    },
    {
        "name": "轰趴",
        "value": 1
    },
    {
        "name": "家电数码",
        "value": 1111
    },
    {
        "name": "手机",
        "value": 885
    },
    {
        "name": "电脑",
        "value": 543
    },
    {
        "name": "你们电",
        "value": 321
    },
    {
        "name": "家电关注品牌",
        "value": 253
    },
    {
        "name": "网络设备",
        "value": 162
    },
    {
        "name": "摄影器材",
        "value": 149
    },
    {
        "name": "影音设备",
        "value": 133
    },
    {
        "name": "办公数码设备",
        "value": 113
    },
    {
        "name": "生活电器",
        "value": 67
    },
    {
        "name": "厨房电器",
        "value": 54
    },
    {
        "name": "智能设备",
        "value": 45
    },
    {
        "name": "我的护理电器",
        "value": 22
    },
    {
        "name": "服饰鞋包",
        "value": 1047
    },
    {
        "name": "服装",
        "value": 566
    },
    {
        "name": "饰品",
        "value": 289
    },
    {
        "name": "鞋",
        "value": 184
    },
    {
        "name": "箱包",
        "value": 168
    },
    {
        "name": "奢侈品",
        "value": 137
    },
    {
        "name": "母婴亲子",
        "value": 1041
    },
    {
        "name": "孕婴保健",
        "value": 505
    },
    {
        "name": "母婴社区",
        "value": 299
    },
    {
        "name": "早教",
        "value": 103
    },
    {
        "name": "奶粉辅食",
        "value": 66
    },
    {
        "name": "童车童床",
        "value": 41
    },
    {
        "name": "关注品牌",
        "value": 271
    },
    {
        "name": "宝宝玩乐",
        "value": 30
    },
    {
        "name": "母婴护理服务",
        "value": 25
    },
    {
        "name": "纸尿裤湿巾",
        "value": 16
    },
    {
        "name": "妈妈用品",
        "value": 15
    },
    {
        "name": "宝宝起名",
        "value": 12
    },
    {
        "name": "童装童鞋",
        "value": 9
    },
    {
        "name": "胎教",
        "value": 8
    },
    {
        "name": "宝宝安全",
        "value": 1
    },
    {
        "name": "宝宝洗护用品",
        "value": 1
    },
    {
        "name": "软件应用",
        "value": 1018
    },
    {
        "name": "系统工具",
        "value": 896
    },
    {
        "name": "理财购物",
        "value": 440
    },
    {
        "name": "生活实用",
        "value": 365
    },
    {
        "name": "影音图像",
        "value": 256
    },
    {
        "name": "社交通信",
        "value": 214
    },
    {
        "name": "手机美化",
        "value": 39
    },
    {
        "name": "办公学习",
        "value": 28
    },
    {
        "name": "应用市场",
        "value": 23
    },
    {
        "name": "母婴育儿",
        "value": 14
    },
    {
        "name": "游戏",
        "value": 946
    },
    {
        "name": "手机游戏",
        "value": 565
    },
    {
        "name": "PC游戏",
        "value": 353
    },
    {
        "name": "网页游戏",
        "value": 254
    },
    {
        "name": "游戏机",
        "value": 188
    },
    {
        "name": "模拟辅助",
        "value": 166
    },
    {
        "name": "个护美容",
        "value": 942
    },
    {
        "name": "护肤品",
        "value": 177
    },
    {
        "name": "彩妆",
        "value": 133
    },
    {
        "name": "美发",
        "value": 80
    },
    {
        "name": "香水",
        "value": 50
    },
    {
        "name": "我的护理",
        "value": 46
    },
    {
        "name": "美甲",
        "value": 26
    },
    {
        "name": "SPA美体",
        "value": 21
    },
    {
        "name": "花鸟萌宠",
        "value": 914
    },
    {
        "name": "绿植花卉",
        "value": 311
    },
    {
        "name": "狗",
        "value": 257
    },
    {
        "name": "其余宠物",
        "value": 131
    },
    {
        "name": "水族",
        "value": 125
    },
    {
        "name": "猫",
        "value": 122
    },
    {
        "name": "动物",
        "value": 81
    },
    {
        "name": "鸟",
        "value": 67
    },
    {
        "name": "宠物用品",
        "value": 41
    },
    {
        "name": "宠物服务",
        "value": 26
    },
    {
        "name": "书籍阅读",
        "value": 913
    },
    {
        "name": "网络小说",
        "value": 483
    },
    {
        "name": "关注书籍",
        "value": 128
    },
    {
        "name": "文学",
        "value": 105
    },
    {
        "name": "报刊杂志",
        "value": 77
    },
    {
        "name": "人文社科",
        "value": 22
    },
    {
        "name": "建材家居",
        "value": 907
    },
    {
        "name": "装修建材",
        "value": 644
    },
    {
        "name": "家具",
        "value": 273
    },
    {
        "name": "家居风格",
        "value": 187
    },
    {
        "name": "家居家装关注品牌",
        "value": 140
    },
    {
        "name": "家纺",
        "value": 107
    },
    {
        "name": "厨具",
        "value": 47
    },
    {
        "name": "灯具",
        "value": 43
    },
    {
        "name": "家居饰品",
        "value": 29
    },
    {
        "name": "家居平常用品",
        "value": 10
    },
    {
        "name": "生活服务",
        "value": 883
    },
    {
        "name": "物流配送",
        "value": 536
    },
    {
        "name": "家政服务",
        "value": 108
    },
    {
        "name": "摄影服务",
        "value": 49
    },
    {
        "name": "搬家服务",
        "value": 38
    },
    {
        "name": "物业维修",
        "value": 37
    },
    {
        "name": "婚庆服务",
        "value": 24
    },
    {
        "name": "二手回收",
        "value": 24
    },
    {
        "name": "鲜花配送",
        "value": 3
    },
    {
        "name": "维修服务",
        "value": 3
    },
    {
        "name": "殡葬服务",
        "value": 1
    },
    {
        "name": "求职创业",
        "value": 874
    },
    {
        "name": "创业",
        "value": 363
    },
    {
        "name": "目标职位",
        "value": 162
    },
    {
        "name": "目标行业",
        "value": 50
    },
    {
        "name": "兼职",
        "value": 21
    },
    {
        "name": "指望年薪",
        "value": 20
    },
    {
        "name": "实习",
        "value": 16
    },
    {
        "name": "雇主类型",
        "value": 10
    },
    {
        "name": "星座运势",
        "value": 789
    },
    {
        "name": "星座",
        "value": 316
    },
    {
        "name": "算命",
        "value": 303
    },
    {
        "name": "解梦",
        "value": 196
    },
    {
        "name": "风水",
        "value": 93
    },
    {
        "name": "面相分析",
        "value": 47
    },
    {
        "name": "手相",
        "value": 32
    },
    {
        "name": "公益",
        "value": 90
    }
);
// 人像的base64编码
image = "data:image/png;base64,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"

var maskResource = new Image()
maskResource.src = image;
var option = {
    //设置标题，居中显示
    title: {
        left: 'center',
    },
    //数据能够点击
    tooltip: {

    },

    series: [
        {
            maskImage: maskResource,
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
            data: jsonlist,
            left: 'center',
            top: 'center',

        }
    ]

};
//加载图像，将数据放在图像中
maskResource.onload = function () {
    mycharts.setOption(option)

};


var mycharts1 = echarts.init(document.getElementById("wordCloudChart1"));
var jsonlist1 = [];
jsonlist1.push(
    {
        "name": "花鸟市场",
        "value": 1446
    },
    {
        "name": "汽车",
        "value": 928
    },
    {
        "name": "视频",
        "value": 906
    },
    {
        "name": "电视",
        "value": 825
    },
    {
        "name": "Lover Boy 88",
        "value": 514
    },
    {
        "name": "动漫",
        "value": 486
    },
    {
        "name": "音乐",
        "value": 5999
    },
    {
        "name": "直播",
        "value": 163
    },
    {
        "name": "广播电台",
        "value": 86
    },
    {
        "name": "戏曲曲艺",
        "value": 17
    },
    {
        "name": "演出票务",
        "value": 6
    },
    {
        "name": "给陌生的你听",
        "value": 1
    },
    {
        "name": "资讯",
        "value": 1437
    },
    {
        "name": "商业财经",
        "value": 422
    },
    {
        "name": "娱乐八卦",
        "value": 353
    },
    {
        "name": "军事",
        "value": 331
    },
    {
        "name": "科技资讯",
        "value": 313
    },
    {
        "name": "社会时政",
        "value": 307
    },
    {
        "name": "时尚",
        "value": 43
    },
    {
        "name": "网络奇闻",
        "value": 15
    },
    {
        "name": "旅游出行",
        "value": 438
    },
    {
        "name": "景点类型",
        "value": 957
    },
    {
        "name": "国内游",
        "value": 927
    },
    {
        "name": "远途出行方式",
        "value": 908
    },
    {
        "name": "酒店",
        "value": 693
    },
    {
        "name": "关注景点",
        "value": 611
    },
    {
        "name": "旅游网站偏好",
        "value": 512
    },
    {
        "name": "出国游",
        "value": 382
    },
    {
        "name": "交通票务",
        "value": 312
    },
    {
        "name": "旅游方式",
        "value": 187
    },
    {
        "name": "旅游主题",
        "value": 163
    },
    {
        "name": "港澳台",
        "value": 104
    },
    {
        "name": "本地周边游",
        "value": 3
    },
    {
        "name": "小卖家",
        "value": 1331
    },
    {
        "name": "全日制学校",
        "value": 941
    },
    {
        "name": "基础教育科目",
        "value": 585
    },
    {
        "name": "考试培训",
        "value": 473
    },
    {
        "name": "语言学习",
        "value": 358
    },
    {
        "name": "留学",
        "value": 246
    },
    {
        "name": "K12课程培训",
        "value": 207
    },
    {
        "name": "艺术培训",
        "value": 194
    },
    {
        "name": "技能培训",
        "value": 104
    },
    {
        "name": "IT培训",
        "value": 87
    },
    {
        "name": "高等教育专业",
        "value": 63
    },
    {
        "name": "家教",
        "value": 48
    },
    {
        "name": "体育培训",
        "value": 23
    },
    {
        "name": "职场培训",
        "value": 5
    },
    {
        "name": "金融财经",
        "value": 1328
    },
    {
        "name": "银行",
        "value": 765
    },
    {
        "name": "股票",
        "value": 452
    },
    {
        "name": "保险",
        "value": 415
    },
    {
        "name": "贷款",
        "value": 253
    },
    {
        "name": "基金",
        "value": 211
    },
    {
        "name": "信用卡",
        "value": 180
    },
    {
        "name": "外汇",
        "value": 138
    },
    {
        "name": "P2P",
        "value": 116
    },
    {
        "name": "贵金属",
        "value": 98
    },
    {
        "name": "债券",
        "value": 93
    },
    {
        "name": "网络理财",
        "value": 92
    },
    {
        "name": "信托",
        "value": 90
    },
    {
        "name": "征信",
        "value": 76
    },
    {
        "name": "期货",
        "value": 76
    },
    {
        "name": "公积金",
        "value": 40
    },
    {
        "name": "银行理财",
        "value": 36
    },
    {
        "name": "银行业务",
        "value": 30
    },
    {
        "name": "典当",
        "value": 7
    },
    {
        "name": "海外置业",
        "value": 1
    },
    {
        "name": "汽车",
        "value": 1309
    },
    {
        "name": "汽车档次",
        "value": 965
    },
    {
        "name": "汽车品牌",
        "value": 900
    },
    {
        "name": "汽车车型",
        "value": 727
    },
    {
        "name": "购车阶段",
        "value": 461
    },
    {
        "name": "二手车",
        "value": 309
    },
    {
        "name": "汽车美容",
        "value": 260
    },
    {
        "name": "新能源汽车",
        "value": 173
    },
    {
        "name": "汽车维修",
        "value": 155
    },
    {
        "name": "租车服务",
        "value": 136
    },
    {
        "name": "车展",
        "value": 121
    },
    {
        "name": "违章查询",
        "value": 76
    },
    {
        "name": "汽车改装",
        "value": 62
    },
    {
        "name": "汽车用品",
        "value": 37
    },
    {
        "name": "路况查询",
        "value": 32
    },
    {
        "name": "汽车保险",
        "value": 28
    },
    {
        "name": "陪驾代驾",
        "value": 4
    },
    {
        "name": "网络购物",
        "value": 1275
    },
    {
        "name": "作个人猫",
        "value": 1088
    },
    {
        "name": "只想要你知道",
        "value": 907
    },
    {
        "name": "团购",
        "value": 837
    },
    {
        "name": "比价",
        "value": 201
    },
    {
        "name": "海淘",
        "value": 195
    },
    {
        "name": "移动APP购物",
        "value": 179
    },
    {
        "name": "支付方式",
        "value": 119
    },
    {
        "name": "代购",
        "value": 43
    },
    {
        "name": "体育健身",
        "value": 1234
    },
    {
        "name": "体育赛事项目",
        "value": 802
    },
    {
        "name": "运动项目",
        "value": 405
    },
    {
        "name": "体育类赛事",
        "value": 337
    },
    {
        "name": "健身项目",
        "value": 199
    },
    {
        "name": "健身房健身",
        "value": 78
    },
    {
        "name": "运动健身",
        "value": 77
    },
    {
        "name": "家庭健身",
        "value": 36
    },
    {
        "name": "健身器械",
        "value": 29
    },
    {
        "name": "办公室健身",
        "value": 3
    },
    {
        "name": "商务服务",
        "value": 1201
    },
    {
        "name": "法律咨询",
        "value": 508
    },
    {
        "name": "化工材料",
        "value": 147
    },
    {
        "name": "广告服务",
        "value": 125
    },
    {
        "name": "会计审计",
        "value": 115
    },
    {
        "name": "人员招聘",
        "value": 101
    },
    {
        "name": "印刷打印",
        "value": 66
    },
    {
        "name": "知识产权",
        "value": 32
    },
    {
        "name": "翻译",
        "value": 22
    },
    {
        "name": "安全安保",
        "value": 9
    },
    {
        "name": "公关服务",
        "value": 8
    },
    {
        "name": "商旅服务",
        "value": 2
    },
    {
        "name": "展会服务",
        "value": 2
    },
    {
        "name": "特许经营",
        "value": 1
    },
    {
        "name": "休闲爱好",
        "value": 1169
    },
    {
        "name": "收藏",
        "value": 412
    },
    {
        "name": "摄影",
        "value": 393
    },
    {
        "name": "温泉",
        "value": 230
    },
    {
        "name": "博彩彩票",
        "value": 211
    },
    {
        "name": "美术",
        "value": 207
    },
    {
        "name": "书法",
        "value": 139
    },
    {
        "name": "DIY手工",
        "value": 75
    },
    {
        "name": "舞蹈",
        "value": 23
    },
    {
        "name": "钓鱼",
        "value": 21
    },
    {
        "name": "棋牌桌游",
        "value": 17
    },
    {
        "name": "KTV",
        "value": 6
    },
    {
        "name": "密室",
        "value": 5
    },
    {
        "name": "采摘",
        "value": 4
    },
    {
        "name": "电玩",
        "value": 1
    },
    {
        "name": "真人CS",
        "value": 1
    },
    {
        "name": "轰趴",
        "value": 1
    },
    {
        "name": "家电数码",
        "value": 1111
    },
    {
        "name": "手机",
        "value": 885
    },
    {
        "name": "电脑",
        "value": 543
    },
    {
        "name": "你们电",
        "value": 321
    },
    {
        "name": "家电关注品牌",
        "value": 253
    },
    {
        "name": "网络设备",
        "value": 162
    },
    {
        "name": "摄影器材",
        "value": 149
    },
    {
        "name": "影音设备",
        "value": 133
    },
    {
        "name": "办公数码设备",
        "value": 113
    },
    {
        "name": "生活电器",
        "value": 67
    },
    {
        "name": "厨房电器",
        "value": 54
    },
    {
        "name": "智能设备",
        "value": 45
    },
    {
        "name": "我的护理电器",
        "value": 22
    },
    {
        "name": "服饰鞋包",
        "value": 1047
    },
    {
        "name": "服装",
        "value": 566
    },
    {
        "name": "饰品",
        "value": 289
    },
    {
        "name": "鞋",
        "value": 184
    },
    {
        "name": "箱包",
        "value": 168
    },
    {
        "name": "奢侈品",
        "value": 137
    },
    {
        "name": "母婴亲子",
        "value": 1041
    },
    {
        "name": "孕婴保健",
        "value": 505
    },
    {
        "name": "母婴社区",
        "value": 299
    },
    {
        "name": "早教",
        "value": 103
    },
    {
        "name": "奶粉辅食",
        "value": 66
    },
    {
        "name": "童车童床",
        "value": 41
    },
    {
        "name": "关注品牌",
        "value": 271
    },
    {
        "name": "宝宝玩乐",
        "value": 30
    },
    {
        "name": "母婴护理服务",
        "value": 25
    },
    {
        "name": "纸尿裤湿巾",
        "value": 16
    },
    {
        "name": "妈妈用品",
        "value": 15
    },
    {
        "name": "宝宝起名",
        "value": 12
    },
    {
        "name": "童装童鞋",
        "value": 9
    },
    {
        "name": "胎教",
        "value": 8
    },
    {
        "name": "宝宝安全",
        "value": 1
    },
    {
        "name": "宝宝洗护用品",
        "value": 1
    },
    {
        "name": "软件应用",
        "value": 1018
    },
    {
        "name": "系统工具",
        "value": 896
    },
    {
        "name": "理财购物",
        "value": 440
    },
    {
        "name": "生活实用",
        "value": 365
    },
    {
        "name": "影音图像",
        "value": 256
    },
    {
        "name": "社交通信",
        "value": 214
    },
    {
        "name": "手机美化",
        "value": 39
    },
    {
        "name": "办公学习",
        "value": 28
    },
    {
        "name": "应用市场",
        "value": 23
    },
    {
        "name": "母婴育儿",
        "value": 14
    },
    {
        "name": "游戏",
        "value": 946
    },
    {
        "name": "手机游戏",
        "value": 565
    },
    {
        "name": "PC游戏",
        "value": 353
    },
    {
        "name": "网页游戏",
        "value": 254
    },
    {
        "name": "游戏机",
        "value": 188
    },
    {
        "name": "模拟辅助",
        "value": 166
    },
    {
        "name": "个护美容",
        "value": 942
    },
    {
        "name": "护肤品",
        "value": 177
    },
    {
        "name": "彩妆",
        "value": 133
    },
    {
        "name": "美发",
        "value": 80
    },
    {
        "name": "香水",
        "value": 50
    },
    {
        "name": "我的护理",
        "value": 46
    },
    {
        "name": "美甲",
        "value": 26
    },
    {
        "name": "SPA美体",
        "value": 21
    },
    {
        "name": "花鸟萌宠",
        "value": 914
    },
    {
        "name": "绿植花卉",
        "value": 311
    },
    {
        "name": "狗",
        "value": 257
    },
    {
        "name": "其余宠物",
        "value": 131
    },
    {
        "name": "水族",
        "value": 125
    },
    {
        "name": "猫",
        "value": 122
    },
    {
        "name": "动物",
        "value": 81
    },
    {
        "name": "鸟",
        "value": 67
    },
    {
        "name": "宠物用品",
        "value": 41
    },
    {
        "name": "宠物服务",
        "value": 26
    },
    {
        "name": "书籍阅读",
        "value": 913
    },
    {
        "name": "网络小说",
        "value": 483
    },
    {
        "name": "关注书籍",
        "value": 128
    },
    {
        "name": "文学",
        "value": 105
    },
    {
        "name": "报刊杂志",
        "value": 77
    },
    {
        "name": "人文社科",
        "value": 22
    },
    {
        "name": "建材家居",
        "value": 907
    },
    {
        "name": "装修建材",
        "value": 644
    },
    {
        "name": "家具",
        "value": 273
    },
    {
        "name": "家居风格",
        "value": 187
    },
    {
        "name": "家居家装关注品牌",
        "value": 140
    },
    {
        "name": "家纺",
        "value": 107
    },
    {
        "name": "厨具",
        "value": 47
    },
    {
        "name": "灯具",
        "value": 43
    },
    {
        "name": "家居饰品",
        "value": 29
    },
    {
        "name": "家居平常用品",
        "value": 10
    },
    {
        "name": "生活服务",
        "value": 883
    },
    {
        "name": "物流配送",
        "value": 536
    },
    {
        "name": "家政服务",
        "value": 108
    },
    {
        "name": "摄影服务",
        "value": 49
    },
    {
        "name": "搬家服务",
        "value": 38
    },
    {
        "name": "物业维修",
        "value": 37
    },
    {
        "name": "婚庆服务",
        "value": 24
    },
    {
        "name": "二手回收",
        "value": 24
    },
    {
        "name": "鲜花配送",
        "value": 3
    },
    {
        "name": "维修服务",
        "value": 3
    },
    {
        "name": "殡葬服务",
        "value": 1
    },
    {
        "name": "求职创业",
        "value": 874
    },
    {
        "name": "创业",
        "value": 363
    },
    {
        "name": "目标职位",
        "value": 162
    },
    {
        "name": "目标行业",
        "value": 50
    },
    {
        "name": "兼职",
        "value": 21
    },
    {
        "name": "指望年薪",
        "value": 20
    },
    {
        "name": "实习",
        "value": 16
    },
    {
        "name": "雇主类型",
        "value": 10
    },
    {
        "name": "星座运势",
        "value": 789
    },
    {
        "name": "星座",
        "value": 316
    },
    {
        "name": "算命",
        "value": 303
    },
    {
        "name": "解梦",
        "value": 196
    },
    {
        "name": "风水",
        "value": 93
    },
    {
        "name": "面相分析",
        "value": 47
    },
    {
        "name": "手相",
        "value": 32
    },
    {
        "name": "公益",
        "value": 90
    }
);
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

//   // 基于准备好的dom，初始化echarts实例
//   var myChart = echarts.init(document.getElementById('horizontalBarChart'));
//   // 绘制图表
//   myChart.setOption({
//     title: {
//       text: 'ECharts 入门示例'
//     },
//     tooltip: {},
//     xAxis: {
//       data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
//     },
//     yAxis: {},
//     series: [
//       {
//         name: '销量',
//         type: 'bar',
//         data: [5, 20, 36, 10, 10, 20]
//       }
//     ]
//     });