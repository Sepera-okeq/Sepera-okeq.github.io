am4core.useTheme(am4themes_animated);

var chart = am4core.createFromConfig({
  "data": [{
    party: "Bełarusiań Huśśar",
    litres: 0
  },
  {
    party: "SarcasticCat",
    litres: 0
  },
  {
    party: "Вальхалла",
    litres: 0
  },
  {
    party: "Mr.House",
    litres: 0
  },
  {
    party: "Али-Ага Шихлинский",
    litres: 0
  },
  {
    party: "Эдвард Нортон",
    litres: 0 
  }
 
  {
    party: "☭Вишивани☭ (UkroKing)",
    litres: 0
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
