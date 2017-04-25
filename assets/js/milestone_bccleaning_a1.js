$(document).ready(function(){

	
	
	var milestone_kpi_data = [
		// {"taskname":"aaaa","baseline_start":"aaaa","baseline_finish":"aaaa","dayleft":"aaaa","pcomplete":"aaaa"}
		{"taskname":"BC CLEANING Discuss project brief with President","baseline_start":"31 March 2016","baseline_finish":"08 April 2016","dayleft":"-303","pcomplete":"100%"},
		{"taskname":"BC CLEANING tender document preparation","baseline_start":"11 April 2016","baseline_finish":"28 April 2016","dayleft":"-283","pcomplete":"100%"},
		{"taskname":"BC CLEANING Site Visit / Briefing","baseline_start":"29 April 2016","baseline_finish":"29 April 2016","dayleft":"-282","pcomplete":"0%"},
		{"taskname":"BC CLEANING FARMC and LOA","baseline_start":"04 July 2016","baseline_finish":"04 July 2016","dayleft":"-216","pcomplete":"0%"}
	]
	
	for (var i = 0; i < milestone_kpi_data.length; i++) {
		var d = milestone_kpi_data[i]
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
		
		$('.portlet_milestone tbody').append('<tr class="'+d_status+'"><td class=""><a href="milestone_bccleaning_a'+(i+1)+'.php">'+d_taskname+'</a></td><td class="set_center">'+d_baseline_s+'</td><td class="set_center">'+d_baseline_f+'</td><td class="set_center">'+d_dayleft+'</td><td class="set_center">'+d_variance+' Week(s)</td><td class="set_center">'+d_pcomplete+'</td></tr>')
		
	};
	
	
	
});

