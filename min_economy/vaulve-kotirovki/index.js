AmCharts.makeChart("chartdiv",
				{
					"type": "serial",
					"categoryField": "date",
					"dataDateFormat": "YYYY-MM-DD",
					"theme": "black",
					"categoryAxis": {
						"parseDates": true
					},
					"chartCursor": {
						"enabled": true
					},
					"chartScrollbar": {
						"enabled": true
					},
					"trendLines": [],
					"graphs": [
						{
							"bullet": "round",
							"id": "AmGraph-1",
							"title": "Республиканский Эмброний(REM)",
							"valueField": "two"
						},
						{
							"bullet": "square",
							"id": "AmGraph-2",
							"title": "Королевский Эмброний(RMB)",
							"valueField": "three"
						},
						{
							"bullet": "round",
							"id": "AmGraph-3",
							"title": "Гиллес(GLS)",
							"valueField": "one"
						},
						{
							"bullet": "diamond",
							"id": "AmGraph-4",
							"title": "Катян(KTN)",
							"valueField": "four"
						},
						{
							"bullet": "triangleUp",
							"id": "AmGraph-5",
							"title": "Харальдкоин(HCN)",
							"valueField": "five"
						},
						{
							"bullet": "triangleDown",
							"id": "AmGraph-6",
							"title": "Ричландий(RCL)",
							"valueField": "six"
						},
						{
							"bullet": "bubble",
							"id": "AmGraph-7",
							"title": "Брайны(BRN)",
							"valueField": "seven"
						},
						{
							"bullet": "square",
							"id": "AmGraph-8",
							"title": "Дустёры(DST)",
							"valueField": "eight"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"id": "ValueAxis-1",
							"title": "Колебания валют"
						}
					],
					"allLabels": [],
					"balloon": {},
					"legend": {
						"enabled": true,
						"useGraphSettings": true
					},
					"titles": [
						{
							"id": "Title-1",
							"size": 15,
							"text": "Колебания цен валют. ЦБ ЭР"
						}
					],
					"dataProvider": [
						{
							"date": "2014-03-01",
							"one": 1.3999,
							"two": 0,
							"three": 20.1906,
							"four": 5.6030,
							"five": 26.0552,
							"six": 0.1697,
							"seven": 0.0287,
							"eight": 4.5301
						},
						{
							"date": "2014-03-02",
							"one": 1.5952,
							"two": 0,
							"three": 19.7235,
							"four": 5.5932,
							"five": 26.0013,
							"six": 0.0915,
							"seven": 0.0292,
							"eight": 0.5304
						},
						{
							"date": "2014-03-03",
							"one": 0,
							"two": 0,
							"three": 0,
							"four": 0,
							"five": 0,
							"six": 0,
							"seven": 0,
							"eight": 0
						},
						{
							"date": "2014-03-04",
							"one": 0,
							"two": 0,
							"three": 0,
							"four": 0,
							"five": 0,
							"six": 0,
							"seven": 0,
							"eight": 0
						},
						{
							"date": "2014-03-05",
							"one": 0,
							"two": 0,
							"three": 0,
							"four": 0,
							"five": 0,
							"six": 0,
							"seven": 0,
							"eight": 0
						},
						{
							"date": "2014-03-06",
							"one": 0,
							"two": 0,
							"three": 0,
							"four": 0,
							"five": 0,
							"six": 0,
							"seven": 0,
							"eight": 0
						},
						{
							"date": "2014-03-07",
							"one": 0,
							"two": 0,
							"three": 0,
							"four": 0,
							"five": 0,
							"six": 0,
							"seven": 0,
							"eight": 0
						}
					]
				}
			);
