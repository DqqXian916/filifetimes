// $(function(){
     /*************** 左上-词云 **************/
    var leftTopChart= echarts.init(document.getElementById("leftTopChart"),"light");
//    var maskImage = new Image();
//    maskImage.src = 'data:image/png;base64,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';
    var worcloudData = [
        {name: '影评1', value: 2181},
        {name: '影评2', value: 1386},
        {name: '影评3', value: 2055},
        {name: '影评4', value: 2467},
        {name: '影评5', value: 2244},
        {name: '影评6', value: 1898},
        {name: '影评7', value: 1484},
        {name: '影评8', value: 3865},
        {name: '影评9', value: 897},
        {name: '影评10', value: 847},
        {name: '影评11', value: 1366},
        {name: '影评12', value: 555},
        {name: '影评13', value: 550},
        {name: '影评14', value: 2222},
        {name: '影评 15', value: 2345},
        {name: '影评 16', value: 3321},
        {name: '影评 17',value: 1839},
        {name: '影评 18',value: 657},
        {name: '影评 19',value: 778},
        {name: '影评 20',value: 875}
    ]
    var leftTopOpt = {
        title: {
            text: '词云',
            x:'left',
            textStyle:{
                "color":"white"
            }
        },
        series: [{
            type: 'wordCloud',
            shape: 'diamond', //circle cardioid diamond triangle-forward triangle
               left: 0,
               right: 0,
               top: 0,
               right: 0,
               width: '100%',
               height: '100%',
            gridSize: 0, //值越大，word间的距离越大，单位像素
            sizeRange: [30, 70], //word的字体大小区间，单位像素
            rotationRange: [-90, 90], //word的可旋转角度区间
//            maskImage:maskImage,
            textStyle: {
                normal: {
                    color: function() {
                        return 'rgb(' + [
                            Math.round(Math.random() * 255),
                            Math.round(Math.random() * 255),
                            Math.round(Math.random() * 255)
                        ].join(',') + ')';
                    }
                },
                emphasis: {
                    shadowBlur: 2,
                    shadowColor: '#000'
                }
            },
            data: []
        }],
    };
    leftTopChart.setOption(leftTopOpt);
// });