// 获取词云的后台数据
function get_wordcloud_data(){
    $.ajax({
        url:"/wordcloud",
        success:function(data){
            leftTopOpt.series[0].data = data.clouds;
            leftTopChart.setOption(leftTopOpt);
        },
        error:function(xhr,type,errorThrown){
        }
    })
}

// 获取短评的后台数据
function get_short_data(){
    $.ajax({
        url:"/short",
        success:function(data){

        },
        error:function(xhr,type,errorThrown){

        }
    })
}

// 获取关系图的后台数据
function get_relation_data(){
    $.ajax({
        url:"/relation",
        success:function(data){
            // console.log(midOpt.series[0].data)
            midOpt.series[0].data = data.kws
            // console.log(midOpt.series[0].data)
            midChart.setOption(midOpt);
        },
        error:function(xhr,type,errorThrown){

        }
    })
}

//获取关系图的节点连接的后台数据
function get_relationNode_data(){
    $.ajax({
        url:"/relationNode",
        success:function(data){
            // console.log(midOpt.series[0].links)
            midOpt.series[0].links = data.nodes
            // console.log(midOpt.series[0].links)
            midChart.setOption(midOpt);
        },
        error:function(xhr,type,errorThrown){

        }
    })
}

//获取星级的后台数据
function get_star_data(){
    $.ajax({
        url:"/star",
        success:function(data){
            // console.log(rightTopOpt.series[0].data);
            rightTopOpt.series[0].data = data.st;
            // console.log(rightTopOpt.series[0].data);
            rightTopChart.setOption(rightTopOpt);
        },
        error:function(xhr,type,errorThrown){
        }
    })
}

//获取相关推荐的后台数据
function get_recommend_data(){
    $.ajax({
        url:"/recommend",
        success:function(data){

        },
        error:function(xhr,type,errorThrown){

        }
    })
}

get_wordcloud_data();
get_relation_data();
get_relationNode_data();
get_star_data();




