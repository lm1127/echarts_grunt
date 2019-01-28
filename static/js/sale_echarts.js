var myChart = echarts.init(document.getElementById('sale_echarts'));
var options = {
	tooltip : {
		trigger: 'axis'
	},
	legend: {
		itemWidth: 9,
		iteHeight: 9,
		textStyle: {
			color: '#91959e'
		},
		data:[
			{
				name: "付款人数",
				icon: 'circle'
			},
			{
				name: '付款订单',
				icon: 'circle'
			},
			{
				name: '付款金额',
				icon: 'circle'
			}
		],
		x:'right'
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
			nameLocation: 'end',
			splitLine: {
                lineStyle: {
					color: '#ebebec',
					type: 'dotted'
				}
			},
			minInterval : 1,
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
			name:'付款人数',
			type:'bar',
			data:[],
			color: '#FFAB27',
			barWidth: '20%',
			itemStyle: {
				normal: {
					//柱形图圆角，初始化效果
					barBorderRadius:[50,50 , 0, 0]
				}
			}
		}
	]
};

