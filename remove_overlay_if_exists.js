var remove_overlay = function() {
	$("#x4b9").remove();
}

$(document).on('DOMNodeInserted', remove_overlay);
