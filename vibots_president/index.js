am4core.useTheme(am4themes_animated);

var chart = am4core.createFromConfig({
  "data": [{
    party: "SarcasticCat",
    litres: 6
  },
  {
    party: "Вальхалла",
    litres: 1
  },
  {
    party: "Mr.House",
    litres: 32
  },
  {
    party: "Али-Ага Шихлинский",
    litres: 6
  },
  {
    party: "Эдвард Нортон",
    litres: 2
  },
  {
    party: "Вишивани-UkroKing",
    litres: 3
  },
  {
    party: "Брак",
    litres: 13
  }
  /*
  ,
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
