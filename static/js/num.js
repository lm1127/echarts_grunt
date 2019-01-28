
var numoption = {
	xAxis : [
        {
            type : 'category',
            data : []
        }
    ],
	yAxis : [
		{
			name:"单位:人"
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
