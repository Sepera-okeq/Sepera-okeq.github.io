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
    "date": "2020-01-18",
    "open": "136.65",
    "high": "136.96",
    "low": "134.15",
    "close": "136.49"
  }, {
    "date": "2020-01-19",
    "open": "135.26",
    "high": "135.95",
    "low": "131.50",
    "close": "131.85"
  }, {
    "date": "2020-01-20",
    "open": "132.90",
    "high": "135.27",
    "low": "128.30",
    "close": "135.25"
  }, {
    "date": "2020-01-21",
    "open": "134.94",
    "high": "137.24",
    "low": "132.63",
    "close": "135.03"
  }, {
    "date": "2020-01-22",
    "open": "136.76",
    "high": "136.86",
    "low": "132.00",
    "close": "134.01"
  }, {
    "date": "2020-01-23",
    "open": "131.11",
    "high": "133.00",
    "low": "125.09",
    "close": "126.39"
  }, {
   "date": "2020-01-24",
    "open": "123.12",
    "high": "127.75",
    "low": "120.30",
    "close": "125.00"
  }, {
    "date": "2020-01-25",
    "open": "128.32",
    "high": "129.35",
    "low": "126.50",
    "close": "127.79"
  }, {
    "date": "2020-01-26",
    "open": "128.29",
    "high": "128.30",
    "low": "123.71",
    "close": "124.03"
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