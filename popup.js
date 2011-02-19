
// when this file is loaded that means the popup was clicked open
// we make a Chrome extension request to the background page to get the data

function loadData() {
	$("#updating").removeClass("hidden");
	chrome.extension.sendRequest({}, dataReceived);
}

function dataReceived(result) {
	console.log(result);
	var mon = $("#mon");
	tableHtml = "";
	for(var i = 0; i < 5; i++) {
		if(localStorage['urls'+i]) {
			var color = "red";
			if(result.code[i] == 1) color = "yellow";
			if(result.code[i] == 0) color = "green";

			tableHtml += "<tr class=\""+color+"\">";
			tableHtml += "<td>" + (localStorage['names'+i] ? localStorage['names'+i] : localStorage['urls'+i]) + "</td>";
			tableHtml += "<td>" + result.value[i] + "</td>";
			tableHtml += "</tr>";
		}
	}

	mon.html(tableHtml);
	$("#updating").addClass("hidden");
}

loadData();

