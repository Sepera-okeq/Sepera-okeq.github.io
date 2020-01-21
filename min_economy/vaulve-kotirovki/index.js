/**
 * This is a demo for Treemap.
 *
 * Demo uses JSON-based config.
 *
 * Refer to the following link(s) for reference:
 * @see {@link https://www.amcharts.com/docs/v4/chart-types/xy/}
 * @see {@link https://www.amcharts.com/docs/v4/concepts/json-config/}
 */

// Set theme
am4core.useTheme(am4themes_animated);

var chart = am4core.createFromConfig({
  "paddingRight": 20,
  "dateFormatter": {
    "inputDateFormat": "yyyy-MM-dd"
  },

  "xAxes": [{
    "type": "DateAxis",
    "renderer": {
      "grid": {
        "location": 0
      }
    }
  }],

  "yAxes": [{
    "type": "ValueAxis",
    "tooltip": {
      "disabled": true
    }
  }],

  "series": [{
    "type": "CandlestickSeries",
    "id": "s1",
    "dataFields": {
      "dateX": "date",
      "valueY": "close",
      "openValueY": "open",
      "lowValueY": "low",
      "highValueY": "high"
    },
    "tooltipText": "Цена открытия : ${openValueY.value}\nМинимальное значение : ${lowValueY.value}\nМаксимальное значение : ${highValueY.value}\nЦена закрытия : ${valueY.value}",
    "riseFromPreviousState": {
      "properties": {
        "fillOpacity": 1
      }
    },
    "dropFromPreviousState": {
      "properties": {
        "fillOpacity": 0
      }
    }
  }, {
    "type": "LineSeries",
    "id": "s2",
    "dataFields": {
      "dateX": "date",
      "valueY": "close"
    },
    "defaultState": {
      "properties": {
        "visible": false
      }
    },
    "hiddenInLegend": true,
    "fillOpacity": 0.5,
    "strokeOpacity": 0.5
  }],

  "cursor": {
    "type": "XYCursor"
  },

  "scrollbarX": {
    "type": "XYChartScrollbar",
    "series": ["s2"]
  },

  "data": [{
    "date": "2020-01-19",
    "open": "14.43",
    "high": "14.74",
    "low": "12.94",
    "close": "12.94"
  }, {
    "date": "2020-01-20",
    "open": "12.94",
    "high": "14.24",
    "low": "12.94",
    "close": "14.24"
  }, {
    "date": "2020-01-21",
    "open": "14.24",
    "high": "14.31",
    "low": "13.10",
    "close": "13.44"
  }, {
    "date": "2020-01-22",
    "open": "0.00",
    "high": "0.00",
    "low": "0.00",
    "close": "0.00"
  }, {
    "date": "2020-01-23",
    "open": "0.00",
    "high": "0.00",
    "low": "0.00",
    "close": "0.00"
  }, {
   "date": "2020-01-24",
    "open": "0.00",
    "high": "0.00",
    "low": "0.00",
    "close": "0.00"
  }, {
    "date": "2020-01-25",
    "open": "0.00",
    "high": "0.00",
    "low": "0.00",
    "close": "0.00"
  }, {
    "date": "2020-01-26",
    "open": "0.00",
    "high": "0.00",
    "low": "0.00",
    "close": "0.00"
  }]
}, "chartdiv", "XYChart");



/*
Шаблон : Копировать от запятой и вставлять в конец data!!!! 
, {
    "date": "2020-01-26",
    "open": "100.00",
    "high": "100.00",
    "low": "100.00",
    "close": "124.03"
  }
*/
