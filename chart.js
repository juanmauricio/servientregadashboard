



/*




var chartDataSource3 = [
    { hora: '12:25', Oceania: 99.9 },
    { hora: '12:26', Oceania: 99.8 },
    { hora: '12:27', Oceania: 99.8 },
    { hora: '12:28', Oceania: 99.7 },
    { hora: '12:29', Oceania: 99.9 },
    { hora: '12:30', Oceania: 100 },
    { hora: '12:31', Oceania: 99.9 }
];

var currentSQLMEMMeasure;

var customStoreSQLMEM = new DevExpress.data.CustomStore({
    load: function (loadOptions) {
        var d = $.Deferred();
        $.getJSON('http://localhost:3000/sqlmem/').done(function (data) {
            d.resolve(data, { totalCount: data.length });
            currentSQLMEMMeasure = data[data.length-1].value;
        });
        return d.promise();
    }
});

var customStoreSQLHDD = new DevExpress.data.CustomStore({
    load: function (loadOptions) {
        var d = $.Deferred();
        $.getJSON('http://localhost:3000/sqlhdd/').done(function (data) {
            d.resolve(data, { totalCount: data.length });
        });
        return d.promise();
    }
});

var gridDataSourceConfiguration = {
    store: customStoreSQLMEM
};







var customStoreSQLRAM = new DevExpress.data.CustomStore({
    load: function (loadOptions) {
        var d = $.Deferred();
        $.getJSON('http://localhost:3000/measures/').done(function (data) {
            d.resolve(data, { totalCount: data.length });
        });
        return d.promise();
    }
});

var gridDataSourceConfiguration = {
    store: customStoreSQLRAM
};

*/

var chartDataSource2 = [
    { hora: '12:25', Oceania: 100 },
    { hora: '12:26', Oceania: 150 },
    { hora: '12:27', Oceania: 160 },
    { hora: '12:28', Oceania: 170 },
    { hora: '12:29', Oceania: 200 },
    { hora: '12:30', Oceania: 225 },
    { hora: '12:31', Oceania: 300 }
];

$(function () {




    $("#chartCiscoTempContainer").dxChart({
        dataSource: chartDataSource2,
        commonSeriesSettings: {
            argumentField: 'hora'
        },
        series: [
            {  valueField: 'Oceania', showInLegend: false }
        ]
    });


//AVAILABILITY CALCULATION

$("#availabilitySQL").dxChart({
    dataSource: chartDataSource3,
    commonSeriesSettings: {
        argumentField: 'hora'
    },
    series: [
        {  valueField: 'Oceania', showInLegend: false }
    ]
});





});
