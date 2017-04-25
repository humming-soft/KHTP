$(document).ready(function(){

	
	
	var milestone_kpi_data = [
		// {"taskname":"aaaa","baseline_start":"aaaa","baseline_finish":"aaaa","dayleft":"aaaa","pcomplete":"aaaa"}
		{"taskname":"SR Discuss project brief with President","baseline_start":"07 March 2016","baseline_finish":"15 March 2016","dayleft":"-327","pcomplete":"100%"},
		{"taskname":"SR Establish project committee","baseline_start":"16 March 2016","baseline_finish":"17 March 2016","dayleft":"-325","pcomplete":"100%"},
		{"taskname":"SR Produce project brief","baseline_start":"18 March 2016","baseline_finish":"22 March 2016","dayleft":"-320","pcomplete":"100%"},
		{"taskname":"SR Memo to purchasing for renovation contractors","baseline_start":"23 March 2016","baseline_finish":"24 March 2016","dayleft":"-318","pcomplete":"50%"},
		{"taskname":"SR Site Visit / Briefing","baseline_start":"25 March 2016","baseline_finish":"25 March 2016","dayleft":"-317","pcomplete":"100%"},
		{"taskname":"SR Design proposal and cost","baseline_start":"28 March 2016","baseline_finish":"25 April 2016","dayleft":"-286","pcomplete":"50%"},
		{"taskname":"SR Selection of contractor and design","baseline_start":"26 April 2016","baseline_finish":"04 May 2016","dayleft":"-277","pcomplete":"0%"},
		{"taskname":"SR Consensus by President","baseline_start":"05 May 2016","baseline_finish":"13 May 2016","dayleft":"-268","pcomplete":"0%"},
		{"taskname":"SR FARMC and LOA","baseline_start":"18 July 2016","baseline_finish":"18 July 2016","dayleft":"-202","pcomplete":"0%"}
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