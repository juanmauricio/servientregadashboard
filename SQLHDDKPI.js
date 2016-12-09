var currentSQLHDDMeasure;

var customStoreSQLHDD = new DevExpress.data.CustomStore({
    load: function (loadOptions) {
        var d = $.Deferred();
        $.getJSON('http://localhost:3000/sqlhdd/').done(function (data) {
            d.resolve(data, { totalCount: data.length });
            currentSQLHDDMeasure = data[data.length-1].value;
        });
        return d.promise();
    }
});

setInterval(function(){
  customStoreSQLHDD.load();

  $("#SQLHDDContainer2").dxChart({
      dataSource: customStoreSQLHDD,
      commonSeriesSettings: {
          argumentField: 'measuredatetime'
      },
      series: [
          { name: 'SQL HDD', valueField: 'value', showInLegend: false }
      ]
  });

$("#circularGaugeContainer2").dxCircularGauge({
  title: {
      text: 'SQL HDD',
      font: {
          size: 30,
          weight: 400
      },
      subtitle: {
          text: 'Mb',
          font: {
              size: 15,
              weight: 100
          }
      }
  },
    scale: {
        startValue: 500,
        endValue: 2000
    },
    value: Number(currentSQLHDDMeasure),
    subvalues: [8,15],
    valueIndicator: {type: 'rangeBar'},
    //subvalueIndicator: {type: 'textCloud'},
    rangeContainer: {
        ranges: [
            { startValue: 0, endValue: 1500,  color: 'green' },
            { startValue: 1500,   endValue: 2000, color: 'red' }
        ]
    }
});


}, 5000);
