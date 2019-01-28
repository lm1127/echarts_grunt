
var orderoption = {
	xAxis : [
        {
            type : 'category',
            data : []
        }
    ],
	yAxis : [
		{
			name:"单位 :  笔"
		}
	],
	series : [
		{
			name:'付款订单',
			type:'bar',
			data:[],
			color: '#10ADF8',
			barWidth: '20%',
			itemStyle: {
				normal: {
					//柱形图圆角，初始化效果
					barBorderRadius:[50,50 , 0, 0]
				}
			}
		}
	]
}