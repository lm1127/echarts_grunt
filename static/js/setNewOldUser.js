var NewOldUser = echarts.init(document.getElementById('users')); 
var useroption = {
	tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        color: '#91959e',
        itemWidth: 9,
		iteHeight: 9,
        fontSize: 12,
        padding: 20,    // [5, 10, 15, 20]
        itemGap: 10,
        textStyle: {
			color: '#91959e'
        },
        x:'right',
        data:[
            {
                name:'新用户',
                icon : 'circle'
            },
            {
                name:'老用户',
                icon : 'circle'
            },
        ]
    },
    grid:{
		containLabel:true
	},
    xAxis : [
        {
            type : 'category',
            data : [],
            axisLine:{
				lineStyle: {
					color: '#91959e'
				}
			}
        }
    ],
    yAxis : [
        {
            name:"单位 :  人",
            type : 'value',
            minInterval : 1,
            splitLine: {
                lineStyle: {
                    color: '#ebebec',
                    type: 'dotted'
                }
            },
            axisLine:{
                lineStyle:{
                    width: 0,
                    color: '#91959e'
                }
            }
        }
    ],
    series : [
        {
            name:'老用户',
            type:'bar',
            stack: '搜索引擎',
			data:[],
			color: '#317CD6',
            barWidth: '10%',
        },
        {
            name:'新用户',
            type:'bar',
            stack: '搜索引擎',
			data:[],
			color: '#EBB8E4',
            barWidth: '10%',
            itemStyle: {
				normal: {
					//柱形图圆角，初始化效果
					barBorderRadius:[50,50 , 0, 0]
				}
			}
        }  
    ]
}