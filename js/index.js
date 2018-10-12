/*
 * @Author: Administrator
 * @Date:   2018-10-09 09:55:03
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-10-12 21:19:16
 */
$(function () {

    $('.con').fullpage({
        navigation: true,
        anchors: ['page1', 'page2', 'page3', 'page4'],
        menu: '.menu',
        navigationTooltips: ['首页', '我的技能', '我的作品', '我的爱好'],
        verticalCentered: false,

    });

    // snow();
    function snow() {
        var minSize = 5; //最小字体
        var maxSize = 50;//最大字体
        var newOne = 100; //生成雪花间隔
        var flakColor = "#fff"; //雪花颜色
        var flak = $("<div class='xh'></div>").css({position: "absolute", "top": "0px"}).html("❉");//定义一个雪花
        var dhight = $(window).height(); //定义视图高度
        var dw = $(window).width(); //定义视图宽度
        setInterval(function () {
            var sizeflak = minSize + Math.random() * maxSize; //产生大小不等的雪花
            var startLeft = Math.random() * dw; //雪花生成是随机的left值
            var startopcity = 0.7 + Math.random() * 0.3; //随机透明度
            var endpositionTop = dhight - 100; //雪花停止top的位置
            var endLeft = Math.random() * dw; //雪花停止的left位置
            var durationfull = 5000 + Math.random() * 5000; //雪花飘落速度不同
            flak.clone().appendTo($("body")).css({
                "left": startLeft,
                "opacity": startopcity,
                "font-size": sizeflak,
                "color": flakColor
            }).animate({
                "top": endpositionTop,
                "left": endLeft,
                "apacity": 0.1
            }, durationfull, function () {
                $(this).remove()
            });
        }, newOne);
    }

    // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        option = {
    title : {
        text: '我的技能',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'我的技能',
            type:'pie',
            radius : [30, 110],
            center : ['75%', '50%'],
            roseType : 'area',
            data:[
                {value:10, name:'php'},
                {value:5, name:'ps'},
                {value:15, name:'html'},
                {value:25, name:'css'},
                {value:20, name:'javaScript'}
            ]
        }
    ]
};


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

})
