$(document).ready(function(){

	
	// line_chart_1

	$(function () {
		Highcharts.setOptions({
			colors: ['#09f','#f05']
		});
		Highcharts.chart('line_chart_1', {
			chart: {
				type: 'line'
			},
			title: {
				text: ''
			},
			subtitle: {
				text: ''
			},
			xAxis: {
				categories: ['May-16','Jun-16','Jul-16','Aug-16','Sep-16','Oct-16','Nov-16','Dec-16','Jan-17','Feb-17','Mar-17','Apr-17','May-17','Jun-17']
			},
			yAxis: {
				max:100,
				tickPositions: [0,10,20,30,40,50,60,70,80,90,100],
				title: {
					text: 'Percentages',
					align: 'high'
				},
				labels: {
					formatter: function () {
						return this.value + '%';
					}
				},
				tickInterval: 2	
			},
			rangeSelector: {
				selected: 1
			},
			tooltip: {
				crosshairs: true,
				shared: true,
				valueSuffix: '%'
			},
			plotOptions: {
				spline: {
					marker: {
						radius: 4,
						lineColor: '#666666',
						lineWidth: 1
					}
				}
			},
			series: [{
				name: 'Planned',
				marker: {
					symbol: 'square'
				},
				data: [2,2,35,66,82,82,82,82,82,82,91,91,91,100]

			}, {
				name: 'Actual',
				marker: {
					symbol: 'diamond'
				},
				data: [2,2,35,66,82,82,82,82,82]
			}]
		});
	});
	
	
	// line_chart_2
	
	$(function () {
		Highcharts.setOptions({
			colors: ['#09f','#f05']
		});
		Highcharts.chart('line_chart_2', {
			chart: {
				type: 'line'
			},
			title: {
				text: ''
			},
			subtitle: {
				text: ''
			},
			xAxis: {
				categories: ['May-16','Jun-16','Jul-16','Aug-16','Sep-16','Oct-16','Nov-16','Dec-16','Jan-17','Feb-17','Mar-17','Apr-17','May-17','Jun-17']
			},
			yAxis: {
				title: {
					text: 'Numbers',
					align: 'high'
				},
				labels: {
					formatter: function () {
						return this.value + '';
					}
				},
				tickInterval: 2	
			},
			rangeSelector: {
				selected: 1
			},
			tooltip: {
				crosshairs: true,
				shared: true,
				valueSuffix: ''
			},
			plotOptions: {
				spline: {
					marker: {
						radius: 4,
						lineColor: '#666666',
						lineWidth: 1
					}
				}
			},
			series: [{
				name: 'Planned',
				marker: {
					symbol: 'square'
				},
				data: [11,10,9,9,8,7,6,6,5,4,3,2,2,1]

			}, {
				name: 'Actual',
				marker: {
					symbol: 'diamond'
				},
				data: [10,10,9,6,3,3,3,3,3]
			}]
		});
	});
	
	
	// finance_analysis
	
	
	// data
	
	var val_planned_value = 27040;
	var val_earned_value = 22040;
	var val_balance_value = 5000;
	var val_actual_cost = val_earned_value+val_balance_value;
	var val_cost_overrun = val_actual_cost-val_planned_value;
	
	var finance_analysis_data1 = val_actual_cost;
	var finance_analysis_data2 = val_cost_overrun;
	var finance_analysis_data3 = val_planned_value;
	var finance_analysis_data4 = val_balance_value;
	var finance_analysis_data5 = val_earned_value;
	
	$('.finance_analysis_data1 span.number').text('RM '+finance_analysis_data1.toLocaleString());
	$('.finance_analysis_data2 span.number').text('RM '+finance_analysis_data2.toLocaleString());
	$('.finance_analysis_data3 span.number').text('RM '+finance_analysis_data3.toLocaleString());
	$('.finance_analysis_data4 span.number').text('RM '+finance_analysis_data4.toLocaleString());
	$('.finance_analysis_data5 span.number').text('RM '+finance_analysis_data5.toLocaleString());
	
	$(function () {
		Highcharts.setOptions({
			colors: ['#f0f','#00f']
		});
		Highcharts.chart('pcu1', {
			chart: {
				type: 'column'
			},
			title: {
				text: 'Actual Cost'
			},
			xAxis: {
				categories: ['']
			},
			yAxis: {
				min: 0,
				title: {
					text: 'RM',
					align: 'high'
				}
			},
			tooltip: {
				formatter: function() {
					return this.series.name+' : <b>RM '+ this.point.y +'</b>';
				}
			},
			plotOptions: {
				column: {
					stacking: 'top'
				}
			},
			series: [{
				name: 'Cost Overrun',
				data: [
					{ y : val_cost_overrun, myData : '' }
				]
			}, {
				name: 'Planned Value',
				data: [
					{ y : val_planned_value, myData : '' }
				]
			}]
		});
	});
	
	$(function () {
		Highcharts.setOptions({
			colors: ['#f50','#0c9']
		});
		Highcharts.chart('pcu2', {
			chart: {
				type: 'column'
			},
			title: {
				text: 'Progress Cost'
			},
			xAxis: {
				categories: ['']
			},
			yAxis: {
				min: 0,
				title: {
					text: 'RM',
					align: 'high'
				}
			},
			tooltip: {
				formatter: function() {
					return this.series.name+' : <b>RM '+ this.point.y +'</b>';
				}
			},
			plotOptions: {
				column: {
					stacking: 'top'
				}
			},
			series: [{
				name: 'Balance Value',
				data: [
					{ y : val_balance_value, myData : '' }
				]
			}, {
				name: 'Earned Value',
				data: [
					{ y : val_earned_value, myData : '' }
				]
			}]
		});
	});
	
	
	
	
	
	

	
	// donut
	
	var json = [ 
		{"chart_title":"","chart_name":"","chart_id":"db_donut_0a","chart_val_planned":"82","chart_val_actual":"82","set_donut":"1","url":"#"}
	];
	
	
	
	for (i = 0; i < json.length; i++) {
		var b = json[i];
		use_chart_title = b.chart_title;
		use_chart_id = b.chart_id;
		use_chart_value_1 = b.chart_val_planned;
		use_chart_value_2 = b.chart_val_actual;
		use_chart_set_donut = b.set_donut;
		use_chart_name = b.chart_name;
		use_chart_url= b.url;
		
		use_chart_font_size = '50px';
		use_chart_font_color = '#000';
		use_chart_donut_color_planned = '#09f';
		use_chart_donut_color_actual = '#f05';
		use_chart_svg_width = 200;
		use_chart_svg_height = 200;
		use_chart_circle_r = 88;
		use_chart_circle_cx = 95;
		use_chart_circle_cy = 95;
		use_chart_circle_data_total = 553;
		use_chart_circle_data_used_1 = use_chart_value_1 / 100 * use_chart_circle_data_total;
		use_chart_circle_data_used_2 = use_chart_value_2 / 100 * use_chart_circle_data_total;
		
		$('.portlet_progress_v2 div.plate1 span.number').text(use_chart_value_1+'%');
		$('.portlet_progress_v2 div.plate2 span.number').text(use_chart_value_2+'%');
		$('.portlet_progress_v2 div.plate3 span.number').text(Math.abs(use_chart_value_1-use_chart_value_2)+'%');
		
		donut_body = '<div><a class="url_donut_system" style="text-decoration: none; color: #fff;" href="'+use_chart_url+'" title="'+use_chart_name+'"><span class="">'+use_chart_title+'</span></a><svg class="svg_donut_system" width="'+use_chart_svg_width+'" height="'+use_chart_svg_height+'" style="border:5px solid rgba(0,0,0,.1);"><text style="font-style:normal;font-size:'+use_chart_font_size+';fill:'+use_chart_font_color+';" transform="matrix(0,1,-1,0,0,0)"><tspan sodipodi:role="line" x="45" y="-80">'+use_chart_value_2+'%</tspan></text><circle class="svg_donut_system_circle" r="'+use_chart_circle_r+'" cx="'+use_chart_circle_cx+'" cy="'+use_chart_circle_cy+'" class="pie" style="stroke: '+use_chart_donut_color_planned+';stroke-dasharray: '+use_chart_circle_data_used_1+','+use_chart_circle_data_total+';"></circle><circle class="svg_donut_system_circle" r="'+use_chart_circle_r+'" cx="'+use_chart_circle_cx+'" cy="'+use_chart_circle_cy+'" class="pie" style="stroke: '+use_chart_donut_color_actual+';stroke-dasharray: '+use_chart_circle_data_used_2+','+use_chart_circle_data_total+';"></circle></svg></div>';
		
		$('#donut').html(donut_body);
	}
	
	
	
	
	
	
	var milestone_due_data = [
		// {"taskname":"aaaaaa","baseline":"aaaaaa","dayleft":"aaaaaa","pcomplete":"aaaaaa"}
		{"taskname":"TC AIRCOND FARMC and LOA","baseline_start":"30 May 2016","baseline_finish":"30 May 2016","dayleft":"-252","pcomplete":"100%"},
		{"taskname":"TC AIRCOND Post Contract","baseline_start":"26 July 2016","baseline_finish":"20 June 2017","dayleft":"134","pcomplete":"87%"}
	]
	
	for (var i = 0; i < milestone_due_data.length; i++) {
		var d = milestone_due_data[i]
		d_taskname = d.taskname;
		d_baseline_s = d.baseline_start;
		d_baseline_f = d.baseline_finish;
		dd_dayleft = d.dayleft;
		d_pcomplete = d.pcomplete;
		
		if (dd_dayleft < 0 && parseInt(d_pcomplete) != 100) {
			var d_variance = Math.round(dd_dayleft/7);
			var d_dayleft = 0;
			var d_status = "colorcode_row1";
		} else if (dd_dayleft < 0 && parseInt(d_pcomplete) == 100) {
			var d_variance = 0;
			var d_dayleft = 0;
			var d_status = "";
		} else if (dd_dayleft >= 0){
			var d_variance = Math.round(dd_dayleft/7);
			var d_dayleft = dd_dayleft;
			var d_status = "";
		};
		
		$('.portlet_milestone_due tbody').append('<tr class="'+d_status+'"><td class=""><a href="milestone_tcaircond_a'+(i+1)+'.php">'+d_taskname+'</a></td><td class="set_center">'+d_baseline_s+'</td><td class="set_center">'+d_baseline_f+'</td><td class="set_center">'+d_dayleft+'</td><td class="set_center">'+d_variance+' Week(s)</td><td class="set_center">'+d_pcomplete+'</td></tr>')
		
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});

