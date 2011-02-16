
// when this file is loaded that means the popup was clicked open
// we make a Chrome extension request to the background page to get the data

function loadData() {
	$("#updating").removeClass("hidden");
	chrome.extension.sendRequest({}, dataReceived);
}

function dataReceived(result) {
	console.log(result);
	var mon = $("#mon");
	mon.removeClass();
	if(result.code == 0) {
		mon.addClass("green");
		chrome.browserAction.setIcon({ path: "green.png" });
	} else if(result.code == 1) {
		mon.addClass("yellow");
		chrome.browserAction.setIcon({ path: "yellow.png" });
	} else {
		mon.addClass("red");
		chrome.browserAction.setIcon({ path: "red.png" });
	}
	mon.html(result.value);
	$("#updating").addClass("hidden");
}

loadData();

