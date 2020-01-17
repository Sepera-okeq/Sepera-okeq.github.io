am4core.useTheme(am4themes_animated);

var chart = am4core.createFromConfig({
  "data": [{
    cydia: "Неззер",
    litres: 43
  },
  {
    cydia: "Брак",
    litres: 9
  },
  {
    cydia: "Молдован",
    litres: 15
  },
  {
    cydia: "Зеля",
    litres: 160
  },
  {
    cydia: "ExE",
    litres: 16
  },
  {
    cydia: "Хаус",
    litres: 15
  },
  {
    cydia: "Пидорович",
    litres: 120
  }
  /*,
  {
    cydia: "Belgium",
    litres: 60
  },
  {
    cydia: "The Netherlands",
    litres: 50
  
  }*/ ],
  "legend": {},
  "innerRadius": "40%",
  "series": [{
    "type": "PieSeries3D",
    "dataFields": {
      "value": "litres",
      "category": "cydia"
    }
  }]
}, "chartdiv", "PieChart3D");
