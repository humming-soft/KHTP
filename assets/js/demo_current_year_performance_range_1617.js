$(document).ready(function(){
	
	var data1 = 87;
	var data2 = 38.6;
	var data3 = data2-data1;
	var data4;
	
	if ((data3 >= -10) && (data3 <= 10)) {
		$('.pbn_trend span.number').html('<i class="fa fa-circle-o" aria-hidden="true"></i>');
		$('.pbn_trend span.title').html('Neutral');
		$('.pbn_trend span.number').addClass('colorcode_status2');
		$('.pbn_trend span.title').addClass('colorcode_status2');
	} else if (data3 > 10){
		$('.pbn_trend span.number').html('<i class="fa fa-arrow-up" aria-hidden="true"></i>');
		$('.pbn_trend span.title').html('Up');
		$('.pbn_trend span.number').addClass('colorcode_status1');
		$('.pbn_trend span.title').addClass('colorcode_status1');
	} else if (data3 < 10){
		$('.pbn_trend span.number').html('<i class="fa fa-arrow-down" aria-hidden="true"></i>');
		$('.pbn_trend span.title').html('Down');
		$('.pbn_trend span.number').addClass('colorcode_status3');
		$('.pbn_trend span.title').addClass('colorcode_status3');
	};
	
	$('.pbn_planned span.number').html(data1+'%');
	$('.pbn_actual span.number').html(data2+'%');
	$('.pbn_variation span.number').html(Math.abs(data3)+'%');
	
	var val_planned_value = 3019040;
	var val_earned_value = 356480;
	var val_balance_value = 2662560;
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
					return this.series.name+' : <b>RM '+ this.point.y +' Mil</b>';
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
					return this.series.name+' : <b>RM '+ this.point.y +' Mil</b>';
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
	
	
	var project = [
		// {"data_link":"aaaa","data_name":"aaaa","data_early":"aaaa","data_actual":"aaaa","data_late":"aaaa","data_ball":"aaaa"}
		{"data_link":"bccleaning","data_name":"BC Cleaning","data_early":"94%","data_actual":"18%","data_late":"88%","data_ball":"colorcode_ball_3"},
		{"data_link":"cooler","data_name":"Cooler","data_early":"71%","data_actual":"9%","data_late":"88%","data_ball":"colorcode_ball_3"},
		{"data_link":"sealant","data_name":"SEALANT","data_early":"95%","data_actual":"32%","data_late":"88%","data_ball":"colorcode_ball_3"},
		{"data_link":"seminar","data_name":"Seminar","data_early":"93%","data_actual":"52%","data_late":"88%","data_ball":"colorcode_ball_3"},
		{"data_link":"tcaircond","data_name":"TC Aircond","data_early":"82%","data_actual":"82%","data_late":"88%","data_ball":"colorcode_ball_1"}
	]
	
	for (var i = 0; i < project.length; i++) {
		var d = project[i]

		p_link = d.data_link;
		p_name = d.data_name;
		p_early = d.data_early;
		p_actual = d.data_actual;
		p_late = Math.abs(parseInt(p_early)-parseInt(p_actual))+'%';
		p_ball = d.data_ball;
		
		$('.portlet_performance tbody').append('<tr><td><a href="current_project_'+p_link+'.php">'+p_name+'</a></td><td class="val_early">'+p_early+'</td><td class="val_actual">'+p_actual+'</td><td class="val_late">'+p_late+'</td><td class="ball_indicator '+p_ball+'"><i class="fa fa-circle" aria-hidden="true"></i></td></tr>')
		
	};
	
	
	
});

