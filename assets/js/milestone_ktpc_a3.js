$(document).ready(function(){

	
	
	var milestone_kpi_data = [
		// {"taskname":"aaaa","baseline_start":"aaaa","baseline_finish":"aaaa","dayleft":"aaaa","pcomplete":"aaaa"}
		{"taskname":"KTPC P2 Kick Off Meeting","baseline_start":"12 January 2017","baseline_finish":"13-Jan-17","dayleft":"-24","pcomplete":"0%"},
		{"taskname":"KTPC P2 Work Schedule","baseline_start":"12 January 2017","baseline_finish":"20-Jan-17","dayleft":"-17","pcomplete":"0%"},
		{"taskname":"KTPC P2 Insurance","baseline_start":"12 January 2017","baseline_finish":"31-Jan-17","dayleft":"-6","pcomplete":"0%"},
		{"taskname":"KTPC P2 Work","baseline_start":"12 January 2017","baseline_finish":"20-Oct-17","dayleft":"256","pcomplete":"0%"},
		{"taskname":"Certificate","baseline_start":"05 May 2017","baseline_finish":"26-Jan-18","dayleft":"354","pcomplete":"0%"}
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
		
		$('.portlet_milestone tbody').append('<tr class="'+d_status+'"><td class="">'+d_taskname+'</td><td class="set_center">'+d_baseline_s+'</td><td class="set_center">'+d_baseline_f+'</td><td class="set_center">'+d_dayleft+'</td><td class="set_center">'+d_variance+' Week(s)</td><td class="set_center">'+d_pcomplete+'</td></tr>')
		
	};
	
	
	
});

