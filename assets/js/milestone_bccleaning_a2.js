$(document).ready(function(){

	
	
	var milestone_kpi_data = [
		// {"taskname":"aaaa","baseline_start":"aaaa","baseline_finish":"aaaa","dayleft":"aaaa","pcomplete":"aaaa"}
		{"taskname":"BC CLEANING Kick Off Meeting","baseline_start":"05 July 2016","baseline_finish":"06 July 2016","dayleft":"-214","pcomplete":"0%"},
		{"taskname":"BC CLEANING Work Schedule","baseline_start":"05 July 2016","baseline_finish":"13 July 2016","dayleft":"-207","pcomplete":"0%"},
		{"taskname":"BC CLEANING Insurance","baseline_start":"05 July 2016","baseline_finish":"22 July 2016","dayleft":"-198","pcomplete":"0%"},
		{"taskname":"BC CLEANING Work","baseline_start":"05 July 2016","baseline_finish":"15 February 2017","dayleft":"10","pcomplete":"0%"},
		{"taskname":"BC CLEANING Certificate","baseline_start":"31 August 2016","baseline_finish":"24 May 2017","dayleft":"108","pcomplete":"0%"}
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

