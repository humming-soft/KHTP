$(document).ready(function(){

	
	
	var milestone_kpi_data = [
		// {"taskname":"aaaa","baseline_start":"aaaa","baseline_finish":"aaaa","dayleft":"aaaa","pcomplete":"aaaa"}
		{"taskname":"Discussion with VP(O) & AM(LP) on proposal","baseline_start":"30-May-16","baseline_finish":"31-May-16","dayleft":"-251","pcomplete":"100%"},
		{"taskname":"Instruct technician to count numbers of fluorescent light in KTPC office","baseline_start":"1-Jun-16","baseline_finish":"1-Jun-16","dayleft":"-250","pcomplete":"100%"},
		{"taskname":"Technician submit list of fluorescent ligt at KTPC office","baseline_start":"2-Jun-16","baseline_finish":"2-Jun-16","dayleft":"-249","pcomplete":"100%"},
		{"taskname":"Discussion with VP(O) & AM(LP) on selection of vendor","baseline_start":"15-Jun-16","baseline_finish":"15-Jun-16","dayleft":"-236","pcomplete":"100%"},
		{"taskname":"Call one vendor for site visit","baseline_start":"16-Jun-16","baseline_finish":"17-Jun-16","dayleft":"-234","pcomplete":"100%"},
		{"taskname":"Site visit by contractor","baseline_start":"21-Jun-16","baseline_finish":"21-Jun-16","dayleft":"-230","pcomplete":"100%"},
		{"taskname":"Vendor submit quotation","baseline_start":"27-Jun-16","baseline_finish":"27-Jun-16","dayleft":"-224","pcomplete":"100%"},
		{"taskname":"Feedback to VP(O) on the cost incurred","baseline_start":"28-Jun-16","baseline_finish":"28-Jun-16","dayleft":"-223","pcomplete":"100%"}
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

