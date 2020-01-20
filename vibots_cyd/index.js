am4core.useTheme(am4themes_animated);

var chart = am4core.createFromConfig({
  "data": [{
    cydia: "Хайль Кайзер",
    litres: 19
  },
  {
    cydia: "Катаклизм",
    litres: 20
  },
  {
    cydia: "Дейрон",
    litres: 26
  },
  {
    cydia: "Котик",
    litres: 34
  },
  {
    cydia: "Сидорович",
    litres: 26
  }/*,
  {
    cydia: "Хаус",
    litres: 15
  },
  {
    cydia: "Пидорович",
    litres: 120
  }
   ,
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
