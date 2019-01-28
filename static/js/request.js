// $.get('http://localhost:9000/analyticsData',function(data){
//     console.log(data);
// });
// $.get('http://localhost:9000/shopanalyticsData',function(data){
//     console.log(data);
// });



// function GetDateStr(AddDayCount) {
//     var arr = AddDayCount.split('-');
//     arr[1] = Number(arr[1]);
//     return arr[1]+"月"+arr[2]+'日'; 
// }

// $.post('/api/analyticsData',function(data){
//     deal_data = data.data.deal_data;
// 	$.each(deal_data,function (ind, val) {
// 		//设置统计图数据
// 		options.series[0].data.unshift(val.pay_person);
// 	})
// 	myChart.setOption(options);
// })

// getanalyticsData();
// function getanalyticsData() {
//     $('.table_wrap tr').remove();
//     $.post('/api/analyticsData',function(data){
//         console.log(data);
//         //数据清空
//         numoption.series[0].data = [];
//         orderoption.series[0].data = [];
//         moneyoption.series[0].data = [];
//         //获取到了表格中数据
//         deal_data = data.data.deal_data;
//         var dateArr = [];//日期数组
//         for (var i = 0; i < deal_data.length; i++) {
//             dateArr.unshift(GetDateStr(deal_data[i].date));
//         }
//         dateArr[0] = '昨天';
//         options.xAxis[0].data = dateArr;
//         numoption.xAxis[0].data = dateArr;
//         orderoption.xAxis[0].data = dateArr;
//         moneyoption.xAxis[0].data = dateArr;
//         $.each(deal_data,function (ind, val) {
//             //设置统计图数据
//             numoption.series[0].data.unshift(val.pay_person);
//             orderoption.series[0].data.unshift(val.pay_count);
//             moneyoption.series[0].data.unshift(payPrice(val.pay_price));
//         })
//         myChart.setOption(options);
//         //设置表格内容及侧边日期
//         $.each(dateArr, function (index, value) {
//             if (deal_data[dateArr.length-index-1].pay_person == 0) deal_data[dateArr.length-index-1].pay_person = '-';
//             if (deal_data[dateArr.length-index-1].pay_count == 0) deal_data[dateArr.length-index-1].pay_count = '-';
//             if (deal_data[dateArr.length-index-1].pay_price == 0) deal_data[dateArr.length-index-1].pay_price = '-';
//             $('.table_wrap').append('<tr><td>'+value+'</td><td>'+deal_data[dateArr.length-index-1].pay_person+'</td><td>'+deal_data[dateArr.length-index-1].pay_count+'</td><td>'+payPrice(deal_data[dateArr.length-index-1].pay_price)+'</td></tr>');
//         })
//     })
// }

// function getSaleData() {
//     $('.table_wrap tr').remove();
//     $.post('/api/analyticsData',function(data){
//         //获取到了表格中数据
//         deal_data = data.data.deal_data;
//         var dateArr = [];//日期数组
//         for (var i = 0; i < deal_data.length; i++) {
//             dateArr.unshift(GetDateStr(deal_data[i].date));
//         }
//         dateArr[0] = '昨天';
//         //设置表格内容及侧边日期
//         $.each(dateArr, function (index, value) {
//             if (deal_data[dateArr.length-index-1].pay_person == 0) deal_data[dateArr.length-index-1].pay_person = '-';
//             if (deal_data[dateArr.length-index-1].pay_count == 0) deal_data[dateArr.length-index-1].pay_count = '-';
//             if (deal_data[dateArr.length-index-1].pay_price == 0) deal_data[dateArr.length-index-1].pay_price = '-';
//             $('.table_wrap').append('<tr><td>'+value+'</td><td>'+deal_data[dateArr.length-index-1].pay_person+'</td><td>'+deal_data[dateArr.length-index-1].pay_count+'</td><td>'+payPrice(deal_data[dateArr.length-index-1].pay_price)+'</td></tr>');
//         })
//     })
// }

// function getorderData() {
//     $('.table_wrap tr').remove();
//     $.post('/api/analyticsData',function(data){
//         setThead(order_arr,orderHTML);
//         //获取到了表格中数据
//         deal_data = data.data.deal_data;
//         var dateArr = [];//日期数组
//         for (var i = 0; i < deal_data.length; i++) {
//             dateArr.unshift(GetDateStr(deal_data[i].date));
//         }
//         dateArr[0] = '昨天';
//         //设置表格内容及侧边日期
//         $.each(dateArr, function (index, value) {
//             if (deal_data[dateArr.length-index-1].pay_person == 0) deal_data[dateArr.length-index-1].pay_person = '-';
//             if (deal_data[dateArr.length-index-1].visit_uv == 0) deal_data[dateArr.length-index-1].visit_uv = '-';
//             if (deal_data[dateArr.length-index-1].conversion_rate_success == 0) deal_data[dateArr.length-index-1].conversion_rate_success = '-';
//             $('.table_wrap').append('<tr><td>'+value+'</td><td>'+deal_data[dateArr.length-index-1].pay_person+'</td><td>'+deal_data[dateArr.length-index-1].visit_uv+'</td><td>'+deal_data[dateArr.length-index-1].conversion_rate_success+'</td></tr>');
//         })
//         ringoneoption.graphic.style.text = '昨日浏览人数\n\n' +deal_data[deal_data.length-1].visit_uv;
//         ringtwooption.graphic.style.text = '昨日订单转化率\n\n' + deal_data[deal_data.length-1].conversion_rate_success;
//         ringtwooption.legend.data[0] = {
//             name: '未转化' + deal_data[deal_data.length-1].conversion_rate_fail,
//             icon: 'circle'
//         }
//         ringtwooption.legend.data[1] = {
//             name: '已转化' + deal_data[deal_data.length-1].conversion_rate_success,
//             icon: 'circle'
//         }
//         ringtwooption.series[0].data[0].name = '未转化' + deal_data[deal_data.length-1].conversion_rate_fail;
//         ringtwooption.series[0].data[1].name = '已转化' + deal_data[deal_data.length-1].conversion_rate_success;
//         ringtwooption.series[0].data[0].value = parseFloat(deal_data[deal_data.length-1].conversion_rate_fail);
//         ringtwooption.series[0].data[1].value = parseFloat(deal_data[deal_data.length-1].conversion_rate_success);
//         ringChartone.setOption(ringoneoption);
//         ringCharttwo.setOption(ringtwooption);
//     })
// }

// function getuserVisitData() {
//     $('.table_wrap tr').remove();
//     useroption.series[0].data = [];
//     useroption.series[1].data = [];
//     $.post('/api/shopanalyticsData',function(data){
//         setThead(users_arr,usersHTML);
//         // 获取到了表格中数据
//         deal_data = data.data.flowdata;
//         var dateArr = [];//日期数组
//         for (var i = 0; i < deal_data.length; i++) {
//             dateArr.unshift(GetDateStr(deal_data[i].date));
//         }
//         dateArr[0] = '昨天';
//         useroption.xAxis[0].data = dateArr;
//         //设置表格内容及侧边日期
//         $.each(dateArr, function (index, value) {
//             if (deal_data[dateArr.length-index-1].visit_uv_new == 0) deal_data[dateArr.length-index-1].visit_uv_new = '-';
//             if (deal_data[dateArr.length-index-1].visit_uv == 0) deal_data[dateArr.length-index-1].visit_uv = '-';
//             if (deal_data[dateArr.length-index-1].visit_uv_old == 0) deal_data[dateArr.length-index-1].visit_uv_old = '-';
//             $('.table_wrap').append('<tr><td>'+value+'</td><td>'+deal_data[dateArr.length-index-1].visit_uv_new+'</td><td>'+deal_data[dateArr.length-index-1].visit_uv_old+'</td><td>'+deal_data[dateArr.length-index-1].visit_uv+'</td></tr>');
//         })
//         $.each(deal_data,function (ind, val) {
//             //设置统计图数据
//             useroption.series[1].data.unshift(val.visit_uv_new);
//             useroption.series[0].data.unshift(val.visit_uv_old);
//         })
//         ringoneoption.legend.data[0] = {
//             name: '新用户' + deal_data[deal_data.length-1].new_user_rate,
//             icon: 'circle'
//         }
//         ringoneoption.legend.data[1] = {
//             name: '老用户' + deal_data[deal_data.length-1].old_user_rate,
//             icon: 'circle'
//         }
//         NewOldUser.setOption(useroption)
//     })
// }

// shopanalytics,shopanalyticsObj
// analytics,analyticsObj
// var host = 'http://10.188.40.24:8056';
var host = '';
var params = window.location.href.split('?')[1].split('&');
var paramsObj = {};
var reg = /(\w+)=(\w+)/;
for (var i = 0; i < params.length; i++) {
    paramsObj[params[i].match(reg)[1]] = params[i].match(reg)[2]
}

var analytics = host + '/trade/na/analytics'; //交易分析
var shopanalytics = host + '/merchant/na/shopanalytics'; //流量分析

var analyticsObj = {
    shop_id: paramsObj.shop_id,
    begin_date: paramsObj.begin_date,
    end_date: paramsObj.end_date
};
var shopanalyticsObj = {
    shop_id: paramsObj.shop_id,
    begin_date: paramsObj.begin_date,
    end_date: paramsObj.end_date
};

$.post(analytics,analyticsObj,function(data){
    deal_data = data.data.deal_data;
	$.each(deal_data,function (ind, val) {
		//设置统计图数据
		options.series[0].data.unshift(val.pay_person);
	})
	myChart.setOption(options);
})

function payPrice (price) {
    if (price != '-') {
        return price/100;
    } else {
        return '-';
    }
}

function GetDateStr(AddDayCount) {
    var arr = AddDayCount.split('-');
    arr[1] = Number(arr[1]);
    return arr[1]+"月"+arr[2]+'日'; 
}

getanalyticsData();
function getanalyticsData() {
    $('.table_wrap tr').remove();
    $.post(analytics,analyticsObj,function(data){
        //数据清空
        numoption.series[0].data = [];
        orderoption.series[0].data = [];
        moneyoption.series[0].data = [];
        //获取到了表格中数据
        deal_data = data.data.deal_data;
        var dateArr = [];//日期数组
        for (var i = 0; i < deal_data.length; i++) {
            dateArr.unshift(GetDateStr(deal_data[i].date));
        }
        dateArr[0] = '昨天';
        options.xAxis[0].data = dateArr;
        numoption.xAxis[0].data = dateArr;
        orderoption.xAxis[0].data = dateArr;
        moneyoption.xAxis[0].data = dateArr;
        $.each(deal_data,function (ind, val) {
            //设置统计图数据
            numoption.series[0].data.unshift(val.pay_person);
            orderoption.series[0].data.unshift(val.pay_count);
            moneyoption.series[0].data.unshift(payPrice(val.pay_price));
        })
        myChart.setOption(options);
        //设置表格内容及侧边日期
        $.each(dateArr, function (index, value) {
            if (deal_data[dateArr.length-index-1].pay_person == 0) deal_data[dateArr.length-index-1].pay_person = '-';
            if (deal_data[dateArr.length-index-1].pay_count == 0) deal_data[dateArr.length-index-1].pay_count = '-';
            if (deal_data[dateArr.length-index-1].pay_price == 0) deal_data[dateArr.length-index-1].pay_price = '-';
            $('.table_wrap').append('<tr><td>'+value+'</td><td>'+deal_data[dateArr.length-index-1].pay_person+'</td><td>'+deal_data[dateArr.length-index-1].pay_count+'</td><td>'+payPrice(deal_data[dateArr.length-index-1].pay_price)+'</td></tr>');
        })
    })
}

function getSaleData() {
    $('.table_wrap tr').remove();
    $.post(analytics,analyticsObj,function(data){
        //获取到了表格中数据
        deal_data = data.data.deal_data;
        var dateArr = [];//日期数组
        for (var i = 0; i < deal_data.length; i++) {
            dateArr.unshift(GetDateStr(deal_data[i].date));
        }
        dateArr[0] = '昨天';
        //设置表格内容及侧边日期
        $.each(dateArr, function (index, value) {
            if (deal_data[dateArr.length-index-1].pay_person == 0) deal_data[dateArr.length-index-1].pay_person = '-';
            if (deal_data[dateArr.length-index-1].pay_count == 0) deal_data[dateArr.length-index-1].pay_count = '-';
            if (deal_data[dateArr.length-index-1].pay_price == 0) deal_data[dateArr.length-index-1].pay_price = '-';
            $('.table_wrap').append('<tr><td>'+value+'</td><td>'+deal_data[dateArr.length-index-1].pay_person+'</td><td>'+deal_data[dateArr.length-index-1].pay_count+'</td><td>'+payPrice(deal_data[dateArr.length-index-1].pay_price)+'</td></tr>');
        })
    })
}

function getorderData() {
    $('.table_wrap tr').remove();
    $.post(analytics,analyticsObj,function(data){
        setThead(order_arr,orderHTML);
        //获取到了表格中数据
        deal_data = data.data.deal_data;
        var dateArr = [];//日期数组
        for (var i = 0; i < deal_data.length; i++) {
            dateArr.unshift(GetDateStr(deal_data[i].date));
        }
        dateArr[0] = '昨天';
        //设置表格内容及侧边日期
        $.each(dateArr, function (index, value) {
            if (deal_data[dateArr.length-index-1].pay_person == 0) deal_data[dateArr.length-index-1].pay_person = '-';
            if (deal_data[dateArr.length-index-1].visit_uv == 0) deal_data[dateArr.length-index-1].visit_uv = '-';
            if (deal_data[dateArr.length-index-1].conversion_rate_success == 0) deal_data[dateArr.length-index-1].conversion_rate_success = '-';
            $('.table_wrap').append('<tr><td>'+value+'</td><td>'+deal_data[dateArr.length-index-1].pay_person+'</td><td>'+deal_data[dateArr.length-index-1].visit_uv+'</td><td>'+deal_data[dateArr.length-index-1].conversion_rate_success+'</td></tr>');
        })
        ringoneoption.graphic.style.text = '昨日浏览人数\n\n' +deal_data[deal_data.length-1].visit_uv;
        ringtwooption.graphic.style.text = '昨日订单转化率\n\n' + deal_data[deal_data.length-1].conversion_rate_success;
        ringtwooption.legend.data[0] = {
            name: '未转化' + deal_data[deal_data.length-1].conversion_rate_fail,
            icon: 'circle'
        }
        ringtwooption.legend.data[1] = {
            name: '已转化' + deal_data[deal_data.length-1].conversion_rate_success,
            icon: 'circle'
        }
        ringtwooption.series[0].data[0].name = '未转化' + deal_data[deal_data.length-1].conversion_rate_fail;
        ringtwooption.series[0].data[1].name = '已转化' + deal_data[deal_data.length-1].conversion_rate_success;
        ringtwooption.series[0].data[0].value = parseFloat(deal_data[deal_data.length-1].conversion_rate_fail);
        ringtwooption.series[0].data[1].value = parseFloat(deal_data[deal_data.length-1].conversion_rate_success);
        ringChartone.setOption(ringoneoption);
        ringCharttwo.setOption(ringtwooption);
    })
}

function getuserVisitData() {
    $('.table_wrap tr').remove();
    useroption.series[0].data = [];
    useroption.series[1].data = [];
    $.post(shopanalytics,shopanalyticsObj,function(data){
        setThead(users_arr,usersHTML);
        //获取到了表格中数据
        deal_data = data.data.flowdata;
        var dateArr = [];//日期数组
        for (var i = 0; i < deal_data.length; i++) {
            dateArr.unshift(GetDateStr(deal_data[i].date));
        }
        dateArr[0] = '昨天';
        useroption.xAxis[0].data = dateArr;
        //设置表格内容及侧边日期
        $.each(dateArr, function (index, value) {
            if (deal_data[dateArr.length-index-1].visit_uv_new == 0) deal_data[dateArr.length-index-1].visit_uv_new = '-';
            if (deal_data[dateArr.length-index-1].visit_uv == 0) deal_data[dateArr.length-index-1].visit_uv = '-';
            if (deal_data[dateArr.length-index-1].visit_uv_old == 0) deal_data[dateArr.length-index-1].visit_uv_old = '-';
            $('.table_wrap').append('<tr><td>'+value+'</td><td>'+deal_data[dateArr.length-index-1].visit_uv_new+'</td><td>'+deal_data[dateArr.length-index-1].visit_uv_old+'</td><td>'+deal_data[dateArr.length-index-1].visit_uv+'</td></tr>');
        })
        $.each(deal_data,function (ind, val) {
            //设置统计图数据
            useroption.series[1].data.unshift(val.visit_uv_new);
            useroption.series[0].data.unshift(val.visit_uv_old);
        })
        ringoneoption.legend.data[0] = {
            name: '新用户' + deal_data[deal_data.length-1].new_user_rate,
            icon: 'circle'
        }
        ringoneoption.legend.data[1] = {
            name: '老用户' + deal_data[deal_data.length-1].old_user_rate,
            icon: 'circle'
        }
        NewOldUser.setOption(useroption)
    })
}