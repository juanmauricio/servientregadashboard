







$(function () {




    $("#circularGaugeContainer3").dxCircularGauge({
      title: {
          text: 'CISCO Temp',
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
            startValue: 0,
            endValue: 1000
        },
        value: 4,
        subvalues: [500,600],
        valueIndicator: {type: 'rangeBar'},
        //subvalueIndicator: {type: 'textCloud'},
        rangeContainer: {
            ranges: [
                { startValue: 0, endValue: 500,  color: 'green' },
                { startValue: 500,   endValue: 1000, color: 'red' }
            ]
        }
    });




});
