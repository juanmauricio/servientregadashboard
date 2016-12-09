
var aluminimCosts = [{
     month: 1,
     2010: 99.6,
     2011: 2454,
     2012: 2262
}, {
     month: 2,
     2010: 100,
     2011: 2537,
     2012: 2087
}, {
     month: 3,
     2010: 97,
     2011: 2586,
     2012: 2238
}, {
     month: 4,
     2010: 100,
     2011: 2689,
     2012: 2349
}, {
     month: 5,
     2010: 100,
     2011: 2591,
     2012: 2071
}, {
     month: 6,
     2010: 100,
     2011: 2584,
     2012: 1957
}, {
     month: 7,
     2010: 100,
     2011: 2554,
     2012: 2008
}];

var alumOptions = {
        dataSource: aluminimCosts,
        argumentField: "month",
        valueField: "2010",
        showFirstLast: false,
        type: "winloss",
        showMinMax: false,
        lineWidth: 6,
        winColor: "#00ff00",
        lossColor: "#ff0000",
        winlossThreshold: 99.5,
        tooltip: {
          enable: true
        }
    };

$(function () {
  $(".availabilitySQL").dxSparkline(alumOptions);
  $(".availabilityC7000").dxSparkline(alumOptions);
  $(".availabilityNetwork").dxSparkline(alumOptions);
});
