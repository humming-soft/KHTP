$(document).ready(function(){

	
	
	var milestone_kpi_data = [
		// {"taskname":"aaaa","baseline_start":"aaaa","baseline_finish":"aaaa","dayleft":"aaaa","pcomplete":"aaaa"}
		{"taskname":"SEALANT Kick Off Meeting","baseline_start":"10 May 2016","baseline_finish":"11 May 2016","dayleft":"-270","pcomplete":"0%"},
		{"taskname":"SEALANT Work Schedule","baseline_start":"10 May 2016","baseline_finish":"18 May 2016","dayleft":"-263","pcomplete":"0%"},
		{"taskname":"SEALANT Insurance","baseline_start":"10 May 2016","baseline_finish":"27 May 2016","dayleft":"-254","pcomplete":"0%"},
		{"taskname":"SEALANT Work","baseline_start":"10 May 2016","baseline_finish":"23 November 2016","dayleft":"-75","pcomplete":"0%"},
		{"taskname":"SEALANT Certificate","baseline_start":"08 June 2016","baseline_finish":"01 March 2017","dayleft":"24","pcomplete":"0%"}
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