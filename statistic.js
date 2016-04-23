chrome.runtime.onMessage.addListener(
	function(message, sender, sendResponse) {

		var a = request.site; // data about site
		var b = request.time; // data about time on site

	    if (message && message.type == 'page') {
	        var page_message = message.message;
	        // Simple example: Get data from extension's local storage
	        var result = localStorage.getItem('whatever');
	        // Reply result to content script
	        sendResponse(result);
	    }

	    sendResponse(a);

	}
);