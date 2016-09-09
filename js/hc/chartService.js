app.service('ChartServiceHc', function() {
    this.createChart = function(containerCC, title, Now, Required, changeTheme) {

        // var HCDefaults = $.extend(true, {}, Highcharts.getOptions(), {});

        if (changeTheme) {
            Highcharts.theme.chart.style.fontFamily = 'Arial';
            Highcharts.theme.title.style.fontWeight = 'normal';
            Highcharts.theme.title.style.fontSize = '15px';
            Highcharts.theme.xAxis.labels.style.fontWeight = 'normal';
            Highcharts.theme.yAxis.labels.style.fontWeight = 'normal';
            Highcharts.theme.yAxis.title.style.fontWeight = 'normal';
            Highcharts.setOptions(Highcharts.theme);
        } else {
            Highcharts.theme.chart.style.fontFamily = 'Dosis, sans-serif';
            Highcharts.theme.title.style.fontWeight = 'bold';
            Highcharts.theme.title.style.fontSize = '20px';
            Highcharts.theme.xAxis.labels.style.fontWeight = 'bold';
            Highcharts.theme.yAxis.labels.style.fontWeight = 'bold';
            Highcharts.theme.yAxis.title.style.fontWeight = 'bold';
            Highcharts.setOptions(Highcharts.theme);
        }


        Highcharts.setOptions({
            lang: {
                thousandsSep: ','
            }
        });

        $(containerCC).highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: title,
                marginLeft: 0,
                marginRight: 0
            },
            exporting: {
                enabled: false
            },
            xAxis: {
                type: 'category',
                labels: {
                    autoRotation: false,
                }
            },
            yAxis: {
                title: {
                    text: 'Amount Cover ($)'
                }

            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,

                }
            },
            tooltip: {
                headerFormat: '<span style="font-weight:700;font-size:14px;">{point.key}</span><br>',
                pointFormatter: function() {
                    return '<b>' + 'Amount : $' + Highcharts.numberFormat((((this.y)).toFixed(2)), 2, '.') + '</b>';

                }
            },
            credits: {
                enabled: false
            },

            series: [{
                colorByPoint: true,
                data: [{
                    name: 'Now',
                    y: Now,
                    // drilldown: 'Microsoft Internet Explorer'
                }, {
                    name: 'Required',
                    y: Required,
                    // drilldown: 'Safari'
                }]
            }],

        });

    }
});
