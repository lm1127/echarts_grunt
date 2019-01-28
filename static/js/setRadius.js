var ringChartone = echarts.init(document.getElementById('order_ring_one')); 
var ringCharttwo = echarts.init(document.getElementById('order_ring_two')); 
var ringoneoption = {
	legend: {
		itemWidth: 9,
		iteHeight: 9,
		orient: '',
		y: 'bottom',
		textStyle: {
			color: '#91959e'
		},
		data:['','']
	},
	graphic:{
		type:'text',
		left:'center',
		top:'center',
		style:{
			text:'',
			textAlign:'center',
			fill:'#000',
			width:30,
			height:30,
			fontSize: 12
		}
	},
	series: [
		{
			type:'pie',
			radius: ['70%', '85%'],
			avoidLabelOverlap: false,
			hoverAnimation:false,
			silent:true,
			label: {
				normal: {
					show: false,
					position: 'center'
				}
			},
			labelLine: {
				normal: {
					show: false,
				}
			},
			data:[
				{value:0, name:'',itemStyle:{color: '#EBB8E4',fontSize: '12',}},
				{value:0, name:'',itemStyle:{color: '#317CD6',fontSize: '12',}}
			]
		}
	]
};
var ringtwooption = {
	legend: {
		textStyle: {
			color: '#91959e'
		},
		itemWidth: 9,
		iteHeight: 9,
		orient: 'vertical',
		y: 'bottom',
		data:['','']
	},
	graphic:{
		type:'text',
		left:'center',
		top:'center',
		style:{
			text:'昨日订单转化率',
			subtext: '',
			textAlign:'center',
			fill:'#000',
			width:30,
			height:30,
			fontSize: 12
		}
	},
	series: [
		{
			type:'pie',
			radius: ['70%', '85%'],
			avoidLabelOverlap: false,
			hoverAnimation:false,
			silent:true,
			label: {
				normal: {
					show: false,
					position: 'center'
				}
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			data:[
				{value:0, name:'',itemStyle:{color: '#CBE7D6'}},
				{value:0, name:'',itemStyle:{color: '#54C2C2'}}
			]
		}
	]
}
