am4core.useTheme(am4themes_animated);

var chart = am4core.createFromConfig({
  "data": [{
    party: "Брак",
    litres: 17
  },
  {
    party: "АПЭ",
    litres: 20
  },
  {
    party: "ОПТЭР",
    litres: 2
  },
  {
    party: "ОУН",
    litres: 9
  }
  ,
  {
    party: "ЛБЭР",
    litres: 12
  }
  ,
  {
    party: "партия ВПИ",
    litres: 5
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
