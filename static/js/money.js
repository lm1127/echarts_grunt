
var moneyoption = {
    xAxis : [
        {
            type : 'category',
            data : []
        }
    ],
    yAxis : [
        {
            name:"单位 :  元"
        }
    ],
    series : [
        {
            name:'付款金额',
            type:'line',
            data:[],
            connectNulls: true,
            areaStyle:{
                color: "#FEF2F5"
            },
            color: '#F983A3',
            barWidth: '20%',
            symbol: 'circle',
            symbolSize: 7
        }
    ]
}