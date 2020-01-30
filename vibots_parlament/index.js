am4core.useTheme(am4themes_animated);

var chart = am4core.createFromConfig({
  "data": [{
    party: "НПР",
    litres: 43
  },
  {
    party: "Брак",
    litres: 9
  },
  {
    party: "АПЭ",
    litres: 15
  },
  {
    party: "ОКП",
    litres: 16
  },
  {
    party: "ОУН",
    litres: 510
  }
  /*
  ,
  {
    party: "Неззер Монархист",
    litres: 502
  }
  ,
  {
    party: "UK",
    litres: 99
  },
  {
    party: "Belgium",
    litres: 60
  },
  {
    party: "The Netherlands",
    litres: 50
  
  }*/ ],
  "legend": {},
  "innerRadius": "40%",
  "series": [{
    "type": "PieSeries3D",
    "dataFields": {
      "value": "litres",
      "category": "party"
    }
  }]
}, "chartdiv", "PieChart3D");
