am4core.useTheme(am4themes_animated);

var chart = am4core.createFromConfig({
  "data": [{
    country: "НПР",
    litres: 43
  },
  {
    country: "Брак",
    litres: 9
  },
  {
    country: "АПЭ",
    litres: 15
  },
  {
    country: "ОКП",
    litres: 16
  },
  {
    country: "ОУН",
    litres: 16
  }
  /*{
    country: "Austria",
    litres: 128.3
  },
  {
    country: "UK",
    litres: 99
  },
  {
    country: "Belgium",
    litres: 60
  },
  {
    country: "The Netherlands",
    litres: 50
  
  }*/ ],
  "legend": {},
  "innerRadius": "40%",
  "series": [{
    "type": "PieSeries3D",
    "dataFields": {
      "value": "litres",
      "category": "country"
    }
  }]
}, "chartdiv", "PieChart3D");
