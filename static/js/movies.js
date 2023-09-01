  // 关系图的点击事件
    midChart.on('click', function (params) {
        if (params.dataType === 'node') {
            if (params.name === "我不是药神") {
                $.ajax({
                    url:"/1",
                    type:"get",
                    success:function(data){
                        // 更新词云图
                        leftTopOpt.series[0].data = data.clouds;
                        leftTopChart.setOption(leftTopOpt);
                        // 更新星级评价
                        rightTopOpt.series[0].data = data.stars;
                        rightTopChart.setOption(rightTopOpt);
                        //更新相关推荐
                        var rec = document.getElementsByClassName("item");
                        rec[0].style.backgroundImage="url("+data.recs[0][0]+")";
                        rec[1].style.backgroundImage="url("+data.recs[0][1]+")";
                        var rec_tip = document.getElementsByClassName("tip-content");
                        rec_tip[0].innerHTML = data.tips[0].name+data.tips[0].year+'</br>'+'导演:'+data.tips[0].dir+'</br>'+'主演:'+data.tips[0].star+'</br>'+'类型:'+data.tips[0].type;
                        rec_tip[1].innerHTML = data.tips[1].name+data.tips[1].year+'</br>'+'导演:'+data.tips[1].dir+'</br>'+'主演:'+data.tips[1].star+'</br>'+'类型:'+data.tips[1].type;
                    },error:function(){
                        alert("发送ajax请求失败");
                    }
                })
            }else if(params.name === "肖申克的救赎"){
                 $.ajax({
                    url:"/2",
                    type:"get",
                    success:function(data){
                        leftTopOpt.series[0].data = data.clouds;
                        leftTopChart.setOption(leftTopOpt);
                        rightTopOpt.series[0].data = data.stars;
                        rightTopChart.setOption(rightTopOpt);
                        var rec = document.getElementsByClassName("item");
                        rec[0].style.backgroundImage=`url('${data.recs[0][0]}')`;
                        rec[1].style.backgroundImage=`url('${data.recs[0][1]}')`;
                        var rec_tip = document.getElementsByClassName("tip-content");
                        rec_tip[0].innerHTML = data.tips[0].name+data.tips[0].year+'</br>'+'导演:'+data.tips[0].dir+'</br>'+'主演:'+data.tips[0].star+'</br>'+'类型:'+data.tips[0].type;
                        rec_tip[1].innerHTML = data.tips[1].name+data.tips[1].year+'</br>'+'导演:'+data.tips[1].dir+'</br>'+'主演:'+data.tips[1].star+'</br>'+'类型:'+data.tips[1].type;
                    },error:function(){
                        alert("发送ajax请求失败");
                    }
                })
            }else if(params.name === "哪吒之魔童降世"){
                 $.ajax({
                    url:"/3",
                    type:"get",
                    success:function(data){
                        leftTopOpt.series[0].data = data.clouds;
                        leftTopChart.setOption(leftTopOpt);
                        rightTopOpt.series[0].data = data.stars;
                        rightTopChart.setOption(rightTopOpt);
                        var rec = document.getElementsByClassName("item");
                        rec[0].style.backgroundImage=`url('${data.recs[0][0]}')`;
                        rec[1].style.backgroundImage=`url('${data.recs[0][1]}')`;
                        var rec_tip = document.getElementsByClassName("tip-content");
                        rec_tip[0].innerHTML = data.tips[0].name+data.tips[0].year+'</br>'+'导演:'+data.tips[0].dir+'</br>'+'主演:'+data.tips[0].star+'</br>'+'类型:'+data.tips[0].type;
                        rec_tip[1].innerHTML = data.tips[1].name+data.tips[1].year+'</br>'+'导演:'+data.tips[1].dir+'</br>'+'主演:'+data.tips[1].star+'</br>'+'类型:'+data.tips[1].type;
                    },error:function(){
                        alert("发送ajax请求失败");
                    }
                })
            }else if(params.name === "疯狂动物城"){
                 $.ajax({
                    url:"/4",
                    type:"get",
                    success:function(data){
                        leftTopOpt.series[0].data = data.clouds;
                        leftTopChart.setOption(leftTopOpt);
                        rightTopOpt.series[0].data = data.stars;
                        rightTopChart.setOption(rightTopOpt);
                        var rec = document.getElementsByClassName("item")
                        rec[0].style.backgroundImage=`url('${data.recs[0][0]}')`;
                        rec[1].style.backgroundImage=`url('${data.recs[0][1]}')`;
                        var rec_tip = document.getElementsByClassName("tip-content");
                        rec_tip[0].innerHTML = data.tips[0].name+data.tips[0].year+'</br>'+'导演:'+data.tips[0].dir+'</br>'+'主演:'+data.tips[0].star+'</br>'+'类型:'+data.tips[0].type;
                        rec_tip[1].innerHTML = data.tips[1].name+data.tips[1].year+'</br>'+'导演:'+data.tips[1].dir+'</br>'+'主演:'+data.tips[1].star+'</br>'+'类型:'+data.tips[1].type;
                    },error:function(){
                        alert("发送ajax请求失败");
                    }
                })
            }else if(params.name === "千与千寻"){
                 $.ajax({
                    url:"/5",
                    type:"get",
                    success:function(data){
                        leftTopOpt.series[0].data = data.clouds;
                        leftTopChart.setOption(leftTopOpt);
                        rightTopOpt.series[0].data = data.stars;
                        rightTopChart.setOption(rightTopOpt);
                        var rec = document.getElementsByClassName("item");
                        rec[0].style.backgroundImage=`url('${data.recs[0][0]}')`;
                        rec[1].style.backgroundImage=`url('${data.recs[0][1]}')`;
                        var rec_tip = document.getElementsByClassName("tip-content");
                        rec_tip[0].innerHTML = data.tips[0].name+data.tips[0].year+'</br>'+'导演:'+data.tips[0].dir+'</br>'+'主演:'+data.tips[0].star+'</br>'+'类型:'+data.tips[0].type;
                        rec_tip[1].innerHTML = data.tips[1].name+data.tips[1].year+'</br>'+'导演:'+data.tips[1].dir+'</br>'+'主演:'+data.tips[1].star+'</br>'+'类型:'+data.tips[1].type;
                    },error:function(){
                        alert("发送ajax请求失败");
                    }
                })
            }else if(params.name === "泰坦尼克号"){
                    $.ajax({
                        url:"/6",
                        type:"get",
                        success:function(data){
                            leftTopOpt.series[0].data = data.clouds;
                            leftTopChart.setOption(leftTopOpt);
                            rightTopOpt.series[0].data = data.stars;
                            rightTopChart.setOption(rightTopOpt);
                            var rec = document.getElementsByClassName("item")
                            rec[0].style.backgroundImage=`url('${data.recs[0][0]}')`;
                            rec[1].style.backgroundImage=`url('${data.recs[0][1]}')`;
                            var rec_tip = document.getElementsByClassName("tip-content");
                            rec_tip[0].innerHTML = data.tips[0].name+data.tips[0].year+'</br>'+'导演:'+data.tips[0].dir+'</br>'+'主演:'+data.tips[0].star+'</br>'+'类型:'+data.tips[0].type;
                            rec_tip[1].innerHTML = data.tips[1].name+data.tips[1].year+'</br>'+'导演:'+data.tips[1].dir+'</br>'+'主演:'+data.tips[1].star+'</br>'+'类型:'+data.tips[1].type;
                        },error:function(){
                            alert("发送ajax请求失败");
                        }
                })
            }else if(params.name === "摔跤吧！爸爸"){
                    $.ajax({
                        url:"/7",
                        type:"get",
                        success:function(data){
                            leftTopOpt.series[0].data = data.clouds;
                            leftTopChart.setOption(leftTopOpt);
                            rightTopOpt.series[0].data = data.stars;
                            rightTopChart.setOption(rightTopOpt);
                            var rec = document.getElementsByClassName("item")
                            rec[0].style.backgroundImage=`url('${data.recs[0][0]}')`;
                            rec[1].style.backgroundImage=`url('${data.recs[0][1]}')`;
                            var rec_tip = document.getElementsByClassName("tip-content");
                            rec_tip[0].innerHTML = data.tips[0].name+data.tips[0].year+'</br>'+'导演:'+data.tips[0].dir+'</br>'+'主演:'+data.tips[0].star+'</br>'+'类型:'+data.tips[0].type;
                            rec_tip[1].innerHTML = data.tips[1].name+data.tips[1].year+'</br>'+'导演:'+data.tips[1].dir+'</br>'+'主演:'+data.tips[1].star+'</br>'+'类型:'+data.tips[1].type;
                        },error:function(){
                            alert("发送ajax请求失败");
                        }
                })
            }else if(params.name === "霸王别姬"){
                    $.ajax({
                        url:"/8",
                        type:"get",
                        success:function(data){
                            leftTopOpt.series[0].data = data.clouds;
                            leftTopChart.setOption(leftTopOpt);
                            rightTopOpt.series[0].data = data.stars;
                            rightTopChart.setOption(rightTopOpt);
                            var rec = document.getElementsByClassName("item")
                            rec[0].style.backgroundImage=`url('${data.recs[0][0]}')`;
                            rec[1].style.backgroundImage=`url('${data.recs[0][1]}')`;
                            var rec_tip = document.getElementsByClassName("tip-content");
                            rec_tip[0].innerHTML = data.tips[0].name+data.tips[0].year+'</br>'+'导演:'+data.tips[0].dir+'</br>'+'主演:'+data.tips[0].star+'</br>'+'类型:'+data.tips[0].type;
                            rec_tip[1].innerHTML = data.tips[1].name+data.tips[1].year+'</br>'+'导演:'+data.tips[1].dir+'</br>'+'主演:'+data.tips[1].star+'</br>'+'类型:'+data.tips[1].type;
                        },error:function(){
                            alert("发送ajax请求失败");
                        }
                })
            }else if(params.name === "少年的你"){
                    $.ajax({
                        url:"/9",
                        type:"get",
                        success:function(data){
                            leftTopOpt.series[0].data = data.clouds;
                            leftTopChart.setOption(leftTopOpt);
                            rightTopOpt.series[0].data = data.stars;
                            rightTopChart.setOption(rightTopOpt);
                            var rec = document.getElementsByClassName("item")
                            rec[0].style.backgroundImage=`url('${data.recs[0][0]}')`;
                            rec[1].style.backgroundImage=`url('${data.recs[0][1]}')`;
                            var rec_tip = document.getElementsByClassName("tip-content");
                            rec_tip[0].innerHTML = data.tips[0].name+data.tips[0].year+'</br>'+'导演:'+data.tips[0].dir+'</br>'+'主演:'+data.tips[0].star+'</br>'+'类型:'+data.tips[0].type;
                            rec_tip[1].innerHTML = data.tips[1].name+data.tips[1].year+'</br>'+'导演:'+data.tips[1].dir+'</br>'+'主演:'+data.tips[1].star+'</br>'+'类型:'+data.tips[1].type;
                        },error:function(){
                            alert("发送ajax请求失败");
                        }
                })
            }else if(params.name === "这个杀手不太冷"){
                    $.ajax({
                        url:"/10",
                        type:"get",
                        success:function(data){
                            leftTopOpt.series[0].data = data.clouds;
                            leftTopChart.setOption(leftTopOpt);
                            rightTopOpt.series[0].data = data.stars;
                            rightTopChart.setOption(rightTopOpt);
                            var rec = document.getElementsByClassName("item")
                            rec[0].style.backgroundImage=`url('${data.recs[0][0]}')`;
                            rec[1].style.backgroundImage=`url('${data.recs[0][1]}')`;
                            var rec_tip = document.getElementsByClassName("tip-content");
                            rec_tip[0].innerHTML = data.tips[0].name+data.tips[0].year+'</br>'+'导演:'+data.tips[0].dir+'</br>'+'主演:'+data.tips[0].star+'</br>'+'类型:'+data.tips[0].type;
                            rec_tip[1].innerHTML = data.tips[1].name+data.tips[1].year+'</br>'+'导演:'+data.tips[1].dir+'</br>'+'主演:'+data.tips[1].star+'</br>'+'类型:'+data.tips[1].type;
                        },error:function(){
                            alert("发送ajax请求失败");
                        }
                })
            }else if(params.name === "绿皮书"){
                 $.ajax({
                        url:"/11",
                        type:"get",
                        success:function(data){
                            leftTopOpt.series[0].data = data.clouds;
                            leftTopChart.setOption(leftTopOpt);
                            rightTopOpt.series[0].data = data.stars;
                            rightTopChart.setOption(rightTopOpt);
                            var rec = document.getElementsByClassName("item")
                            rec[0].style.backgroundImage=`url('${data.recs[0][0]}')`;
                            rec[1].style.backgroundImage=`url('${data.recs[0][1]}')`;
                        },error:function(){
                            alert("发送ajax请求失败");
                        }
                })
            }else if(params.name === "寻梦环游记"){
                 $.ajax({
                        url:"/12",
                        type:"get",
                        success:function(data){
                            leftTopOpt.series[0].data = data.clouds;
                            leftTopChart.setOption(leftTopOpt);
                            rightTopOpt.series[0].data = data.stars;
                            rightTopChart.setOption(rightTopOpt);
                            var rec = document.getElementsByClassName("item")
                            rec[0].style.backgroundImage=`url('${data.recs[0][0]}')`;
                            rec[1].style.backgroundImage=`url('${data.recs[0][1]}')`;
                        },error:function(){
                            alert("发送ajax请求失败");
                        }
                })
            }else if(params.name === "阿甘正传"){
                 $.ajax({
                        url:"/13",
                        type:"get",
                        success:function(data){
                            leftTopOpt.series[0].data = data.clouds;
                            leftTopChart.setOption(leftTopOpt);
                            rightTopOpt.series[0].data = data.stars;
                            rightTopChart.setOption(rightTopOpt);
                            var rec = document.getElementsByClassName("item")
                            rec[0].style.backgroundImage="url("+data.recs[0][0]+")";
                            rec[1].style.backgroundImage="url("+data.recs[0][1]+")";
                        },error:function(){
                            alert("发送ajax请求失败");
                        }
                })
            }else if(params.name === "阿凡达"){
                 $.ajax({
                        url:"/14",
                        type:"get",
                        success:function(data){
                            leftTopOpt.series[0].data = data.clouds;
                            leftTopChart.setOption(leftTopOpt);
                            rightTopOpt.series[0].data = data.stars;
                            rightTopChart.setOption(rightTopOpt);
                            var rec = document.getElementsByClassName("item")
                            rec[0].style.backgroundImage="url("+data.recs[0][0]+")";
                            rec[1].style.backgroundImage="url("+data.recs[0][1]+")";
                        },error:function(){
                            alert("发送ajax请求失败");
                        }
                })
            }else if(params.name === "怦然心动"){
                 $.ajax({
                        url:"/15",
                        type:"get",
                        success:function(data){
                            leftTopOpt.series[0].data = data.clouds;
                            leftTopChart.setOption(leftTopOpt);
                            rightTopOpt.series[0].data = data.stars;
                            rightTopChart.setOption(rightTopOpt);
                            var rec = document.getElementsByClassName("item")
                            rec[0].style.backgroundImage="url("+data.recs[0][0]+")";
                            rec[1].style.backgroundImage="url("+data.recs[0][1]+")";
                        },error:function(){
                            alert("发送ajax请求失败");
                        }
                })
            }else if(params.name === "盗梦空间"){
                 $.ajax({
                        url:"/16",
                        type:"get",
                        success:function(data){
                            leftTopOpt.series[0].data = data.clouds;
                            leftTopChart.setOption(leftTopOpt);
                            rightTopOpt.series[0].data = data.stars;
                            rightTopChart.setOption(rightTopOpt);
                            var rec = document.getElementsByClassName("item")
                            rec[0].style.backgroundImage="url("+data.recs[0][0]+")";
                            rec[1].style.backgroundImage="url("+data.recs[0][1]+")";
                        },error:function(){
                            alert("发送ajax请求失败");
                        }
                })
            }else if(params.name === "三傻大闹宝莱坞"){
                 $.ajax({
                        url:"/17",
                        type:"get",
                        success:function(data){
                            leftTopOpt.series[0].data = data.clouds;
                            leftTopChart.setOption(leftTopOpt);
                            rightTopOpt.series[0].data = data.stars;
                            rightTopChart.setOption(rightTopOpt);
                            var rec = document.getElementsByClassName("item")
                            rec[0].style.backgroundImage="url("+data.recs[0][0]+")";
                            rec[1].style.backgroundImage="url("+data.recs[0][1]+")";
                        },error:function(){
                            alert("发送ajax请求失败");
                        }
                })
            }else if(params.name === "星际穿越"){
                 $.ajax({
                        url:"/18",
                        type:"get",
                        success:function(data){
                            leftTopOpt.series[0].data = data.clouds;
                            leftTopChart.setOption(leftTopOpt);
                            rightTopOpt.series[0].data = data.stars;
                            rightTopChart.setOption(rightTopOpt);
                            var rec = document.getElementsByClassName("item")
                            rec[0].style.backgroundImage="url("+data.recs[0][0]+")";
                            rec[1].style.backgroundImage="url("+data.recs[0][1]+")";
                        },error:function(){
                            alert("发送ajax请求失败");
                        }
                })
            }else if(params.name === "你的名字。"){
                 $.ajax({
                        url:"/19",
                        type:"get",
                        success:function(data){
                            leftTopOpt.series[0].data = data.clouds;
                            leftTopChart.setOption(leftTopOpt);
                            rightTopOpt.series[0].data = data.stars;
                            rightTopChart.setOption(rightTopOpt);
                            var rec = document.getElementsByClassName("item")
                            rec[0].style.backgroundImage="url("+data.recs[0][0]+")";
                            rec[1].style.backgroundImage="url("+data.recs[0][1]+")";
                        },error:function(){
                            alert("发送ajax请求失败");
                        }
                })
            }else if(params.name === "楚门的世界"){
                 $.ajax({
                        url:"/20",
                        type:"get",
                        success:function(data){
                            leftTopOpt.series[0].data = data.clouds;
                            leftTopChart.setOption(leftTopOpt);
                            rightTopOpt.series[0].data = data.stars;
                            rightTopChart.setOption(rightTopOpt);
                            var rec = document.getElementsByClassName("item")
                            rec[0].style.backgroundImage="url("+data.recs[0][0]+")";
                            rec[1].style.backgroundImage="url("+data.recs[0][1]+")";
                        },error:function(){
                            alert("发送ajax请求失败");
                        }
                })
            }else if(params.name === "海上钢琴师"){
                 $.ajax({
                        url:"/21",
                        type:"get",
                        success:function(data){
                            leftTopOpt.series[0].data = data.clouds;
                            leftTopChart.setOption(leftTopOpt);
                            rightTopOpt.series[0].data = data.stars;
                            rightTopChart.setOption(rightTopOpt);
                            var rec = document.getElementsByClassName("item")
                            rec[0].style.backgroundImage="url("+data.recs[0][0]+")";
                            rec[1].style.backgroundImage="url("+data.recs[0][1]+")";
                        },error:function(){
                            alert("发送ajax请求失败");
                        }
                })
            }else if(params.name === "让子弹飞"){
                 $.ajax({
                        url:"/22",
                        type:"get",
                        success:function(data){
                            leftTopOpt.series[0].data = data.clouds;
                            leftTopChart.setOption(leftTopOpt);
                            rightTopOpt.series[0].data = data.stars;
                            rightTopChart.setOption(rightTopOpt);
                            var rec = document.getElementsByClassName("item")
                            rec[0].style.backgroundImage="url("+data.recs[0][0]+")";
                            rec[1].style.backgroundImage="url("+data.recs[0][1]+")";
                        },error:function(){
                            alert("发送ajax请求失败");
                        }
                })
            }else if(params.name === "寄生虫"){
                 $.ajax({
                        url:"/23",
                        type:"get",
                        success:function(data){
                            leftTopOpt.series[0].data = data.clouds;
                            leftTopChart.setOption(leftTopOpt);
                            rightTopOpt.series[0].data = data.stars;
                            rightTopChart.setOption(rightTopOpt);
                            var rec = document.getElementsByClassName("item")
                            rec[0].style.backgroundImage="url("+data.recs[0][0]+")";
                            rec[1].style.backgroundImage="url("+data.recs[0][1]+")";
                        },error:function(){
                            alert("发送ajax请求失败");
                        }
                })
            }else if(params.name === "心灵奇旅"){
                 $.ajax({
                        url:"/24",
                        type:"get",
                        success:function(data){
                            leftTopOpt.series[0].data = data.clouds;
                            leftTopChart.setOption(leftTopOpt);
                            rightTopOpt.series[0].data = data.stars;
                            rightTopChart.setOption(rightTopOpt);
                            var rec = document.getElementsByClassName("item")
                            rec[0].style.backgroundImage="url("+data.recs[0][0]+")";
                            rec[1].style.backgroundImage="url("+data.recs[0][1]+")";
                        },error:function(){
                            alert("发送ajax请求失败");
                        }
                })
            }else if(params.name === "大话西游之大圣娶亲"){
                 $.ajax({
                        url:"/25",
                        type:"get",
                        success:function(data){
                            leftTopOpt.series[0].data = data.clouds;
                            leftTopChart.setOption(leftTopOpt);
                            rightTopOpt.series[0].data = data.stars;
                            rightTopChart.setOption(rightTopOpt);
                            var rec = document.getElementsByClassName("item")
                            rec[0].style.backgroundImage="url("+data.recs[0][0]+")";
                            rec[1].style.backgroundImage="url("+data.recs[0][1]+")";
                        },error:function(){
                            alert("发送ajax请求失败");
                        }
                })
            }else if(params.name === "当幸福来敲门"){
                 $.ajax({
                        url:"/26",
                        type:"get",
                        success:function(data){
                            leftTopOpt.series[0].data = data.clouds;
                            leftTopChart.setOption(leftTopOpt);
                            rightTopOpt.series[0].data = data.stars;
                            rightTopChart.setOption(rightTopOpt);
                            var rec = document.getElementsByClassName("item")
                            rec[0].style.backgroundImage="url("+data.recs[0][0]+")";
                            rec[1].style.backgroundImage="url("+data.recs[0][1]+")";
                        },error:function(){
                            alert("发送ajax请求失败");
                        }
                })
            }else if(params.name === "忠犬八公的故事"){
                 $.ajax({
                        url:"/27",
                        type:"get",
                        success:function(data){
                            leftTopOpt.series[0].data = data.clouds;
                            leftTopChart.setOption(leftTopOpt);
                            rightTopOpt.series[0].data = data.stars;
                            rightTopChart.setOption(rightTopOpt);
                            var rec = document.getElementsByClassName("item")
                            rec[0].style.backgroundImage="url("+data.recs[0][0]+")";
                            rec[1].style.backgroundImage="url("+data.recs[0][1]+")";
                        },error:function(){
                            alert("发送ajax请求失败");
                        }
                })
            }else if(params.name === "头号玩家"){
                 $.ajax({
                        url:"/28",
                        type:"get",
                        success:function(data){
                            leftTopOpt.series[0].data = data.clouds;
                            leftTopChart.setOption(leftTopOpt);
                            rightTopOpt.series[0].data = data.stars;
                            rightTopChart.setOption(rightTopOpt);
                            var rec = document.getElementsByClassName("item")
                            rec[0].style.backgroundImage="url("+data.recs[0][0]+")";
                            rec[1].style.backgroundImage="url("+data.recs[0][1]+")";
                        },error:function(){
                            alert("发送ajax请求失败");
                        }
                })
            }else if(params.name === "何以为家"){
                 $.ajax({
                        url:"/29",
                        type:"get",
                        success:function(data){
                            leftTopOpt.series[0].data = data.clouds;
                            leftTopChart.setOption(leftTopOpt);
                            rightTopOpt.series[0].data = data.stars;
                            rightTopChart.setOption(rightTopOpt);
                            var rec = document.getElementsByClassName("item")
                            rec[0].style.backgroundImage="url("+data.recs[0][0]+")";
                            rec[1].style.backgroundImage="url("+data.recs[0][1]+")";
                        },error:function(){
                            alert("发送ajax请求失败");
                        }
                })
            }else if(params.name === "复仇者联盟4：终局之战"){
                 $.ajax({
                        url:"/30",
                        type:"get",
                        success:function(data){
                            leftTopOpt.series[0].data = data.clouds;
                            leftTopChart.setOption(leftTopOpt);
                            rightTopOpt.series[0].data = data.stars;
                            rightTopChart.setOption(rightTopOpt);
                            var rec = document.getElementsByClassName("item")
                            rec[0].style.backgroundImage="url("+data.recs[0][0]+")";
                            rec[1].style.backgroundImage="url("+data.recs[0][1]+")";
                        },error:function(){
                            alert("发送ajax请求失败");
                        }
                })
            }
        }
    });