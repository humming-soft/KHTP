$(document).ready(function(){

	
	
	var milestone_kpi_data = [
		// {"taskname":"aaaa","baseline_start":"aaaa","baseline_finish":"aaaa","dayleft":"aaaa","pcomplete":"aaaa"}
		{"taskname":"KTPC P2 Establish project committee","baseline_start":"08 February 2016","baseline_finish":"9-Feb-16","dayleft":"-363","pcomplete":"100%"},
		{"taskname":"KTPC P2 Produce project brief","baseline_start":"08 February 2016","baseline_finish":"24-Jun-16","dayleft":"-227","pcomplete":"100%"},
		{"taskname":"KTPC P2 Memo to purchasing for consultant","baseline_start":"15 July 2016","baseline_finish":"18-Jul-16","dayleft":"-203","pcomplete":"100%"},
		{"taskname":"KTPC P2 Site Visit / Briefing","baseline_start":"19 July 2016","baseline_finish":"19-Jul-16","dayleft":"-202","pcomplete":"100%"},
		{"taskname":"KTPC P2 Design proposal and fee","baseline_start":"20 July 2016","baseline_finish":"17-Aug-16","dayleft":"-173","pcomplete":"100%"},
		{"taskname":"KTPC P2 Selection of consultant and design","baseline_start":"18 August 2016","baseline_finish":"26-Aug-16","dayleft":"-164","pcomplete":"100%"},
		{"taskname":"KTPC P2 Consensus by President","baseline_start":"29 August 2016","baseline_finish":"6-Sep-16","dayleft":"-153","pcomplete":"100%"},
		{"taskname":"KTPC P2 Consultant LOA","baseline_start":"07 September 2016","baseline_finish":"7-Sep-16","dayleft":"-152","pcomplete":"0%"},
		{"taskname":"KTPC P2 Detailing and BQ","baseline_start":"29 August 2016","baseline_finish":"7-Oct-16","dayleft":"-122","pcomplete":"0%"},
		{"taskname":"KTPC P2 Tender document","baseline_start":"10 October 2016","baseline_finish":"18-Oct-16","dayleft":"-111","pcomplete":"0%"},
		{"taskname":"KTPC P2 Tender, FARMC and LOA to Contractor","baseline_start":"19 October 2016","baseline_finish":"19-Oct-16","dayleft":"-110","pcomplete":"50%"}
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

