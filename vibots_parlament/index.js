am4core.useTheme(am4themes_animated);

var chart = am4core.createFromConfig({
  "data": [{
    party: "СЭР",
    litres: 33
  },
  {
    party: "КПЭК",
    litres: 14
  },
  {
    party: "ПБВ",
    litres: 12
  },
  {
    party: "АПЭ",
    litres: 6
  },
  {
    party: "ОУН",
    litres: 5
  },
  {
    party: "партия ВПИ",
    litres: 3
  }
  /*
  ,
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
