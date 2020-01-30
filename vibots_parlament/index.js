am4core.useTheme(am4themes_animated);

var chart = am4core.createFromConfig({
  "data": [{
    party: "Брак",
    litres: 0
  },
  {
    party: "АПЭ",
    litres: 0
  },
  {
    party: "ОКП",
    litres: 0
  },
  {
    party: "ОУН",
    litres: 0
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
