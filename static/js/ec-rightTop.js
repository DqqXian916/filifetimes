// $(function(){
   /*************** 右上-影评星级 **************/
    const rightTopChart = echarts.init(document.getElementById("rightTopChart"));
    var starData = [
                {value:367,name:'力荐'},
                {value:455,name:'推荐'},
                {value:197,name:'还行'},
                {value:22,name:'较差'},
                {value:6,name:'很差'}
    ]
    const rightTopOpt = {
        title: {
            text: '星级',
            x:'left',
            textStyle:{
                "color":"white"
            }
        },
        tooltip:{
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend:{
            orient:'vertical',
            right:'right',
            data:['力荐','推荐','还行','较差','很差'],
            textStyle:{
                color:"#ffffff"
            }
        },
        label: {
            color: 'rgba(255, 255, 255, 0.3)'
        },
        labelLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
        },
        itemStyle: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx) {
            return Math.random() * 200;
        },
        series:[{
            name:'详情数据',
            type:'pie',//pie 饼图
            radius:['15%','60%'],//饼图半径(大小)
            roseType: 'angle',//该选项让饼图转换为南丁格尔图
            data:starData
        }],
        color:[
            '#ffe281','#cae07b','#87c5e7','#f6977f','#e776fb'
        ]
    };
    rightTopChart.setOption(rightTopOpt);
// });