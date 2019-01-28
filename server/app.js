var express = require('express');
var https = require('https');
var util = require('util');
var cors = require('cors');
var path = require("path")
var app = express();
var querystring = require('querystring');
var http = require('http');
var url = require('url');

app.use(cors());
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../", "statistics.html"));
});
app.use("/static", express.static(path.join(__dirname, "../", "static")));
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") res.send(200); /*让options请求快速返回*/
    else next();
});

var server = app.listen(9000, function () { /*监听端口*/
    var host = server.address().address;
    var port = server.address().port;
});

// var host = 'http://10.188.40.24:8056';
// var analytics = host + '/trade/na/analytics'; //交易分析
// var shopanalytics = host + '/merchant/na/shopanalytics'; //流量分析

// var analyticsObj = {
//     shop_id: 15217252559008,
//     begin_date: 1523349017,
//     end_date: 1531211417
// };
// var shopanalyticsObj = {
//     shop_id: 15217252559008
// };

// function toPHP(postUrl, urlstr, bodyQueryStr) {
//     //HTTP请求选项
//     var contentStr = querystring.stringify(bodyQueryStr);
//     var contentLen = Buffer.byteLength(contentStr, 'utf8');
//     var httpModule = urlstr.indexOf('https') === 0 ? https : http;
//     var urlData = url.parse(urlstr);
//     var cookie = 'USS=AAAADAAAqVkQwdHAfS1d8aD54JEhwdxp6OSA4GFNLeChORFIULhkdcWk4M2lsHA46VoAAJL0-BF2eQAAHEA0X39XXx8~FVpBL011BkEuPTJQRgVZcB1SHhcWTClwPCFpPVw7V3EtTCEwNUMoLGk3YnoFFHNXLnVJX5Dm0QrWifwHc38uDdbrMA3gecEQQeBs; STOKEN=AgAAKARAABxa2whbVV8aDVSbwsPTwdOBFY3cxEvKkckVXdjaBbQAAPLU5B1-ywAA5yFx4dPip8YlgQECMICVYglQgSXmARBmIAALoDsxYbZjYAKFQQGdlAgR12XysaEZ';
//     var opt = {
//         hostname: urlData.hostname,
//         path: urlData.path,
//         port: urlData.port,
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//             'Content-Length': contentLen,
//             'Cookie': cookie
//         }
//     };
//     app.get(postUrl, function (req, res) {
//         var req = httpModule.request(opt, function (httpRes) {
//             var buffers = [];
//             httpRes.on('data', function (chunk) {
//                 buffers.push(chunk);
//             });

//             httpRes.on('end', function (chunk) {
//                 var wholeData = Buffer.concat(buffers);
//                 var dataStr = wholeData.toString('utf8');
//                 res.send(JSON.stringify(dataStr));
//             });
//         }).on('error', function (err) {
//             console.log('error ' + err);
//         });

//         //写入数据，完成发送
//         req.write(contentStr);
//         req.end();
//     });
    
// }

var obj = {
    "errno": 0,
    "errmsg": "success",
    "servertime": 1528806321,
    "data": {
    "deal_data": [{
    "date": "2018-06-05",
    "visit_uv": 120,
    "order_person": 0,
    "order_count": 0,
    "order_price": 0,
    "pay_person": 80,
    "pay_count": 0,
    "pay_price": 10,
    "per_person": 0,
    "conversion_rate_success": "12.5%",
    "conversion_rate_fail": "87.5%"
    }, {
    "date": "2018-06-06",
    "visit_uv": 7,
    "order_person": 1,
    "order_count": 3,
    "order_price": 3,
    "pay_person": 100,
    "pay_count": 3,
    "pay_price": 3,
    "per_person": 3,
    "conversion_rate_success": "12.5%",
    "conversion_rate_fail": "87.5%"
    }, {
    "date": "2018-06-07",
    "visit_uv": 9,
    "order_person": 1,
    "order_count": 20,
    "order_price": 23,
    "pay_person": 20,
    "pay_count": 1,
    "pay_price": 23,
    "per_person": 23,
    "conversion_rate_success": "12.5%",
    "conversion_rate_fail": "87.5%"
    }, {
    "date": "2018-06-08",
    "visit_uv": 17,
    "order_person": 1,
    "order_count": 4,
    "order_price": 4,
    "pay_person": 100,
    "pay_count": 1,
    "pay_price": 4,
    "per_person": 4,
    "conversion_rate_success": 0,
    "conversion_rate_fail": "87.5%"
    }, {
    "date": "2018-06-09",
    "visit_uv": 2,
    "order_person": 0,
    "order_count": 0,
    "order_price": 0,
    "pay_person": 10,
    "pay_count": 0,
    "pay_price": 0,
    "per_person": 0,
    "conversion_rate_success": "12.5%",
    "conversion_rate_fail": "87.5%"
    }, {
    "date": "2018-06-10",
    "visit_uv": 3,
    "order_person": 0,
    "order_count": 0,
    "order_price": 0,
    "pay_person": 100,
    "pay_count": 0,
    "pay_price": 3,
    "per_person": 0,
    "conversion_rate_success": "12.5%",
    "conversion_rate_fail": "87.5%"
    }, {
    "date": "2018-06-11",
    "visit_uv": 10,
    "order_person": 1,
    "order_count": 1,
    "order_price": 1,
    "pay_person": 50,
    "pay_count": 1,
    "pay_price": 1,
    "per_person": 1,
    "conversion_rate_success": "50%",
    "conversion_rate_fail": "50%"
    }],
    "order_person_total": 4,
    "order_count_total": 28,
    "order_price_total": 31,
    "pay_person_total": 4,
    "pay_count_total": 6,
    "pay_price_total": 31,
    "per_person_total": 31,
    "visit_uv_total": 60
    }
   }
   var obj1 = {
    "errno": 0,
    "errmsg": "success",
    "servertime": 1531311740,
    "data": {
        "flowdata": [
            {
                "id": 39,
                "shop_id": 15217252559008,
                "app_id": "wx5254dc1e3ca3a5be",
                "flow_data": "{\"visit_pv\":101,\"visit_uv\":8,\"visit_uv_new\":0,\"share_pv\":0,\"share_uv\":0,\"session_cnt\":16}",
                "create_time": 1531065600,
                "date": "2018-07-09",
                "visit_pv": 101,
                "visit_uv": 8,
                "visit_uv_new": 0,
                "share_pv": 0,
                "share_uv": 0,
                "visit_uv_old": 8,
                "new_user_rate": '20%',
                "old_user_rate": "80%",
                "session_cnt": 16
            },
            {
                "id": 40,
                "shop_id": 15217252559008,
                "app_id": "wx5254dc1e3ca3a5be",
                "flow_data": "{\"visit_pv\":101,\"visit_uv\":8,\"visit_uv_new\":5,\"share_pv\":0,\"share_uv\":0,\"session_cnt\":16}",
                "create_time": 1531152000,
                "date": "2018-07-10",
                "visit_pv": 101,
                "visit_uv": 8,
                "visit_uv_new": 5,
                "share_pv": 0,
                "share_uv": 0,
                "visit_uv_old": 3,
                "new_user_rate": "62.5%",
                "old_user_rate": "37.5%",
                "session_cnt": 16
            },
            {
                "id": 40,
                "shop_id": 15217252559008,
                "app_id": "wx5254dc1e3ca3a5be",
                "flow_data": "{\"visit_pv\":101,\"visit_uv\":8,\"visit_uv_new\":5,\"share_pv\":0,\"share_uv\":0,\"session_cnt\":16}",
                "create_time": 1531152000,
                "date": "2018-07-11",
                "visit_pv": 101,
                "visit_uv": 8,
                "visit_uv_new": 0,
                "share_pv": 0,
                "share_uv": 0,
                "visit_uv_old": 0,
                "new_user_rate": "62.5%",
                "old_user_rate": "37.5%",
                "session_cnt": 16
            },
            {
                "id": 40,
                "shop_id": 15217252559008,
                "app_id": "wx5254dc1e3ca3a5be",
                "flow_data": "{\"visit_pv\":101,\"visit_uv\":8,\"visit_uv_new\":5,\"share_pv\":0,\"share_uv\":0,\"session_cnt\":16}",
                "create_time": 1531152000,
                "date": "2018-07-12",
                "visit_pv": 101,
                "visit_uv": 8,
                "visit_uv_new": 10,
                "share_pv": 0,
                "share_uv": 0,
                "visit_uv_old": 50,
                "new_user_rate": "62.5%",
                "old_user_rate": "37.5%",
                "session_cnt": 16
            }
        ],
        "visit_pv_total": 202,
        "visit_uv_total": 16,
        "visit_uv_new_total": 5,
        "share_pv_total": 0,
        "share_uv_total": 0,
        "session_cnt_total": 32
    }
}
   
app.use('/api/analyticsData',function(req,res){
    res.status('200').json(obj)
})
app.use('/api/shopanalyticsData',function(req,res){
    res.status('200').json(obj1)
})
// toPHP('/analyticsData',analytics, analyticsObj); //交易分析

// toPHP('/shopanalyticsData', shopanalytics); //流量分析