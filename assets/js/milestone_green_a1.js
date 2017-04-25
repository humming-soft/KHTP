$(document).ready(function(){

	
	
	var milestone_kpi_data = [
		// {"taskname":"aaaa","baseline_start":"aaaa","baseline_finish":"aaaa","dayleft":"aaaa","pcomplete":"aaaa"}
		{"taskname":"Discussion with VP(O) & AM(LP) on enegy saving / green tech project for KTPC","baseline_start":"11-Jan-16","baseline_finish":"13-Jan-16","dayleft":"-390","pcomplete":"100%"},
		{"taskname":"To appoint energy management system consultant to study energy management in B.C","baseline_start":"14-Jan-16","baseline_finish":"20-Jan-16","dayleft":"-383","pcomplete":"100%"},
		{"taskname":"Discusion with consultant on EMS & Chiller system","baseline_start":"3-Feb-16","baseline_finish":"3-Feb-16","dayleft":"-369","pcomplete":"100%"},
		{"taskname":"Site visit at BC with consultant","baseline_start":"24-Feb-16","baseline_finish":"24-Feb-16","dayleft":"-348","pcomplete":"100%"},
		{"taskname":"Consultant submit EMS report","baseline_start":"25-Feb-16","baseline_finish":"10-Mar-16","dayleft":"-333","pcomplete":"100%"},
		{"taskname":"Discussion with VP(O) on report findings","baseline_start":"6-Apr-16","baseline_finish":"6-Apr-16","dayleft":"-306","pcomplete":"100%"}
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
