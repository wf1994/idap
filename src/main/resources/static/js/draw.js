var idenData=[];
//设置左边缩略图部分高度随浏览器高度变化
function setHeight() {
    var height=$(window).height();
    $("#container_all").css("height",height);
}
window.onload=setHeight();
$(window).resize(function () {
    setHeight();
});

//点击画图、改表头 
$(document).ready(function (){
    var chart = document.getElementById("main");
    var initChart = echarts.init(chart);
    draw_circle();
})
$(".thumbnail").on("click", function () {
    var id = $(this).prop("id");
    eval(id + "()");
    $("#table_head").text($(this).attr("name"));  //show_xx_table()函数体中使用
})

function remove_table() {
    $("table").remove();
}
function show_relationship_table(name) {
    //alert(name);

    $("table").remove();
    $.getJSON('data/test2.json', function (data) {

        for (var i = 0; i < data.length; i++) {
            if (data[i].name === name) {
                //alert(data[i].北斗终端接入数);

                alert(data[i].name);

                var $test = $("<table class=\"table table-hover\" style=\"color: white\">\n" +
                    "                <thead>\n" +
                    "                <tr>\n" +
                    "                    <td id=\"table_head\">" + data[i].name + "</td>\n" +
                    "                </tr>\n" +
                    "                </thead>\n" +
                    "                <tbody>\n" +
                    "                 <tr>\n" +
                    "                    <td>北斗终端接入数</td>\n" +
                    "                    <td>" + data[i].北斗终端接入数 + "</td>\n" +
                    "                </tr>\n" +
                    "                <tr>\n" +
                    "                    <td>GPS终端接入数</td>\n" +
                    "                    <td>" + data[i].GPS终端接入数 + "</td>\n" +
                    "                </tr>\n" +
                    "                <tr>\n" +
                    "                    <td>固定终端接入数</td>\n" +
                    "                    <td>" + data[i].固定终端接入数 + "</td>\n" +
                    "                </tr>\n" +
                    "                <tr>\n" +
                    "                    <td>物联网网关部署数量</td>\n" +
                    "                    <td>" + data[i].物联网网关部署数量 + "</td>\n" +
                    "                </tr>\n" +
                    "                <tr>\n" +
                    "                    <td>前置服务器部署数量</td>\n" +
                    "                    <td>" + data[i].前置服务器部署数量 + "</td>\n" +
                    "                </tr>\n" +
                    "                <tr>\n" +
                    "                    <td>注册物联网数据用户数</td>\n" +
                    "                    <td>" + data[i].注册物联网数据用户数 + "</td>\n" +
                    "                </tr>\n" +
                    "                <tr>\n" +
                    "                    <td>数据标准化指数</td>\n" +
                    "                    <td>" + data[i].数据标准化指数 + "</td>\n" +
                    "                </tr>\n" +
                    "                </tbody>\n" +
                    "\n" +
                    "            </table>");
                $("#table_data").append($test)
            }
        }
    });
}
function show_map_table(name) {


    $("table").remove();
    $.getJSON('/test.json', function (data) {

        for (var i = 0; i < data.length; i++) {
            if (data[i].name === name) {
                alert(data[i].北斗终端接入数);

                var $test = $("<table class=\"table table-hover\" style=\"color: white\">\n" +
                    "                <thead>\n" +
                    "                <tr>\n" +
                    "                    <td id=\"table_head\">" + name + "物联网发展水平测评</td>\n" +
                    "                </tr>\n" +
                    "                </thead>\n" +
                    "                <tbody>\n" +
                    "                <tr>\n" +
                    "                    <td>北斗终端接入数</td>\n" +
                    "                    <td>" + data[i].北斗终端接入数 + "</td>\n" +
                    "                </tr>\n" +
                    "                <tr>\n" +
                    "                    <td>GPS终端接入数</td>\n" +
                    "                    <td>" + data[i].GPS终端接入数 + "</td>\n" +
                    "                </tr>\n" +
                    "                <tr>\n" +
                    "                    <td>固定终端接入数</td>\n" +
                    "                    <td>" + data[i].固定终端接入数 + "</td>\n" +
                    "                </tr>\n" +
                    "                <tr>\n" +
                    "                    <td>物联网网关部署数量</td>\n" +
                    "                    <td>" + data[i].物联网网关部署数量 + "</td>\n" +
                    "                </tr>\n" +
                    "                <tr>\n" +
                    "                    <td>前置服务器部署数量</td>\n" +
                    "                    <td>" + data[i].前置服务器部署数量 + "</td>\n" +
                    "                </tr>\n" +
                    "                <tr>\n" +
                    "                    <td>注册物联网数据用户数</td>\n" +
                    "                    <td>" + data[i].注册物联网数据用户数 + "</td>\n" +
                    "                </tr>\n" +
                    "                <tr>\n" +
                    "                    <td>数据标准化指数</td>\n" +
                    "                    <td>" + data[i].数据标准化指数 + "</td>\n" +
                    "                </tr>\n" +
                    "                </tbody>\n" +
                    "\n" +
                    "            </table>");
                $("#table_data").append($test)
            }
        }
    });


}
function show_force_table(name) {
    //alert(name);

    $("table").remove();
    $.getJSON('data/force.json', function (data) {

        for (var i = 0; i < data.length; i++) {
            if (data[i].name === name) {
                //alert(data[i].北斗终端接入数);

                //alert(data[i].name);

                var $test = $("<table class=\"table table-hover\" style=\"color: white\">\n" +
                    "                <thead>\n" +
                    "                <tr>\n" +
                    "                    <td id=\"table_head\">" + data[i].paraname + "</td>\n" +
                    "                </tr>\n" +
                    "                </thead>\n" +
                    "                <tbody>\n" +
                    "                <tr>\n" +
                    "                    <td>系统</td>\n" +
                    "                    <td>" + data[i].name + "</td>\n" +
                    "                </tr>\n" +
                    "                <tr>\n" +
                    "                    <td>接口名称</td>\n" +
                    "                    <td>" + data[i].interfacename + "</td>\n" +
                    "                </tr>\n" +
                    "                <tr>\n" +
                    "                    <td>数据协议</td>\n" +
                    "                    <td>" + data[i].protocol + "</td>\n" +
                    "                </tr>\n" +
                    "                </tbody>\n" +
                    "\n" +
                    "            </table>");
                $("#table_data").append($test)
            }
        }
    });


}
function show_bubble_table(name) {
    alert(name);
    $("table").remove();
    $.getJSON('data/bubble.json', function (data) {

        for (var i = 0; i < data.length; i++) {
            if (data[i].name === name) {
                var $test = $("<table class=\"table table-hover\" style=\"color: white\">\n" +
                    "                <thead>\n" +
                    "                <tr>\n" +
                    "                    <td id=\"table_head\">" + data[i].name + "</td>\n" +
                    "                </tr>\n" +
                    "                </thead>\n" +
                    "                <tbody>\n" +
                    "                <tr>\n" +
                    "                    <td>当月客户意见反馈数</td>\n" +
                    "                    <td>" + data[i].当月客户意见反馈数 + "</td>\n" +
                    "                </tr>\n" +
                    "                <tr>\n" +
                    "                    <td>当月客户投诉率</td>\n" +
                    "                    <td>" + data[i].当月客户投诉率 + "</td>\n" +
                    "                </tr>\n" +
                    "                </tbody>\n" +
                    "\n" +
                    "            </table>");
                $("#table_data").append($test)
            }
        }
    });


}
function show_map_table2() {

    $("button").remove();
    $("table").remove();
    $.getJSON('data/test.json', function (data) {

        var i = 1;


        var $test = $("<table class=\"table table-hover\" style=\"color: white\">\n" +
            "                <thead>\n" +
            "                <tr>\n" +
            "                    <td id=\"table_head\">" + name + "物联网发展水平测评</td>\n" +
            "                </tr>\n" +
            "                </thead>\n" +
            "                <tbody>\n" +
            "                <tr>\n" +
            "                    <td>北斗终端接入数</td>\n" +
            "                    <td>" + data[i].北斗终端接入数 + "</td>\n" +
            "                </tr>\n" +
            "                <tr>\n" +
            "                    <td>GPS终端接入数</td>\n" +
            "                    <td>" + data[i].GPS终端接入数 + "</td>\n" +
            "                </tr>\n" +
            "                <tr>\n" +
            "                    <td>固定终端接入数</td>\n" +
            "                    <td>" + data[i].固定终端接入数 + "</td>\n" +
            "                </tr>\n" +
            "                <tr>\n" +
            "                    <td>物联网网关部署数量</td>\n" +
            "                    <td>" + data[i].物联网网关部署数量 + "</td>\n" +
            "                </tr>\n" +
            "                <tr>\n" +
            "                    <td>前置服务器部署数量</td>\n" +
            "                    <td>" + data[i].前置服务器部署数量 + "</td>\n" +
            "                </tr>\n" +
            "                <tr>\n" +
            "                    <td>注册物联网数据用户数</td>\n" +
            "                    <td>" + data[i].注册物联网数据用户数 + "</td>\n" +
            "                </tr>\n" +
            "                <tr>\n" +
            "                    <td>数据标准化指数</td>\n" +
            "                    <td>" + data[i].数据标准化指数 + "</td>\n" +
            "                </tr>\n" +
            "                </tbody>\n" +
            "\n" +
            "            </table>");
        $("#table_data").append($test)

    });


}


//右上角用户数
function func_11() {


    var myChart = echarts.init(document.getElementById('cont_main'));

    option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [0, 0, 11150, 0, 6000, 8021, 0],
            type: 'bar'
        }]
    };

    // 指定图表的配置项和数据

    myChart.setOption(option, true);
}
//右上角终端数
function func_12() {


    var myChart = echarts.init(document.getElementById('cont_main'));

    option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [0, 1110, 11150, 5000, 330, 0, 0],
            type: 'bar'
        }]
    };

    // 指定图表的配置项和数据

    myChart.setOption(option, true);
}
//右上角故障率
function func_13() {
    var myChart = echarts.init(document.getElementById('cont_main'));

    var type = '';
    var val = 3;
    option = {
        tooltip: {
            formatter: "{a} <br/>{b} : {c}%"
        },
        series: [{
            //背景刻度
            name: '背景刻度',
            type: 'gauge',
            splitNumber: 10, //刻度数量
            min: 0,
            max: 100,
            startAngle:180,
            endAngle:  0,
            radius: '70%', //刻度尺寸略小
            endAngle: 0,
            zlevel: 20,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 0,
                    shadowBlur: 0,
                    color: [
                        [1, '#ccc']
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#ddd',
                    width: 1
                },
                length: 10,
                splitNumber: 3
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {
                    color: '#aaa'
                }
            },
            axisLabel: {
                show: false,
            },
            detail: {
                show: false
            }
        }, {
            //进度轴线
            name: '进度',
            type: 'gauge',
            radius: '80%', //进度轴尺寸略大

            zlevel: 40,
            startAngle: 200,
            endAngle: 0,

            axisLine: {
                show: false,
                lineStyle: {
                    width: 0,
                    shadowBlur: 0,
                    color: [
                        [1, '#ccc']
                    ]

                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            detail: {
                offsetCenter: [
                    0, '40%'
                ], // x, y，单位px
                textStyle: {
                    fontWeight: 400,
                    color: '#fa4936',
                    fontSize: 30
                },
                formatter: '{value}%'
            },
            pointer: {
                show: true,
                length: '70%',
                width: 14
            }, // 其他演示在itemStyle中调试
            // 不是整个canvas的title
            title: {
                color: '#fa4936',
                fontSize: 30,
                fontWeight: 400,
                offsetCenter: [0, '-50%']
            },
            data: [
                // data数据为实时数据
                {
                    name: type,
                    value: val
                }
            ]
        }, {
            name: '进度展示条',
            type: 'pie',
            radius: ['71%', '78%'],
            avoidLabelOverlap: false,
            silent: true,

            zlevel: 1,
            startAngle: 197,
            endAngle: 0,

            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                // 展示数据
                value: val * 2.7, //270(度数)*80(展示数据具体值)*0.01(百分占比常数)
                name: '显示进度条',
                itemStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#f84fa6' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#f88a4e' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        shadowColor: 'rgba(0, 0, 0, 0.2)',
                        shadowBlur: 10
                    }
                }
            }, {
                // 空白数据
                value: 270 * (1 - val * 0.01), //270*(1-80*0.01)
                name: '隐藏进度条',
                itemStyle: {
                    normal: {
                        color: '#eee',


                    }
                }
            }, {
                // 占位数据(写死)
                value: 90,
                name: '空白部分',
                itemStyle: {
                    normal: {
                        color: '#eee'
                    }
                }
            }]
        }]
    };

    myChart.setOption(option, true);
}
//右上角投诉率
function func_14() {
    var myChart = echarts.init(document.getElementById('cont_main'));

    var type = '';
    var val = 0;
    option = {
        tooltip: {
            formatter: "{a} <br/>{b} : {c}%"
        },
        series: [{
            //背景刻度
            name: '背景刻度',
            type: 'gauge',
            splitNumber: 10, //刻度数量
            min: 0,
            max: 100,
            startAngle:180,
            endAngle:  0,
            radius: '70%', //刻度尺寸略小
            endAngle: 0,
            zlevel: 20,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 0,
                    shadowBlur: 0,
                    color: [
                        [1, '#ccc']
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#ddd',
                    width: 1
                },
                length: 10,
                splitNumber: 3
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {
                    color: '#aaa'
                }
            },
            axisLabel: {
                show: false,
            },
            detail: {
                show: false
            }
        }, {
            //进度轴线
            name: '进度',
            type: 'gauge',
            radius: '80%', //进度轴尺寸略大

            zlevel: 40,
            startAngle: 200,
            endAngle: 0,

            axisLine: {
                show: false,
                lineStyle: {
                    width: 0,
                    shadowBlur: 0,
                    color: [
                        [1, '#ccc']
                    ]

                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            detail: {
                offsetCenter: [
                    0, '40%'
                ], // x, y，单位px
                textStyle: {
                    fontWeight: 400,
                    color: '#fa4936',
                    fontSize: 30
                },
                formatter: '{value}%'
            },
            pointer: {
                show: true,
                length: '70%',
                width: 14
            }, // 其他演示在itemStyle中调试
            // 不是整个canvas的title
            title: {
                color: '#fa4936',
                fontSize: 30,
                fontWeight: 400,
                offsetCenter: [0, '-50%']
            },
            data: [
                // data数据为实时数据
                {
                    name: type,
                    value: val
                }
            ]
        }, {
            name: '进度展示条',
            type: 'pie',
            radius: ['71%', '78%'],
            avoidLabelOverlap: false,
            silent: true,

            zlevel: 1,
            startAngle: 197,
            endAngle: 0,

            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                // 展示数据
                value: val * 2.7, //270(度数)*80(展示数据具体值)*0.01(百分占比常数)
                name: '显示进度条',
                itemStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#f84fa6' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#f88a4e' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        shadowColor: 'rgba(0, 0, 0, 0.2)',
                        shadowBlur: 10
                    }
                }
            }, {
                // 空白数据
                value: 270 * (1 - val * 0.01), //270*(1-80*0.01)
                name: '隐藏进度条',
                itemStyle: {
                    normal: {
                        color: '#eee',


                    }
                }
            }, {
                // 占位数据(写死)
                value: 90,
                name: '空白部分',
                itemStyle: {
                    normal: {
                        color: '#eee'
                    }
                }
            }]
        }]
    };

    myChart.setOption(option, true);
}


//draw_circle函数中7个云的右侧table
function func1() {

    $("table").remove();
    $("button").remove();
    $.ajax({
        type:"post",
        //contentType:"application/json;charset=utf-8",
        url:"http://localhost:8080/cloud/getresult",
        dataType:"json",
        data:{cloudcode:10},
        success:function(data){
            var iden = Object.getOwnPropertyNames(data[0])[0];
            console.log(iden)
            for(var i=0;i<data.length;i++){
                var name=Object.getOwnPropertyNames(data[i]);
                var value= data[i][name];
                //console.log(name)
                //console.log(value)
                idenData.push({name:name,value:data[i][name]})
                //console.log(idenData)
            }
            data.forEach(function(item){
                for(var key in item){
                    console.log(key);
                    console.log(item[key]);
                }
            });
        },
        error:function(e){
            console.log(e);
        }
    });
    var $test = $("<button onclick=\"func_11()\" type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Tooltip on left\">用户数</button>\n" +
        "\n" +
        "<button onclick=\"func_12()\"  type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tooltip on top\">终端数</button>\n" +
        "\n" +
        "<button onclick=\"func_13()\" type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Tooltip on bottom\">故障率</button>\n" +
        "\n" +
        "<button onclick=\"func_14()\" type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\">投诉率</button>\n" +
        "<table class=\"table table-hover\">\n" );

    alert(cloudData[0].A001);

    //create thead
    var table = document.createElement("table");
    table.className = "table_ajax";
    var thead = document.createElement("thead");
    var thead_tr = document.createElement("tr");
    var thead_td = document.createElement("td");
    thead_td.id = "table_head";
    var thead_td_text = cloudData[0].A001;
    document.createTextNode(thead_td_text);
    $(thead_td).append(thead_td_text);
    $(thead_tr).append(thead_td);
    $(thead).append(thead_tr);
    $(table).append(thead);
    //create tbody

    var tbody = document.createElement("tbody");
    var text = cloudData[0].A001;
    $(tbody).append(document.createElement("tr"));
    $(tbody.childNodes[0]).append(document.createElement("td"));
    $(tbody.td).append(document.createTextNode(text));
   /* for (var i = 0;i<cloudData.length;i++){
        var text  =  eval(cloudData.A00[i+1]);
        alert(cloudData[i]);
        $(tbody).append(document.createElement("tr"));
        $(tbody.childNodes[i]).append(document.createElement("td"));
        $(tbody.childNodes.td).append(document.createTextNode("text"));
    }*/
    $("#table_data").append($test,table,tbody);

}
function func2() {

    $("table").remove();
    $("button").remove();
    var $test = $("<button onclick=\"func_11()\" type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Tooltip on left\">用户数</button>\n" +
        "\n" +
        "<button onclick=\"func_12()\"  type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tooltip on top\">终端数</button>\n" +
        "\n" +
        "<button onclick=\"func_13()\" type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Tooltip on bottom\">故障率</button>\n" +
        "\n" +
        "<button onclick=\"func_14()\" type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\">投诉率</button>\n" +
        "<table class=\"table table-hover\" style=\"color: white;height: 250px\">\n" +
        "    <thead>\n" +
        "    <tr>\n" +
        "        <td id=\\\"table_head\\\"></td>\n" +
        "    </tr>\n" +
        "    </thead>\n" +
        "    <tbody>\n" +
        "    <tr>\n" +
        "        <td>注册客户数</td>\n" +
        "        <td>2</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>用户访问总人次</td>\n" +
        "        <td>1234005</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>单日用户访问人次</td>\n" +
        "        <td>123</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>北斗终端接入数</td>\n" +
        "        <td>1990</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>可用性指标</td>\n" +
        "        <td>98.90%</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>平均故障间隔时间（MTBF）</td>\n" +
        "        <td>1200小时</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>平均故障修复时间(MTTR)</td>\n" +
        "        <td>0.9小时</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>当月客户意见反馈数</td>\n" +
        "        <td>12</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>当月客户投诉率</td>\n" +
        "        <td>1%</td>\n" +
        "    </tr>\n" +
        "    </tbody>\n" +
        "</table>");
    $("#table_data").append($test);

}
function func3() {

    $("table").remove();
    $("button").remove();
    var $test = $("<button onclick=\"func_11()\" type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Tooltip on left\">用户数</button>\n" +
        "\n" +
        "<button onclick=\"func_12()\"  type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tooltip on top\">终端数</button>\n" +
        "\n" +
        "<button onclick=\"func_13()\" type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Tooltip on bottom\">故障率</button>\n" +
        "\n" +
        "<button onclick=\"func_14()\" type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\">投诉率</button>\n" +
        "<table class=\"table table-hover\" style=\"color: white;height: 250px\">\n" +
        "    <thead>\n" +
        "    <tr>\n" +
        "        <td id=\\\"table_head\\\"></td>\n" +
        "    </tr>\n" +
        "    </thead>\n" +
        "    <tbody>\n" +
        "    <tr>\n" +
        "        <td>注册客户数</td>\n" +
        "        <td>3</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>用户访问总人次</td>\n" +
        "        <td>12783</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>单日用户访问人次</td>\n" +
        "        <td>109</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>北斗终端接入数</td>\n" +
        "        <td>1342</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>可用性指标</td>\n" +
        "        <td>98.80%</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>平均故障间隔时间（MTBF）</td>\n" +
        "        <td>1200小时</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>平均故障修复时间(MTTR)</td>\n" +
        "        <td>0.7小时</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>当月客户意见反馈数</td>\n" +
        "        <td>5</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>当月客户投诉率</td>\n" +
        "        <td>0%</td>\n" +
        "    </tr>\n" +
        "    </tbody>\n" +
        "</table>");
    $("#table_data").append($test);

}
function func4() {

    $("table").remove();
    $("button").remove();
    var $test = $("<button onclick=\"func_11()\" type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Tooltip on left\">用户数</button>\n" +
        "\n" +
        "<button onclick=\"func_12()\"  type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tooltip on top\">终端数</button>\n" +
        "\n" +
        "<button onclick=\"func_13()\" type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Tooltip on bottom\">故障率</button>\n" +
        "\n" +
        "<button onclick=\"func_14()\" type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\">投诉率</button>\n" +
        "<table class=\"table table-hover\" style=\"color: white;height: 250px\">\n" +
        "    <thead>\n" +
        "    <tr>\n" +
        "        <td id=\\\"table_head\\\"></td>\n" +
        "    </tr>\n" +
        "    </thead>\n" +
        "    <tbody>\n" +
        "    <tr>\n" +
        "        <td>注册客户数</td>\n" +
        "        <td>4</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>用户访问总人次</td>\n" +
        "        <td>180345</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>单日用户访问人次</td>\n" +
        "        <td>210</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>北斗终端接入数</td>\n" +
        "        <td>3190</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>可用性指标</td>\n" +
        "        <td>99.10%</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>平均故障间隔时间（MTBF）</td>\n" +
        "        <td>1290小时</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>平均故障修复时间(MTTR)</td>\n" +
        "        <td>0.4小时</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>当月客户意见反馈数</td>\n" +
        "        <td>11</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>当月客户投诉率</td>\n" +
        "        <td>0%</td>\n" +
        "    </tr>\n" +
        "    </tbody>\n" +
        "</table>");
    $("#table_data").append($test);

}
function func5() {

    $("table").remove();
    $("button").remove();
    var $test = $("<button onclick=\"func_11()\" type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Tooltip on left\">用户数</button>\n" +
        "\n" +
        "<button onclick=\"func_12()\"  type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tooltip on top\">终端数</button>\n" +
        "\n" +
        "<button onclick=\"func_13()\" type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Tooltip on bottom\">故障率</button>\n" +
        "\n" +
        "<button onclick=\"func_14()\" type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\">投诉率</button>\n" +
        "<table class=\"table table-hover\" style=\"color: white;height: 250px\">\n" +
        "    <thead>\n" +
        "    <tr>\n" +
        "        <td id=\\\"table_head\\\"></td>\n" +
        "    </tr>\n" +
        "    </thead>\n" +
        "    <tbody>\n" +
        "    <tr>\n" +
        "        <td>注册客户数</td>\n" +
        "        <td>5</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>用户访问总人次</td>\n" +
        "        <td>16345</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>单日用户访问人次</td>\n" +
        "        <td>100</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>北斗终端接入数</td>\n" +
        "        <td>2006</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>可用性指标</td>\n" +
        "        <td>99.90%</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>平均故障间隔时间（MTBF）</td>\n" +
        "        <td>1230小时</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>平均故障修复时间(MTTR)</td>\n" +
        "        <td>0.9小时</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>当月客户意见反馈数</td>\n" +
        "        <td>8</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>当月客户投诉率</td>\n" +
        "        <td>0%</td>\n" +
        "    </tr>\n" +
        "    </tbody>\n" +
        "</table>");
    $("#table_data").append($test);

}
function func6() {

    $("table").remove();
    $("button").remove();
    var $test = $("<button onclick=\"func_11()\" type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Tooltip on left\">用户数</button>\n" +
        "\n" +
        "<button onclick=\"func_12()\"  type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tooltip on top\">终端数</button>\n" +
        "\n" +
        "<button onclick=\"func_13()\" type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Tooltip on bottom\">故障率</button>\n" +
        "\n" +
        "<button onclick=\"func_14()\" type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\">投诉率</button>\n" +
        "<table class=\"table table-hover\" style=\"color: white;height: 250px\">\n" +
        "    <thead>\n" +
        "    <tr>\n" +
        "        <td id=\\\"table_head\\\"></td>\n" +
        "    </tr>\n" +
        "    </thead>\n" +
        "    <tbody>\n" +
        "    <tr>\n" +
        "        <td>注册客户数</td>\n" +
        "        <td>6</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>用户访问总人次</td>\n" +
        "        <td>12345</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>单日用户访问人次</td>\n" +
        "        <td>99</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>北斗终端接入数</td>\n" +
        "        <td>1269</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>可用性指标</td>\n" +
        "        <td>98.90%</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>平均故障间隔时间（MTBF）</td>\n" +
        "        <td>1200小时</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>平均故障修复时间(MTTR)</td>\n" +
        "        <td>0.7小时</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>当月客户意见反馈数</td>\n" +
        "        <td>1</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>当月客户投诉率</td>\n" +
        "        <td>0%</td>\n" +
        "    </tr>\n" +
        "    </tbody>\n" +
        "</table>");
    $("#table_data").append($test);

}
function func7() {

    $("table").remove();
    $("button").remove();
    var $test = $("<button onclick=\"func_11()\" type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Tooltip on left\">用户数</button>\n" +
        "\n" +
        "<button onclick=\"func_12()\"  type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tooltip on top\">终端数</button>\n" +
        "\n" +
        "<button onclick=\"func_13()\" type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Tooltip on bottom\">故障率</button>\n" +
        "\n" +
        "<button onclick=\"func_14()\" type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\">投诉率</button>\n" +
        "<table class=\"table table-hover\" style=\"color: white;height: 250px\">\n" +
        "    <thead>\n" +
        "    <tr>\n" +
        "        <td id=\\\"table_head\\\"></td>\n" +
        "    </tr>\n" +
        "    </thead>\n" +
        "    <tbody>\n" +
        "    <tr>\n" +
        "        <td>注册客户数</td>\n" +
        "        <td>453</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>用户访问总人次</td>\n" +
        "        <td>9300</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>单日用户访问人次</td>\n" +
        "        <td>95</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>北斗终端接入数</td>\n" +
        "        <td>900</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>可用性指标</td>\n" +
        "        <td>97.90%</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>平均故障间隔时间（MTBF）</td>\n" +
        "        <td>1230小时</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>平均故障修复时间(MTTR)</td>\n" +
        "        <td>0.5小时</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>当月客户意见反馈数</td>\n" +
        "        <td>1</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>当月客户投诉率</td>\n" +
        "        <td>0%</td>\n" +
        "    </tr>\n" +
        "    </tbody>\n" +
        "</table>");
    $("#table_data").append($test);

}

function getData(){
    alert("已经调用！");
    $.ajax({
        type:"post",
        //contentType:"application/json;charset=utf-8",
        url:"http://localhost:8080/cloud/getcloud",
        dataType:"json",
        data:{level:1},
        success:function(data){
                $("#cname_1").text(data[0].cname);
                $("#cname_2").text(data[1].cname);
                $("#cname_3").text(data[2].cname);
                $("#cname_4").text(data[3].cname);
                $("#cname_5").text(data[4].cname);
                $("#cname_6").text(data[5].cname);
                $("#cname_7").text(data[6].cname);
                console.log(data);
                },
        error:function(e){
                    console.log(e);
                }
    });
}
window.onload = getData();

function draw_circle() {

    $("#main").html(
        "<img src='/img/bg.png' style='width:630px;height:630px;margin-left: 30px'  ></body>\n" +
        "<div id=\"drawing\">\n" +
        "    <a href=\"javascript:func1()\" class='a_href' >\n" +
        "        <div class=\"circle1\" style=\"width: 150px;height: 150px;border-radius: 100px;left: 262px;top: -623px;\">\n" +
        "           <div id= \"cname_1\" style=\"font-size:22px;left: 43px; position: absolute; top: 62px;\"></div> \n" +
        "        </div>\n" +
        "    </a>\n" +
        "\n" +
        "    <a href=\"javascript:func2()\" class='a_href' >\n" +
        "        <div class=\"circle2\" style=\"width: 150px;height: 150px;border-radius: 100px;left: 120px;top: -238px;\">\n" +
        "            <div id= \"cname_2\"style=\"font-size:22px;left: 39px; position: absolute; top: 62px;\"></div>\n" +
        "        </div>\n" +
        "    </a>\n" +
        "\n" +
        "    <a href=\"javascript:func3()\" class='a_href' >\n" +
        "        <div class=\"circle3\" style=\"width: 150px;height: 150px;border-radius: 100px;left: 47px;top: -389px;\">\n" +
        "             <div id= \"cname_3\"style=\"font-size:22px;left: 39px; position: absolute; top: 62px;\"></div>\n" +
        "        </div>\n" +
        "    </a>\n" +
        "\n" +
        "    <a href=\"javascript:func4()\" class='a_href' >\n" +
        "        <div class=\"circle4\" style=\"width: 150px;height: 150px;border-radius: 100px;left: 108px;top: -557px;\">\n" +
        "              <div id= \"cname_4\"style=\"font-size:22px;left: 39px; position: absolute; top: 62px;\"></div>\n" +
        "        </div>\n" +
        "    </a>\n" +
        "\n" +
        "    <a href=\"javascript:func5()\" class='a_href' >\n" +
        "        <div class=\"circle5\" style=\"width: 150px;height: 150px;border-radius: 100px;left: 427px;top: -247px;\">\n" +
        "             <div id= \"cname_5\"style=\"font-size:22px;left: 39px; position: absolute; top: 62px;\"></div>\n" +
        "        </div>\n" +
        "    </a>\n" +
        "\n" +
        "    <a href=\"javascript:func6()\" class='a_href' >\n" +
        "        <div class=\"circle6\" style=\"width: 150px;height: 150px;border-radius: 100px;left: 418px;top: -567px;\">\n" +
        "              <div id= \"cname_6\"style=\"font-size:22px;left: 39px; position: absolute; top: 62px;\"></div>\n" +
        "        </div>\n" +
        "    </a>\n" +
        "\n" +
        "    <a href=\"javascript:func7()\" class='a_href' >\n" +
        "        <div class=\"circle7\" style=\"width: 150px;height: 150px;border-radius: 100px;left: 491px;top: -403px;\">\n" +
        "             <div id= \"cname_7\"style=\"font-size:22px;left: 39px; position: absolute; top: 62px;\"></div>\n" +
        "        </div>\n" +
        "    </a>")
    $(".a_href").on("click", function () {
        $("#circle_data").html("<div id='cont_main' style='width: 300px; height: 200px; left: -20px; -webkit-tap-highlight-color: transparent; user-select: none; position: relative;'><div style='position: relative; overflow: hidden; width: 300px; height: 200px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;'><canvas data-zr-dom-id='zr_0' width='600' height='400' style='position: absolute; left: 0px; top: 0px; width: 300px; height: 300px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;'></canvas></div><div style='position: absolute; display: none; border-style: solid; white-space: nowrap; z-index: 9999999; transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1), top 0.4s cubic-bezier(0.23, 1, 0.32, 1); background-color: rgba(50, 50, 50, 0.7); border-width: 0px; border-color: rgb(51, 51, 51); border-radius: 4px; color: rgb(255, 255, 255); font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 14px; font-family: &quot;Microsoft YaHei&quot;; line-height: 21px; padding: 5px; left: 433px; top: 322px;'>销量<br><span style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#c23531;'></span>高跟鞋: 10</div></div>")
    })
    var myChart = echarts.init(document.getElementById('cont_main'));
    // 指定图表的配置项和数据
    var colors = ['#5793f3', '#d14a61', '#675bba'];


    var option = {};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    console.log("111")
}
function draw_map() {
    $("button").remove();
    $("#circle_data").html("");
    var oldChart = echarts.getInstanceByDom(document.getElementById("main"));
    oldChart.dispose();
    var myChart = echarts.init(document.getElementById('main'));
    var option = {};
    var geoCoordMap = {
        '百色': [106.36, 23.55],
        '桂林': [110.290195, 25.273566],
        '南宁': [108.33, 22.84],
        '柳州': [109.4, 24.33],
        '梧州': [111.34, 23.51],
        '宾阳': [107.37, 22.42],
        '河池': [108.06, 24.7],
        '钦州': [108.61, 21.96],
        '玉林': [110.14, 22.64],
        '北海': [109.12, 21.49],
    }
    var GXData = [
        [{name: '百色'}, {name: '桂林', value: 95}],
        [{name: '百色'}, {name: '南宁', value: 104}],
        [{name: '百色'}, {name: '柳州', value: 34}],
        [{name: '百色'}, {name: '梧州', value: 12}],
        [{name: '百色'}, {name: '宾阳', value: 234}],
        [{name: '百色'}, {name: '河池', value: 23}],
        [{name: '百色'}, {name: '钦州', value: 24}],
        [{name: '百色'}, {name: '玉林', value: 45}],
        [{name: '百色'}, {name: '北海', value: 12}],

        [{name: '桂林'}, {name: '百色', value: 23}],
        [{name: '桂林'}, {name: '南宁', value: 49}],
        [{name: '桂林'}, {name: '柳州', value: 94}],
        [{name: '桂林'}, {name: '梧州', value: 145}],
        [{name: '桂林'}, {name: '宾阳', value: 124}],
        [{name: '桂林'}, {name: '河池', value: 12}],
        [{name: '桂林'}, {name: '钦州', value: 42}],
        [{name: '桂林'}, {name: '玉林', value: 23}],
        [{name: '桂林'}, {name: '北海', value: 11}],

        [{name: '南宁'}, {name: '百色', value: 64}],
        [{name: '南宁'}, {name: '桂林', value: 356}],
        [{name: '南宁'}, {name: '梧州', value: 75}],
        [{name: '南宁'}, {name: '柳州', value: 45}],
        [{name: '南宁'}, {name: '宾阳', value: 132}],
        [{name: '南宁'}, {name: '河池', value: 32}],
        [{name: '南宁'}, {name: '钦州', value: 12}],
        [{name: '南宁'}, {name: '玉林', value: 33}],
        [{name: '南宁'}, {name: '北海', value: 12}],

        [{name: '柳州'}, {name: '百色', value: 34}],
        [{name: '柳州'}, {name: '桂林', value: 12}],
        [{name: '柳州'}, {name: '南宁', value: 13}],
        [{name: '柳州'}, {name: '梧州', value: 34}],
        [{name: '柳州'}, {name: '宾阳', value: 17}],
        [{name: '柳州'}, {name: '河池', value: 17}],
        [{name: '柳州'}, {name: '钦州', value: 17}],
        [{name: '柳州'}, {name: '玉林', value: 17}],
        [{name: '柳州'}, {name: '北海', value: 17}],

    ];
//return起点终点的name，以及坐标
    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord]
                });
            }
        }
        return res;
    };
    option = {
        title: {
            text: "广西北斗信息产业发展态势",
            left: 'center',
            textStyle: {
                color: '#FFFAFA'
            }
        },

        legend: {
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data: ['广西'],
            textStyle: {
                color: '#fff'
            },
            selectedMode: 'single'
        },
        series: [
            {
                name: '广西',
                type: 'lines',
                zlevel: 1,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.7,
                    color: '#fff',
                    symbolSize: 3
                },
                lineStyle: {
                    normal: {
                        color: '#0000FF',
                        width: 0,
                        curveness: 0.2
                    }
                },
                data: convertData(GXData)
            },
            {

                name: '广西',
                type: 'lines',
                zlevel: 2,
                symbol: ['none', 'arrow'],
                symbolSize: 10,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbolSize: 8
                },
                lineStyle: {
                    normal: {
                        color: '#0000FF',
                        width: 1,
                        opacity: 0.6,
                        curveness: 0.2
                    }
                },
                data: convertData(GXData)
            },
            {

                name: '广西',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: false,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: function (val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        color: '#0000FF'
                    }
                },
                data: GXData.map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })
            }
        ],
        geo: {
            map: '广西',
            label: {
                normal: {
                    show: true,
                    color: '#FFF0F5'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        color: '#FFF0F5'
                    }
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    borderColor: '#FFF0F5',
                    borderWidth: 1,
                    areaColor: '#323c48',
                },
                emphasis: {
                    areaColor: '#2a333d',
                    borderWidth: 2
                }
            }
        }
    }

    myChart.on('click', function (param) {
        var name = param.name;
        //alert(name);
        //alert(typeof name);//string类型
        show_map_table(name);

    });


    myChart.setOption(option, true);
}
function draw_bubble() {
    $("button").remove();
    $("#circle_data").html("");
    var oldChart = echarts.getInstanceByDom(document.getElementById("main"));
    oldChart.dispose();
    var myChart = echarts.init(document.getElementById('main'));
    var app = {};
    option = null;
    app.title = '气泡图';
    //[28604,   77,        17096869, 'Australia',   1]
    // 横坐标，纵坐标，半径大小，名称，所属类别
    var data = [
        [[98, 40000, 85, '综合平台', 1], [79, 36000, 79, '东亚糖业', 1], [89, 39800, 91, '博庆糖业', 1], [99, 49000, 89, '农机服务', 1], [69, 45900, 89, '广西糖网', 1], [91, 39999, 89, '智慧泊车', 1], [98, 45678, 98, '南宁车联网', 1], [86, 41900, 92, '无车承运网', 1], [95, 43100, 93, '顺丰速递', 1], [79, 36789, 80, '顺丰大数据', 1]],
        [[78, 34000, 65, '综合平台', 2], [71, 23000, 49, '东亚糖业', 2], [79, 29800, 76, '博庆糖业', 2], [67, 41700, 79, '农机服务', 2], [45, 23900, 49, '广西糖网', 2], [76, 45399, 69, '智慧泊车', 2], [58, 23678, 38, '南宁车联网', 2], [66, 31900, 72, '无车承运网', 2], [85, 33100, 79, '顺丰速递', 2], [99, 46789, 90, '顺丰大数据', 2]],
    ];

    option = {
        textStyle: {
            color: '#fff'
        },

        title: {
            text: '北斗应用服务系统在线评价'
            ,
            textStyle: {
                color: '#fff'
            }
        },
        legend: {
            //selectedMode:false,//取消图例上的点击事件
            right: 10,
            data: ['南宁云中心', '桂林云中心'],
            textStyle: {
                color: '#fff'
            }

        },
        xAxis: {
            name: '系统可用性',
            nameLocation: 'middle',

            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        yAxis: {
            name: 'MTBF',
            nameLocation: 'middle',
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            scale: true
        },
        series: [{
            name: '南宁云中心',
            data: data[0],
            type: 'scatter',
            animationDelay: function (idx) {
                return idx * 200;
            },
            symbolSize: function (data) {
                return data[2];
            },
            label: {
                emphasis: {
                    show: true,
                    formatter: function (param) {
                        return param.data[3];
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(120, 36, 50, 0.5)',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: 'rgb(251, 118, 123)'
                    }, {
                        offset: 1,
                        color: 'rgb(204, 46, 72)'
                    }])
                }
            }
        }, {
            name: '桂林云中心',
            data: data[1],
            type: 'scatter',
            animationDelay: function (idx) {
                return idx * 200;
            },
            /*
             1e1=10     2e1=20
             1e2=100    2e2=200
             1e3=1000   2e3=2000
             */
            symbolSize: function (data) {
                return data[2];
            },
            label: {
                emphasis: {
                    show: true,
                    formatter: function (param) {
                        return param.data[3];
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(25, 100, 150, 0.5)',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: 'rgb(129, 227, 238)'
                    }, {
                        offset: 1,
                        color: 'rgb(25, 183, 207)'
                    }])
                }
            }
        }]
    };


    myChart.on('legendselectchanged', function (param) {
        var selected = param.selected;
        var name = param.name;
        //alert(name);
        show_bubble_table(name);

    });


    myChart.setOption(option, true);
}
function draw_relationship() {
    $("button").remove();
    $("#circle_data").html("");
    var  oldChart=echarts.getInstanceByDom(document.getElementById("main"));
    oldChart.dispose();
    var  myChart  =  echarts.init(document.getElementById('main'));
    var  app  =  {};
    option  =  null;
    var  categories  =  [];

    for  (var  i  =  0;  i  <  11;  i++)  {
        categories[i]  =  {
            name:  i,
        };
    }

    graph  =  {
        "nodes":[
            {
                "name"  :  "综合平台",
                "des":  '广西北斗综合服务平台',
                "attributes"  :  {},
                "id"  :  "综合平台",
                "symbolSize"  :  "90",
                "category"  :  1,
                'label':  {
                    normal:  {

                        show:  true,
                        position:  'top'
                    }
                },
                itemStyle:{
                    color:"#FC1E19"
                },
                "size":  "40",
            },
            {
                "name"  :  "东亚糖业",
                "des":  '东亚糖业北斗应用示范',
                "attributes"  :  {},
                "id"  :  "东亚糖业",
                "symbolSize"  :  "60",
                "category"  :  2,
                label:{
                    show:true
                },
                itemStyle:{
                    color:"#FE9804"
                },
                "size"  :  "40",
            },
            {
                "name"  :  "博庆糖业",
                "des":  '东亚糖业北斗应用示范',

                "attributes"  :  {},
                "id"  :  "博庆糖业",
                "symbolSize"  :  "30",
                "category"  :  3,
                label:{
                    show:true
                },
                itemStyle:{
                    color:"#FDEB00"
                },
                "size"  :  "40",
            },
            {
                "name"  :  "农机服务",
                "des":  '广西农机线上服务应用示范',

                "attributes"  :  {},
                "id"  :  "农机服务",
                "symbolSize"  :  "60",
                "category"  :  4,
                label:{
                    show:true
                },
                itemStyle:{
                    color:"#36FA32"
                },
                "size"  :  "40",
            },
            {
                "name"  :  "广西糖网",
                "des":  '广西糖业电子商务网',
                "attributes"  :  {},
                "id"  :  "广西糖网",
                "symbolSize"  :  "60",
                "category"  :  5,
                label:{
                    show:true
                },
                itemStyle:{
                    color:"#3426F3"
                },
                "size"  :  "40",
            },
            {
                "name"  :  "智慧泊车",
                "des":  '银江智慧泊车管理系统',
                "attributes"  :  {},
                "id"  :  "智慧泊车",
                "symbolSize"  :  "60",
                "category"  :  6,
                label:{
                    show:true
                },
                itemStyle:{
                    color:"#71D38C"
                },
                "size" : "40",
            },
            {
                "name" : "南宁车联网",
                "des": '南宁市城市交通车联网',
                "attributes" : {},
                "id" : "南宁车联网",
                "symbolSize" : "60",
                "category" : 7,
                label:{
                    show:true
                },
                itemStyle:{
                    color:"#5190D7"
                },
                "size" : "40",
            },
            {
                "name" : "无车承运网",
                "des": '广西无车承运服务网',
                "attributes" : {},
                "id" : "无车承运网",
                "symbolSize" : "15",
                "category" : 8,
                label:{
                    show:true
                },
                itemStyle:{
                    color:"#FC20D8"
                },
                "size" : "40",
            },
            {
                "name" : "顺丰速递",
                "des": '顺丰速递物流配送管理系统',
                "attributes" : {},
                "id" : "顺丰速递",
                "symbolSize" : "60",
                "category" : 9,
                label:{
                    show:true
                },
                itemStyle:{
                    color:"#F37894"
                },
                "size" : "40",
            },
            {
                "name" : "顺丰大数据",
                "des": '顺丰大数据系统',
                "attributes" : {},
                "id" : "顺丰大数据",
                "symbolSize" : "15",
                "category" : 10,
                label:{
                    show:true
                },
                itemStyle:{
                    color:"#17A05D"
                },
                "size" : "40",
            },
        ],

        "links":[
            //A 综合平台
            {
                "source" : "综合平台",
                "target" : "东亚糖业",
                "des":"综合平台-东亚糖业",
                "lineStyle":{
                    normal:{
                        width:'9'
                    }
                }
            },
            {
                "source" : "综合平台",
                "target" : "博庆糖业",
                "des":"综合平台-博庆糖业",
                "lineStyle":{
                    normal:{
                        width:'9'
                    }
                }
            },
            {
                "source" : "综合平台",
                "target" : "农机服务",
                "des":"综合平台-农机服务",
                "lineStyle":{
                    normal:{
                        width:'9'
                    }
                }
            },
            {
                "source" : "综合平台",
                "target" : "广西糖网",
                "des":"综合平台-广西糖网",
                "lineStyle":{
                    normal:{
                        width:'9'
                    }
                }
            }, {
                "source" : "综合平台",
                "target" : "智慧泊车",
                "des":"综合平台-智慧泊车",
                "lineStyle":{
                    normal:{
                        width:'9'
                    }
                }
            },
            {
                "source" : "综合平台",
                "target" : "南宁车联网",
                "des":"综合平台-南宁车联网",
                "lineStyle":{
                    normal:{
                        width:'9'
                    }
                }
            },
            {
                "source" : "综合平台",
                "target" : "无车承运网",
                "des":"综合平台-无车承运网",
                "lineStyle":{
                    normal:{
                        width:'9'
                    }
                }
            },
            {
                "source" : "综合平台",
                "target" : "顺丰速递",
                "des":"综合平台-顺丰速递",
                "lineStyle":{
                    normal:{
                        width:'9'
                    }
                }
            },
            {
                "source" : "综合平台",
                "target" : "顺丰大数据",
                "des":"综合平台-顺丰大数据",
                "lineStyle":{
                    normal:{
                        width:'9'
                    }
                }
            },
            //B 东亚糖业
            {
                "source" : "东亚糖业",
                "target" : "农机服务",
                "des":"东亚糖业-农机服务",
                "lineStyle":{
                    normal:{
                        width:'7'
                    }
                }
            },
            {
                "source" : "东亚糖业",
                "target" : "广西糖网",
                "des":"东亚糖业-广西糖网",
                "lineStyle":{
                    normal:{
                        width:'7'
                    }
                }
            },
            //C 博庆糖业
            {
                "source" : "博庆糖业",
                "target" : "农机服务",
                "des":"博庆糖业-农机服务",
                "lineStyle":{
                    normal:{
                        width:'5'
                    }
                }
            },
            {
                "source" : "博庆糖业",
                "target" : "广西糖网",
                "des":"博庆糖业-广西糖网",
                "lineStyle":{
                    normal:{
                        width:'5'
                    }
                }
            },
            //D  农机服务

            //E 广西糖网

            //F 智慧泊车
            {
                "source" : "智慧泊车",
                "target" : "南宁车联网",
                "des":"智慧泊车-南宁车联网",
                "lineStyle":{
                    normal:{
                        width:'7'
                    }
                }
            },
            {
                "source" : "智慧泊车",
                "target" : "顺丰速递",
                "des":"智慧泊车-顺丰速递",
                "lineStyle":{
                    normal:{
                        width:'7'
                    }
                }
            },
            //G 南宁车联网

            //I 无车承运网
            {
                "source" : "无车承运网",
                "target" : "南宁车联网",
                "des":"无车承运网-南宁车联网",
                "lineStyle":{
                    normal:{
                        width:'8'
                    }
                }
            },
            // j 顺丰速递
            {
                "source" : "顺丰速递",
                "target" : "顺丰大数据",
                "des":"顺丰速递-顺丰大数据",
                "lineStyle":{
                    normal:{
                        width:'8'
                    }
                }
            },
        ]
    },

        option = {
            title: {
                text: '系统关系图谱',
                subtext: 'Circular layout',
                top: 'bottom',
                left: 'right',
                textStyle:{
                    color:'#fff'
                }
            },
            tooltip: {
                formatter: function (x) {
                    return x.data.des;
                }
            },
            color:['#17A05D','#FC1E19','#FE9804','#FDEB00','#36FA32','#3426F3','#71D38C','#5190D7','#FC20D8','#F37894'],

            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series : [
                {
                    name: '关系图',
                    type: 'graph',
                    layout: 'circular',
                    circular: {
                        rotateLabel: true
                    },
                    edgeLabel: {
                        normal: {
                            show: false,
                            formatter: function (x) {
                                return x.data.name;
                            }
                        }
                    },
                    data: graph.nodes,
                    links: graph.links,
                    categories: categories,
                    roam: true,
                    label: {
                        normal: {
                            position: 'right',
                            formatter: '{b}',

                        },
                    },
                    lineStyle: {
                        normal: {
                            color: 'source',
                            curveness: 0.3
                        }
                    }
                }
            ]
        };
    myChart.on('click', function (param) {
        var name = param.name;
        //alert(name);
        //alert(typeof name);//string类型
        show_relationship_table(name);

    });
    myChart.setOption(option,true);
}
function draw_pie() {
    $("button").remove();
    $("#circle_data").html("");
    var oldChart = echarts.getInstanceByDom(document.getElementById("main"));
    oldChart.dispose();
    var myChart = echarts.init(document.getElementById('main'));
    var option = {
        title: {
            text: "",
            subtext: "",
            left: "center",
            textStyle: {
                color: "#fff",
                fontSize: 18
            },
        },


        backgroundColor: new echarts.graphic.RadialGradient(0, 0, 1, [{
            offset: 0,
            color: '#111'
        }, {
            offset: 1,
            color: '#111'
        }]),
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}:({d}%)"
        },
        series: [{
            name: '综合服务平台',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '20%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 100,
                name: '北斗综合位置服务平台'
            }]
        }, {
            name: '领域',
            type: 'pie',
            radius: ['22%', '40%'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            data: [{
                value: 50,
                name: '平台管理勤务'
            }, {
                value: 20,
                name: '智慧糖业'
            }, {
                value: 4,
                name: '领域3'
            }, {
                value: 4,
                name: '领域4'
            }, {
                value: 6,
                name: '领域5'
            }, {
                value: 6,
                name: '领域6'
            }, {
                value: 3,
                name: '领域7'
            }, {
                value: 3,
                name: '领域8'
            }, {
                value: 4,
                name: '领域9'
            }]
        }, {
            name: '系统',
            type: 'pie',
            radius: ['42%', '58%'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            data: [{
                value: 6,
                name: '客户服务'
            }, {
                value: 8,
                name: '营运商务'
            }, {
                value: 18,
                name: '运维管理'
            }, {
                value: 6,
                name: '技术支持'
            }, {
                value: 6,
                name: '营运大数据'
            }, {
                value: 6,
                name: '营运大数据'
            }, {
                value: 10,
                name: '应用系统'
            }, {
                value: 6,
                name: '系统2.2'
            }, {
                value: 4,
                name: '系统2.3'
            }, {
                value: 30,
                name: ''
            }]
        }, {
            name: '分系统',
            type: 'pie',
            radius: ['60%', '74%'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            data: [{
                value: 2,
                name: '综合信息服务'
            }, {
                value: 2,
                name: '客户服务软件'
            }, {
                value: 2,
                name: '客户社区中心'
            }, {
                value: 2,
                name: '综合信息服务'
            }, {
                value: 2,
                name: '营运商务中心'
            }, {
                value: 2,
                name: '平台项目管理'
            }, {
                value: 2,
                name: '商务社区服务'
            }, {
                value: 2,
                name: '综合信息服务'
            }, {
                value: 2,
                name: 'SDN网络管理'
            }, {
                value: 2,
                name: '网络监控'
            }, {
                value: 2,
                name: '物联网-信息高速公路管理'
            }, {
                value: 2,
                name: '物联网-接入服务器管理'
            }, {
                value: 2,
                name: '云联邦-基础管理'
            }, {
                value: 2,
                name: '云联邦-服务器管理'
            }, {
                value: 2,
                name: '云联邦-服务器配置'
            }, {
                value: 2,
                name: '运维社区服务'
            }, {
                value: 2,
                name: '综合信息服务'
            }, {
                value: 2,
                name: '物联网-应用服务'
            }, {
                value: 2,
                name: '支持社区服务'
            }, {
                value: 2,
                name: '综合信息服务'
            }, {
                value: 2,
                name: '应用服务'
            }, {
                value: 2,
                name: '技术支持社区服务'
            }, {
                value: 2,
                name: '综合信息服务'
            }, {
                value: 2,
                name: '智能分析报告'
            }, {
                value: 2,
                name: '数据共享社区服务'
            }, {
                value: 7,
                name: '糖业精细化服务'
            }, {
                value: 3,
                name: '分系统2.1.2'
            }, {
                value: 40,
                name: ''
            }]
        },
            {
                name: '终端',
                type: 'pie',
                radius: ['76%', '88%'],
                label: {
                    normal: {
                        position: 'outer'
                    }
                },
                data: [{
                    value: 50,
                    name: ''
                }, {
                    value: 1,
                    name: 'LoRa网关'
                }, {
                    value: 1,
                    name: 'LoRa采集终端'
                }, {
                    value: 1,
                    name: 'LoRa控制终端'
                }, {
                    value: 1,
                    name: '小型气象站'
                }, {
                    value: 1,
                    name: '北斗手持采集终端'
                }, {
                    value: 1,
                    name: '人员随身定位终端'
                }, {
                    value: 1,
                    name: '车辆调度终端'
                }, {
                    value: 43,
                    name: ''
                }]
            }
        ]
    };
    myChart.setOption(option, true);
}
function draw_force() {
    $("button").remove();
    $("#circle_data").html("");
    var oldChart = echarts.getInstanceByDom(document.getElementById("main"));
    oldChart.dispose();
    var myChart = echarts.init(document.getElementById('main'));
    var categories = [];
    categories[0] = {
        name: '综合平台'
    },
        categories[1] = {
            name: '东亚糖业'
        },
        categories[2] = {
            name: '博庆糖业'
        },
        categories[3] = {
            name: '农机服务'
        },
        categories[4] = {
            name: '广西糖网'
        },
        categories[5] = {
            name: '智慧泊车'
        },
        categories[6] = {
            name: '南宁车联网'
        },
        categories[7] = {
            name: '无车承运网'
        },
        categories[8] = {
            name: '顺丰速递'
        },
        categories[9] = {
            name: '顺丰大数据'
        };
    //  for  (var  i  =  0;  i  <  10;  i++)  {
    //          categories[i]  =  {
    //                  name:  '数据'  +  i
    //          };
    //  }
    /*        graph.nodes.forEach(function  (node)  {
      node.itemStyle  =  null;
      node.value  =  node.symbolSize;
      node.symbolSize  /=  1.5;
      node.label  =  {
      normal:  {
      show:  node.symbolSize  >  30
      }
      };
      node.category  =  node.data;
      });*/
    var option = {
        title: {
            text: 'Les  Miserables',
            subtext: 'Default  layout',
            top: 'bottom',
            left: 'right'
        },
        tooltip: {},
        legend: [{
            textStyle: {
                color: '#fff'
            },
            //  selectedMode:  'single',
            data: categories.map(function (a) {
                return a.name;
            })
        }],
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
            {
                name: 'Les  Miserables',
                type: 'graph',
                layout: 'none',
                data: [{
                    id: 0,
                    category: 0,
                    name: '综合平台',
                    symbolSize: 100.685715,
                    x: -266.82776, y: 299.6904, z: 0.0,
                    itemStyle: {
                        normal: {
                            borderColor: 'rgb(235,81,72)'
                        }
                    }
                }, {
                    id: 1,
                    category: 1,
                    name: '东亚糖业',
                    symbolSize: 41.0,
                    x: 105.93029, y: 260.8120565, z: 0.0,
                    itemStyle: {
                        normal: {
                            borderColor: 'rgb(236,81,72)'
                        }
                    }
                }, {
                    id: 2,
                    category: 2,
                    name: '博庆糖业',
                    symbolSize: 42.4,
                    x: -313.42786, y: -289.44803, z: 0.0,
                    itemStyle: {
                        normal: {
                            borderColor: 'rgb(236,81,72)'
                        }
                    }
                }, {
                    id: 3,
                    category: 3,
                    name: '农机服务',
                    symbolSize: 45.142853,
                    x: 82.80825, y: -203.1144, z: 0.0,
                    itemStyle: {
                        normal: {
                            borderColor: 'rgb(236,81,72)'
                        }
                    }
                }, {
                    id: 4,
                    category: 4,
                    name: '广西糖网',
                    symbolSize: 47.88571,
                    x: -81.46074, y: -204.20204, z: 0.0,
                    itemStyle: {
                        normal: {
                            borderColor: 'rgb(236,81,72)'
                        }
                    }
                }, {
                    id: 5,
                    category: 5,
                    name: '智慧泊车',
                    symbolSize: 23.2,
                    x: -385.6842, y: -20.206686, z: 0.0,
                    itemStyle: {
                        normal: {
                            borderColor: 'rgb(236,81,72)'
                        }
                    }
                }, {
                    id: 6,
                    category: 6,
                    name: '南宁车联网',
                    symbolSize: 61.600006,
                    x: 387.89572, y: 110.462326, z: 0.0,
                    itemStyle: {
                        normal: {
                            borderColor: 'rgb(236,81,72)'
                        }
                    }
                }, {
                    id: 7,
                    category: 7,
                    name: '无车承运网',
                    symbolSize: 53.37143,
                    x: 206.44687, y: -13.805411, z: 0.0,
                    itemStyle: {
                        normal: {
                            borderColor: 'rgb(236,81,72)'
                        }
                    }
                }, {
                    id: 8,
                    category: 8,
                    name: '顺丰速递',
                    symbolSize: 34.17143,
                    x: 516.40784, y: 47.242233, z: 0.0,
                    itemStyle: {
                        normal: {
                            borderColor: 'rgb(236,81,72)'
                        }
                    }
                }, {
                    id: 9,
                    category: 9,
                    name: '顺丰大数据',
                    symbolSize: 28.17143,
                    x: 402.40784, y: -147.242233, z: 0.0,
                    itemStyle: {
                        normal: {
                            borderColor: 'rgb(236,81,72)'
                        }
                    }
                }],
                links: [ //edges是其别名代表节点间的关系数据。
                    {
                        source: 0,
                        target: 1
                    }, {
                        source: 0,
                        target: 2
                    }, {
                        source: 0,
                        target: 3
                    }, {
                        source: 0,
                        target: 4
                    }, {
                        source: 0,
                        target: 5
                    }, {
                        source: 0,
                        target: 6
                    }, {
                        source: 0,
                        target: 7
                    }, {
                        source: 0,
                        target: 8
                    }, {
                        source: 0,
                        target: 9
                    }, {
                        source: 1,
                        target: 3
                    }, {
                        source: 1,
                        target: 4
                    }, {
                        source: 2,
                        target: 3
                    }, {
                        source: 2,
                        target: 4
                    }, {
                        source: 5,
                        target: 6
                    }, {
                        source: 5,
                        target: 8
                    }, {
                        source: 7,
                        target: 6
                    }, {
                        source: 8,
                        target: 9
                    }],
                categories: categories,
                roam: true,
                label: {
                    normal: {
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                lineStyle: {
                    normal: {
                        color: 'source',
                        curveness: 0.3
                    }
                }
            }]
    };

    myChart.on('click', function (param) {
        var name = param.name;
        //alert(name);
        //alert(typeof name);//string类型
        show_force_table(name);

    });
    myChart.setOption(option, true);

}


