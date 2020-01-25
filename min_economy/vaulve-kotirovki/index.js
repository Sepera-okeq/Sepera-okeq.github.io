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
							"periodSpan": -1,
							"title": "Королевский Эмброний(RMB)",
							"valueField": "three"
						},
						{
							"bullet": "round",
							"id": "AmGraph-3",
							"negativeBase": -3,
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
							"title": "валюта-валюта 8",
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
							"one": 81,
							"two": 8,
							"three": 5,
							"four": 57,
							"five": 63,
							"six": 37,
							"seven": 76,
							"eight": 10
						},
						{
							"date": "2014-03-02",
							"one": 86,
							"two": 6,
							"three": 7,
							"four": 53,
							"five": 56,
							"six": 64,
							"seven": 61,
							"eight": 9
						},
						{
							"date": "2014-03-03",
							"one": 61,
							"two": 2,
							"three": 3,
							"four": 33,
							"five": 47,
							"six": 7,
							"seven": 3,
							"eight": 87
						},
						{
							"date": "2014-03-04",
							"one": 43,
							"two": 1,
							"three": 3,
							"four": 89,
							"five": 74,
							"six": 47,
							"seven": 82,
							"eight": 34
						},
						{
							"date": "2014-03-05",
							"one": 96,
							"two": 2,
							"three": 1,
							"four": 36,
							"five": 4,
							"six": 13,
							"seven": 2,
							"eight": 70
						},
						{
							"date": "2014-03-06",
							"one": 49,
							"two": 3,
							"three": 2,
							"four": 81,
							"five": 1,
							"six": 73,
							"seven": 19,
							"eight": 53
						},
						{
							"date": "2014-03-07",
							"one": 42,
							"two": 6,
							"three": 8,
							"four": 54,
							"five": 3,
							"six": 99,
							"seven": 76,
							"eight": 74
						}
					]
				}
			);
