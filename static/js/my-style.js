$(function() {
   
    /*************** 左下- **************/
    // const leftBottomChart = echarts.init(document.getElementById("leftBottomChart"));
    // const leftBottomOpt = {
    //     title: {
    //         text: '短评',
    //         x:'center',
    //         textStyle:{
    //             "color":"white"
    //         }
    //     },
    // };
    // leftBottomChart.setOption(leftBottomOpt);

    //左下短评
    // var comment = document.getElementById("leftBottomChart");
    // comment.innerHTML = "\"这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评这是短评。\"";


    /*************** 中间-电影类型关系图 **************/

    /*************** 右下-实时票房 **************/


    
/********** 窗口大小改变时，重置报表大小 ********************/
    window.onresize = function() {
        leftTopChart.resize();
        rightTopChart.resize();
        midChart.resize();
        // rightBttomChart.resize();
    };
});