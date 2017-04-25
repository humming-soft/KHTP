$(document).ready(function(){
	
	
	$(function () {
		Highcharts.setOptions({
			colors: ['#0a5','#09f','#f50','#f05']
		});
		Highcharts.chart('ayp', {
			chart: {
				type: 'column'
			},
			title: {
				text: ''
			},
			xAxis: {
				gridLineWidth: 4,
				minorGridLineWidth: 1,
				categories: ['2016','2017','2018'],
				labels: {
					enabled: true,
					style: {
						lineHeight: '18px',
						fontSize: '25px'
					}
				}
			},
			yAxis: {
				gridLineWidth: 0,
				minorGridLineWidth: 0,
				title: {
					enabled:false
				},
				labels: {
					enabled: false,
				},
				tickLength: 0
			},
			tooltip: {
				formatter: function() {
					return '<b>'+this.x+' '+this.series.name+' Project :</b><br/>'+this.point.myData;
				}
			},
			plotOptions: {
				column: {
					dataLabels: {
						enabled: true,
						formatter: function() {
							// return this.series.data.y;
							// return 1
							return this.point.y-0.2
						},
						style: {
							lineHeight: '18px',
							fontSize: '25px'
						}
					}
				}
			},
			series: [{
				name: 'Completed',
				data: [
					{ y : 0.2, myData : 'none' },
					{ y : 0.2, myData : 'none' },
					{ y : 0.2, myData : 'none' }
				]
			}, {
				name: 'In Progress',
				data: [
					{ y : 0.2, myData : '' },
					{ y : 1.2, myData : '- TC Aircond' },
					{ y : 1.2, myData : '- Canteen Renovation' }
				]
			}, {
				name: 'Not Started',
				data: [
					{ y : 0.2, myData : 'none' },
					{ y : 0.2, myData : 'none' },
					{ y : 0.2, myData : 'none' }
				]
			}, {
				name: 'Delay',
				data: [
					{ y : 1.2, myData : '- GREEN' },
					{ y : 4.2, myData : '- BC Cleaning<br>- Cooler<br>- SEALANT<br>- Seminar' },
					{ y : 1.2, myData : '- KTPC' }
				]
			}]
		});
	});
	
	// block 1
	$('div.range_1616 div:nth-child(2) span.number').html(2016);
	$('div.range_1616 div:nth-child(3) span.number').html(1);
		
	// block 2
	$('div.range_1617 div:nth-child(2) span.number').html(2017);
	$('div.range_1617 div:nth-child(3) span.number').html(5);
		
	// block 3
	$('div.range_1618 div:nth-child(2) span.number').html(2018);
	$('div.range_1618 div:nth-child(3) span.number').html(2);
	
	
});
