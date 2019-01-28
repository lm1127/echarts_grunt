var sale_arr = ['日期','付款人数','付款订单','付款金额'];
var order_arr = ['日期','付款人数','浏览人数','订单转化率'];
var users_arr = ['日期','新用户','老用户','浏览人数'];
var saleHTML = '';
var orderHTML = '';
var usersHTML = '';
var xText = [];


//默认设置表头
setThead(sale_arr,saleHTML);
function setThead (arr, htmlStr) {
	$.each(arr,function (index,value) {
		htmlStr += '<td>'+value+'</td>';
	})
	$('thead').html(htmlStr);
}

$('.user_statistics').css({'display': 'none'})

$('.tab_sale').on('click', function() {
	setThead(sale_arr,saleHTML);
	getSaleData();
    $('.user_statistics').css({'display': 'none'})
    $('.sale_statistics').css({'display': 'block'})
	$(this).addClass("active");
	$('.tab_user').removeClass("active");
	$('.line').css({"transform":"translateX(0)"})
})

$('.tab_user').on('click', function() {
	// $.post('/api/shopanalyticsData',function(data){
	// 	deal_data = data.data.flowdata;
	// 	ringoneoption.legend.data[0] = {
    //         name: '新用户' + deal_data[deal_data.length-1].new_user_rate,
	//         icon: 'circle'
	
	//     }
	//     ringoneoption.legend.data[1] = {
	//         name: '老用户' + deal_data[deal_data.length-1].old_user_rate,
	//         icon: 'circle'
	// 	}
	// 	ringoneoption.series[0].data[0].value = parseFloat(deal_data[deal_data.length-1].new_user_rate);
	// 	ringoneoption.series[0].data[0].name = '新用户' + deal_data[deal_data.length-1].new_user_rate;
	// 	ringoneoption.series[0].data[1].value = parseFloat(deal_data[deal_data.length-1].old_user_rate);
	// 	ringoneoption.series[0].data[1].name = '老用户' + deal_data[deal_data.length-1].old_user_rate;
	// 	ringChartone.setOption(ringoneoption)
	// })
	$.post(shopanalytics,shopanalyticsObj,function(data){
		deal_data = data.data.flowdata;
		ringoneoption.legend.data[0] = {
            name: '新用户' + deal_data[deal_data.length-1].new_user_rate,
            icon: 'circle'
        }
        ringoneoption.legend.data[1] = {
            name: '老用户' + deal_data[deal_data.length-1].old_user_rate,
            icon: 'circle'
		}
		ringoneoption.series[0].data[0].value = parseFloat(deal_data[deal_data.length-1].new_user_rate);
		ringoneoption.series[0].data[0].name = '新用户' + deal_data[deal_data.length-1].new_user_rate;
		ringoneoption.series[0].data[1].value = parseFloat(deal_data[deal_data.length-1].old_user_rate);
		ringoneoption.series[0].data[1].name = '老用户' + deal_data[deal_data.length-1].old_user_rate;
		ringChartone.setOption(ringoneoption)
	})
	
	if ($(".new_old_users").hasClass('actived')) {
		setThead(users_arr,usersHTML);
		getuserVisitData();
	} else {
		setThead(order_arr,orderHTML);
		getorderData();
	}
    $('.sale_statistics').css({'display': 'none'})
    $('.user_statistics').css({'display': 'block'})
	$('.tab_user').addClass("active");
	$('.tab_sale').removeClass("active");
	$('.line').css({"transform":"translateX(.95rem)"})
	ringChartone.setOption(ringoneoption)
	ringCharttwo.setOption(ringtwooption)
})

$('.tab_title').on("click","span",function(event){
	var target = $(event.target)
	target.addClass("actived").siblings().removeClass("actived");
})

$(".order_transformation").on("click",function(){
	$(".ring").css({"display":"block"})
	$(".users").css({"display":"none"})
	getorderData();
})

$(".new_old_users").on("click",function(){
	$(".ring").css({"display":"none"})
	$(".users").css({"display":"block"})
	setThead(users_arr,usersHTML);
	getuserVisitData();
})

$('.num').on('click',function(){
	myChart.setOption(numoption);
})
$(".order").on("click",function(){
	myChart.setOption(orderoption);
})
$(".money").on("click",function(){
	myChart.setOption(moneyoption)
})
$('.order_transformation').on("click",function(){
	setThead(order_arr,orderHTML);
})
