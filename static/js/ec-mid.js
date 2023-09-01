// $(function(){
    /*************** 中间-电影类型关系图 **************/
   //初始化echarts实例
   const midChart = echarts.init(document.getElementById("midChart"));
   var relationData = [
       {name: '类型',category: 0,draggable: true},
       {name: '喜剧',category: 1,draggable: true},
       {name: '爱情',category: 2,draggable: true},
       {name: '动作',category: 3,draggable: true},
       {name: '科幻',category: 4,draggable: true},
       {name: '动画',category: 5,draggable: true,},
       {name: '悬疑',category: 6,draggable: true,},
       {name: '传记',category: 7,draggable: true,},
       {name: '历史',category: 8,draggable: true,},
       {name: '古装',category: 9,draggable: true,},
       {name: '社会',category:10,draggable: true,},
       {name: '我不是药神',category:10,draggable: false}
   ]
    var relationLinkData = [
        {source: 0,target: 1,value: ''},
        {source: 0,target: 2,value: ''},
        {source: 0,target: 3,value: ''},
        {source: 0,target: 4,value: ''},
        {source: 0,target: 5,value: ''},
        {source: 0,target: 6,value: ''},
        {source: 0,target: 7,value: ''},
        {source: 0,target: 8,value: ''},
        {source: 0,target: 9,value: ''},
        {source: 0,target: 10,value: ''},
        {source: 10,target: 11,value: ''},
        {source: 6,target: 12,value: ''}
    ]

   const midOpt = {
       animationDurationUpdate: 1500,
       animationEasingUpdate: 'quinticInOut',
       title: {
           text: '选影片',
           x:'left',
           textStyle:{
               "color":"white"
           }
       },
       label: {
           normal: {
               show: true,
               textStyle: {
                   fontSize: 12
               }
           }
       },
       series: [{
           type: 'graph',
           symbolSize: 50,
           focusNodeAdjacency: true,
           roam: true,
           layout: 'force',
           force: {
               repulsion: 650 //斥力因子，值越大，斥力越大
           },
           label: {
               normal: {
                   show: true,
                   textStyle: {
                       fontSize: 12
                   },
               }
           },
           edgeSymbolSize: [4, 50],
           edgeLabel: {
               normal: {
                   show: true,
                   textStyle: {
                       fontSize: 10
                   },
                   formatter: "{c}"
               }
           },
           categories: [{
               name: '类型',
               itemStyle: {
                   normal: {
                       color: '#f2637b'
                   }
               }
           }, {
               name: '喜剧',
               itemStyle: {
                   normal: {
                       color: "#eaa674",
                   }
               }
           }, {
               name: '爱情',
               itemStyle: {
                   normal: {
                       color: "#65c294",
                   }
               }
           }, {
               name: '动作',
               itemStyle: {
                   normal: {
                       color: "#f58f98",
                   }
               }
           },{
               name: '科幻',
               itemStyle: {
                   normal: {
                       color: "#66ccff",
                   }
               }
           },{
               name: '动画',
               itemStyle: {
                   normal: {
                       color: "#bed742",
                   }
               }
           },{
               name: '悬疑',
               itemStyle: {
                   normal: {
                       color: "#00a6ac",
                   }
               }
           },{
               name: '传记',
               itemStyle: {
                   normal: {
                       color: "#f173ac",
                   }
               }
           },{
               name: '历史',
               itemStyle: {
                   normal: {
                       color: "#c77eb5",
                   }
               }
           },{
               name: '古装',
               itemStyle: {
                   normal: {
                       color: "#9d9087",
                   }
               }
           },{
                name: '社会',
                itemStyle: {
                    normal: {
                        color: "#ffc20e",
                    }
                }
           }
       ],
           data: relationData,
           links: relationLinkData,
           lineStyle: {
               normal: {
                   opacity: 0.7,
                   width: 2,
                   curveness: 0
               }
           }
       }]
   };
   midChart.setOption(midOpt);

// });
